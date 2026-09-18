// All case-study copy below is verbatim from Abhishek's brief. Do not add facts or metrics here
// that aren't in the brief, the CV, or a genericized live capture.
// Screenshot entries whose file doesn't exist yet are skipped at build time.

export const person = {
  name: 'Abhishek Sharma',
  title: 'Senior AI Solutions Architect / Forward Deployed Engineer',
  location: 'Singapore',
  email: 'abhishek87@live.in',
  linkedin: 'https://linkedin.com/in/abhishek-sharma',
  // Phone deliberately left off the public site.
};

// Portfolio-level results. Sources: Abhishek (8 FTE across projects, Sep 2026) and the CV.
export const impactMetrics = [
  { value: '8 FTE', label: 'of manual workload removed across the AI systems I have shipped' },
  { value: '60%', label: 'operational efficiency gain from a 7-system production AI ecosystem' },
  { value: '80%+', label: 'productivity and market-signal coverage gain in category evaluation' },
  { value: '5+', label: 'production voice and chat agents for inbound, qualification and escalation' },
  { value: '35–60%', label: 'fewer manual touchpoints per client engagement' },
  { value: '15+ yrs', label: 'delivering enterprise technology across APAC, the Middle East and the UK' },
];

// Capabilities shipped to production (all named in the CV).
export const capabilities = ['RAG knowledge systems', 'AI agents & multi-agent orchestration', 'Voice & chat agents', 'Agentic lead management', 'In-console AI pricing assistant', 'Category intelligence', 'Autonomous ad & social engine', 'Human-in-the-loop outbound'];

const MASK_NOTE = 'Live capture. The employer is shown under a fictional brand, Northwind Logistics. Business figures were masked with “X” and company and staff names swapped for generic labels (Client 01, Supplier 01, Sales Rep A) in the page itself, before the screenshot was taken. Nothing was cropped or blurred afterwards.';

export const caseStudies = [
  {
    slug: 'rfq-platform',
    cover: '02-dashboard-overview.png',
    name: 'RFQ & Pricing Platform',
    kicker: 'Quoting & pricing platform',
    summary: 'Replaced a spreadsheet-driven RFQ and quoting process with one platform: a canonical product data model, hierarchical markup pricing and an embedded AI pricing assistant.',
    url: null, // employer is anonymised — no link to the live domain
    problem: 'Manual, spreadsheet-driven RFQ and quoting process across procurement and commercial teams — no canonical product data, no standard pricing logic, no approvals trail.',
    approach: 'Ran discovery with commercial and procurement stakeholders; designed a canonical data model (36 sub-categories, 50 spec fields, ~7,900 SKUs); built hierarchical markup pricing logic (row → category → global fallback); shipped to AWS production.',
    impact: [
      'Replaced the manual quoting process end-to-end',
      'Embedded Q-Bot, an in-console AI pricing assistant',
      'Standardised markup logic across the commercial team',
    ],
    facts: [['36', 'sub-categories'], ['50', 'spec fields'], ['~7,900', 'SKUs']],
    design: [
      'Canonical data model was built first so pricing/approvals logic could sit on top of stable spec data instead of being hard-coded per SKU.',
      'Markup logic is hierarchical so teams can override case-by-case without breaking the default.',
      'Employee vs Client Portal login modes are split because internal quoting behaviour differs fundamentally from what an external client should see.',
      'Q-Bot is embedded in-console rather than a separate tool.',
    ],
    stack: ['AWS', 'Claude Code', 'Antigravity IDE', 'GitHub', 'Supabase', 'Zoho CRM sync', 'GPT-4o/Claude'],
    maskNote: MASK_NOTE,
    shots: [
      ['01-login-employee-client-portal.png', 'Invite-only sign-in. Employees and clients enter through separate portal modes, because internal quoting and what a client sees are different jobs.'],
      ['02-dashboard-overview.png', 'The commercial dashboard: quoted value, gross margin, active requests, pending approvals and progress against the FY target.'],
      ['03-rfq-list.png', 'Every customer quote request in one list, with value, margin, status and who currently holds it.'],
      ['04-quote-pricing-detail.png', 'Quote detail: cost, sell price and margin for each line item, next to the customer record and the sourcing workflow.'],
      ['05-new-customer-quote-request.png', 'A new Customer Quote Request is a four-step flow: customer, products, pricing and notes, then review.'],
      ['06-master-sku-catalog-cost-sell-margin.png', 'The master SKU catalog: every product with cost, sell price and margin in one place. Editing a price updates the master, so future quotes use it.'],
      ['07-approvals-queue.png', 'Approvals are tiered: manager (Tier 1), management (Tier 2) and SLA-breach tracking. This is the approvals trail the spreadsheets never had.'],
      ['08-ai-insights.png', 'AI Insights flags idle clients, stalled quotes and categories below their margin target.'],
      ['09-buying-guide.png', 'Buying guides give customers, vendors and internal teams one shared reference.'],
    ],
  },
  {
    slug: 'markai',
    cover: '02-dashboard-performance-overview.png',
    name: '7-System AI Ecosystem / MarkAI',
    kicker: 'Connected AI operations',
    summary: 'Seven connected production systems (lead management, voice, ads, social, lead pipeline, RAG sales knowledge and escalation) running on one shared data layer.',
    problem: 'Lead management, inbound handling, marketing, and customer escalation ran as disconnected manual processes with no shared data layer — high headcount cost, slow response times.',
    approach: 'Architected and delivered seven connected production systems — agentic lead management, voice agents, ad strategy, social automation, global lead pipeline, a RAG sales-knowledge system, and customer escalation.',
    impact: ['60% operational efficiency gain', 'Elimination of 2+ FTE of manual workload'],
    facts: [['7', 'connected production systems'], ['60%', 'efficiency gain'], ['2+ FTE', 'manual workload removed']],
    design: [
      'Started from one shared data layer (Supabase) rather than building seven independent systems — an earlier ecosystem review showed disconnected agents without a shared source of truth cascade into failures.',
      'n8n orchestrates all seven so logic changes are made once centrally.',
      'Voice, chat, and RAG systems read from the same lead record.',
      'Outbound-facing systems launched with human-in-the-loop review before autonomous send.',
    ],
    stack: ['GPT-4o', 'Claude', 'Retell AI', 'n8n', 'Supabase', 'Vercel', 'AWS'],
    maskNote: MASK_NOTE,
    shots: [
      ['01-login-screen.png', 'MarkAI sign-in, the entry point to the marketing layer of the ecosystem.'],
      ['02-dashboard-performance-overview.png', 'Performance overview: channel results read from the shared data layer.'],
      ['03-social-studio.png', 'Social Studio, where social content is drafted and reviewed.'],
      ['04-autopilot.png', 'Autopilot: automated workflows with human review before anything is sent.'],
      ['05-omni-channel.png', 'Omni-Channel: every channel on one lead record.'],
    ],
  },
  {
    slug: 'cat-ai',
    name: 'CAT AI',
    kicker: 'Category intelligence control plane',
    summary: 'One control plane for deciding which packaging categories to launch: demand research, supply and vendor analysis, trial buying and scoring.',
    url: null,
    problem: 'New packaging-category opportunities were evaluated manually — demand signals, vendor capability, and margin potential lived in separate spreadsheets with no consistent scoring, slowing category launch decisions.',
    approach: 'Built one control plane spanning demand research, supply/vendor analysis, trial buying, and category scoring — planned in Antigravity IDE, built with Claude Code, UI on 21st.dev components.',
    impact: ['Over 80% improvement in productivity and market-signal coverage for category evaluation'],
    facts: [['80%+', 'productivity & signal coverage']],
    design: [
      'Structured around the actual decision sequence a category lead follows — scan demand, check supply, validate vendors, trial-buy, score — rather than a generic dashboard.',
      'Every module writes into one shared category record.',
      'Kept a bypass/admin mode separate from the live-scan flow for internal validation.',
    ],
    stack: ['Antigravity IDE', 'Claude Code', '21st.dev'],
    maskNote: MASK_NOTE,
    shots: [
      ['01-overview-control-plane.png', 'Overview: the navigation follows the decision sequence (intelligence, then sourcing sprints, then collateral).'],
      ['02-overview-portfolio-and-vendor-funnel.png', 'The full overview: stage funnel, score distribution, vendor funnel and the knockout gates that cap a score.'],
      ['03-demand-intelligence-category-scan.png', 'Step 1, scan demand: each category gets a recommendation, a demand score and a confidence level, with sources attached.'],
      ['04-supply-intelligence-vendor-ranking.png', 'Step 2, check supply: shortlisted products become supply cases, and vendors are ranked against quantity, price band, geography and lead time.'],
      ['05-vendor-verification-outreach-gate.png', 'Step 3, validate vendors: a person approves outreach before any vendor is contacted.'],
      ['06-category-scoring-weights-and-gates.png', 'Step 4, score: versioned scoring weights, replayable runs and a “why this score” trail for each category.'],
    ],
  },
  {
    slug: 'corporate-site',
    cover: '04-platform-wms-and-trade.png',
    name: 'AI-Native Corporate Website & PIE Agent',
    kicker: 'Vibe-coded web platform',
    summary: 'The company’s global website, vibe-coded in Lovable, with an AI search navigator and PIE, a chat and voice agent on Retell AI, running on Supabase and Vercel.',
    // Facts from Abhishek (build stack, imagery) and the CV (PIE). No other claims.
    built: [
      'Vibe-coded in Lovable: every page, the navigation and the Cognitive Navigator, where visitors describe a packaging need in plain language.',
      'PIE (Packaging Intelligence Expert), the chat and voice agent built on Retell AI. One widget offers text chat and a voice call.',
      'In production, PIE qualifies, segments and routes inbound leads within 10 minutes of form submission, with no human in the first-response loop, targeting a 30% reduction in inbound handling cost.',
      'Supabase as the database, deployed on Vercel.',
      'Every image on the site was generated with Higgsfield, Gemini and OpenAI image models.',
    ],
    stack: ['Lovable', 'Retell AI', 'VAPI', 'GPT-4o', 'n8n', 'Supabase', 'Vercel', 'Higgsfield', 'Gemini', 'OpenAI image models'],
    maskNote: 'Live capture of the public site. The company name is replaced with the fictional Northwind in the page itself. The AI-generated photography carries the original logo in its pixels, so those sections are not shown.',
    shots: [
      ['01-cognitive-navigator-ai-search.png', 'The Cognitive Navigator: visitors describe their packaging needs, and the AI suggests a solution plus sustainable alternatives.'],
      ['02-pie-chat-and-voice-agent.png', 'PIE, the Packaging Intelligence Expert: text chat and a voice call in one widget, both on Retell AI.'],
      ['03-products-and-solutions.png', 'Products and solutions, built in Lovable.'],
      ['04-platform-wms-and-trade.png', 'The platform page for the warehouse system (WMS) and multi-channel trade products.'],
      ['05-impact-case-studies.png', 'Impact: case studies by industry.'],
    ],
  },
  {
    slug: 'nexus',
    name: 'Nexus: Agentic Control Plane',
    kicker: 'Agentic platform · work in progress',
    badge: 'Work in progress',
    light: true,
    summary: 'An agentic platform that connects the company’s AI agents and gives management one holistic view of all of them, with a single kill switch.',
    roleTitle: 'What it is',
    role: 'As the number of production agents grew (voice, chat, lead management, ads, social, escalation), each one ran and reported on its own. Nexus is being built with Claude Code as the layer above them: it connects the agents, shows management what every agent is doing in one place, and puts all of them behind one kill switch. It is work in progress.',
    details: {
      title: 'Design intent',
      items: [
        'Connect the agents: every agent registers with Nexus instead of running in isolation.',
        'One holistic view: management sees agent activity and status across the business in one place.',
        'One kill switch: every agent can be stopped from a single control.',
        'Built with Claude Code.',
      ],
    },
    shots: [],
  },
  {
    slug: 'property-nex',
    name: 'Property Nex',
    kicker: 'Real-estate data platform · confidential',
    badge: 'Confidential',
    light: true,
    summary: 'A platform that turns fragmented property-client data into a data product that commercial companies can buy.',
    roleTitle: 'The problem',
    role: 'Real-estate data is spread across many property clients in inconsistent formats, so it can’t be analysed or sold as a product, even though commercial companies need it. Property Nex finds and analyses the property clients, processes their data into a consistent model, and puts it on a platform through which the data is sold to commercial companies. Client and commercial details are confidential, so this page shows the approach only.',
    details: {
      title: 'Approach',
      items: [
        'Find and analyse the property clients: identify who holds the data and what it is worth.',
        'Collect and process the data: bring each client’s data together, clean it and normalise it into one model.',
        'Build the data module that structures and packages the data.',
        'Build the platform through which the real-estate data is sold to commercial companies.',
      ],
    },
    shots: [],
  },
  {
    slug: 'avar-systems',
    name: 'Avar Systems',
    kicker: 'End-to-end development firm',
    light: true,
    summary: 'An end-to-end development firm. I am the consultant between the customer and the build: I find the customer, understand the problem, prove the answer with a POC, then deliver the project.',
    url: 'https://avarsystems.com',
    role: 'Principal Consultant, January 2024 to present. Avar Systems designs, builds and deploys AI, automation and software for SME and mid-market businesses across logistics, eCommerce and professional services. I own the customer side of every engagement, from first conversation to handover. I have delivered production AI and automation for 5+ clients, reducing manual touchpoints 35–60% per engagement within 4-week delivery cycles.',
    details: {
      title: 'How an engagement runs',
      items: [
        'Find the customer: identify businesses held back by manual, disconnected operations.',
        'Talk to them: run discovery directly with the owners and executives who feel the problem.',
        'Understand the problem: map where the process breaks and what fixing it is worth, then scope the engagement and commercials.',
        'Create the POC: prove the solution on the customer’s own data before they commit.',
        'Deliver the project: architecture, build, cloud deployment, testing, documented handover and enablement, so the client’s team can run it.',
      ],
    },
    shots: [
      ['01-homepage-hero.png', 'Homepage.'],
      ['02-services.png', 'Services.'],
      ['03-solutions.png', 'Solutions.'],
      ['04-case-studies.png', 'Case studies.'],
    ],
  },
  {
    slug: 'avar-earth',
    name: 'Avar Earth',
    kicker: 'Profile',
    light: true,
    summary: 'Public storefront for Avar Earth, a vegan footwear brand.',
    url: 'https://avarearth.com',
    role: 'Co-Founder & Head of Product and Technology, November 2023 to present. Full ownership of technology architecture, AI infrastructure, operations and P&L. Built an n8n integration layer across Odoo ERP finance reconciliation, inventory, social publishing and email triage (admin workload down 40%, a 3-person team delivering 7-person output), and agentic fulfilment workflows with automated exception handling (order lead time down 24%, CSAT up 3.8 points).',
    shots: [
      ['01-storefront-homepage.png', 'Storefront homepage.'],
      ['02-product-listing-shop.png', 'Product listing.'],
      ['03-our-process-sustainability.png', '“Our Process”: how the materials are made.'],
    ],
  },
  {
    slug: 'avar-genie',
    cover: '03-app-overview.png',
    name: 'Avar Genie',
    kicker: 'AI marketing platform · work in progress',
    roleTitle: 'The problem, and what I’m building',
    light: true,
    summary: 'An AI marketing platform that lets brand owners run their social media and ads without knowing how to write prompts.',
    url: 'https://marketing-automate-xi.vercel.app',
    role: 'Brand owners juggle tools, agencies and prompt-writing just to stay visible, and none of those fix it. Running social and paid ads well means knowing what to post, how to phrase it for each channel, where to put budget and how to read results beyond vanity metrics. I am building Avar Genie (now in public beta, work in progress) so a brand owner can go from a raw photo to published, on-brand posts and budgeted ads without writing a single prompt.',
    details: {
      title: 'What the platform does',
      items: [
        'Brand DNA first: builds a profile of the brand from its website, visuals, tone and audience, so every post, ad, image and caption stays consistent across channels.',
        'From brief to publish without prompts: start from a logo, a website or a blank canvas, and Genie fills in the rest.',
        'One product, one campaign: a raw product photo becomes social posts with caption variants and targeted, budgeted ad variants.',
        'Autopilot within guardrails: the owner sets the autonomy level, spend and posting caps and an escalation contact. Nothing publishes without approval unless the owner allows it.',
        'Reads past vanity metrics: reports profit rather than clicks, then recommends where to move budget next.',
      ],
    },
    maskNote: 'Live capture of the logged-in app. Figures were masked with “X” in the page before the screenshot was taken.',
    shots: [
      ['01-landing-hero.png', 'The public landing page: an AI marketing operating system for brands and agencies.'],
      ['03-app-overview.png', 'Inside the app, the command center for one brand: items in review, live channels, autopilot mode and credits, with Ask Genie answering from the brand’s own data.'],
      ['09-create-studio.png', 'Create: pick a format, describe the concept in a few words, and a live preview shows how the brand’s DNA will shape the result.'],
      ['10-library.png', 'The asset library pulls from local uploads, the brand’s website and cloud drives, next to everything Genie has generated.'],
      ['04-autopilot-overview.png', 'Autopilot runs the channels within guardrails: autonomy level, granted channels, runbook tasks and anything waiting for approval.'],
      ['05-autopilot-agent-policy.png', 'Agent policy sets how much the agent can do alone (off, suggest, semi-auto or full auto), plus spend and posting caps and an escalation contact.'],
      ['06-autopilot-runbook.png', 'The runbook: the daily tasks the agent performs, each switched on individually with its own threshold.'],
      ['08-performance.png', 'Performance across ad accounts: ROAS, spend and revenue by channel. The app labels this as sample data until an ad account is connected.'],
      ['02-landing-full-page.png', 'The full landing page.'],
    ],
  },
];


// From the CV's professional summary.
export const statement = {
  draft: false,
  text: 'Senior AI Solutions Architect and Forward Deployed Engineer with 15+ years designing, delivering and deploying enterprise AI, cloud and digital transformation solutions across APAC, the Middle East and the UK. I combine hands-on solution architecture (LLM orchestration, RAG, agentic and multi-agent systems, API and data platform integration) with client-facing consulting, pre-sales solutioning and end-to-end delivery leadership.',
};

// From the CV's Platforms & Tools and Cloud skills, plus the case-study stacks.
export const techStack = [
  { group: 'Models & AI', items: ['Anthropic Claude API', 'GPT-4o / OpenAI API', 'Google Gemini', 'RAG', 'Multi-agent systems'] },
  { group: 'Voice, chat & generative media', items: ['Retell AI', 'VAPI', 'ElevenLabs', 'Dify', 'Higgsfield', 'Gemini & OpenAI image models'] },
  { group: 'Orchestration', items: ['n8n (advanced)', 'Make.com', 'Zapier', 'Webhooks', 'REST APIs'] },
  { group: 'Cloud & data', items: ['AWS (EC2, S3, RDS)', 'Google Cloud', 'Vercel', 'Supabase', 'SQL', 'Python', 'Tableau'] },
  { group: 'Business systems', items: ['Salesforce CRM', 'Zoho CRM', 'Odoo ERP', 'Shopify', 'Apollo.io', 'Apify', 'Tavily'] },
  { group: 'Build tooling', items: ['Antigravity IDE', 'Cursor', 'Claude Code', 'Windsurf', 'Lovable', 'GitHub CI/CD', '21st.dev'] },
];

export const skills = [
  { group: 'AI & machine learning', items: ['Enterprise AI architecture', 'Generative AI & LLMs', 'LLM orchestration', 'Retrieval-augmented generation', 'Agentic & multi-agent systems', 'Conversational & voice AI', 'Model evaluation', 'AI governance & Responsible AI'] },
  { group: 'Consulting & delivery', items: ['Pre-sales & solutioning', 'Technical discovery workshops', 'Scoping & SOW definition', 'End-to-end delivery leadership', 'Stakeholder & C-suite advisory', 'Architecture handover & enablement'] },
  { group: 'Data & analytics', items: ['Data architecture', 'Single-source-of-truth design', 'Predictive analytics', 'Statistical modelling', 'Business intelligence'] },
  { group: 'Enterprise domains', items: ['Logistics & supply chain', 'Retail & eCommerce', 'B2B SaaS', 'Industrial procurement', 'Cross-border trade', 'Order-to-cash', 'EPR & ESG compliance'] },
];

export const experience = [
  {
    when: 'Jan 2026 – Present',
    role: 'Director of AI Solutions Architecture & International Expansion',
    org: 'Multi-region B2B packaging & procurement platform · Singapore',
    points: [
      'Architected and delivered a 7-system production AI ecosystem from discovery to deployment (GPT-4o, Anthropic Claude, Retell AI, n8n, Supabase, Vercel, AWS), delivering a 60% operational efficiency gain and eliminating 2+ FTE of manual workload.',
      'Led end-to-end design and delivery of the RFQ & Pricing Platform, an AI-native quotation, vendor RFQ and multi-tier approvals system: stakeholder discovery, solution architecture, a canonical data model (36 sub-categories, 50 specification fields, ~7,900 products) and production deployment on AWS.',
      'Engineered and deployed 5+ production voice and chat agents (Retell AI, GPT-4o) for inbound handling, lead qualification and logistics escalation, integrated with CRM and order management and targeting a 30% reduction in inbound handling cost.',
      'Led a cross-functional engineering delivery team, including an 11-agent external vendor engineering programme. Ran the architecture retrospective that traced cascading agent failures to a missing single-source-of-truth data layer, then drove the remediation roadmap.',
      'Automated an outbound enterprise pipeline generating 10 personalised C-suite emails daily across 25+ countries (Apollo.io, Apify, Tavily, GPT-4o) under a human-in-the-loop review model.',
      'Built the ASEAN market-entry strategy and delivered go-to-market for 3 new international markets in Q1–Q2 2026.',
    ],
  },
  {
    when: 'Jan 2024 – Present',
    role: 'Principal Consultant',
    org: 'Avar Systems (independent practice) · Singapore',
    points: [
      'Delivered production AI and automation solutions for 5+ enterprise and mid-market clients across logistics and eCommerce, reducing manual touchpoints 35–60% per engagement.',
      'Ran pre-sales and solutioning directly with client executives, translating business problems into target-state architectures within 4-week delivery cycles.',
      'Owned end-to-end technical delivery (architecture, build, cloud deployment, testing, documented handover and client-team enablement).',
    ],
  },
  {
    when: 'Nov 2023 – Present',
    role: 'Co-Founder & Head of Product and Technology',
    org: 'Avar Earth · Singapore',
    points: [
      'Designed and deployed an n8n integration layer across Odoo ERP finance reconciliation, inventory, social publishing and email triage, reducing admin workload 40%.',
      'Architected agentic fulfilment and logistics workflows with automated exception handling: 24% reduction in order lead time and a 3.8-point CSAT uplift.',
      'Built an AI competitive-intelligence system scanning 15+ regional market signals daily.',
    ],
  },
  {
    when: 'Apr 2018 – Oct 2023',
    role: 'Co-Founder and Head of Product',
    org: 'Whitley Ecom Pte Ltd · Singapore / International',
    points: [
      'Conceived, architected and launched GlobifyX, a SaaS platform for cross-border workflow optimisation: client operational lead times down 30%, first external enterprise client within 60 days of launch.',
      'Scaled annual revenue from USD 500K to USD 5M (10x) over 5 years.',
      'Directed operations and expansion across 25+ countries.',
    ],
  },
  {
    when: 'Jan 2015 – Apr 2018',
    role: 'Senior Manager – International Markets',
    org: 'DTDC Express Ltd · International',
    points: [
      'Owned a USD 3M P&L across the international portfolio, sustaining 20% year-over-year profit growth.',
      'Scaled the active country footprint from 12 to 25 through distribution partnerships and enterprise account development.',
    ],
  },
];

export const education = [
  { when: '2022', degree: 'Diploma in Data Science', org: 'Steinbeis Akademie, Germany' },
  { when: '2010', degree: 'Master of Arts, Marketing', org: 'University of Bedfordshire, United Kingdom' },
  { when: '2009', degree: 'Bachelor of Arts (Honours), Economics', org: 'University of Delhi, India' },
];

// Verified against the certificate files in Abhishek's Drive folder (Sep 2026).
export const certificationsUrl = 'https://drive.google.com/drive/folders/1HsID_NAYCeaGhy2oTXD5T_U6zu7Yrmox';
export const certifications = [
  { area: 'AI & machine learning', items: [
    { title: 'Claude Platform 101', issuer: 'Anthropic' },
    { title: 'Claude 101', issuer: 'Anthropic' },
    { title: 'Generative AI Sprint, AI Generalist Accelerator (NSDC: AI for Founders and Business)', issuer: 'Outskill', when: 'Dec 2025', note: 'Prompt engineering, n8n workflow automation, no-code product development, voice-agent orchestration, MCP integration and deployment, multimodal AI' },
    { title: 'Machine Learning A–Z: AI, Python & R', issuer: 'Udemy · SuperDataScience', when: 'Sep 2025' },
    { title: 'Machine Learning with Python (ML0101EN)', issuer: 'IBM Cognitive Class · ExcelR', when: 'Aug 2022' },
  ] },
  { area: 'Data & analytics', items: [
    { title: 'Google Data Analytics Professional Certificate (8 courses)', issuer: 'Google · Coursera', when: 'Aug 2021' },
    { title: 'Tableau Data Analyst / Specialist Desktop', issuer: 'Udemy', when: 'Jul 2022' },
  ] },
  { area: 'Security', items: [
    { title: 'Google Cybersecurity Professional Certificate (8 courses)', issuer: 'Google · Coursera', when: 'Nov 2023' },
    { title: 'Cyber Security: From Beginner to Expert', issuer: 'Udemy', when: 'Mar 2023' },
  ] },
];

// Abhishek's own description of how he works (Sep 2026).
export const howIWork = [
  ['Analyse the problem', 'Start with the business problem, not the tool.'],
  ['Understand the issues', 'Sit with the teams who live with it and find what is actually breaking.'],
  ['Join the dots', 'Connect the data, systems and people that the problem runs across.'],
  ['Plan the project', 'Scope it, sequence it and agree what success looks like.'],
  ['Build a proof of concept', 'Prove it works on real data before anyone commits.'],
  ['Get the go-ahead, then build', 'With the final go-ahead, take it to production.'],
];
