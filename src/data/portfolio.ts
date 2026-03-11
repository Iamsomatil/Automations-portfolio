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

export type Project = {
  title: string;
  category: 'web-crm' | 'automation';
  description: string;
  challenge?: string;
  solution?: string;
  result?: string;
  impactBullets: string[];
  metrics?: ProjectMetric[];
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
  title: 'Automation, CRM & Web Systems Specialist',
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
  { value: 99, suffix: '%', label: 'Uptime Delivered' },
];

export const trustPoints = [
  'High-converting websites connected to CRM and workflow logic',
  'GoHighLevel, HubSpot, n8n, Make.com, Zapier, Airtable, and Stripe',
  'Experience supporting U.S.-based businesses and distributed teams',
];

export const expertiseAreas: ExpertiseArea[] = [
  {
    title: 'Web Development',
    description:
      'Custom business websites engineered for performance, conversions, and seamless CRM integration.',
    bullets: [
      'High-converting frontend development',
      'React, Next.js, and TypeScript builds',
      'CRM-integrated and automation-ready architecture',
      'SEO-structured and performance-optimized',
    ],
  },
  {
    title: 'E-commerce Systems',
    description:
      'End-to-end e-commerce platforms built for conversion, with automated backend order and customer workflows.',
    bullets: [
      'Shopify and WooCommerce development',
      'Automated order and fulfillment workflows',
      'Platform integrations and data syncing',
      'Conversion-focused UX and checkout flows',
    ],
  },
  {
    title: 'CRM Implementation',
    description:
      'Full GoHighLevel and HubSpot setup, including custom pipelines, lead routing, and onboarding flows.',
    bullets: [
      'GoHighLevel and HubSpot configuration',
      'Custom sales pipelines and deal stages',
      'Automated lead capture and onboarding flows',
      'CRM data hygiene and deduplication logic',
    ],
  },
  {
    title: 'Automation Systems',
    description:
      'Workflow automation across n8n, Make.com, and Zapier that eliminates manual work and scales operations.',
    bullets: [
      'Multi-step workflows with n8n, Make.com, and Zapier',
      'Lead routing and appointment automation',
      'Billing, invoicing, and contract automations',
      'Error handling and reliability engineering',
    ],
  },
  {
    title: 'Funnels & Conversion Systems',
    description:
      'Intake forms, booking flows, and lead funnels connected to automated customer journeys end-to-end.',
    bullets: [
      'Intake forms and qualification flows',
      'Booking and scheduling automations',
      'Lead magnet and nurture funnels',
      'Automated follow-up and re-engagement sequences',
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
      'End-to-end CRM and automation infrastructure for a U.S. case placement company, including the frontend website, GoHighLevel backend, automated billing logic, and contract-signing pipelines.',
    challenge:
      'The business needed marketing, intake, billing, and contract execution to work as one operating system instead of disconnected tools.',
    solution:
      'Built the frontend experience, configured GoHighLevel, automated invoice timing with Stripe, and connected contract workflows into one dependable path.',
    result:
      'The business could scale placements without increasing admin overhead or introducing manual billing mistakes.',
    impactBullets: [
      'Fully automated client onboarding pipeline',
      'Zero-error 14-day invoice buffer with Stripe',
      'Automated contract placement and e-signature flow',
      'GoHighLevel CRM configured from scratch',
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
      'Customer-facing website and robust backend CRM system in Airtable for managing complex traveler and advisor relationships across a U.S. travel platform.',
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
    tags: ['Next.js', 'Airtable', 'Make.com', 'HubSpot'],
    images: [{ url: '/advitravel-thumbnail.png', alt: 'Advitravel website homepage' }],
    liveUrl: 'https://advitravel.com',
  },
  {
    title: 'Sunlife Housing Corp',
    category: 'web-crm',
    featured: true,
    description:
      'High-converting website paired with automation workflows connected to HubSpot using Make.com to reduce manual operations and improve CRM accuracy.',
    challenge:
      'Inbound leads were creating avoidable operational drag because the website and CRM were not behaving like one coordinated system.',
    solution:
      'Built the website from scratch, wired forms and logic into HubSpot, and added Make.com automation for cleaner lead handling and deduplication.',
    result:
      'The team spent significantly less time on manual operations while maintaining better CRM hygiene and reporting confidence.',
    impactBullets: [
      'Reduced manual operations by more than 50%',
      'Improved HubSpot CRM data hygiene',
      'Flawless deduplication and lead pipeline logic',
      'Bi-directional data sync between site and CRM',
    ],
    tags: ['React', 'Make.com', 'HubSpot', 'Zapier'],
    images: [{ url: '/sunlife-thumbnail.png', alt: 'Sunlife Housing Corp website homepage' }],
    liveUrl: 'https://sunlifehousingcorp.com',
  },
  {
    title: 'Smart Email Intake & Routing System',
    category: 'automation',
    description:
      'Built a multi-path automation system using Zapier and ChatGPT to intelligently classify and route incoming emails across sales, support, and scheduling.',
    challenge:
      'A chaotic inbox was mixing sales leads, support requests, and meeting pings in one place, slowing down follow-up.',
    solution:
      'Created a multi-path Zapier workflow using AI classification to route each message to the right team member and downstream system.',
    result:
      'Leads and support requests stopped slipping through the cracks, and the team gained a much faster response rhythm.',
    impactBullets: [
      'Reduced manual email handling by 70%',
      'Achieved a 100% lead follow-up rate',
      'Improved response time by 4x',
      'Connected 5+ systems in one routing flow',
    ],
    metrics: [
      { label: 'Manual Handling', value: '-70%' },
      { label: 'Lead Follow-up', value: '100%' },
      { label: 'Response Time', value: '4x faster' },
      { label: 'Tools Integrated', value: '5+' },
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
      '100% team alignment on new leads',
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
      'Maintained 100% daily coverage',
      'Reduced data entry to zero minutes',
      'Monitored 20+ NAICS codes automatically',
    ],
    metrics: [
      { label: 'Manual Research', value: '-90%' },
      { label: 'Daily Coverage', value: '100%' },
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
      'Reached a 100% follow-up rate',
      'Automated 5+ follow-up steps',
      'Delivered 100% contact tagging consistency',
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
      'Maintained 100% script consistency',
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
      'Samson brought our website, CRM, intake flow, and billing logic into one connected system. The result was a much smoother onboarding experience and far less manual back-and-forth for our team.',
    author: 'Project Lead',
    role: 'Operations',
    company: 'Hosvi LLC',
    rating: 5,
    avatar: 'HL',
  },
  {
    id: 2,
    quote:
      'He understood both the traveler-facing experience and the backend workflow structure we needed. The website and Airtable-based operations now feel much more coordinated and scalable.',
    author: 'Platform Stakeholder',
    role: 'Product',
    company: 'AdviTravel',
    rating: 5,
    avatar: 'AT',
  },
  {
    id: 3,
    quote:
      'Samson helped remove a lot of operational friction between the website and HubSpot. Lead handling became cleaner, faster, and much easier for the team to trust.',
    author: 'Operations Manager',
    role: 'Client Operations',
    company: 'Sunlife Housing Corp',
    rating: 5,
    avatar: 'SH',
  },
  {
    id: 4,
    quote:
      'What stood out was how practical the systems were. The automation work reduced repetitive admin tasks and gave us a setup the team could actually use day to day.',
    author: 'Operations Coordinator',
    role: 'Systems & Admin',
    company: 'Purchasing Choice',
    rating: 5,
    avatar: 'PC',
  },
];

export const faqs: FAQItem[] = [
  {
    question: 'What kind of systems do you build?',
    answer:
      'I build websites, CRM pipelines, automation workflows, onboarding systems, lead routing logic, billing flows, and connected operational infrastructure that reduces manual work.',
  },
  {
    question: 'Do you work with GoHighLevel, HubSpot, n8n, Make.com, and Zapier?',
    answer:
      'Yes. Those are some of the core platforms I use most often when implementing CRM and automation systems for real business workflows.',
  },
  {
    question: 'Can you connect websites to CRM and automation systems?',
    answer:
      'Yes. A big part of my work is making sure the frontend experience connects cleanly to the backend systems that handle leads, onboarding, billing, and follow-up.',
  },
  {
    question: 'Have you worked with U.S.-based businesses?',
    answer:
      'Yes. Several of the systems highlighted in this portfolio were built for U.S.-based companies and designed around distributed communication and dependable operational handoffs.',
  },
  {
    question: 'Do you build onboarding, billing, and lead routing workflows?',
    answer:
      'Yes. Those workflows are some of the most valuable places to automate because they directly affect team efficiency, conversion, and customer experience.',
  },
  {
    question: 'What types of projects are the best fit for your skills?',
    answer:
      "I'm strongest on projects that combine web development with CRM or automation backend work. If a business needs a website plus connected lead flows or cleaner operational infrastructure across multiple tools, that's exactly my wheelhouse.",
  },
  {
    question: 'Are you available for remote roles or contract work?',
    answer:
      'Yes. This portfolio is positioned for both contract opportunities and conversations around remote systems, automation, or CRM-focused roles.',
  },
  {
    question: 'How do you approach automation reliability and error handling?',
    answer:
      'I design around clear triggers, validation, fallback logic, data integrity, and maintainability so the workflow still behaves predictably when real-world edge cases show up.',
  },
];
