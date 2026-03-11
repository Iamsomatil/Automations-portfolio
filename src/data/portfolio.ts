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

export type ProjectDetailSection = {
  title: string;
  points: string[];
};

export type Project = {
  title: string;
  category: 'web-crm' | 'automation';
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
  images: { url: string; alt: string }[];
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
      'Built the traveler-facing website and the Airtable-based backend system used to manage traveler, advisor, and follow-up workflows across a travel platform.',
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
      'Built the website and the integration layer between form submissions, HubSpot records, and Make.com workflows so inbound lead handling behaved like one system.',
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
      'End-to-end lead nurturing system connecting HubSpot, Gmail, Asana, Slack, and Google Sheets via Make.com.',
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
    tags: ['HubSpot', 'Make.com', 'Gmail', 'Asana', 'Slack'],
    images: [{ url: '/Hubspot-crm-integration.png', alt: 'Lead nurture workflow' }],
  },
  {
    title: 'Federal Contract Opportunity Automation',
    category: 'automation',
    description:
      'Built a federal contract sourcing system using Make.com that pulls new SAM.gov opportunities daily, filters by NAICS codes, and logs qualified opportunities automatically.',
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
    tags: ['Make.com', 'SAM.gov API', 'Google Sheets', 'API Integration'],
    images: [{ url: '/sam.png', alt: 'Federal contract opportunity automation' }],
  },
  {
    title: 'GoHighLevel Seminar Automation',
    category: 'automation',
    description:
      'Automated seminar attendance tracking and post-event follow-up in GoHighLevel using tags, cleanup logic, and targeted messaging sequences.',
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
    tags: ['GoHighLevel', 'Email Automation', 'Marketing Automation'],
    images: [{ url: '/GHL-Onboarding.png', alt: 'GoHighLevel seminar automation' }],
  },
  {
    title: 'Automated Weekly Regulation Report',
    category: 'automation',
    description:
      'Multi-stage n8n automation that pulls regulation updates, tourism metrics, and local event data, then generates a polished weekly script with GPT-4o.',
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
    tags: ['n8n', 'OpenAI GPT-4o', 'API Integration', 'JavaScript', 'Notion'],
    images: [{ url: '/regulation.png', alt: 'Automated regulation report generator' }],
  },
  {
    title: 'Social Media Posting Automation',
    category: 'automation',
    description:
      'Integrated Airtable with Buffer for automated social media posting, using Make.com routers and Slack notifications for visibility.',
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
