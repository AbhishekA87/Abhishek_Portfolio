// Hand-written knowledge-base answers for the portfolio assistant.
// Every fact here comes from the CV, Abhishek's own statements, or the case studies — nothing else.
// `keys` are the words/phrases a visitor is likely to use; `ask` are example questions (also matched).
// Links are relative to the site root; the assistant rewrites them for the page it runs on.

export const faq = [
  {
    id: 'experience-total',
    title: 'Total experience',
    keys: ['experience', 'years', 'how long', 'total experience', 'career', 'seniority', 'background', 'how many years'],
    ask: ['What is the total experience of Abhishek?', 'How many years of experience does he have?'],
    answer: `<p>Abhishek has <b>15+ years</b> of experience designing, delivering and deploying enterprise AI, cloud and digital-transformation solutions across <b>APAC, the Middle East and the UK</b>.</p>
<p>His most recent roles:</p>
<ul>
<li><b>2026–present</b>: Director of AI Solutions Architecture &amp; International Expansion at a multi-region B2B packaging and procurement platform (Singapore)</li>
<li><b>2024–present</b>: Principal Consultant, Avar Systems (end-to-end development firm)</li>
<li><b>2023–present</b>: Co-Founder &amp; Head of Product and Technology, Avar Earth</li>
<li><b>2018–2023</b>: Co-Founder &amp; Head of Product, Whitley Ecom (cross-border eCommerce SaaS)</li>
<li><b>2015–2018</b>: Senior Manager, International Markets, DTDC Express</li>
</ul>`,
    links: [['Experience', 'index.html#experience']],
    follow: ['What has he built?', 'What are his biggest results?'],
  },
  {
    id: 'who',
    title: 'Who Abhishek is',
    keys: ['who', 'about', 'introduce', 'summary', 'profile', 'tell me about', 'overview', 'abhishek'],
    ask: ['Who is Abhishek?', 'Tell me about him', 'Give me a summary'],
    answer: `<p><b>Abhishek Sharma</b> is a Senior AI Solutions Architect and Forward Deployed Engineer based in <b>Singapore</b>, with 15+ years across APAC, the Middle East and the UK.</p>
<p>He combines hands-on solution architecture (LLM orchestration, RAG, agentic and multi-agent systems, API and data-platform integration on AWS) with client-facing consulting, pre-sales solutioning and end-to-end delivery leadership.</p>
<p>Recent work includes a <b>7-system production AI ecosystem</b>, an AI-native <b>RFQ &amp; pricing platform</b>, a <b>category-intelligence control plane (CAT AI)</b> and <b>Nexus</b>, an agentic control plane (in progress). Across projects, his systems have removed <b>8 FTE</b> of manual work.</p>`,
    links: [['Selected work', 'index.html#work']],
    follow: ['How does he work?', 'What is his tech stack?'],
  },
  {
    id: 'current-role',
    title: 'Current role',
    keys: ['current', 'currently', 'now', 'present', 'job', 'role', 'position', 'director', 'working', 'employer', 'company'],
    ask: ['What is his current role?', 'Where does he work now?'],
    answer: `<p>Since <b>January 2026</b> he has been <b>Director of AI Solutions Architecture &amp; International Expansion</b> at a multi-region B2B packaging and procurement platform in Singapore, with 65,000+ enterprise customers and operations across India, Singapore, the UAE and the UK. (The portfolio shows this employer under the fictional name “Northwind”.)</p>
<p>He is accountable for enterprise AI architecture, end-to-end technical delivery and international market expansion. There he built the 7-system AI ecosystem, the RFQ &amp; Pricing Platform, CAT AI, the AI-native corporate website with the PIE agent, and Nexus.</p>
<p>In parallel he is <b>Principal Consultant at Avar Systems</b> (since January 2024) and <b>Co-Founder of Avar Earth</b> (since November 2023).</p>`,
    links: [['Experience', 'index.html#experience']],
    follow: ['What does he do at Avar Systems?', 'What is Nexus?'],
  },
  {
    id: 'impact',
    title: 'Biggest results',
    keys: ['results', 'impact', 'achievements', 'achievement', 'numbers', 'metrics', 'outcomes', 'roi', 'value', 'accomplishments', 'biggest', 'proud'],
    ask: ['What are his biggest achievements?', 'What impact has he delivered?'],
    answer: `<p>Headline results from his work:</p>
<ul>
<li><b>8 FTE</b> of manual workload removed across the AI systems he has shipped</li>
<li><b>60%</b> operational efficiency gain from a 7-system production AI ecosystem</li>
<li><b>80%+</b> improvement in productivity and market-signal coverage for category evaluation (CAT AI)</li>
<li><b>5+</b> production voice and chat agents for inbound handling, qualification and escalation, targeting a 30% cut in inbound handling cost</li>
<li><b>35–60%</b> fewer manual touchpoints per client engagement at Avar Systems</li>
<li><b>10x</b> revenue growth (USD 500K to USD 5M) as co-founder of a cross-border eCommerce SaaS</li>
<li>Owned <b>USD 3M–5M</b> P&amp;L and drove market entry across <b>25 countries</b></li>
</ul>`,
    links: [['Selected work', 'index.html#work']],
    follow: ['How many FTEs has he saved?', 'Tell me about the 7-system AI ecosystem'],
  },
  {
    id: 'fte',
    title: 'FTE and productivity savings',
    keys: ['fte', 'headcount', 'manual work', 'manual workload', 'saved', 'savings', 'productivity', 'efficiency', 'automation savings', 'cost reduction'],
    ask: ['How many FTEs has he saved?', 'What productivity gains has he delivered?'],
    answer: `<p>Across the AI systems he has shipped, Abhishek’s work has removed <b>8 FTE</b> of manual workload. Productivity highlights:</p>
<ul>
<li><b>60%</b> operational efficiency gain from the 7-system AI ecosystem (2+ FTE of that on its own)</li>
<li><b>80%+</b> productivity and market-signal coverage gain in category evaluation with CAT AI</li>
<li><b>40%</b> less admin work at Avar Earth, letting a 3-person team deliver 7-person output</li>
<li><b>35–60%</b> fewer manual touchpoints per Avar Systems client engagement</li>
<li>Outbound research workload eliminated by an automated C-suite pipeline (10 personalised emails a day across 25+ countries)</li>
</ul>`,
    links: [['7-system AI ecosystem', 'work/markai.html'], ['CAT AI', 'work/cat-ai.html']],
    follow: ['Has he built AI agents?', 'What is CAT AI?'],
  },
  {
    id: 'rag',
    title: 'RAG experience',
    keys: ['rag', 'retrieval', 'retrieval augmented', 'knowledge base', 'vector', 'embeddings', 'knowledge system', 'semantic search'],
    ask: ['Has he built RAG systems?', 'Does he have RAG experience?'],
    answer: `<p>Yes. Retrieval-Augmented Generation is part of his production work:</p>
<ul>
<li>A <b>RAG sales-knowledge system</b> is one of the seven connected systems in the AI ecosystem he architected. It shares one lead record and data layer (Supabase) with the voice, chat and lead-management agents.</li>
<li>The PIE agent, the Sourcing Assistant in CAT AI and Ask Genie in Avar Genie all answer from the platform’s own data rather than the model’s general knowledge.</li>
</ul>
<p>His design principle: build a single source of truth first, so every retrieval and agent reads the same record.</p>`,
    links: [['7-system AI ecosystem', 'work/markai.html']],
    follow: ['Has he built AI agents?', 'Why a shared data layer?'],
  },
  {
    id: 'agents',
    title: 'AI agents and multi-agent systems',
    keys: ['agents', 'agent', 'agentic', 'multi agent', 'multi-agent', 'autonomous', 'orchestration', 'ai agents', 'kill switch', 'control plane'],
    ask: ['Has he built AI agents?', 'What agentic systems has he built?'],
    answer: `<p>Agentic systems are central to his work:</p>
<ul>
<li><b>7 connected production systems</b>: agentic lead management, voice agents, ad strategy, social automation, a global lead pipeline, RAG sales knowledge and customer escalation, all orchestrated by n8n on one Supabase data layer</li>
<li><b>5+ production voice and chat agents</b> (Retell AI, GPT-4o) for inbound handling, lead qualification and logistics escalation</li>
<li>A <b>Monitor / Comms / Insight</b> agent trio for proof-of-delivery and invoice automation, targeting DSO reduction</li>
<li><b>Nexus</b> (in progress): an agentic control plane that connects every agent and platform, gives management one view, and puts everything behind a single kill switch</li>
<li>He also ran the architecture retrospective of an 11-agent vendor programme, which traced cascading agent failures to a missing single-source-of-truth data layer</li>
</ul>`,
    links: [['Nexus', 'work/nexus.html'], ['7-system AI ecosystem', 'work/markai.html']],
    follow: ['What is Nexus?', 'Tell me about the voice agents'],
  },
  {
    id: 'voice',
    title: 'Voice and chat agents',
    keys: ['voice', 'voice agent', 'voice agents', 'chat agent', 'chatbot', 'call', 'retell', 'retell ai', 'vapi', 'elevenlabs', 'pie', 'packaging intelligence expert', 'inbound', 'conversational'],
    ask: ['Tell me about the voice agents', 'What is PIE?'],
    answer: `<p>He has engineered and deployed <b>5+ production voice and chat agents</b> using Retell AI and GPT-4o, integrated with CRM and order-management systems.</p>
<ul>
<li><b>PIE (Packaging Intelligence Expert)</b>: an inbound chat and voice agent on the corporate website. It qualifies, segments and routes inbound leads within <b>10 minutes</b> of form submission, with no human in the first-response loop, targeting a <b>30%</b> reduction in inbound handling cost. Stack: Retell AI, VAPI, GPT-4o, n8n.</li>
<li>Domestic call and chat agents (SIA / DIA) handle lead qualification and appointment booking.</li>
<li>Voice, chat and RAG systems all read from the same lead record.</li>
</ul>`,
    links: [['Corporate website & PIE', 'work/corporate-site.html']],
    follow: ['Has he built RAG systems?', 'What LLMs does he use?'],
  },
  {
    id: 'projects',
    title: 'What he has built',
    keys: ['projects', 'built', 'portfolio', 'work', 'case studies', 'platforms', 'products', 'shipped', 'examples'],
    ask: ['What has he built?', 'Show me his projects'],
    answer: `<p>Main case studies:</p>
<ul>
<li><b>RFQ &amp; Pricing Platform</b>: AI-native quoting with a canonical data model (~7,900 SKUs), hierarchical markup and multi-tier approvals</li>
<li><b>7-System AI Ecosystem / MarkAI</b>: connected lead, voice, ads, social, pipeline, RAG and escalation systems; 60% efficiency gain</li>
<li><b>CAT AI</b>: a category-intelligence control plane; 80%+ productivity gain</li>
<li><b>AI-Native Corporate Website &amp; PIE</b>: vibe-coded in Lovable, with a Retell AI chat and voice agent</li>
</ul>
<p>Also: <b>Nexus</b> (agentic control plane, in progress), <b>Avar Genie</b> (AI marketing platform, public beta), <b>Property Nex</b> (real-estate data platform, proof of concept), <b>Avar Systems</b> and <b>Avar Earth</b>.</p>`,
    links: [['All work', 'index.html#work']],
    follow: ['What is CAT AI?', 'What is Avar Genie?'],
  },
  {
    id: 'strength',
    title: 'How he works',
    keys: ['strength', 'strengths', 'approach', 'how he works', 'process', 'method', 'methodology', 'working style', 'problem solving', 'best at', 'superpower'],
    ask: ['What is his biggest strength?', 'How does he work?'],
    answer: `<p>His biggest strength is turning a messy business problem into a working system:</p>
<ol>
<li><b>Analyse the problem</b>: start with the business problem, not the tool</li>
<li><b>Understand the issues</b>: sit with the teams who live with it</li>
<li><b>Join the dots</b>: connect the data, systems and people involved</li>
<li><b>Plan the project</b>: scope it, sequence it, agree what success looks like</li>
<li><b>Build a proof of concept</b>: prove it on real data before anyone commits</li>
<li><b>Get the go-ahead, then build</b>: take it to production</li>
</ol>
<p>That is how the RFQ platform started from stakeholder discovery and a data model, and how Avar Systems runs every client engagement.</p>`,
    links: [['How I work', 'index.html#approach']],
    follow: ['Does he build proofs of concept?', 'What does he do at Avar Systems?'],
  },
  {
    id: 'poc',
    title: 'Proofs of concept',
    keys: ['poc', 'proof of concept', 'prototype', 'mvp', 'pilot', 'validate', 'experiment'],
    ask: ['Does he build proofs of concept?', 'How does he validate ideas?'],
    answer: `<p>Yes. A proof of concept is a fixed step in how he works: prove the solution on real data, then get the final go-ahead before building for production.</p>
<ul>
<li>At <b>Avar Systems</b>, every client engagement moves from discovery to a POC on the client’s own data, then to delivery, within 4-week cycles.</li>
<li><b>Property Nex</b> is a clickable POC of a real-estate data marketplace. It covers partner analysis, a data pipeline, a dataset module, a buyer marketplace and partner revenue share.</li>
<li><b>Nexus</b> is being built as a working prototype of an agentic control plane.</li>
</ul>`,
    links: [['Property Nex POC', 'work/property-nex.html']],
    follow: ['What is Property Nex?', 'What is Nexus?'],
  },
  {
    id: 'stack',
    title: 'Tech stack',
    keys: ['stack', 'tech stack', 'technologies', 'tools', 'tech', 'technology', 'platforms used', 'toolkit', 'skills', 'python', 'sql', 'programming', 'languages', 'tableau', 'coding skills'],
    ask: ['What is his tech stack?', 'What tools does he use?'],
    answer: `<ul>
<li><b>Models &amp; AI:</b> Anthropic Claude API, GPT-4o / OpenAI API, Google Gemini, RAG, multi-agent systems</li>
<li><b>Voice, chat &amp; generative media:</b> Retell AI, VAPI, ElevenLabs, Dify, Higgsfield, Gemini and OpenAI image models</li>
<li><b>Orchestration:</b> n8n (advanced), Make.com, Zapier, webhooks, REST APIs</li>
<li><b>Cloud &amp; data:</b> AWS (EC2, S3, RDS), Google Cloud, Vercel, Supabase, SQL, Python, Tableau</li>
<li><b>Business systems:</b> Salesforce, Zoho CRM, Odoo ERP, Shopify, Apollo.io, Apify, Tavily</li>
<li><b>Build tooling:</b> Antigravity IDE, Cursor, Claude Code, Windsurf, Lovable, GitHub CI/CD, 21st.dev</li>
</ul>`,
    links: [['Tech stack', 'index.html#stack']],
    follow: ['Which AI coding tools does he use?', 'What LLMs does he use?'],
  },
  {
    id: 'llms',
    title: 'LLMs and models',
    keys: ['llm', 'llms', 'model', 'models', 'claude', 'gpt', 'gpt-4o', 'openai', 'gemini', 'anthropic', 'which ai'],
    ask: ['What LLMs does he use?', 'Does he use Claude?'],
    answer: `<p>His production systems use <b>Anthropic Claude</b> and <b>OpenAI GPT-4o</b>, with <b>Google Gemini</b> as well. He picks the model per task inside orchestrated workflows (n8n), rather than using one model for everything.</p>
<p>For image generation he uses <b>Higgsfield</b> and the <b>Gemini and OpenAI image models</b>. All the imagery on the AI-native corporate website was generated that way. He holds Anthropic’s <b>Claude 101</b> and <b>Claude Platform 101</b> certificates.</p>`,
    links: [['Certifications', 'index.html#certifications']],
    follow: ['Which AI coding tools does he use?', 'What certifications does he have?'],
  },
  {
    id: 'ide',
    title: 'AI coding tools',
    keys: ['ide', 'coding', 'cursor', 'windsurf', 'antigravity', 'claude code', 'lovable', 'vibe coding', 'vibe coded', 'developer tools', 'code'],
    ask: ['Which AI coding tools does he use?', 'Does he use Cursor?'],
    answer: `<p>He builds with AI-assisted development tools day to day:</p>
<ul>
<li><b>Antigravity IDE</b> and <b>Cursor</b> are his main IDEs, and he also knows <b>Windsurf</b></li>
<li><b>Claude Code</b> for building production systems. The RFQ platform, CAT AI and Nexus were built with it.</li>
<li><b>Lovable</b> for vibe coding. The AI-native corporate website was built in Lovable, on Supabase and Vercel.</li>
<li><b>21st.dev</b> components for UI (CAT AI)</li>
</ul>`,
    links: [['Corporate website', 'work/corporate-site.html'], ['CAT AI', 'work/cat-ai.html']],
    follow: ['What is his tech stack?', 'What is CAT AI?'],
  },
  {
    id: 'cloud',
    title: 'Cloud and data',
    keys: ['cloud', 'aws', 'google cloud', 'gcp', 'vercel', 'supabase', 'database', 'infrastructure', 'deployment', 'devops', 'eventbridge'],
    ask: ['Does he know AWS?', 'What cloud does he use?'],
    answer: `<p>He deploys on <b>AWS</b> (EC2, S3, RDS and managed services) and <b>Google Cloud</b>, with <b>Vercel</b> for web apps and <b>Supabase</b> as the shared data layer.</p>
<ul>
<li>The RFQ &amp; Pricing Platform runs in AWS production.</li>
<li>The AI platform spans four regional domains on a unified Supabase backend, with n8n as the integration middleware.</li>
<li>Nexus is designed around <b>AWS EventBridge</b> as the central integration hub.</li>
</ul>`,
    links: [['RFQ & Pricing Platform', 'work/rfq-platform.html']],
    follow: ['Why a shared data layer?', 'What is Nexus?'],
  },
  {
    id: 'data-layer',
    title: 'Single source of truth',
    keys: ['data layer', 'single source of truth', 'data model', 'canonical', 'architecture principle', 'data architecture', 'shared data', 'master data'],
    ask: ['Why a shared data layer?', 'How does he approach data architecture?'],
    answer: `<p>A recurring principle in his architecture is to <b>build the single source of truth first</b>.</p>
<ul>
<li>An ecosystem review he led showed that disconnected agents without a shared source of truth <b>cascade into failures</b>. So the 7-system ecosystem was built on one Supabase layer, with n8n orchestrating all seven systems and voice, chat and RAG reading the same lead record.</li>
<li>In the RFQ platform, the <b>canonical data model</b> (36 sub-categories, 50 spec fields, ~7,900 SKUs) came first, so pricing and approvals sit on stable data instead of being hard-coded per SKU.</li>
<li>Nexus uses the CRM as the system of record, synced both ways with every platform.</li>
</ul>`,
    links: [['RFQ & Pricing Platform', 'work/rfq-platform.html']],
    follow: ['Tell me about the RFQ platform', 'Has he built AI agents?'],
  },
  {
    id: 'domains',
    title: 'Industries',
    keys: ['industries', 'industry', 'domain', 'domains', 'sectors', 'logistics', 'supply chain', 'ecommerce', 'packaging', 'procurement', 'retail'],
    ask: ['Which industries has he worked in?', 'Does he know logistics?'],
    answer: `<p>His domain experience covers <b>logistics and supply chain</b>, <b>packaging and procurement</b>, <b>retail and eCommerce</b>, <b>B2B SaaS</b>, manufacturing and industrial procurement, <b>cross-border trade</b>, financial operations (order-to-cash, DSO reduction) and regulated-market compliance (EPR, ESG).</p>
<p>Examples: international logistics markets at DTDC, a cross-border eCommerce SaaS at Whitley Ecom, a B2B packaging and procurement platform today, and a D2C brand (Avar Earth).</p>`,
    links: [['Experience', 'index.html#experience']],
    follow: ['What is his total experience?', 'Has he led teams?'],
  },
  {
    id: 'leadership',
    title: 'Leadership',
    keys: ['team', 'teams', 'lead', 'leadership', 'manage', 'managed', 'mentor', 'people', 'engineers', 'vendor', 'stakeholders', 'p&l'],
    ask: ['Has he led teams?', 'What leadership experience does he have?'],
    answer: `<ul>
<li>Led cross-functional and vendor engineering teams of <b>up to 11 engineers</b>, including an 11-agent external vendor engineering programme</li>
<li>Owned <b>USD 3M–5M P&amp;L</b>; at DTDC, a USD 3M international P&amp;L with 20% year-over-year profit growth</li>
<li>Scaled revenue <b>10x</b> (USD 500K to USD 5M) as co-founder of Whitley Ecom</li>
<li>Drove market entry across <b>25 countries</b> and delivered go-to-market for 3 new international markets in 2026</li>
<li>Runs discovery and C-suite conversations directly with client executives</li>
</ul>`,
    links: [['Experience', 'index.html#experience']],
    follow: ['What are his biggest achievements?', 'What does he do at Avar Systems?'],
  },
  {
    id: 'fde',
    title: 'Forward Deployed Engineer',
    keys: ['forward deployed', 'fde', 'solutions architect', 'client facing', 'pre-sales', 'presales', 'consulting', 'customer facing'],
    ask: ['Why is he a Forward Deployed Engineer?', 'Is he client-facing?'],
    answer: `<p>He works the way a Forward Deployed Engineer does: embedded with the business, close to the problem, and hands-on through to production.</p>
<ul>
<li>Runs discovery with commercial, procurement and marketing stakeholders himself</li>
<li>Designs the architecture and builds with the team (Claude Code, Cursor, Antigravity)</li>
<li>Ships to production and hands over, so client teams can run what he built</li>
<li>Owns pre-sales and solutioning, including scoping, SOWs and commercials, at Avar Systems</li>
</ul>`,
    links: [['How I work', 'index.html#approach']],
    follow: ['How does he work?', 'What does he do at Avar Systems?'],
  },
  {
    id: 'location',
    title: 'Location',
    keys: ['location', 'based', 'where', 'country', 'city', 'singapore', 'relocate', 'located'],
    ask: ['Where is he based?'],
    answer: `<p>Abhishek is based in <b>Singapore</b> and has worked across APAC, the Middle East and the UK. He is looking for Senior AI Solutions Architect / Forward Deployed Engineer roles delivering enterprise AI transformation in Singapore.</p>`,
    links: [['Contact', 'index.html#contact']],
    follow: ['How can I contact him?', 'What role is he looking for?'],
  },
  {
    id: 'looking',
    title: 'What he is looking for',
    keys: ['looking for', 'open to', 'hire', 'hiring', 'available', 'availability', 'opportunity', 'next role', 'job search', 'interested', 'salary', 'compensation', 'notice period', 'notice', 'expected salary', 'package', 'ctc'],
    ask: ['What role is he looking for?', 'Is he open to opportunities?'],
    answer: `<p>He is looking for <b>Senior AI Solutions Architect / Forward Deployed Engineer</b> roles delivering enterprise AI transformation programmes for consulting and enterprise clients in <b>Singapore</b>.</p>
<p>For availability, notice period or anything contractual, it’s best to ask him directly.</p>`,
    links: [['Contact', 'index.html#contact']],
    follow: ['How can I contact him?', 'What are his biggest achievements?'],
  },
  {
    id: 'contact',
    title: 'Contact',
    keys: ['contact', 'email', 'reach', 'linkedin', 'get in touch', 'phone', 'call him', 'message', 'hire him'],
    ask: ['How can I contact him?', 'What is his email?'],
    answer: `<p>The best ways to reach Abhishek:</p>
<ul>
<li>Email: <a href="mailto:abhishek87@live.in">abhishek87@live.in</a></li>
<li>LinkedIn: <a href="https://linkedin.com/in/abhishek-sharma" target="_blank" rel="noopener">linkedin.com/in/abhishek-sharma</a></li>
</ul>`,
    links: [],
    follow: ['What role is he looking for?', 'Who is Abhishek?'],
  },
  {
    id: 'education',
    title: 'Education',
    keys: ['education', 'degree', 'university', 'studied', 'qualification', 'masters', 'bachelor', 'diploma', 'academic'],
    ask: ['What is his education?'],
    answer: `<ul>
<li><b>Diploma in Data Science</b>, Steinbeis Akademie, Germany (2022)</li>
<li><b>Master of Arts, Marketing</b>, University of Bedfordshire, UK (2010)</li>
<li><b>Bachelor of Arts (Honours), Economics</b>, University of Delhi, India (2009)</li>
</ul>`,
    links: [['Education', 'index.html#education']],
    follow: ['What certifications does he have?', 'What is his total experience?'],
  },
  {
    id: 'certs',
    title: 'Certifications',
    keys: ['certification', 'certifications', 'certified', 'certificate', 'certificates', 'courses', 'credentials', 'coursera', 'udemy', 'google certificate'],
    ask: ['What certifications does he have?', 'Is he certified?'],
    answer: `<ul>
<li><b>AI &amp; ML:</b> Claude Platform 101 and Claude 101 (Anthropic); Generative AI Sprint, AI Generalist Accelerator (Outskill, 2025); Machine Learning A–Z (Udemy, 2025); Machine Learning with Python (IBM Cognitive Class, 2022)</li>
<li><b>Data:</b> Google Data Analytics Professional Certificate (2021); Tableau Data Analyst / Specialist (2022)</li>
<li><b>Security:</b> Google Cybersecurity Professional Certificate (2023); Cyber Security: Beginner to Expert (2023)</li>
</ul>`,
    links: [['Certifications', 'index.html#certifications']],
    follow: ['What is his education?', 'What LLMs does he use?'],
  },
  {
    id: 'governance',
    title: 'Responsible AI',
    keys: ['governance', 'responsible ai', 'safety', 'human in the loop', 'guardrails', 'risk', 'compliance', 'approval', 'oversight', 'security'],
    ask: ['How does he handle AI governance?', 'Does he use human-in-the-loop?'],
    answer: `<p>Guardrails are designed in, not added later:</p>
<ul>
<li>Outbound-facing systems launched with <b>human-in-the-loop review</b> before autonomous send, and the C-suite outreach pipeline runs on a draft-for-review model.</li>
<li>In CAT AI, a person must approve before any vendor is contacted, and scores come with an explainable “why this score” trail.</li>
<li>Avar Genie’s autopilot works within owner-set autonomy levels, spend and posting caps, and an escalation contact.</li>
<li>Nexus puts every agent behind switches and a single kill switch.</li>
</ul>
<p>He also holds the Google Cybersecurity Professional Certificate.</p>`,
    links: [['CAT AI', 'work/cat-ai.html'], ['Nexus', 'work/nexus.html']],
    follow: ['What is Nexus?', 'Has he built AI agents?'],
  },
  {
    id: 'automation',
    title: 'Automation and n8n',
    keys: ['n8n', 'automation', 'workflow', 'workflows', 'make.com', 'zapier', 'integration', 'integrations', 'pipeline', 'erp', 'crm'],
    ask: ['Does he know n8n?', 'What automation has he built?'],
    answer: `<p>He is an advanced <b>n8n</b> practitioner and uses it as the orchestration layer across his systems:</p>
<ul>
<li>n8n orchestrates all seven systems in the AI ecosystem, so logic changes are made once, centrally</li>
<li>Integration middleware across four regional domains on a unified Supabase backend</li>
<li>At Avar Earth, an n8n layer syncs Odoo ERP finance reconciliation, inventory, social publishing and email triage (40% less admin work)</li>
<li>An outbound pipeline with Apollo.io, Apify and Tavily that sends 10 personalised C-suite emails a day across 25+ countries</li>
</ul>
<p>He also works with Make.com and Zapier, and integrates Salesforce, Zoho CRM, Odoo ERP and Shopify.</p>`,
    links: [['Tech stack', 'index.html#stack']],
    follow: ['Has he built AI agents?', 'What is Avar Earth?'],
  },
  {
    id: 'anonymised',
    title: 'Screenshots and Northwind',
    keys: ['northwind', 'screenshots', 'real', 'masked', 'anonymised', 'anonymized', 'confidential', 'data privacy', 'x values', 'why x', 'fictional'],
    ask: ['Are the screenshots real?', 'What is Northwind?'],
    answer: `<p>The case-study screenshots are <b>live captures of real production systems</b>.</p>
<p>To protect the business, the employer is shown under a fictional brand, <b>Northwind Logistics</b>. Business figures are masked with “X”, and company and staff names are swapped for labels like “Client 01” or “Sales Rep A”. This was all done in the page itself before capture, with nothing cropped or blurred afterwards.</p>
<p>The exception is <b>Property Nex</b>, a proof of concept that uses illustrative sample data.</p>`,
    links: [['Selected work', 'index.html#work']],
    follow: ['What has he built?', 'What is Property Nex?'],
  },
  {
    id: 'gtm',
    title: 'Market expansion',
    keys: ['market entry', 'expansion', 'international', 'gtm', 'go to market', 'countries', 'asean', 'business development', 'growth', 'revenue'],
    ask: ['Has he done market expansion?', 'What business experience does he have?'],
    answer: `<ul>
<li>Built the <b>ASEAN market-entry strategy</b> (Singapore hub, Johor spoke) and delivered go-to-market for <b>3 new international markets</b> in 2026</li>
<li>Scaled a cross-border eCommerce SaaS from USD 500K to USD 5M in annual revenue (<b>10x</b>) over 5 years, across 25+ countries</li>
<li>At DTDC, scaled the active country footprint from <b>12 to 25</b> with a USD 3M P&amp;L</li>
<li>Advised international firms on Singapore and APAC market entry</li>
</ul>`,
    links: [['Experience', 'index.html#experience']],
    follow: ['Has he led teams?', 'What is his total experience?'],
  },
  {
    id: 'hello',
    title: 'Hello',
    keys: ['hi', 'hello', 'hey', 'help', 'what can you do'],
    ask: ['Hi', 'What can I ask?'],
    answer: `<p>Hi! I answer questions about Abhishek’s experience, projects, skills and results, using only what’s in this portfolio. Try one of the suggestions below.</p>`,
    links: [],
    follow: ['What is his total experience?', 'What has he built?', 'What is his tech stack?'],
  },
];

// Named things a visitor may mention directly; a mention strongly boosts that entry.
export const aliases = {
  'rfq-platform': ['rfq', 'quote', 'quoting', 'pricing platform', 'q-bot', 'qbot', 'markup', 'approvals', 'sku', 'quotation'],
  'markai': ['markai', 'mark ai', '7 system', '7-system', 'seven systems', 'ecosystem', 'marketing platform', 'social studio', 'autopilot'],
  'cat-ai': ['cat ai', 'catai', 'category intelligence', 'category', 'vendor verification', 'sourcing', 'demand intelligence'],
  'corporate-site': ['website', 'corporate site', 'corporate website', 'cognitive navigator'],
  'nexus': ['nexus', 'control plane', 'kill switch', 'command center', 'eventbridge'],
  'property-nex': ['property nex', 'property', 'real estate', 'real-estate', 'data marketplace', 'property data'],
  'avar-genie': ['avar genie', 'genie', 'ai marketing', 'ads', 'social media', 'brand dna'],
  'avar-systems': ['avar systems', 'consulting', 'consultant', 'development firm', 'clients'],
  'avar-earth': ['avar earth', 'd2c', 'vegan', 'footwear', 'shoes', 'shopify store'],
};
