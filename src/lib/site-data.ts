export const services = [
  {
    id: "shopify",
    number: "01",
    title: "Shopify Stores",
    tagline: "Commerce that converts on the first scroll.",
    description:
      "Custom Shopify builds, theme engineering, and speed work for brands that treat their storefront as their primary sales floor.",
    deliverables: [
      "Custom theme development",
      "Product page conversion design",
      "App integrations & Shopify Functions",
      "Checkout & upsell flows",
      "Core Web Vitals speed pass",
    ],
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "websites",
    number: "02",
    title: "Website Creation",
    tagline: "Professional websites designed to strengthen your online presence.",
    description:
      "Editorial company sites, service pages, and campaign landings engineered for SEO, performance, and clean CMS handover.",
    deliverables: [
      "Design systems in Figma",
      "Headless CMS (Sanity, Contentful)",
      "SEO structure & schema",
      "Copy direction",
      "Analytics & GTM setup",
    ],
    image:
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "redesign",
    number: "03",
    title: "Website Redesign",
    tagline: "Rebuild the story, keep the equity.",
    description:
      "UX audits, IA restructuring, and full visual rebuilds for products whose website no longer matches the company behind it.",
    deliverables: [
      "UX audit & heuristic review",
      "Before / after prototypes",
      "Component library refresh",
      "Migration playbook",
      "Conversion instrumentation",
    ],
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "integrations",
    number: "04",
    title: "Custom Integrations",
    tagline: "Plug the tools that already run the business.",
    description:
      "API work, CRM plumbing, payment stacks, and internal dashboards that turn scattered SaaS into a single operational surface.",
    deliverables: [
      "REST & GraphQL API layers",
      "HubSpot / Salesforce / Pipedrive",
      "Stripe, Adyen, Mollie",
      "Internal admin dashboards",
      "Webhook & queue architecture",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "automation",
    number: "05",
    title: "Workflow Automation",
    tagline: "Ship the ops team a week back.",
    description:
      "n8n, Zapier, and Make workflows built like software — versioned, monitored, and documented for teams that need reliability, not toys.",
    deliverables: [
      "n8n self-hosted workflows",
      "Lead routing & enrichment",
      "Ecommerce ops automations",
      "Slack + email orchestration",
      "Monitoring & failure alerts",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "ai",
    number: "06",
    title: "AI Solutions",
    tagline: "Applied AI, not demo-ware.",
    description:
      "Chat, agents, and RAG systems shipped as product features — grounded in your data, wired to your tools, and measured against real KPIs.",
    deliverables: [
      "Retrieval-augmented chat",
      "Autonomous agents (LangGraph)",
      "Voice AI & telephony",
      "Copilot surfaces in-app",
      "Evaluation & guardrails",
    ],
    image:
      "https://images.unsplash.com/photo-1677756119517-756a188d2d94?auto=format&fit=crop&w=1600&q=80",
  },
] as const;

export type Service = (typeof services)[number];

export const projects = [
  {
    slug: "atelier-furniture",
    title: "Atelier Nord",
    client: "Atelier Nord",
    industry: "Furniture · Shopify",
    category: "Shopify",
    year: "2025",
    result: "+64% conversion",
    cover:
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1800&q=80",
    hover:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1800&q=80",
    services: ["Shopify Development", "Conversion Design", "Speed"],
    challenge:
      "A Scandinavian furniture maker with strong showroom traffic and a website that undersold them. Product pages were static, the checkout was breaking on mobile, and the brand story never made it past the homepage.",
    strategy:
      "Rebuilt the storefront on a custom Shopify 2.0 theme with editorial product pages, in-context configurators, and a checkout tuned for their AOV. Reworked photography direction with their in-house team.",
    stack: ["Shopify 2.0", "Hydrogen", "Sanity", "Klaviyo"],
    duration: "12 weeks",
    testimonial: {
      quote:
        "The site finally feels like the showroom. We doubled our online revenue in the first quarter after launch.",
      name: "Ida Halvorsen",
      role: "Head of E-commerce, Atelier Nord",
    },
    metrics: [
      { k: "+64%", v: "Add-to-cart rate" },
      { k: "2.1×", v: "Online revenue" },
      { k: "0.9s", v: "LCP mobile" },
    ],
    featured: true,
  },
  {
    slug: "lumen-beauty",
    title: "Lumen Beauty",
    client: "Lumen",
    industry: "Beauty · Shopify",
    category: "Shopify",
    year: "2025",
    result: "+38% AOV",
    cover:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&q=80",
    hover:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1800&q=80",
    services: ["Shopify", "Subscriptions", "CRO"],
    challenge:
      "A DTC skincare brand growing on paid social but leaking margin at checkout. Subscription attach rate was flat.",
    strategy:
      "Rebuilt the PDP with a subscription-first frame, moved reviews above the fold, and added a bundle builder that cross-sells based on skin quiz results.",
    stack: ["Shopify", "Recharge", "Klaviyo", "Next.js"],
    duration: "9 weeks",
    testimonial: {
      quote: "The bundle builder alone paid for the project in the first month.",
      name: "Priya Menon",
      role: "Founder, Lumen",
    },
    metrics: [
      { k: "+38%", v: "AOV" },
      { k: "+52%", v: "Subscription attach" },
      { k: "-31%", v: "Cost per acquisition" },
    ],
    featured: false,
  },
  {
    slug: "northgate-group",
    title: "Northgate Group",
    client: "Northgate Holdings",
    industry: "Corporate · Website",
    category: "Business Websites",
    year: "2024",
    result: "3× inbound leads",
    cover:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
    hover:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1800&q=80",
    services: ["Website", "CMS", "SEO"],
    challenge:
      "A holdings group with six operating companies and a single legacy WordPress site nobody could edit.",
    strategy:
      "Multi-brand information architecture, a Sanity-driven CMS the comms team actually uses, and a design system that scales across each subsidiary.",
    stack: ["Next.js", "Sanity", "Vercel", "Algolia"],
    duration: "16 weeks",
    testimonial: {
      quote: "First website in a decade our leadership team is proud to send around.",
      name: "Marcus Weill",
      role: "CMO, Northgate",
    },
    metrics: [
      { k: "3×", v: "Inbound leads" },
      { k: "6", v: "Brands unified" },
      { k: "98", v: "Lighthouse" },
    ],
    featured: true,
  },
  {
    slug: "reva-hire",
    title: "Reva Hire",
    client: "Reva",
    industry: "HR Tech · AI",
    category: "AI",
    year: "2025",
    result: "72% screening time saved",
    cover:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1800&q=80",
    hover:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80",
    services: ["AI Agents", "Product Design", "Integrations"],
    challenge:
      "An early-stage recruiting platform buried under manual candidate screening. Recruiters were spending hours per role on first-pass filtering.",
    strategy:
      "Built a RAG-backed screening agent that reads job specs, ranks candidates against them, and drafts intro emails — with a human review surface in the recruiter dashboard.",
    stack: ["Next.js", "LangGraph", "Pinecone", "OpenAI"],
    duration: "14 weeks",
    testimonial: {
      quote: "Recruiters are running three times the pipeline with the same team.",
      name: "Jonas Elm",
      role: "CTO, Reva",
    },
    metrics: [
      { k: "72%", v: "Screening time saved" },
      { k: "3×", v: "Pipeline per recruiter" },
      { k: "94%", v: "Ranking agreement" },
    ],
    featured: true,
  },
  {
    slug: "cleanhaus",
    title: "Cleanhaus",
    client: "Cleanhaus Services",
    industry: "Services · Website",
    category: "Business Websites",
    year: "2024",
    result: "+180% booking rate",
    cover:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=80",
    hover:
      "https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?auto=format&fit=crop&w=1800&q=80",
    services: ["Website", "Booking", "SEO"],
    challenge:
      "A residential cleaning company relying on phone calls and a Squarespace booking form nobody finished.",
    strategy:
      "Instant-quote flow with postcode pricing, calendar integration, and a local SEO push that turned the site into a lead engine.",
    stack: ["Next.js", "Sanity", "Cal.com", "Stripe"],
    duration: "7 weeks",
    testimonial: {
      quote: "We stopped answering the phone to book jobs. That alone is worth it.",
      name: "Diana Faye",
      role: "Owner, Cleanhaus",
    },
    metrics: [
      { k: "+180%", v: "Online bookings" },
      { k: "-70%", v: "Booking abandonment" },
      { k: "#1", v: "Local SEO" },
    ],
    featured: false,
  },
  {
    slug: "medisync",
    title: "MediSync",
    client: "MediSync Health",
    industry: "Healthcare · Automation",
    category: "Automation",
    year: "2025",
    result: "14h saved per clinic weekly",
    cover:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=80",
    hover:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=80",
    services: ["Automation", "Integrations", "Dashboard"],
    challenge:
      "A network of clinics reconciling appointments, insurance, and follow-ups across four disconnected systems.",
    strategy:
      "n8n workflows syncing scheduling, insurance verification, and patient reminders, with a single dashboard for practice managers to see the health of each queue.",
    stack: ["n8n", "Postgres", "Twilio", "Retool"],
    duration: "10 weeks",
    testimonial: {
      quote: "Our front desks got a full day per week back. That's a full-time hire we didn't need.",
      name: "Dr. Aline Costa",
      role: "COO, MediSync",
    },
    metrics: [
      { k: "14h", v: "Saved / clinic / week" },
      { k: "-63%", v: "No-shows" },
      { k: "99.7%", v: "Sync reliability" },
    ],
    featured: false,
  },
  {
    slug: "quorum-lead",
    title: "Quorum Lead",
    client: "Quorum",
    industry: "SaaS · AI",
    category: "AI",
    year: "2025",
    result: "5× qualified meetings",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80",
    hover:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80",
    services: ["AI", "CRM", "Automation"],
    challenge:
      "A B2B SaaS drowning in unqualified inbound. SDRs spent most of their day disqualifying, not selling.",
    strategy:
      "Voice + chat AI that qualifies leads against ICP, books meetings, and hands warm context to the AE in HubSpot.",
    stack: ["Next.js", "Vapi", "HubSpot", "OpenAI"],
    duration: "11 weeks",
    testimonial: {
      quote: "Our SDRs stopped triaging inbound and started actually selling.",
      name: "Ravi Shankar",
      role: "VP Sales, Quorum",
    },
    metrics: [
      { k: "5×", v: "Qualified meetings" },
      { k: "-82%", v: "Response time" },
      { k: "24/7", v: "Coverage" },
    ],
    featured: false,
  },
  {
    slug: "forma-configurator",
    title: "Forma Configurator",
    client: "Forma Objects",
    industry: "Product · Integrations",
    category: "Integrations",
    year: "2024",
    result: "+41% average order value",
    cover:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80",
    hover:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1800&q=80",
    services: ["Configurator", "Integrations", "3D"],
    challenge:
      "A modular furniture brand whose configurator lived in a spreadsheet and a 40-page PDF.",
    strategy:
      "Real-time product configurator with live pricing, ERP inventory checks, and an order handoff into their production system.",
    stack: ["React", "Three.js", "SAP", "Node"],
    duration: "18 weeks",
    testimonial: {
      quote: "Customers finally understand what they're buying — and they're buying more of it.",
      name: "Karim El-Sayed",
      role: "Product Director, Forma",
    },
    metrics: [
      { k: "+41%", v: "AOV" },
      { k: "-58%", v: "Sales cycle" },
      { k: "0", v: "Config errors in prod" },
    ],
    featured: false,
  },
] as const;

export type Project = (typeof projects)[number];

export const testimonials = [
  {
    quote:
      "They rebuilt our storefront in nine weeks and doubled our online revenue in the first quarter after launch. Communication was flawless throughout.",
    name: "Ida Halvorsen",
    role: "Head of E-commerce",
    company: "Atelier Nord",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    tag: "Shopify",
    rating: "+64% conversion",
  },
  {
    quote:
      "The bundle builder alone paid for the project in the first month. This is the first agency that treated our roadmap like theirs.",
    name: "Priya Menon",
    role: "Founder",
    company: "Lumen",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    tag: "Beauty",
    rating: "+38% AOV",
  },
  {
    quote:
      "First website in a decade our leadership team is proud to send around. The CMS is the first one our comms team hasn't complained about.",
    name: "Marcus Weill",
    role: "CMO",
    company: "Northgate Holdings",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    tag: "Corporate",
    rating: "3× inbound",
  },
  {
    quote:
      "Their AI agent is doing the work of two full-time recruiters. Rollout was calm, measurable, and completely on schedule.",
    name: "Jonas Elm",
    role: "CTO",
    company: "Reva",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
    tag: "AI",
    rating: "72% time saved",
  },
  {
    quote:
      "Our front desks got a full day per week back. That's a full-time hire we didn't have to make.",
    name: "Dr. Aline Costa",
    role: "COO",
    company: "MediSync",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    tag: "Automation",
    rating: "14h / week saved",
  },
  {
    quote:
      "SDRs stopped triaging inbound and started actually selling. The voice AI sounds better than most humans on a Monday.",
    name: "Ravi Shankar",
    role: "VP Sales",
    company: "Quorum",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    tag: "AI",
    rating: "5× meetings",
  },
];

export const team = [
  {
    name: "Noor Rahimi",
    role: "Creative Director",
    bio: "Fifteen years across editorial and product. Runs design direction and pitches.",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Elias Meyer",
    role: "Technical Director",
    bio: "Ex-staff engineer. Owns architecture, delivery, and the standard for shippable work.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sana Okafor",
    role: "Head of Motion",
    bio: "Type, motion, and interaction. Makes the site behave like the pitch deck promised.",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Tomás Ferreira",
    role: "AI Engineering Lead",
    bio: "RAG, agents, evals. Ships AI as production software, not demos.",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Discovery",
    body: "Two weeks with your team. Interviews, analytics, competitor teardown, and a written brief we both sign off.",
  },
  {
    n: "02",
    title: "Strategy",
    body: "Positioning, information architecture, and a functional spec priced to the outcome, not the hour.",
  },
  {
    n: "03",
    title: "Design",
    body: "Design system first, then key screens. Two rounds of revision built into every phase.",
  },
  {
    n: "04",
    title: "Development",
    body: "Weekly staging, transparent Linear board, and code reviews on every PR. No black box.",
  },
  {
    n: "05",
    title: "Launch",
    body: "Content migration, QA, analytics, and a launch playbook your team can actually run.",
  },
  {
    n: "06",
    title: "Growth",
    body: "Ongoing partnership: quarterly roadmaps, experiments, and a retainer that scales with the product.",
  },
];
