import { useMemo } from "react";
import {
  services as servicesEn,
  projects as projectsEn,
  testimonials as testimonialsEn,
  team as teamEn,
  processSteps as processStepsEn,
  type Service,
  type Project,
} from "./site-data";
import { useT } from "./i18n";

/* ---------------- French translations ---------------- */

type ServiceTr = {
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
};

const servicesFr: Record<string, ServiceTr> = {
  shopify: {
    title: "Boutiques Shopify",
    tagline: "Du commerce qui convertit dès le premier scroll.",
    description:
      "Développements Shopify sur mesure, ingénierie de thèmes et travail sur la performance pour les marques qui font de leur boutique leur principale surface de vente.",
    deliverables: [
      "Développement de thème sur mesure",
      "Pages produit pensées pour la conversion",
      "Intégrations d'apps & Shopify Functions",
      "Tunnels d'achat et d'upsell",
      "Optimisation Core Web Vitals",
    ],
  },
  websites: {
    title: "Sites d'entreprise",
    tagline: "Une présence corporate qui inspire confiance.",
    description:
      "Sites d'entreprise éditoriaux, pages services et landings de campagne, pensés pour le SEO, la performance et une remise CMS propre.",
    deliverables: [
      "Systèmes de design sur Figma",
      "CMS headless (Sanity, Contentful)",
      "Structure SEO & schema",
      "Direction éditoriale",
      "Analytics & configuration GTM",
    ],
  },
  redesign: {
    title: "Refonte de site",
    tagline: "Réécrire l'histoire, préserver l'équité.",
    description:
      "Audits UX, restructuration de l'IA et refontes visuelles complètes pour les produits dont le site ne reflète plus l'entreprise.",
    deliverables: [
      "Audit UX & revue heuristique",
      "Prototypes avant / après",
      "Rafraîchissement du design system",
      "Playbook de migration",
      "Instrumentation de conversion",
    ],
  },
  integrations: {
    title: "Intégrations sur mesure",
    tagline: "Connecter les outils qui font tourner l'entreprise.",
    description:
      "API, plomberie CRM, stacks de paiement et dashboards internes qui transforment vos SaaS dispersés en une surface opérationnelle unique.",
    deliverables: [
      "Couches API REST & GraphQL",
      "HubSpot / Salesforce / Pipedrive",
      "Stripe, Adyen, Mollie",
      "Dashboards d'administration internes",
      "Architecture webhooks & files d'attente",
    ],
  },
  automation: {
    title: "Automatisation de workflows",
    tagline: "Redonner une semaine à vos équipes ops.",
    description:
      "Workflows n8n, Zapier et Make construits comme du logiciel — versionnés, monitorés et documentés, pour des équipes qui ont besoin de fiabilité.",
    deliverables: [
      "Workflows n8n auto-hébergés",
      "Routage & enrichissement de leads",
      "Automatisations e-commerce",
      "Orchestration Slack & email",
      "Monitoring & alertes",
    ],
  },
  ai: {
    title: "Solutions IA",
    tagline: "De l'IA appliquée, pas des démos.",
    description:
      "Chats, agents et systèmes RAG livrés comme des fonctionnalités produit — ancrés dans vos données, connectés à vos outils et mesurés sur de vrais KPIs.",
    deliverables: [
      "Chat augmenté par la recherche (RAG)",
      "Agents autonomes (LangGraph)",
      "IA vocale & téléphonie",
      "Surfaces copilot in-app",
      "Évaluation & garde-fous",
    ],
  },
};

type ProjectTr = {
  title: string;
  industry: string;
  result: string;
  services: string[];
  challenge: string;
  strategy: string;
  duration: string;
  testimonial: { quote: string; name: string; role: string };
  metrics: { k: string; v: string }[];
};

const projectsFr: Record<string, ProjectTr> = {
  "atelier-furniture": {
    title: "Atelier Nord",
    industry: "Mobilier · Shopify",
    result: "+64 % de conversion",
    services: ["Développement Shopify", "Design de conversion", "Performance"],
    challenge:
      "Un fabricant de mobilier scandinave avec un fort trafic en showroom et un site qui le desservait. Fiches produit statiques, checkout cassé sur mobile, histoire de marque coupée dès la home.",
    strategy:
      "Refonte de la boutique sur un thème Shopify 2.0 sur mesure avec des fiches produit éditoriales, des configurateurs contextuels et un checkout optimisé pour leur panier moyen. Reprise de la direction photo avec leur équipe interne.",
    duration: "12 semaines",
    testimonial: {
      quote:
        "Le site ressemble enfin au showroom. Nous avons doublé notre chiffre d'affaires en ligne le premier trimestre après le lancement.",
      name: "Ida Halvorsen",
      role: "Responsable E-commerce, Atelier Nord",
    },
    metrics: [
      { k: "+64 %", v: "Taux d'ajout au panier" },
      { k: "2,1×", v: "Chiffre d'affaires en ligne" },
      { k: "0,9 s", v: "LCP mobile" },
    ],
  },
  "lumen-beauty": {
    title: "Lumen Beauty",
    industry: "Beauté · Shopify",
    result: "+38 % de panier moyen",
    services: ["Shopify", "Abonnements", "CRO"],
    challenge:
      "Une marque de skincare DTC qui grossit sur les réseaux payants mais perd de la marge au checkout. Le taux d'attachement des abonnements plafonnait.",
    strategy:
      "Refonte de la fiche produit orientée abonnement, avis remontés au-dessus de la ligne de flottaison, et bundle builder qui cross-sell selon le résultat du quiz peau.",
    duration: "9 semaines",
    testimonial: {
      quote:
        "Le bundle builder à lui seul a remboursé le projet dès le premier mois.",
      name: "Priya Menon",
      role: "Fondatrice, Lumen",
    },
    metrics: [
      { k: "+38 %", v: "Panier moyen" },
      { k: "+52 %", v: "Attachement abonnement" },
      { k: "-31 %", v: "Coût d'acquisition" },
    ],
  },
  "northgate-group": {
    title: "Northgate Group",
    industry: "Corporate · Site web",
    result: "3× de leads entrants",
    services: ["Site web", "CMS", "SEO"],
    challenge:
      "Un groupe holding avec six sociétés opérationnelles et un unique site WordPress hérité que personne ne pouvait éditer.",
    strategy:
      "Architecture d'information multi-marques, CMS Sanity que l'équipe com utilise vraiment, et un design system qui passe à l'échelle sur chaque filiale.",
    duration: "16 semaines",
    testimonial: {
      quote:
        "Le premier site en une décennie que notre direction est fière de partager.",
      name: "Marcus Weill",
      role: "CMO, Northgate",
    },
    metrics: [
      { k: "3×", v: "Leads entrants" },
      { k: "6", v: "Marques unifiées" },
      { k: "98", v: "Score Lighthouse" },
    ],
  },
  "reva-hire": {
    title: "Reva Hire",
    industry: "HR Tech · IA",
    result: "72 % de temps de tri gagné",
    services: ["Agents IA", "Design produit", "Intégrations"],
    challenge:
      "Une plateforme de recrutement early-stage submergée par le tri manuel des candidats. Les recruteurs passaient des heures par poste sur le premier filtrage.",
    strategy:
      "Agent de screening basé sur du RAG qui lit les fiches de poste, classe les candidats et rédige des emails d'intro — avec une surface de revue humaine dans le dashboard recruteur.",
    duration: "14 semaines",
    testimonial: {
      quote:
        "Les recruteurs traitent trois fois plus de pipeline à effectif égal.",
      name: "Jonas Elm",
      role: "CTO, Reva",
    },
    metrics: [
      { k: "72 %", v: "Temps de tri gagné" },
      { k: "3×", v: "Pipeline par recruteur" },
      { k: "94 %", v: "Accord de classement" },
    ],
  },
  cleanhaus: {
    title: "Cleanhaus",
    industry: "Services · Site web",
    result: "+180 % de réservations",
    services: ["Site web", "Réservation", "SEO"],
    challenge:
      "Une entreprise de ménage résidentiel dépendant du téléphone et d'un formulaire de réservation Squarespace jamais complété.",
    strategy:
      "Devis instantané avec tarification par code postal, intégration calendrier, et un travail de SEO local qui a transformé le site en machine à leads.",
    duration: "7 semaines",
    testimonial: {
      quote:
        "Nous ne prenons plus les réservations au téléphone. Rien que ça vaut le coup.",
      name: "Diana Faye",
      role: "Fondatrice, Cleanhaus",
    },
    metrics: [
      { k: "+180 %", v: "Réservations en ligne" },
      { k: "-70 %", v: "Abandon de réservation" },
      { k: "#1", v: "SEO local" },
    ],
  },
  medisync: {
    title: "MediSync",
    industry: "Santé · Automatisation",
    result: "14 h gagnées par clinique et par semaine",
    services: ["Automatisation", "Intégrations", "Dashboard"],
    challenge:
      "Un réseau de cliniques qui réconciliait rendez-vous, assurance et suivis à travers quatre systèmes déconnectés.",
    strategy:
      "Workflows n8n synchronisant planning, vérification d'assurance et rappels patients, avec un dashboard unique pour piloter la santé de chaque file.",
    duration: "10 semaines",
    testimonial: {
      quote:
        "Nos accueils ont récupéré une journée entière par semaine. C'est un ETP en moins à recruter.",
      name: "Dr. Aline Costa",
      role: "COO, MediSync",
    },
    metrics: [
      { k: "14 h", v: "Gagnées / clinique / semaine" },
      { k: "-63 %", v: "Rendez-vous manqués" },
      { k: "99,7 %", v: "Fiabilité de synchro" },
    ],
  },
  "quorum-lead": {
    title: "Quorum Lead",
    industry: "SaaS · IA",
    result: "5× de rendez-vous qualifiés",
    services: ["IA", "CRM", "Automatisation"],
    challenge:
      "Un SaaS B2B noyé par des leads entrants non qualifiés. Les SDR passaient l'essentiel de leurs journées à disqualifier au lieu de vendre.",
    strategy:
      "IA voix + chat qui qualifie les leads sur l'ICP, réserve les rendez-vous et transmet un contexte chaud à l'AE dans HubSpot.",
    duration: "11 semaines",
    testimonial: {
      quote:
        "Nos SDR ont arrêté de trier l'inbound et ont commencé à vraiment vendre.",
      name: "Ravi Shankar",
      role: "VP Sales, Quorum",
    },
    metrics: [
      { k: "5×", v: "Rendez-vous qualifiés" },
      { k: "-82 %", v: "Temps de réponse" },
      { k: "24/7", v: "Couverture" },
    ],
  },
  "forma-configurator": {
    title: "Forma Configurator",
    industry: "Produit · Intégrations",
    result: "+41 % de panier moyen",
    services: ["Configurateur", "Intégrations", "3D"],
    challenge:
      "Une marque de mobilier modulaire dont le configurateur vivait dans un tableur et un PDF de 40 pages.",
    strategy:
      "Configurateur produit en temps réel avec tarification en direct, vérifications d'inventaire ERP et transmission de commande dans le système de production.",
    duration: "18 semaines",
    testimonial: {
      quote:
        "Les clients comprennent enfin ce qu'ils achètent — et ils en achètent plus.",
      name: "Karim El-Sayed",
      role: "Directeur Produit, Forma",
    },
    metrics: [
      { k: "+41 %", v: "Panier moyen" },
      { k: "-58 %", v: "Cycle de vente" },
      { k: "0", v: "Erreur de config en prod" },
    ],
  },
};

const categoryFr: Record<string, string> = {
  Shopify: "Shopify",
  "Business Websites": "Sites d'entreprise",
  AI: "IA",
  Automation: "Automatisation",
  Integrations: "Intégrations",
};

const testimonialsFr = [
  {
    quote:
      "Ils ont refait notre boutique en neuf semaines et doublé notre CA en ligne dès le premier trimestre. Communication irréprochable.",
    role: "Responsable E-commerce",
    tag: "Shopify",
    rating: "+64 % de conversion",
  },
  {
    quote:
      "Le bundle builder à lui seul a remboursé le projet dès le premier mois. Première agence à traiter notre roadmap comme la sienne.",
    role: "Fondatrice",
    tag: "Beauté",
    rating: "+38 % de panier moyen",
  },
  {
    quote:
      "Premier site en une décennie que notre direction est fière d'envoyer. Le CMS est le premier dont l'équipe com ne se plaint pas.",
    role: "CMO",
    tag: "Corporate",
    rating: "3× d'inbound",
  },
  {
    quote:
      "Leur agent IA fait le travail de deux recruteurs à temps plein. Déploiement calme, mesurable et parfaitement dans les temps.",
    role: "CTO",
    tag: "IA",
    rating: "72 % de temps gagné",
  },
  {
    quote:
      "Nos accueils ont récupéré une journée entière par semaine. C'est un ETP que nous n'avons pas eu à recruter.",
    role: "COO",
    tag: "Automatisation",
    rating: "14 h / semaine gagnées",
  },
  {
    quote:
      "Les SDR ont arrêté de trier l'inbound et se sont mis à vendre. La voix IA sonne mieux que la plupart des humains un lundi matin.",
    role: "VP Sales",
    tag: "IA",
    rating: "5× de rendez-vous",
  },
];

const teamFr = [
  {
    role: "Directrice de création",
    bio: "Quinze ans en éditorial et produit. Pilote la direction artistique et les pitchs.",
  },
  {
    role: "Directeur technique",
    bio: "Ex-staff engineer. En charge de l'architecture, de la livraison et du standard de qualité.",
  },
  {
    role: "Responsable Motion",
    bio: "Typographie, motion et interaction. Fait vivre le site comme le promettait la maquette.",
  },
  {
    role: "Lead ingénierie IA",
    bio: "RAG, agents, évaluations. Livre l'IA comme du logiciel de production, pas des démos.",
  },
];

const processStepsFr = [
  {
    title: "Découverte",
    body: "Deux semaines avec votre équipe. Entretiens, analytics, veille concurrentielle et brief écrit signé ensemble.",
  },
  {
    title: "Stratégie",
    body: "Positionnement, architecture d'information et spécifications fonctionnelles tarifées à l'objectif, pas à l'heure.",
  },
  {
    title: "Design",
    body: "Design system d'abord, puis les écrans clés. Deux tours de révision intégrés à chaque phase.",
  },
  {
    title: "Développement",
    body: "Staging hebdomadaire, board Linear transparent, revue de code sur chaque PR. Pas de boîte noire.",
  },
  {
    title: "Lancement",
    body: "Migration de contenu, QA, analytics et un playbook de lancement que votre équipe peut vraiment exécuter.",
  },
  {
    title: "Croissance",
    body: "Partenariat continu : roadmaps trimestrielles, expérimentations et un retainer qui grandit avec le produit.",
  },
];

/* ---------------- Values (about page) ---------------- */

export type Value = { t: string; d: string };

const valuesEn: Value[] = [
  { t: "Quality over shortcuts", d: "We ship less, and we ship it well." },
  { t: "Business-focused design", d: "Aesthetics serve outcomes, not the other way around." },
  { t: "Clear communication", d: "Weekly updates, shared boards, no black box." },
  { t: "Reliable engineering", d: "Typed, tested, monitored — production from day one." },
  { t: "Long-term partnerships", d: "Most of our clients renew. That's the honest metric." },
  { t: "Continuous innovation", d: "AI, automation, motion — we test on ourselves first." },
];

const valuesFr: Value[] = [
  { t: "La qualité avant les raccourcis", d: "Nous livrons moins, mais nous le livrons bien." },
  {
    t: "Un design orienté business",
    d: "L'esthétique sert le résultat, pas l'inverse.",
  },
  { t: "Communication claire", d: "Points hebdo, boards partagés, aucune boîte noire." },
  {
    t: "Ingénierie fiable",
    d: "Typé, testé, monitoré — production dès le premier jour.",
  },
  {
    t: "Partenariats de long terme",
    d: "La plupart de nos clients renouvellent. C'est la vraie métrique.",
  },
  {
    t: "Innovation continue",
    d: "IA, automatisation, motion — nous testons d'abord chez nous.",
  },
];

/* ---------------- FAQ (contact page) ---------------- */

export type Faq = { q: string; a: string };

const faqEn: Faq[] = [
  {
    q: "How long does a typical project take?",
    a: "Landing pages 3–5 weeks, business websites 8–12 weeks, Shopify rebuilds 8–14 weeks, AI systems 10–16 weeks. Every scope includes weekly staging.",
  },
  {
    q: "How do you price?",
    a: "Fixed-price by phase against a written scope. Retainers for ongoing partnerships. No hourly rates.",
  },
  {
    q: "Do you work with in-house teams?",
    a: "Often. We plug into your Linear / GitHub, run standups on your cadence, and hand off cleanly with docs.",
  },
  {
    q: "Where are you based?",
    a: "Lisbon and Amsterdam. We work with clients across Europe and North America and travel for kickoff and launch when it helps.",
  },
];

const faqFr: Faq[] = [
  {
    q: "Combien de temps prend un projet type ?",
    a: "Landing pages 3–5 semaines, sites d'entreprise 8–12 semaines, refontes Shopify 8–14 semaines, systèmes IA 10–16 semaines. Chaque scope inclut un staging hebdo.",
  },
  {
    q: "Comment fixez-vous les prix ?",
    a: "Prix fixe par phase sur un scope écrit. Retainers pour les partenariats continus. Pas de tarif horaire.",
  },
  {
    q: "Travaillez-vous avec des équipes internes ?",
    a: "Souvent. Nous nous branchons sur votre Linear / GitHub, tenons les standups à votre rythme et handoff proprement avec la documentation.",
  },
  {
    q: "Où êtes-vous basés ?",
    a: "Lisbonne et Amsterdam. Nous travaillons avec des clients en Europe et en Amérique du Nord et nous déplaçons pour les kick-offs et lancements si utile.",
  },
];

/* ---------------- Hook ---------------- */

export function useSiteData() {
  const { lang } = useT();
  return useMemo(() => {
    if (lang !== "fr") {
      return {
        services: servicesEn as readonly Service[],
        projects: projectsEn as readonly Project[],
        testimonials: testimonialsEn,
        team: teamEn,
        processSteps: processStepsEn,
        values: valuesEn,
        faq: faqEn,
        translateCategory: (c: string) => c,
      };
    }
    return {
      services: servicesEn.map((s) => {
        const tr = servicesFr[s.id];
        return tr ? { ...s, ...tr } : s;
      }) as unknown as readonly Service[],
      projects: projectsEn.map((p) => {
        const tr = projectsFr[p.slug];
        if (!tr) return p;
        return { ...p, ...tr, category: translateCat(p.category) };
      }) as unknown as readonly Project[],
      testimonials: testimonialsEn.map((t, i) => {
        const tr = testimonialsFr[i];
        return tr ? { ...t, ...tr } : t;
      }),
      team: teamEn.map((m, i) => {
        const tr = teamFr[i];
        return tr ? { ...m, ...tr } : m;
      }),
      processSteps: processStepsEn.map((s, i) => {
        const tr = processStepsFr[i];
        return tr ? { ...s, ...tr } : s;
      }),
      values: valuesFr,
      faq: faqFr,
      translateCategory: translateCat,
    };
  }, [lang]);
}

function translateCat(c: string): string {
  return categoryFr[c] ?? c;
}
