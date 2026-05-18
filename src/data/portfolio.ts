export type NavItem = {
  label: string;
  id: string;
};

export type HeroStat = {
  value: number;
  suffix: string;
  label: string;
};

export type ExpertiseArea = {
  title: string;
  description: string;
  bullets: string[];
};

export type PlatformGroup = {
  title: string;
  note: string;
  items: { name: string; primary?: boolean }[];
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectDetailItem = {
  label: string;
  description: string;
};

export type ProjectDetailSection = {
  title: string;
  intro?: string;
  points?: string[];
  items?: ProjectDetailItem[];
  columns?: 'two' | 'three';
};

export type Project = {
  title: string;
  slug?: string;
  category: 'web-crm' | 'automation';
  categoryLabel?: string;
  subtitle?: string;
  statusLabel?: string;
  description: string;
  challenge?: string;
  solution?: string;
  result?: string;
  impactBullets: string[];
  metrics?: ProjectMetric[];
  roleSummary?: string;
  architectureSummary?: string;
  architectureDiagram?: { url: string; alt: string };
  detailSections?: ProjectDetailSection[];
  tags: string[];
  cardBadges?: string[];
  ctaLabel?: string;
  caseStudyCta?: { label: string; sectionId: string };
  images: { url: string; alt: string }[];
  imageFit?: 'cover' | 'contain';
  liveUrl?: string;
  featured?: boolean;
};

export type Testimonial = {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
  logoUrl?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const profile = {
  name: 'Samson Akinsanya',
  shortName: 'Samson',
  initials: 'SA',
  title: 'Automation Engineer & Full-Stack Systems Builder',
  location: 'Lagos, Nigeria',
  timezone: 'GMT',
  email: 'samsonoakinsanya@gmail.com',
  phone: '+234 816 882 9686',
  whatsapp: 'https://wa.me/2348168829686',
  calendly: 'https://calendly.com/somatil024/30min',
  linkedin: 'https://www.linkedin.com/in/samsonakinsanya/',
  github: 'https://github.com/Iamsomatil',
  twitter: 'https://x.com/Somatill',
  resumeUrl: '/cv/Samson-AI-GHL-cv.pdf',
  availability: 'Open to opportunities',
  responseTime: 'I typically respond within a few hours during business days.',
  markets: 'Serving U.S., UK, and global remote clients',
};

export const navItems: NavItem[] = [
  { label: 'Expertise', id: 'services' },
  { label: 'Projects', id: 'portfolio' },
  { label: 'About', id: 'about' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
];

export const heroStats: HeroStat[] = [
  { value: 100, suffix: '+', label: 'Automations Built' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Businesses Helped' },
  { value: 20, suffix: '+', label: 'Production Systems Shipped' },
];

export const trustPoints = [
  'Workflow automation across n8n, Make.com, Zapier, HubSpot, GoHighLevel, and Stripe',
  'Websites, CRM, intake, billing, routing, and reporting systems connected end to end',
  'Built for U.S.-based businesses, distributed teams, and real operational complexity',
];

export const expertiseAreas: ExpertiseArea[] = [
  {
    title: 'Automation Systems',
    description:
      'Multi-step automation systems that coordinate routing, onboarding, follow-up, billing, and internal operations across multiple tools.',
    bullets: [
      'n8n, Make.com, and Zapier orchestration',
      'Workflow triggers, branching, and handoff logic',
      'Operational automation across teams and tools',
      'Systems built for maintainability and real-world use',
    ],
  },
  {
    title: 'API Integrations',
    description:
      'API and webhook integrations that keep systems synchronized across CRMs, forms, billing tools, and internal workflows.',
    bullets: [
      'REST APIs and webhook-based flows',
      'Authentication, mapping, and payload normalization',
      'Cross-platform data synchronization',
      'CRM, billing, and ops tool integrations',
    ],
  },
  {
    title: 'CRM & Operational Systems',
    description:
      'Operational data models and CRM workflows designed for clean lifecycle tracking, routing logic, and team visibility.',
    bullets: [
      'Lead lifecycle and pipeline design',
      'Deduplication and data hygiene logic',
      'Operational workflows in HubSpot, Airtable, and GoHighLevel',
      'Structured handoffs across teams and tools',
    ],
  },
  {
    title: 'AI-Assisted Workflows',
    description:
      'AI-assisted workflows that classify, enrich, route, or generate outputs while staying connected to operational systems.',
    bullets: [
      'Classification and routing flows',
      'AI-assisted reporting and content generation',
      'Human-in-the-loop operational workflows',
      'Structured outputs tied to downstream actions',
    ],
  },
  {
    title: 'Reliability & Operations',
    description:
      'Systems designed with maintainability, edge cases, and operational trust in mind so they hold up under real usage.',
    bullets: [
      'Fallback logic for edge cases and bad input',
      'Clear triggers, validation, and safe handoffs',
      'Maintainable workflows for distributed teams',
      'Operational visibility across connected systems',
    ],
  },
];

export const platformGroups: PlatformGroup[] = [
  {
    title: 'Automation',
    note: 'Workflow orchestration and operational logic.',
    items: [
      { name: 'n8n', primary: true },
      { name: 'Make.com', primary: true },
      { name: 'Zapier', primary: true },
      { name: 'Power Automate' },
    ],
  },
  {
    title: 'CRM & Sales',
    note: 'Lead capture, pipeline visibility, and lifecycle management.',
    items: [
      { name: 'GoHighLevel', primary: true },
      { name: 'HubSpot', primary: true },
      { name: 'Salesforce' },
      { name: 'Airtable' },
    ],
  },
  {
    title: 'Web Development',
    note: 'Frontend systems built for speed, reliability, and conversion.',
    items: [
      { name: 'React', primary: true },
      { name: 'Next.js', primary: true },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend & Data',
    note: 'APIs, data flow, and durable integration layers.',
    items: [
      { name: 'Node.js' },
      { name: 'REST APIs and webhooks' },
      { name: 'Google Sheets / Airtable' },
      { name: 'PostgreSQL' },
    ],
  },
  {
    title: 'Payments & Billing',
    note: 'Revenue operations, invoicing, and handoff systems.',
    items: [
      { name: 'Stripe', primary: true },
      { name: 'PandaDoc / DocuSign' },
      { name: 'QuickBooks' },
      { name: 'Wave Accounting' },
    ],
  },
  {
    title: 'Productivity & PM',
    note: 'Collaboration, delivery visibility, and documentation.',
    items: [
      { name: 'Notion' },
      { name: 'Asana / ClickUp' },
      { name: 'Google Workspace' },
      { name: 'Slack' },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'SunLife GovCon Operations CRM',
    slug: 'sunlife-govcon-operations-crm',
    category: 'web-crm',
    categoryLabel: 'Operations CRM',
    featured: true,
    statusLabel: 'Private / Internal System',
    subtitle:
      'A lean Base44 operations command center built to replace spreadsheet-based GovCon workflows with role-specific CRM modules, controlled pipeline stages, quick logging, activity history, permissions, and operational intelligence.',
    description:
      'Built a lean Base44 GovCon operations command center to replace a spreadsheet-based workflow with a role-specific CRM for opportunities, vendors, outreach, calls, quotes, pricing, proposals, submissions, results, notes, tasks, permissions, and performance intelligence.',
    challenge:
      'SunLife was running GovCon operations across multiple spreadsheet tabs, creating duplicate workflows, scattered notes, inconsistent statuses, weak ownership, missing activity history, and financial visibility risks.',
    solution:
      'Converted the workbook logic into a Base44 command center with Opportunity Pipeline, Vendor Outreach, CallLog, Quote Intake, Pricing, Proposal, Submission, Result, ActivityLog, Follow-Up Task, and role-specific dashboard modules.',
    result:
      'The spreadsheet workflow became a lean operating system with controlled stages, quick logging, activity history, follow-up tasks, role-specific visibility, and restricted financial views.',
    impactBullets: [
      'Replaced spreadsheet-based active tracking with a Base44 operating system',
      'Created a main Opportunity Pipeline for PL workflow replacement',
      'Added role-specific dashboards and restricted financial views',
      'Unified duplicate call tracking workflows into one CallLog system',
    ],
    metrics: [
      { label: 'Spreadsheet Tabs Replaced', value: '9' },
      { label: 'Core Modules', value: '14' },
      { label: 'Quick Logging Target', value: '30-60 seconds' },
      { label: 'Pipeline Statuses', value: '9 controlled stages' },
      { label: 'Primary Platform', value: 'Base44' },
      { label: 'Support Window', value: '7-14 days' },
      { label: 'Build Principle', value: 'Lean daily adoption' },
    ],
    roleSummary:
      'Owned the Base44 structure, data model, workflow logic, permissions strategy, role-specific workspaces, and testing approach for a private internal GovCon operations system.',
    architectureSummary:
      'Opportunity is the parent record. Vendors, contacts, outreach, calls, quotes, pricing, proposals, submissions, results, notes, activity logs, and follow-up tasks connect back to each opportunity. Role dashboards sit on top of the shared model, ActivityLog acts as the audit spine, FollowUpTask acts as the action engine, financial fields are restricted by role, and mobile quick actions support outreach, calls, notes, and task completion.',
    detailSections: [
      {
        title: 'Overview',
        intro:
          'SunLife needed a Base44-built GovCon Operations CRM to replace its Excel / Google Sheet operating system. The workbook was not just storage; it represented the team process across multiple tabs.',
        points: [
          'The product metaphor was GovCon Operations Command Center, not just a generic CRM.',
          'The build centralized opportunity tracking, vendor activity, quote readiness, pricing, proposal flow, submission status, results, tasks, notes, permissions, and lightweight intelligence.',
          'The goal was not a large enterprise CRM. The goal was the simplest working Base44 operating system the team would actually use daily.',
        ],
      },
      {
        title: 'Problem',
        intro:
          'GovCon operations were spread across spreadsheet tabs that created duplicate work, status ambiguity, and weak ownership of next actions.',
        points: [
          'Duplicate workflows existed across tabs.',
          'There was no reliable activity history.',
          'Pipeline movement was not enforced.',
          'Next-action ownership was unclear.',
          'There was no central vendor record.',
          'Sensitive financial data was exposed in spreadsheet views.',
          'GMass, Quo, WhatsApp, and manual notes were not consistently reflected in one system.',
          'Leadership had to infer status from scattered fields instead of seeing an actionable workflow.',
          'Mobile usage was not structured for quick updates from team members.',
          'Spreadsheet rows did not create proper relationships between opportunities, vendors, quotes, tasks, and results.',
          'VAs and callers risked being slowed down if the system copied spreadsheet complexity instead of simplifying daily workflows.',
        ],
        items: [
          { label: 'PL', description: 'Pipeline and opportunity tracking.' },
          { label: 'HL', description: 'Leadership-level opportunity summary.' },
          { label: 'VO', description: 'Vendor outreach tracking.' },
          { label: 'CALLS / CALLS 2', description: 'Separate call logging workflows that needed to become one CallLog system.' },
          { label: 'G-Sheet', description: 'Quick vendor and contact collection.' },
          { label: 'QIS!', description: 'Quote and quote compliance intake.' },
          { label: 'Proposals', description: 'Proposal, submission, pricing, and result tracking.' },
          { label: 'TEAM', description: 'Internal notes and shared updates.' },
        ],
        columns: 'two',
      },
      {
        title: 'Build Principle and Goals',
        intro: 'Primary V1 build principle: build the simplest working Base44 operating system the team will actually use daily.',
        points: [
          'Keep the system fast, clean, usable, organized, role-specific, and practical for daily adoption.',
          'Avoid building a flat spreadsheet clone inside Base44.',
          'Replace Excel / Google Sheet tracking after Base44 goes live.',
          'Centralize opportunities, vendors, outreach, calls, quotes, pricing, proposals, submissions, results, and notes.',
          'Give each team member a role-specific workspace.',
          'Enforce pipeline stages, required fields, and ownership of next actions.',
          'Capture every important action in ActivityLog.',
          'Protect sensitive financial fields from VAs and callers.',
          'Preserve useful workflow logic while cleaning up the structure.',
          'Support practical mobile-friendly usage.',
          'Keep V1 fast and easy to update, especially for VAs and callers.',
        ],
      },
      {
        title: 'Before / After Workflow',
        items: [
          {
            label: 'Before',
            description:
              'Spreadsheet tabs, duplicated work, scattered notes, inconsistent statuses, unclear ownership, exposed financial fields, and weak activity history.',
          },
          {
            label: 'After',
            description:
              'Base44 command center with controlled statuses, role dashboards, ActivityLog history, FollowUpTask ownership, quote readiness, proposal flow, submission tracking, and restricted financial visibility.',
          },
        ],
        columns: 'two',
      },
      {
        title: 'Core Workflow',
        items: [
          {
            label: '1. Opportunity Intake',
            description:
              'Opportunities are manually added from HigherGov or SAM.gov with solicitation number, due date/time, contract type, location, NAICS, PSC, source link, site visit status, and site visit date. New opportunities start as New.',
          },
          {
            label: '2. Qualification',
            description:
              'Hosea / Troy decide Bid, Pass, or Hold. Bid moves to Vendor Sourcing, Pass moves to Passed, and Hold keeps the opportunity visible but paused or flagged. Bid opportunities require VA and caller assignment or a task to assign them.',
          },
          {
            label: '3. Vendor Outreach',
            description:
              'VAs send outreach through GMass, callers make calls through Quo, and activity is manually logged in Base44. Outreach statuses track Contacted, Followed up, Responded, Interested, and Not Interested.',
          },
          {
            label: '4. Quote Collection',
            description:
              'Maria logs quote information including price, scope, deposit, red flags, compliance, Net 30, wages, certifications, and licenses. Quote data gates pricing readiness.',
          },
          {
            label: '5. Pricing',
            description:
              'Hosea / Troy select a vendor, apply markup and contingency, and calculate final bid price and estimated profit. Pricing is restricted from VAs and callers.',
          },
          {
            label: '6. Proposal',
            description:
              'Troy builds proposals and confirms compliance. Proposal statuses are Not Started, In Progress, Compliance Review, Ready to Submit, Submitted, and Blocked.',
          },
          {
            label: '7. Submission',
            description:
              'Troy logs submissions through Email, Portal, PIEE, FEDCON, or Other with submitted date, submitted price, method, CO information, notes, and status.',
          },
          {
            label: '8. Results',
            description:
              'Hosea / Maria update Won, Lost, or Cancelled outcomes. Won maps to Awarded, Lost maps to Lost, and Cancelled is archived/inactive without adding a new active pipeline column.',
          },
          {
            label: '9. Intelligence',
            description:
              'Tracks lightweight operational intelligence including win/loss, pricing vs award, vendor performance, quote responsiveness, vendor interest rate, awarded price vs our price, and estimated profit vs actual profit where available.',
          },
        ],
        columns: 'three',
      },
      {
        title: 'Controlled Values',
        items: [
          {
            label: 'Pipeline Statuses',
            description: 'New, Vendor Sourcing, Quotes Incoming, Pricing, Proposal, Submitted, Awarded, Lost, Passed.',
          },
          {
            label: 'Qualification Decisions',
            description: 'Bid, Pass, Hold.',
          },
          {
            label: 'Result Outcomes',
            description: 'Won, Lost, Cancelled.',
          },
        ],
        columns: 'three',
      },
      {
        title: 'Core Modules',
        points: [
          'Opportunities: main pipeline',
          'Vendors: vendor database',
          'Outreach: email/form outreach logging',
          'Calls: call tracking and caller workspace',
          'Quotes: quote intake and compliance',
          'Pricing: bid calculator / pricing workflow',
          'Proposals: proposal preparation and compliance tracking',
          'Submissions: submission tracking',
          'Results: award/loss/cancellation tracking',
          'Intelligence: simple performance learning',
          'Activity Logs: full audit trail',
          'Follow-Up Tasks: action ownership and reminders',
          'Team Notes: important internal updates',
          'User Roles and Permissions: access control',
        ],
      },
      {
        title: 'Spreadsheet-to-CRM Mapping',
        intro:
          'The workbook logic was extracted and rebuilt cleaner inside Base44. The system did not copy the tabs; it turned them into structured modules and role-specific workspaces.',
        items: [
          { label: 'PL', description: 'Became the Opportunity Pipeline.' },
          { label: 'HL', description: 'Became a Leadership Opportunity Summary saved view.' },
          { label: 'VO', description: 'Became the Vendor Outreach Workspace.' },
          { label: 'CALLS', description: 'Became the Call Log / Caller Workspace.' },
          { label: 'G-Sheet', description: 'Became Quick Vendor Intake feeding the Vendor Database.' },
          { label: 'CALLS 2', description: 'Merged into the unified CallLog system.' },
          { label: 'QIS!', description: 'Became Quote Intake and Quote Compliance.' },
          { label: 'Proposals', description: 'Became Pricing, Proposal, Submission, and Result workflows.' },
          { label: 'TEAM', description: 'Became Internal Notes and Team Updates tied to opportunities where possible.' },
        ],
        columns: 'three',
      },
      {
        title: 'Entity / Data Model',
        intro:
          'Opportunity acts as the parent record. Related entities connect vendor activity, quote readiness, pricing, proposals, submissions, results, notes, audit history, and task ownership back to each opportunity.',
        items: [
          {
            label: 'Opportunity',
            description:
              'Central parent record with opportunity name, solicitation number, due date/time, new due date, contract type, location, NAICS, PSC, source link, site visit fields, qualification decision, pipeline status, assigned VA, assigned caller, project type, needs called, quote status, pricing status, submitted status, notes, and active status.',
          },
          {
            label: 'Vendor',
            description:
              'Master vendor database with company name, website, phone, email, contact method, do-not-contact, vendor status, notes, and duplicate warning by company name, email, phone, or website.',
          },
          {
            label: 'VendorContact',
            description:
              'Individual vendor contact with vendor ID, name, title, email, phone, contact URL, and preferred method.',
          },
          {
            label: 'OutreachActivity',
            description:
              'GMass/form/email outreach log with opportunity ID, vendor ID, contact ID, method, status, sender email, initial contact date, last follow-up date, next follow-up date, follow-up count, response received, email template ID, and notes.',
          },
          {
            label: 'CallLog',
            description:
              'Quo call activity log with opportunity ID, vendor ID, contact name, email or phone, date called, reason for call, outcome, notes, follow-up date, and caller.',
          },
          {
            label: 'Quote',
            description:
              'Vendor quote and compliance intake with opportunity ID, vendor ID, quote date, price, scope, deposit, Net 30, prevailing wages, certification/license, compliant, C-priced, message sent, caller, VA, red flags, and quote status.',
          },
          {
            label: 'PricingRecord',
            description:
              'Bid calculator / pricing workflow with opportunity ID, selected vendor ID, vendor price, subcontractor price, markup percent, contingency, final bid price, estimated profit, markup amount, and pricing notes.',
          },
          {
            label: 'ProposalRecord',
            description:
              'Proposal tracking with opportunity ID, solicitation number, proposal lead, proposal status, compliance status, proposal due date, proposal notes, prime/sub, subcontractor, agency, project type, and readiness.',
          },
          {
            label: 'SubmissionRecord',
            description:
              'Submission log with opportunity ID, solicitation number, submitted date, submitted price, method, CO name, CO email, CO phone, notes, and status.',
          },
          {
            label: 'ResultRecord',
            description:
              'Final result with opportunity ID, outcome, awarded price, profit, result date, reason lost, cancellation reason, and notes.',
          },
          {
            label: 'TeamMember / UserRole',
            description: 'Access control with name, email, role, active status, and permissions.',
          },
          {
            label: 'ActivityLog',
            description: 'Audit history with entity type, entity ID, action type, old value, new value, actor, timestamp, and notes.',
          },
          {
            label: 'FollowUpTask',
            description: 'Action ownership with opportunity ID, vendor ID, assigned to, task type, due date, priority, status, and notes.',
          },
          {
            label: 'InternalNote',
            description:
              'Team notes and WhatsApp updates with opportunity ID, author, note type, note, status, acknowledgement required, acknowledged by, and created at.',
          },
        ],
        columns: 'two',
      },
      {
        title: 'Roles and Permissions',
        intro: 'Role-specific dashboards were designed so every user could answer: What should I do next?',
        items: [
          {
            label: 'Hosea Barnwell',
            description:
              'CEO / Admin responsible for qualification, pricing decisions, results, and full oversight. Full access and all financial visibility.',
          },
          {
            label: 'Troy',
            description:
              'Proposal Lead responsible for qualification support, pricing, proposals, submissions, and compliance. Access to active opportunities, quotes, pricing, proposals, and submissions.',
          },
          {
            label: 'Maria',
            description:
              'Admin / Compliance responsible for vendors, quote collection, quote compliance, proposal tracking, and results support.',
          },
          {
            label: 'VAs such as Florita and Christy',
            description:
              'Outreach Operators responsible for GMass outreach and vendor follow-up logging. Assigned opportunities and outreach only. No pricing or profit visibility. Fast quick-update screens required.',
          },
          {
            label: 'Callers such as Noelle and Marteena',
            description:
              'Call Operators responsible for Quo calls, call outcomes, and follow-ups. No pricing or profit visibility. Fast quick-call logging required.',
          },
          {
            label: 'Samson Akinsanya',
            description:
              'Developer / System Owner responsible for Base44 structure, data model, workflow logic, permissions, and testing. Full system access.',
          },
        ],
        columns: 'two',
      },
      {
        title: 'Financial Visibility Restrictions',
        intro:
          'Sensitive financial data was role-restricted. Only Hosea, Troy, and Samson can edit pricing. Maria may view limited pricing only if approved. VAs and callers cannot see pricing or profit fields.',
        points: [
          'Vendor cost / subcontractor price',
          'Sub price',
          'Our price / final bid price',
          'Submitted price',
          'Awarded price',
          'Markup',
          'Contingency',
          'Estimated profit',
          'Actual profit',
          'Delta percentage',
          'Awarded profit',
          'Pricing notes containing sensitive margins',
        ],
      },
      {
        title: 'Workflow Automation Rules',
        points: [
          'When opportunity is created, pipeline_status = New.',
          'When Bid is selected, move to Vendor Sourcing.',
          'When Pass is selected, move to Passed.',
          'When Hold is selected, keep visible with hold_flag = true.',
          'When VA and caller are assigned, create outreach/call follow-up tasks.',
          'When outreach activity is logged, create ActivityLog entry.',
          'When call activity is logged, create ActivityLog entry.',
          'When first quote is received, opportunity can move to Quotes Incoming.',
          'When quote compliance fields are completed, mark quote as Ready for Pricing Review.',
          'When pricing fields are completed, opportunity can move to Pricing.',
          'When proposal is created, opportunity can move to Proposal.',
          'When submitted, opportunity moves to Submitted.',
          'When result is entered: Won becomes Awarded, Lost becomes Lost, Cancelled becomes archived/inactive with result outcome Cancelled.',
          'Every stage change creates an ActivityLog entry.',
          'Every manually logged action creates or appears in ActivityLog.',
          'Duplicate vendor warning triggers on company name, email, phone, or website match.',
          'Missing quote warning triggers before Pricing.',
          'Upcoming due date warning triggers as deadline approaches.',
          'Overdue indicator shows on follow-up tasks.',
          'Permission checks run before financial fields are displayed or updated.',
          'Automation avoids forcing VAs and callers through slow multi-step processes.',
        ],
      },
      {
        title: 'Pricing, Proposal, and Submission Workflows',
        items: [
          {
            label: 'Pricing Workflow',
            description:
              'Tracks selected vendor, vendor price / subcontractor price, markup, contingency, final bid price / our price, estimated profit, awarded price when known, delta percentage, markup percentage, and pricing notes. Recommended calculations include estimated_profit = final_bid_price - vendor_price - contingency_amount, markup_percent = (final_bid_price - vendor_price) / vendor_price, and delta_percent = (our_price - awarded_price) / awarded_price when awarded price exists.',
          },
          {
            label: 'Proposal Workflow',
            description:
              'Tracks solicitation number, assigned proposal lead, proposal status, compliance status/check, proposal due date if available, proposal notes, submission readiness, prime/sub designation, subcontractor, agency, and project type. Proposal statuses are Not Started, In Progress, Compliance Review, Ready to Submit, Submitted, and Blocked.',
          },
          {
            label: 'Submission Workflow',
            description:
              'Tracks solicitation number, submitted date, submitted price, submission method, CO name, CO email, CO phone, notes, and status Submitted. Allowed methods are Email, Portal, PIEE, FEDCON, and Other. Submitted date, submitted price, submission method, and CO information are required unless an admin override explains why unavailable.',
          },
        ],
        columns: 'three',
      },
      {
        title: 'Results and Lightweight Intelligence',
        intro:
          'The intelligence layer was operational and lightweight, not a bloated BI dashboard. It focused on helping the team make better daily decisions.',
        points: [
          'Results tracked Won, Lost, Cancelled, awarded price, profit, result date, reason lost, cancellation reason, and notes.',
          'Tracked win/loss rate, pricing vs award, vendor quote responsiveness, vendor interest rate, vendor compliance issues, awarded price vs our price, and estimated profit vs actual profit where available.',
          'Helped the team see which vendors respond, quote, decline, no-show, or perform well.',
          'Made it easier to answer what needs action, who owns it, what stage it is in, what vendor activity happened, what quotes are available, what is blocking the bid, whether it has been submitted, and what the result was.',
        ],
      },
      {
        title: 'UI / UX and Mobile Requirements',
        points: [
          'Designed around action-first workflows, pipeline-driven operations, fast logging, role-specific visibility, clear ownership, clear next steps, and minimal clutter.',
          'Avoided Excel-style overload, generic KPI walls, decorative charts without operational use, and unnecessary CRM bloat.',
          'Mobile views prioritize assigned opportunities, assigned tasks, short forms, stacked fields, clear action buttons, and minimal table overload.',
          'VAs can log outreach and follow-up status quickly.',
          'Callers can log call outcome, notes, and next follow-up quickly.',
          'Maria, Troy, and Hosea can review key status information and notes on mobile.',
          'Financial fields remain hidden from restricted roles on mobile and desktop.',
        ],
      },
      {
        title: 'Phase Structure',
        items: [
          {
            label: 'Phase 1',
            description:
              'Opportunity Pipeline, Opportunity Intake, Opportunity Detail, Vendor Database, Vendor Outreach Workspace, Call Log / Caller Workspace, Quote Intake / Quote Compliance, Activity Logs, Follow-Up Tasks, basic role dashboard, and mobile-friendly quick logging for outreach and calls.',
          },
          {
            label: 'Phase 2',
            description:
              'Pricing Calculator / Pricing Workflow, Proposal Tracking, Submission Tracking, User Roles and Permissions, and financial visibility restrictions.',
          },
          {
            label: 'Phase 3',
            description:
              'Results Tracking, Awarded / Lost / Cancelled outcomes, awarded price, profit, pricing vs award, vendor performance, role-specific dashboards, and operational metrics.',
          },
        ],
        columns: 'three',
      },
      {
        title: 'Non-Goals / Scope Discipline',
        points: [
          'No full HigherGov integration / automated ingestion in V1 unless separately scoped.',
          'No full SAM.gov integration / automated ingestion in V1 unless separately scoped.',
          'No full GMass sync in V1 unless separately scoped.',
          'No full Quo sync in V1 unless separately scoped.',
          'No ChatGPT API integration in V1 unless separately scoped.',
          'No WhatsApp replacement or automated sync in V1.',
          'No Excel tracking after Base44 is live.',
          'No complex analytics dashboard in Phase 1.',
          'No overbuilt automation.',
          'No accounting system.',
          'No duplicate call modules.',
          'No duplicate vendor intake module.',
          'No flat spreadsheet clone inside Base44.',
          'No custom native mobile app.',
          'No long, forced VA/caller forms that slow daily work.',
        ],
      },
    ],
    tags: ['Base44', 'GovCon', 'CRM', 'Operations System', 'Workflow Automation', 'Spreadsheet Migration', 'Role-Based Permissions'],
    cardBadges: ['Base44 Build'],
    ctaLabel: 'View Case Study',
    caseStudyCta: { label: 'Need a system like this?', sectionId: 'contact' },
    images: [
      {
        url: '/Sunlife-logo.jpeg',
        alt: 'SunLife GovCon Operations CRM private internal system visual using the SunLife logo',
      },
    ],
    imageFit: 'contain',
  },
  {
    title: 'HOSVI LLC',
    category: 'web-crm',
    featured: true,
    description:
      'Designed and shipped a connected operating system spanning the marketing site, CRM workflows, billing timing, and contract execution for a U.S. case placement business.',
    challenge:
      'Marketing, intake, billing, and contract execution lived across disconnected tools, which created brittle handoffs and avoidable admin work.',
    solution:
      'Built the frontend experience, modeled the CRM flow in GoHighLevel, automated invoice timing in Stripe, and connected contract generation and signature handoffs into one path.',
    result:
      'The team could handle higher placement volume without adding the same level of coordination overhead or introducing billing timing errors.',
    impactBullets: [
      'Automated client onboarding from lead capture to signed paperwork',
      'Stripe billing logic aligned to a 14-day operational buffer',
      'Contract creation and e-signature moved into the main workflow',
      'GoHighLevel pipeline and lifecycle stages configured end to end',
    ],
    metrics: [
      { label: 'Systems Connected', value: '4' },
      { label: 'Billing Delay Logic', value: '14 days' },
      { label: 'Primary Stack', value: 'React + GHL + Stripe' },
    ],
    roleSummary:
      'Owned the system design across frontend, CRM workflow modeling, billing automation, and contract handoff logic.',
    architectureSummary:
      'Marketing site and intake forms fed GoHighLevel, which coordinated onboarding state. Stripe handled delayed invoicing, and contract-signing tools were triggered at the right lifecycle stage.',
    architectureDiagram: {
      url: '/architecture/hosvi-architecture.svg',
      alt: 'Architecture diagram showing HOSVI frontend, GoHighLevel CRM, Stripe billing, and contract workflow connections',
    },
    detailSections: [
      {
        title: 'Constraints',
        points: [
          'The same customer journey crossed marketing, intake, billing, and legal workflows.',
          'The team needed reliable handoffs without adding manual tracking steps.',
          'Invoice timing had to respect a real-world waiting period before charging clients.',
        ],
      },
      {
        title: 'Technical Decisions',
        points: [
          'Used GoHighLevel as the operational source of truth for lead and client state transitions.',
          'Separated website presentation from CRM state so customer experience and internal workflows could evolve independently.',
          'Encoded billing timing directly into the workflow to reduce human error during handoff.',
        ],
      },
      {
        title: 'Reliability Considerations',
        points: [
          'Designed the workflow around explicit stage transitions instead of informal team memory.',
          'Reduced timing-related billing mistakes by making the delay logic system-enforced.',
          'Kept contract generation attached to the lifecycle state so execution happened in the right order.',
        ],
      },
    ],
    tags: ['React', 'GoHighLevel', 'n8n', 'Stripe', 'Zapier'],
    images: [{ url: '/hosvi-system-thumbnail.png', alt: 'HOSVI LLC website and chatbot system' }],
    liveUrl: 'https://hosvi.com',
  },
  {
    title: 'Advitravel',
    category: 'web-crm',
    featured: true,
    description:
      'Built the traveler-facing website and the Airtable operations layer used to manage traveler, advisor, and follow-up workflows.',
    challenge:
      'Traveler records, advisor workflows, and follow-up actions needed to stay synchronized across a fast-moving service business.',
    solution:
      'Structured the backend in Airtable, automated handoffs with Make.com, and supported the customer-facing funnel with a cleaner frontend experience.',
    result:
      'Advisor and traveler operations stayed coordinated without relying on manual record updates across multiple tools.',
    impactBullets: [
      'Seamless traveler and advisor data management',
      'Automated advisor onboarding and workflow routing',
      'Higher-converting traveler inquiry funnels',
      'Airtable CRM with Make.com automation bridges',
    ],
    metrics: [
      { label: 'Frontend + Ops', value: 'Unified flow' },
      { label: 'System Core', value: 'Airtable + Make' },
      { label: 'Primary Outcome', value: 'Coordinated traveler/advisor ops' },
    ],
    roleSummary:
      'Owned the customer-facing web layer and the backend operating structure used to coordinate traveler and advisor workflows.',
    architectureSummary:
      'The website captured traveler demand, Airtable modeled the operational relationships, and Make.com handled the routing and synchronization steps needed to keep advisor workflows aligned.',
    architectureDiagram: {
      url: '/architecture/advitravel-architecture.svg',
      alt: 'Architecture diagram showing Advitravel website, Airtable operations core, advisor workflow, and Make.com routing',
    },
    detailSections: [
      {
        title: 'Constraints',
        points: [
          'Traveler and advisor relationships needed to stay synchronized across a service-heavy workflow.',
          'The customer-facing experience and backend coordination model had to evolve together.',
          'Operational visibility mattered because multiple stakeholders touched the same lifecycle.',
        ],
      },
      {
        title: 'Technical Decisions',
        points: [
          'Used Airtable as the operational model for traveler, advisor, and follow-up state instead of spreading the workflow across disconnected spreadsheets.',
          'Kept the website focused on clean intake and user flow while Make.com handled orchestration and handoffs behind the scenes.',
          'Designed routing steps to preserve context as records moved between traveler interest, advisor assignment, and next actions.',
        ],
      },
      {
        title: 'Reliability Considerations',
        points: [
          'Centralizing operational state reduced the chance of traveler and advisor records drifting apart.',
          'Automation removed repetitive coordination work that would otherwise depend on manual record updates.',
          'The system made the backend workflow easier to reason about as the service operation grew.',
        ],
      },
    ],
    tags: ['Next.js', 'Airtable', 'Make.com', 'HubSpot'],
    images: [{ url: '/advitravel-thumbnail.png', alt: 'Advitravel website homepage' }],
    liveUrl: 'https://advitravel.com',
  },
  {
    title: 'Sunlife Housing Corp',
    category: 'web-crm',
    featured: true,
    description:
      'Built the website and the integration layer between forms, HubSpot, and Make.com so inbound lead handling behaved like one system.',
    challenge:
      'Website submissions and CRM workflows were creating duplicate work, inconsistent records, and extra manual cleanup for the team.',
    solution:
      'Rebuilt the website flow, connected the frontend to HubSpot, and added Make.com automation to handle routing, deduplication, and bidirectional updates.',
    result:
      'The team spent much less time cleaning up records and gained more confidence in the CRM as a reliable source of lead and reporting data.',
    impactBullets: [
      'Reduced manual operations by more than 50%',
      'Improved HubSpot CRM data hygiene',
      'Automated deduplication and lead pipeline routing',
      'Bi-directional data sync between site and CRM',
    ],
    metrics: [
      { label: 'Manual Ops', value: '-50%+' },
      { label: 'Core Systems', value: 'Website + HubSpot + Make' },
      { label: 'Key Outcome', value: 'Cleaner CRM state' },
    ],
    roleSummary:
      'Owned the frontend implementation, HubSpot integration flow, and the automation logic that kept inbound lead data clean.',
    architectureSummary:
      'The website acted as the lead entry point, HubSpot held lifecycle state, and Make.com handled routing, synchronization, and deduplication between touchpoints.',
    architectureDiagram: {
      url: '/architecture/sunlife-architecture.svg',
      alt: 'Architecture diagram showing Sunlife website forms, HubSpot CRM, Make.com orchestration, and team workflow',
    },
    detailSections: [
      {
        title: 'Constraints',
        points: [
          'The CRM needed to stay clean even when users submitted overlapping or incomplete information.',
          'The team relied on HubSpot for downstream reporting, so bad record quality had operational cost.',
          'Lead capture needed to feel simple on the frontend while still feeding structured backend workflows.',
        ],
      },
      {
        title: 'Technical Decisions',
        points: [
          'Treated HubSpot as the operational record instead of letting form tools create isolated data silos.',
          'Added Make.com as the orchestration layer for conditional routing and record hygiene tasks.',
          'Designed the sync path so the website and CRM stayed aligned without requiring manual reconciliation.',
        ],
      },
      {
        title: 'Reliability Considerations',
        points: [
          'Deduplication logic reduced repeated downstream actions against the same lead.',
          'Automation removed fragile spreadsheet-style cleanup steps from the team workflow.',
          'The system improved reporting quality by preserving cleaner lifecycle state in HubSpot.',
        ],
      },
    ],
    tags: ['React', 'Make.com', 'HubSpot', 'Zapier'],
    images: [{ url: '/sunlife-thumbnail.png', alt: 'Sunlife Housing Corp website homepage' }],
    liveUrl: 'https://sunlifehousingcorp.com',
  },
  {
    title: 'Smart Email Intake & Routing System',
    category: 'automation',
    featured: true,
    description:
      'Built a multi-path routing workflow that classified inbound email and triggered the correct downstream owner, task flow, and response path across multiple tools.',
    challenge:
      'A shared inbox mixed sales leads, support requests, and scheduling traffic together, making triage slow and easy to miss.',
    solution:
      'Created a Zapier workflow that used AI classification, conditional routing, and downstream tool actions to assign each message to the right owner and workflow.',
    result:
      'The inbox shifted from manual triage to a structured routing system, improving response speed and reducing dropped follow-up.',
    impactBullets: [
      'Reduced manual email handling by 70%',
      'Established complete lead routing coverage',
      'Improved response time by 4x',
      'Connected 5+ systems in one routing flow',
    ],
    metrics: [
      { label: 'Manual Handling', value: '-70%' },
      { label: 'Routing Coverage', value: 'Full inbox coverage' },
      { label: 'Response Time', value: '4x faster' },
      { label: 'Tools Integrated', value: '5+' },
    ],
    roleSummary:
      'Designed the classification logic, routing branches, and tool integrations that turned one inbox into a structured intake system.',
    architectureSummary:
      'Inbound email events triggered Zapier, classification logic determined intent, and downstream actions updated the appropriate systems for sales, support, or scheduling.',
    architectureDiagram: {
      url: '/architecture/smart-email-routing-architecture.svg',
      alt: 'Architecture diagram showing shared inbox intake, Zapier orchestration, classification branches, and downstream routing flows',
    },
    detailSections: [
      {
        title: 'Constraints',
        points: [
          'Different message types needed different owners, SLAs, and downstream systems.',
          'The workflow had to be fast enough to keep response-time improvements visible to the team.',
          'Classification mistakes needed to be low because the system affected live customer communication.',
        ],
      },
      {
        title: 'Technical Decisions',
        points: [
          'Used AI classification only as one step in a broader routing workflow, not as the entire system.',
          'Mapped message intent to deterministic branches so each class triggered known downstream actions.',
          'Connected email handling to tasking and CRM tools so routing resulted in actual follow-through, not just labels.',
        ],
      },
      {
        title: 'Reliability Considerations',
        points: [
          'Structured routing reduced the odds of leads or support requests being lost in a shared inbox.',
          'The workflow standardized follow-up behavior instead of depending on manual triage habits.',
          'Branch-based logic made it easier to extend the workflow as new email categories appeared.',
        ],
      },
    ],
    tags: ['Zapier', 'ChatGPT', 'Gmail', 'HubSpot', 'Asana'],
    images: [{ url: '/Smart-Email intake-and-routing-system.png', alt: 'Smart email routing system' }],
  },
  {
    title: 'Automated Lead Nurture Workflow',
    category: 'automation',
    description:
      'End-to-end lead nurture workflow connecting HubSpot, Gmail, Asana, Slack, and Google Sheets through Make.com.',
    challenge:
      'The client needed every lead captured, acknowledged, assigned, and tracked without relying on manual follow-up discipline.',
    solution:
      'Built a Make.com workflow that triggered welcome emails, created tasks, notified the team, and logged each lead automatically.',
    result:
      'Every lead is captured, nurtured, and handed off instantly with clear team visibility.',
    impactBullets: [
      'Instant lead follow-up across tools',
      'Consistent team visibility on new leads',
      'Connected 6+ tools in one workflow',
      'Saved hours of weekly manual coordination',
    ],
    metrics: [
      { label: 'Systems Connected', value: '6+' },
      { label: 'Primary Trigger', value: 'New lead intake' },
      { label: 'Main Outcome', value: 'Faster lead handoff' },
    ],
    roleSummary:
      'Designed the lead intake flow, orchestration logic, and cross-tool handoffs that moved new leads from capture to follow-up without manual coordination.',
    architectureSummary:
      'HubSpot captured the lead, Make.com orchestrated the nurture steps, Gmail handled acknowledgements, Asana and Slack coordinated the team response, and Google Sheets preserved lightweight tracking visibility.',
    architectureDiagram: {
      url: '/architecture/lead-nurture-architecture.svg',
      alt: 'Architecture diagram showing HubSpot lead capture, Make.com orchestration, Gmail outreach, Asana tasks, Slack notifications, and Google Sheets tracking',
    },
    detailSections: [
      {
        title: 'Constraints',
        points: [
          'Every new lead needed acknowledgement, assignment, and tracking with no dropped steps.',
          'The workflow crossed communication, tasking, and visibility tools used by different stakeholders.',
          'The client needed fast follow-up without creating more admin overhead for the team.',
        ],
      },
      {
        title: 'Technical Decisions',
        points: [
          'Used Make.com as the orchestration layer so one intake event could fan out into email, tasking, messaging, and tracking actions.',
          'Kept HubSpot as the lead source while using downstream tools only for the actions they handled best.',
          'Structured the workflow so each automation step created a visible artifact, not just a background state change.',
        ],
      },
      {
        title: 'Reliability Considerations',
        points: [
          'Multi-tool notifications reduced the chance of a lead being captured but not acted on.',
          'Centralized orchestration made it easier to update logic when the team process changed.',
          'Tracking outputs gave the client a lightweight audit trail for lead handling.',
        ],
      },
    ],
    tags: ['HubSpot', 'Make.com', 'Gmail', 'Asana', 'Slack'],
    images: [{ url: '/Hubspot-crm-integration.png', alt: 'Lead nurture workflow' }],
  },
  {
    title: 'Federal Contract Opportunity Automation',
    category: 'automation',
    description:
      'Built a federal contract sourcing workflow that pulls SAM.gov opportunities daily, filters by NAICS code, and logs qualified matches automatically.',
    challenge:
      'Manually checking SAM.gov and logging opportunities was taking hours daily and still causing missed bids.',
    solution:
      'Automated recurring API pulls, filtering, deduplication, and logging into a Google Sheets tracking flow.',
    result:
      'The client now receives a daily, hands-free stream of qualified federal opportunities with no manual research process.',
    impactBullets: [
      'Cut manual research by 90%',
      'Maintained daily coverage of target opportunities',
      'Reduced data entry to zero minutes',
      'Monitored 20+ NAICS codes automatically',
    ],
    metrics: [
      { label: 'Manual Research', value: '-90%' },
      { label: 'Refresh Cadence', value: 'Daily' },
      { label: 'Data Entry', value: '0 min' },
      { label: 'NAICS Codes', value: '20+' },
    ],
    roleSummary:
      'Built the daily ingestion, filtering, deduplication, and logging workflow that turned federal opportunity monitoring into a repeatable system.',
    architectureSummary:
      'A scheduled Make.com scenario queried SAM.gov, filtered opportunities by target NAICS codes, removed duplicates, and wrote qualified results into Google Sheets for review and downstream tracking.',
    architectureDiagram: {
      url: '/architecture/federal-contract-architecture.svg',
      alt: 'Architecture diagram showing scheduled Make.com pulls from SAM.gov, NAICS filtering, deduplication, and Google Sheets logging',
    },
    detailSections: [
      {
        title: 'Constraints',
        points: [
          'The opportunity set changed daily, so refresh cadence had to be dependable.',
          'The client only wanted qualified contract opportunities, not a raw firehose of public data.',
          'Duplicate logging would reduce trust in the system quickly because the output was used for active bid review.',
        ],
      },
      {
        title: 'Technical Decisions',
        points: [
          'Scheduled API pulls replaced manual searching so the workflow could run consistently without user intervention.',
          'Applied NAICS-based filtering inside the automation layer before results were logged downstream.',
          'Used Google Sheets as the client-facing review surface because it matched the way the team already tracked opportunities.',
        ],
      },
      {
        title: 'Reliability Considerations',
        points: [
          'Deduplication preserved confidence in the logged opportunity list over repeated daily runs.',
          'A scheduled workflow reduced the risk of missed bid windows caused by inconsistent manual checks.',
          'The system separated data retrieval from review, making it easier to extend later with alerts or scoring.',
        ],
      },
    ],
    tags: ['Make.com', 'SAM.gov API', 'Google Sheets', 'API Integration'],
    images: [{ url: '/sam.png', alt: 'Federal contract opportunity automation' }],
  },
  {
    title: 'GoHighLevel Seminar Automation',
    category: 'automation',
    description:
      'Automated seminar attendance tracking and post-event follow-up in GoHighLevel with tagging, cleanup logic, and targeted sequences.',
    challenge:
      'Seminar tracking and follow-up were entirely manual, creating missed contacts and inconsistent communication after each event.',
    solution:
      'Implemented attendance tagging, cleanup logic, segmented follow-up, and contact organization inside GoHighLevel.',
    result:
      'The client gained reliable seminar tracking with fully automated follow-up and no missed contacts.',
    impactBullets: [
      'Saved 4+ hours per seminar',
      'Standardized follow-up for every tracked attendee',
      'Automated 5+ follow-up steps',
      'Consistent contact tagging across attendees',
    ],
    metrics: [
      { label: 'Time Saved', value: '4+ hrs/event' },
      { label: 'Follow-up Steps', value: '5+' },
      { label: 'Core Platform', value: 'GoHighLevel' },
    ],
    roleSummary:
      'Owned the seminar attendance model, tagging logic, and post-event follow-up automation inside GoHighLevel.',
    architectureSummary:
      'Seminar attendance inputs updated contact records in GoHighLevel, tagging and cleanup logic normalized attendee state, and follow-up sequences handled segmented post-event messaging automatically.',
    architectureDiagram: {
      url: '/architecture/ghl-seminar-architecture.svg',
      alt: 'Architecture diagram showing seminar attendance intake, GoHighLevel contact records, tagging logic, follow-up sequences, and team visibility',
    },
    detailSections: [
      {
        title: 'Constraints',
        points: [
          'Event attendance data had to be organized quickly enough for timely post-seminar outreach.',
          'The same contact could appear across multiple events, which made consistent tagging important.',
          'Follow-up quality depended on segmenting contacts correctly after each seminar.',
        ],
      },
      {
        title: 'Technical Decisions',
        points: [
          'Used GoHighLevel as both the contact system and the follow-up engine to keep event state and outreach logic together.',
          'Added cleanup and tagging logic before sequence enrollment so downstream messaging stayed relevant.',
          'Modeled the workflow around seminar participation states rather than one-off broadcast sends.',
        ],
      },
      {
        title: 'Reliability Considerations',
        points: [
          'Consistent tagging reduced the chance of missed or mis-segmented attendees.',
          'Automated follow-up eliminated repetitive manual steps after each event.',
          'Keeping tracking and messaging in one platform made the flow easier to maintain between seminars.',
        ],
      },
    ],
    tags: ['GoHighLevel', 'Email Automation', 'Marketing Automation'],
    images: [{ url: '/GHL-Onboarding.png', alt: 'GoHighLevel seminar automation' }],
  },
  {
    title: 'Automated Weekly Regulation Report',
    category: 'automation',
    description:
      'Built an n8n workflow that collects regulation updates, tourism metrics, and local event data, then generates a weekly script with GPT-4o.',
    challenge:
      'Weekly research, writing, and packaging was consuming hours of manual work across multiple data sources.',
    solution:
      'Built an n8n workflow that set the reporting window, normalized API data, and generated a ready-to-use script automatically.',
    result:
      'The client receives a complete weekly regulation package in minutes, with no repetitive manual prep.',
    impactBullets: [
      'Reduced manual writing time by 85%',
      'Cut content prep time by 90%',
      'Improved script consistency across weekly reports',
      'Automated 3+ data sources end-to-end',
    ],
    metrics: [
      { label: 'Writing Time', value: '-85%' },
      { label: 'Prep Time', value: '-90%' },
      { label: 'Data Sources', value: '3+' },
      { label: 'Core Stack', value: 'n8n + GPT-4o' },
    ],
    roleSummary:
      'Designed the weekly reporting pipeline, from data ingestion and normalization through AI-assisted script generation and final delivery.',
    architectureSummary:
      'n8n scheduled the reporting run, collected tourism and regulation data from multiple APIs, normalized the source material, and passed a structured payload into GPT-4o to generate a polished weekly script for delivery.',
    architectureDiagram: {
      url: '/architecture/weekly-regulation-architecture.svg',
      alt: 'Architecture diagram showing n8n scheduling, multi-source API ingestion, data normalization, GPT-4o script generation, and final report delivery',
    },
    detailSections: [
      {
        title: 'Constraints',
        points: [
          'The report relied on multiple source types that needed to be aligned to the same weekly reporting window.',
          'Generated output had to feel usable, not just technically complete.',
          'Manual research and packaging time was the main operational bottleneck the client wanted to remove.',
        ],
      },
      {
        title: 'Technical Decisions',
        points: [
          'Used n8n to coordinate the schedule and data normalization before the AI generation step.',
          'Structured the reporting payload so GPT-4o received cleaner context instead of raw source fragments.',
          'Kept the workflow modular so source inputs or output formatting could be updated independently.',
        ],
      },
      {
        title: 'Reliability Considerations',
        points: [
          'Normalizing source data before generation improved consistency across weekly outputs.',
          'A scheduled pipeline reduced the risk of missed reporting cycles.',
          'Separating ingestion from generation made the system easier to debug when one source changed.',
        ],
      },
    ],
    tags: ['n8n', 'OpenAI GPT-4o', 'API Integration', 'JavaScript', 'Notion'],
    images: [{ url: '/regulation.png', alt: 'Automated regulation report generator' }],
  },
  {
    title: 'Social Media Posting Automation',
    category: 'automation',
    description:
      'Integrated Airtable with Buffer for automated social posting, using Make.com routing and Slack notifications for team visibility.',
    challenge:
      'Social scheduling required repetitive data gathering, manual posting setup, and too much room for publishing errors.',
    solution:
      'Built an Airtable-driven automation that aggregated content, routed it into Buffer, and notified the team in Slack.',
    result:
      'Publishing became faster, more reliable, and far easier for the team to coordinate.',
    impactBullets: [
      'Saved 8+ hours per week',
      'Reduced publishing errors by 90%',
      'Connected 5+ platforms together',
      'Automated 20+ workflow steps',
    ],
    metrics: [
      { label: 'Time Saved', value: '8+ hrs/week' },
      { label: 'Publishing Errors', value: '-90%' },
      { label: 'Workflow Steps', value: '20+' },
      { label: 'Core Stack', value: 'Airtable + Make + Buffer' },
    ],
    roleSummary:
      'Built the content operations workflow that moved planned posts from Airtable into Buffer with routing logic, visibility steps, and team notifications.',
    architectureSummary:
      'Airtable acted as the content planning source, Make.com handled routing and posting logic, Buffer scheduled the outbound posts, and Slack notifications kept the team aware of publishing activity and exceptions.',
    architectureDiagram: {
      url: '/architecture/social-posting-architecture.svg',
      alt: 'Architecture diagram showing Airtable content planning, Make.com routing, Buffer scheduling, and Slack team notifications',
    },
    detailSections: [
      {
        title: 'Constraints',
        points: [
          'Publishing required coordination across planning, scheduling, and team visibility tools.',
          'Manual posting setup introduced avoidable errors and repetitive operational work.',
          'The client needed a workflow that could support recurring content volume without becoming fragile.',
        ],
      },
      {
        title: 'Technical Decisions',
        points: [
          'Used Airtable as the planning source so content state stayed visible before scheduling.',
          'Placed Make.com in the middle as the router between content readiness, publishing actions, and notifications.',
          'Used Slack as an operational visibility layer so the team knew what had been scheduled or needed attention.',
        ],
      },
      {
        title: 'Reliability Considerations',
        points: [
          'Structured routing reduced repetitive copy-paste work that often causes publishing mistakes.',
          'Separating content planning from scheduling made it easier to troubleshoot failures without losing the content source.',
          'Notifications helped the team trust the automation while still staying aware of live publishing activity.',
        ],
      },
    ],
    tags: ['Make.com', 'Airtable', 'Buffer', 'Slack'],
    images: [{ url: '/Make-Airtable.png', alt: 'Social media posting automation' }],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Samson connected our website, CRM, intake flow, and billing logic into one system. The onboarding experience became much smoother and the team spent far less time coordinating handoffs manually.',
    author: 'Hosea V Barnwell',
    role: 'CEO',
    company: 'Hosvi LLC',
    rating: 5,
    avatar: 'HL',
    logoUrl: '/hosvi-logo.jpeg',
  },
  {
    id: 2,
    quote:
      'He understood both the traveler-facing experience and the backend workflow structure we needed. The website and Airtable-based operations feel much more coordinated and scalable now.',
    author: 'Percy Smith',
    role: 'CEO',
    company: 'AdviTravel',
    rating: 5,
    avatar: 'AT',
    logoUrl: '/advitrave-logo.jpeg',
  },
  {
    id: 3,
    quote:
      'Samson removed a lot of operational friction between the website and HubSpot. Lead handling became cleaner, faster, and much easier for the team to trust.',
    author: 'Troy Austria',
    role: 'Operations Manager',
    company: 'Sunlife Housing Corp',
    rating: 5,
    avatar: 'SH',
    logoUrl: '/Sunlife-logo.jpeg',
  },
  {
    id: 4,
    quote:
      'What stood out was how practical the systems were. The automation work reduced repetitive admin tasks and gave us a setup the team could actually use day to day.',
    author: 'Client Reference',
    role: 'Systems Coordinator',
    company: 'Purchasing Choice',
    rating: 5,
    avatar: 'PC',
  },
];

export const faqs: FAQItem[] = [
  {
    question: 'What roles are you best suited for?',
    answer:
      'I am strongest in automation, integrations, CRM systems, and internal tools roles where workflows, data, and operational handoffs need to run reliably across multiple platforms.',
  },
  {
    question: 'How do you use code inside automation and systems work?',
    answer:
      'I use code where it improves control and reliability, whether that means custom frontend work, API logic, webhook handling, data transformation, or automation steps that need more than drag-and-drop tooling alone.',
  },
  {
    question: 'What parts of projects do you usually own?',
    answer:
      'I often own the frontend implementation, integration design, workflow logic, CRM or operational data modeling, and the end-to-end path that connects user actions to backend systems.',
  },
  {
    question: 'Do you work with production systems and private codebases?',
    answer:
      'Yes. Much of my strongest work has been inside live business systems, which is why some project details are presented as case studies rather than public repositories.',
  },
  {
    question: 'How do you approach reliability in integrations and workflows?',
    answer:
      'I design around clear triggers, validation, fallback paths, deduplication, and explicit lifecycle states so workflows remain understandable and resilient when real-world edge cases show up.',
  },
  {
    question: 'What kinds of systems are the best fit for your background?',
    answer:
      'The best fit is work that combines product-facing software with integrations, workflow orchestration, or internal tooling where reliability and operational clarity matter.',
  },
  {
    question: 'Are you open to remote roles or contract work?',
    answer:
      'Yes. I am open to remote roles, contract work, and systems-focused opportunities involving integrations, automation, CRM systems, and internal tools.',
  },
];
