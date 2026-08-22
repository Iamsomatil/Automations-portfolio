---
title: "What Actually Happens Between a Webhook and Your CRM"
slug: "crm-webhook-integration-architecture"
description: "A webhook does not synchronize two systems by itself. Here is the architecture required to turn an incoming event into a secure and reliable CRM update."
category: "CRM & Integrations"
tags:
  - CRM Integration
  - Webhooks
  - APIs
  - Workflow Automation
  - Software Engineering
publishedAt: "2026-08-22"
draft: false
relatedProjects:
  - "new-lead-connect-call-routing"
seoTitle: "CRM Webhook Integration: What Happens After the Event Arrives"
seoDescription: "Learn how a reliable CRM webhook integration handles signatures, validation, duplicate events, queues, retries, API limits, and monitoring."
---

A webhook can arrive successfully, return a `200 OK`, and still fail to produce the right CRM outcome.

That sounds contradictory until the integration is treated as a system rather than a single HTTP request.

The webhook tells your application that something happened. It does not prove that the sender is trusted, the payload is valid, the event is new, related events arrived in order, the CRM accepted an update, or the final record now reflects the correct business state.

Those responsibilities sit between the endpoint and the outcome.

```text
Source event
    -> Webhook endpoint
    -> Signature verification
    -> Payload validation
    -> Event persistence and deduplication
    -> Queue
    -> Business logic
    -> CRM API
    -> Audit log and monitoring
    -> Reconciliation
```

Skipping these layers can produce an integration that looks fine during a demonstration but behaves unpredictably under retries, outages, imports, rate limits, and concurrent changes.

## A Webhook Is Event Delivery, Not Synchronization

Polling asks another system for changes at an interval. A webhook reverses the direction: the source sends an HTTP request to a configured endpoint when a subscribed event occurs.

For a CRM, that event might represent:

- a contact being created;
- a deal changing stage;
- a property being updated;
- an owner being assigned;
- a conversation receiving a message;
- a record being deleted or merged.

This is useful because the receiving system can react without repeatedly requesting the same data. [HubSpot's current webhook documentation](https://developers.hubspot.com/docs/api-reference/latest/webhooks/guide) describes this event-driven model and supports events across CRM objects such as contacts, companies, deals, tickets, products, and line items.

But the event is only an input. Your application still has to decide what it means and what to do with it.

Suppose a website creates a lead and sends an event to an integration service. The business outcome is not “the webhook endpoint received JSON.” The desired outcome might be:

> Create or update the correct contact, associate it with the right company, assign an owner based on territory and working hours, start the appropriate follow-up, and avoid contacting anyone who has opted out.

That is business logic. The webhook merely starts it.

## Step 1: Verify Who Sent the Request

A publicly accessible webhook endpoint can receive requests from anyone who can reach its URL. Parsing the JSON before verifying the sender gives an untrusted request access to your processing path.

Many providers sign webhook requests. The receiving application uses the raw request body, a signature header, and a shared secret or public-key mechanism to verify that the payload came from the expected provider and was not altered.

The implementation details vary by provider. For example, HubSpot documents signature validation for its webhook requests. Stripe similarly requires the raw body, its signature header, and the endpoint secret for verification. See the [HubSpot Webhooks API guide](https://developers.hubspot.com/docs/api-reference/latest/webhooks/guide) and [Stripe's webhook setup guide](https://docs.stripe.com/webhooks/quickstart).

The ordering matters:

```text
Receive raw request
    -> Read signature header
    -> Verify signature against raw body
    -> Reject invalid request
    -> Parse and process trusted payload
```

Some web frameworks automatically parse JSON before application code sees it. That can change the exact byte representation and cause signature verification to fail. The endpoint must preserve access to the raw body when the provider's signing procedure requires it.

Secrets should come from protected configuration, not source code. Verification failures should be logged without exposing the secret or sensitive payload data.

## Step 2: Validate the Event You Received

A valid signature establishes the sender. It does not establish that the event contains everything your workflow requires.

Validation should answer questions such as:

- Is this an event type the integration supports?
- Are the expected identifiers present?
- Does the payload match the version of the contract the handler understands?
- Are required business fields available?
- Does the account or tenant belong to this integration?
- Is the event timestamp plausible?
- Should this source be permitted to trigger this operation?

Schema validation can reject malformed input early. Business validation determines whether a structurally valid event is appropriate for the requested action.

Those are different checks. A contact object may contain a perfectly valid email address while still being ineligible for a marketing workflow because consent is absent.

## Step 3: Assume Duplicate Delivery

Webhook providers retry when delivery fails or acknowledgement does not arrive in time. A network failure can also create an ambiguous state: your server may process an event successfully while the provider never receives the response.

The provider then sends the event again.

HubSpot explicitly states that duplicate notifications are possible and that an event identifier is not guaranteed to be unique. It also documents retries for connection failures, timeouts, and unsuccessful HTTP responses in its [Webhooks API guide](https://developers.hubspot.com/docs/api-reference/latest/webhooks/guide). This means deduplication cannot be improvised around one assumed field without checking the provider's contract.

The handler should be idempotent: processing the same logical event more than once should not repeat an irreversible side effect.

For a provider with a stable unique event ID, a simplified pattern might look like this:

```sql
INSERT INTO received_events (
  provider,
  external_event_id,
  event_type,
  payload,
  status
)
VALUES (?, ?, ?, ?, 'received')
ON CONFLICT (provider, external_event_id) DO NOTHING;
```

The unique constraint prevents the same provider event from being accepted twice. Where the provider does not guarantee a unique event ID, the deduplication key may need a documented combination of fields or an operation-specific idempotency strategy.

The downstream action also needs protection. If an event causes an SMS, invoice, assignment, or task creation, the application should record whether that logical action has already occurred.

Deduplicating the HTTP request is helpful. Making the business operation idempotent is stronger.

```text
First delivery -> Action completed -> Response lost
Provider retry -> Idempotency check -> Existing action found -> No duplicate action
```

## Step 4: Acknowledge Quickly and Process Asynchronously

A webhook endpoint should usually do the minimum synchronous work needed to establish trust and preserve the event:

1. Receive the request.
2. Verify the signature.
3. Perform essential validation.
4. Persist or enqueue the event durably.
5. Return a successful response.

Long-running CRM operations should continue outside the request-response cycle.

[Stripe's webhook guidance](https://docs.stripe.com/webhooks/quickstart) recommends returning a successful response quickly and moving long-running processing into asynchronous code because delayed acknowledgement can cause retries. [HubSpot documents retry behaviour](https://developers.hubspot.com/docs/api-reference/latest/webhooks/guide) when its service cannot connect, receives an unsuccessful response, or waits longer than its timeout.

A queue separates event receipt from business processing:

```text
Webhook endpoint -> Durable event store -> Queue -> Worker -> CRM API
```

This improves several things:

- traffic bursts do not force every CRM operation to run concurrently;
- workers can respect API rate limits;
- failed jobs can be retried with backoff;
- deployment or CRM downtime does not require the source to resend immediately;
- processing can be monitored independently from HTTP delivery.

For a small, low-volume integration, a database-backed job table may be sufficient. A distributed messaging platform is not automatically required. The important property is durable separation, not infrastructure complexity.

## Step 5: Translate the Event Into Business Logic

Provider payloads should not directly dictate every internal action.

An integration layer can translate the external event into an internal command:

```text
External event: form.submission.created

Validated internal command:
CreateOrUpdateLead {
  source: "website",
  externalLeadId: "lead_123",
  email: "...",
  territory: "Lagos",
  consentStatus: "confirmed"
}
```

That boundary makes the system easier to maintain. If the website changes its payload shape, the translation layer changes while the core lead-routing rules remain stable. If the CRM is replaced, the internal command can remain while the destination adapter changes.

This is also where business rules belong:

- determine whether to create or update;
- select the record owner;
- check working hours;
- respect communication consent;
- calculate the next follow-up date;
- decide whether a human should review an exception;
- prevent a lifecycle stage from moving backwards incorrectly.

Without an explicit business layer, webhook handlers tend to become collections of provider-specific conditions that are difficult to test. Keeping transport and stable business rules deterministic follows the same selection principle described in [AI Agent vs Traditional Automation: How to Decide Which One a Workflow Actually Needs](/blog/ai-agents-vs-automation).

## Step 6: Call the CRM API Defensively

The CRM API can fail even when the webhook and business logic are correct.

Possible outcomes include:

- authentication failure;
- expired or revoked authorization;
- rate limiting;
- timeout;
- validation error;
- conflicting update;
- missing record;
- temporary provider outage;
- a successful remote write followed by a lost response.

These outcomes should not share one generic retry policy.

A rate limit or temporary server error may be retryable with exponential backoff and jitter. An invalid property name is unlikely to improve on the fifth attempt. An authorization failure may require reconnecting the account. A timeout after a create request may require searching by an external identifier before attempting another create.

Classify errors into at least three groups:

| Error category | Typical response |
|---|---|
| Transient | Retry with bounded backoff |
| Permanent input or business error | Stop and send to review |
| Authentication or configuration | Pause affected integration and alert owner |

Every create operation should use a stable external identifier or supported idempotency mechanism where possible. Otherwise, a retry can create duplicate contacts, deals, tasks, or notes.

## Step 7: Do Not Assume Events Arrive in Order

An integration may receive an update before a related creation event, especially when events are processed concurrently. Providers can also retry an older event after a newer one has succeeded.

[HubSpot states](https://developers.hubspot.com/docs/api-reference/latest/webhooks/guide) that webhook notifications are not guaranteed to arrive in the order they occurred and provides an occurrence timestamp that consumers can use when interpreting event time.

Arrival order and business order are therefore different concepts.

Possible controls include:

- compare source modification timestamps before overwriting a field;
- retrieve the current source record instead of trusting an old event snapshot;
- maintain version numbers where supported;
- make handlers tolerant of missing related records;
- delay narrowly defined event types when a dependency is expected;
- reconcile final state after processing related events.

The right strategy depends on whether the event represents a complete state, a state transition, or simply a signal to retrieve fresh data.

## Step 8: Record the Decision Path, Not Just the Error

Logs that say `CRM update failed` do not provide enough information to operate the integration.

A useful processing record should answer:

- Which source and account sent the event?
- What event type and logical record were involved?
- Was signature verification successful?
- Was the event treated as a duplicate?
- Which business rule or branch ran?
- Which CRM operation was attempted?
- What request or correlation identifier connects the steps?
- What did the CRM return?
- Will the system retry, escalate, or stop?
- What business outcome was ultimately reached?

Observability should avoid unnecessarily storing contact details, message content, tokens, or secrets. Log stable identifiers and sanitized context where possible.

Operational metrics can then show:

- events received and rejected;
- duplicate events detected;
- queue age;
- processing success rate;
- retry count;
- CRM response latency;
- permanently failed events;
- records awaiting manual review.

## Step 9: Reconcile the Outcome

Even a carefully designed event pipeline can encounter an unrecoverable gap. A webhook may be missed, a configuration may be disabled, or an operator may change data manually while processing is delayed.

Reconciliation checks the desired state against the actual state.

For example, a scheduled job might identify website leads created during the previous day that do not have a corresponding CRM record. It can repair safe mismatches automatically and send ambiguous cases to review.

This does not replace webhooks. It complements them.

Webhooks provide timely reaction. Reconciliation provides eventual confidence.

```text
HTTP delivery success             Verified business outcome
Request accepted                  Trusted source and valid payload
200 response returned             Idempotent business action completed
Transport step finished           CRM state confirmed and auditable
```

## A More Honest Definition of “The Integration Works”

The endpoint returning `200 OK` only confirms that one part of the exchange succeeded.

A CRM integration works when:

- the event came from a trusted source;
- the payload was understood;
- duplicate delivery did not duplicate the outcome;
- the correct business rules ran;
- temporary failures were retried safely;
- permanent failures became visible;
- the CRM reached the intended state;
- operators can explain what happened later.

That is why a production webhook integration contains more engineering than the arrow in an architecture diagram suggests.

The arrow is where the systems meet. The reliability comes from everything placed around it.

### Sources

- HubSpot Developers, [Webhooks API guide](https://developers.hubspot.com/docs/api-reference/latest/webhooks/guide). The documentation covers webhook subscriptions, signature validation, batches, concurrency, retries, possible duplicate delivery, and the absence of guaranteed event ordering.
- Stripe Documentation, [Set up and deploy a webhook](https://docs.stripe.com/webhooks/quickstart). The documentation covers signature verification using the raw request body and recommends fast acknowledgement with asynchronous processing for longer-running work.
