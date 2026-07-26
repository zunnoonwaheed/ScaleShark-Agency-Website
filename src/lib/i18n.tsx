import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "fr";

type Dict = Record<string, string>;

const en: Dict = {
  // nav
  "nav.home": "Home",
  "nav.services": "Services",
  "nav.portfolio": "Portfolio",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.cta": "Start a project",
  "nav.toggleMenu": "Toggle menu",

  // hero
  "hero.badge": "Booking new work for Q3 2026",
  "hero.title1": "Scale bold",
  "hero.title2": "brands with",
  "hero.word1": "thoughtful design",
  "hero.word2": "creative vision",
  "hero.word3": "modern innovation",
  "hero.subtitle":
    "At ScaleShark, we help ambitious startups tackle the world's biggest challenges with tailored solutions — from strategy to launch.",
  "hero.cta": "Get started",
  "hero.trust": "Trusted by 1000+ clients",
  "hero.loved": "Loved by 1000+ brands around the world",

  // home sections
  "home.services.eyebrow": "Services",
  "home.services.heading": "Discover the expertise that brings your ideas to life.",
  "home.services.now": "Now viewing",
  "home.selected.eyebrow": "Selected work",
  "home.selected.heading": "Recent projects.",
  "home.selected.desc": "Explore our latest work showcasing innovation and results-driven design",
  "home.selected.all": "All projects",
  "home.process.eyebrow": "Process",
  "home.process.heading": "Calm, precise, transparent.",
  "home.clients.eyebrow": "Clients",
  "home.clients.heading": "What partners say.",
  "home.clients.prev": "Previous",
  "home.clients.next": "Next",
  "home.final.eyebrow": "Let's build",
  "home.final.titleA": "Have a project?",
  "home.final.titleB": "Let's build",
  "home.final.titleC": "something exceptional.",
  "home.final.start": "Start a project",
  "home.final.booking": "Currently booking for Q3 2026 · Reply within 24 hours",

  // about
  "about.eyebrow": "About",
  "about.title1": "A Digital Company",
  "about.title2": "Built for Ambitious",
  "about.title3": "Projects",
  "about.intro":
    "ScaleShark is a digital company that helps businesses build and strengthen their online presence. We combine strategy, design, and development to create modern, effective websites tailored to each business. Our goal is to turn your ideas into useful, professional digital solutions designed to support your growth.",
  "about.mission.eyebrow": "Mission",
  "about.mission.heading": "We build digital systems that behave like the business behind them.",
  "about.mission.body":
    "Every engagement starts with the outcome — revenue, conversion, time back, product velocity — and works backwards to the simplest, most durable system that gets there. We don't ship deliverables. We ship functioning software.",
  "about.stats.projects": "Projects delivered",
  "about.stats.stores": "Stores launched",
  "about.stats.automations": "Automations built",
  "about.stats.satisfaction": "Client satisfaction",
  "about.expertise.eyebrow": "Expertise",
  "about.expertise.heading": "What we build.",
  "about.expertise.ecom.title": "E-Commerce Development",
  "about.expertise.ecom.desc": "Custom Shopify stores and headless commerce solutions built for scale and conversion.",
  "about.expertise.webapps.title": "Web Applications",
  "about.expertise.webapps.desc": "Full-stack web apps with modern frameworks, optimized for performance and user experience.",
  "about.expertise.automation.title": "Workflow Automation",
  "about.expertise.automation.desc": "Smart automation systems that streamline operations and eliminate repetitive tasks.",
  "about.expertise.ai.title": "AI Integration",
  "about.expertise.ai.desc": "Applied AI solutions for customer service, content generation, and data analysis.",
  "about.whyus.eyebrow": "Why Partner With Us",
  "about.whyus.heading": "No fluff, just results.",
  "about.whyus.reason1.title": "Senior-Level Execution",
  "about.whyus.reason1.desc": "Every project is handled by experienced developers, not juniors learning on your dime.",
  "about.whyus.reason2.title": "Fixed Scope, Fixed Price",
  "about.whyus.reason2.desc": "Clear pricing upfront. No surprises, no scope creep, no endless revisions.",
  "about.whyus.reason3.title": "Built to Last",
  "about.whyus.reason3.desc": "We write maintainable code with documentation, so you're never locked into our services.",
  "about.whyus.reason4.title": "Ship Fast, Iterate Faster",
  "about.whyus.reason4.desc": "Launch in weeks, not months. Then we iterate based on real user data.",
  "about.final.heading": "Ready to build something great?",
  "about.final.desc": "Let's discuss your project. No sales pitch, just a straightforward conversation about what you need.",
  "about.final.cta": "Start a Project",
  "about.final.portfolio": "View Our Work",
  "about.team.eyebrow": "Team",
  "about.team.heading": "Senior operators.",
  "about.values.eyebrow": "Values",
  "about.values.heading": "How we work.",
  "about.journey.eyebrow": "Journey",
  "about.journey.heading": "How the studio grew.",
  "about.studio.eyebrow": "Studio",
  "about.studio.heading": "Behind the scenes.",

  // services
  "services.eyebrow": "Services",
  "services.title1": "What we",
  "services.title2": "ship.",
  "services.intro":
    "Six practices we deliver end-to-end. Every engagement is scoped to an outcome, priced against it, and staffed with a senior team from kickoff.",
  "services.notSure": "Not sure where you fit?",
  "services.letsTalk": "Let's talk.",
  "services.start": "Start a project",
  "services.serviceLabel": "Service",
  "services.deliverLabel": "What we deliver",
  "services.discuss": "Discuss this service",

  // portfolio
  "portfolio.eyebrow": "Portfolio",
  "portfolio.title1": "Selected",
  "portfolio.title2": "work.",
  "portfolio.intro":
    "A curated slice of recent work. Each project has a short case study — challenge, strategy, stack, and measurable outcome.",
  "portfolio.cat.all": "All",
  "portfolio.cat.shopify": "Shopify",
  "portfolio.cat.websites": "Business Websites",
  "portfolio.cat.ai": "AI",
  "portfolio.cat.automation": "Automation",
  "portfolio.cat.integrations": "Integrations",

  // contact
  "contact.eyebrow": "Contact",
  "contact.title1": "Let's start",
  "contact.title2": "something.",
  "contact.intro":
    "Tell us about your project and we'll get back to you within 24 hours with next steps.",
  "contact.studio": "Studio",
  "contact.booking": "Booking Q3 2026",
  "contact.prefer.eyebrow": "Prefer to book?",
  "contact.prefer.body":
    "We hold intro slots each week. Ask for one in the brief and we'll send a calendar link with the reply.",
  "contact.step": "Step",
  "contact.back": "Back",
  "contact.next": "Next",
  "contact.send": "Send brief",
  "contact.q.type": "What are you looking to build?",
  "contact.q.name": "Your name",
  "contact.q.name.ph": "e.g. Alex Fischer",
  "contact.q.company": "Company",
  "contact.q.company.ph": "Company name",
  "contact.q.budget": "Estimated budget",
  "contact.q.timeline": "Timeline",
  "contact.q.details": "Tell us about the project",
  "contact.q.details.ph":
    "Goals, current situation, links to anything relevant. The more specific, the more useful the first call.",
  "contact.q.email": "Where should we reply?",
  "contact.q.email.ph": "you@company.com",
  "contact.q.email.note": "We use it for the reply and nothing else.",
  "contact.done.title": "Brief received.",
  "contact.done.body":
    "Thanks, {name}. We'll reply within 24 hours with next steps and a proposed intro call.",
  "contact.done.fallback": "there",
  "contact.step.type": "Project type",
  "contact.step.you": "About you",
  "contact.step.budget": "Budget",
  "contact.step.timeline": "Timeline",
  "contact.step.details": "Details",
  "contact.step.contact": "Contact",
  "contact.type.shopify": "Shopify Store",
  "contact.type.website": "Business Website",
  "contact.type.redesign": "Website Redesign",
  "contact.type.integration": "Custom Integration",
  "contact.type.automation": "Automation",
  "contact.type.ai": "AI Solution",
  "contact.type.other": "Other",
  "contact.budget.1": "<€15k",
  "contact.budget.2": "€15k – €35k",
  "contact.budget.3": "€35k – €75k",
  "contact.budget.4": "€75k – €150k",
  "contact.budget.5": "€150k+",
  "contact.timeline.asap": "ASAP",
  "contact.timeline.1": "1–3 months",
  "contact.timeline.2": "3–6 months",
  "contact.timeline.flex": "Flexible",
  "contact.faq.eyebrow": "FAQ",
  "contact.faq.heading": "Frequently asked.",

  // footer
  "footer.eyebrow": "Let's work together",
  "footer.have": "Have a",
  "footer.project": "project?",
  "footer.studio": "Studio",
  "footer.services": "Services",
  "footer.service.shopify": "Shopify",
  "footer.service.websites": "Websites",
  "footer.service.redesign": "Redesign",
  "footer.service.integrations": "Integrations",
  "footer.service.automation": "Automation",
  "footer.service.ai": "AI",
  "footer.social": "Social",
  "footer.location": "Location",
  "footer.booking": "Booking Q3 2026",
  "footer.reply": "Reply within 24h",
  "footer.rights": "All rights reserved.",
  "footer.privacy": "Privacy",
  "footer.terms": "Terms",
  "footer.cookies": "Cookies",

  // preloader
  "preloader.tag": "ScaleShark · Loading experience",

  // project modal
  "modal.close": "Close",
  "modal.case": "Case Study",
  "modal.client": "Client",
  "modal.industry": "Industry",
  "modal.duration": "Duration",
  "modal.year": "Year",
  "modal.services": "Services",
  "modal.stack": "Tech Stack",
  "modal.visit": "Visit website",
  "modal.challenge": "Challenge",
  "modal.strategy": "Strategy",
  "modal.results": "Key results",
  "modal.gallery": "Project gallery",
  "modal.testimonial": "Client testimonial",

  "lang.switch": "Language",
};

const fr: Dict = {
  "nav.home": "Accueil",
  "nav.services": "Services",
  "nav.portfolio": "Réalisations",
  "nav.about": "À propos",
  "nav.contact": "Contact",
  "nav.cta": "Démarrer un projet",
  "nav.toggleMenu": "Ouvrir le menu",

  "hero.badge": "Nouveaux projets pour le T3 2026",
  "hero.title1": "Faire grandir",
  "hero.title2": "les marques avec",
  "hero.word1": "un design réfléchi",
  "hero.word2": "une vision créative",
  "hero.word3": "une innovation moderne",
  "hero.subtitle":
    "Chez ScaleShark, nous aidons les startups ambitieuses à relever les plus grands défis avec des solutions sur mesure — de la stratégie au lancement.",
  "hero.cta": "Commencer",
  "hero.trust": "Approuvé par plus de 1000 clients",
  "hero.loved": "Apprécié par plus de 1000 marques dans le monde",

  "home.services.eyebrow": "Services",
  "home.services.heading": "Découvrez les expertises qui donnent vie à vos projets.",
  "home.services.now": "En cours",
  "home.selected.eyebrow": "Sélection",
  "home.selected.heading": "Projets récents.",
  "home.selected.desc":
    "Découvrez nos derniers travaux, alliant innovation et design orienté résultats",
  "home.selected.all": "Tous les projets",
  "home.process.eyebrow": "Processus",
  "home.process.heading": "Calme, précis, transparent.",
  "home.clients.eyebrow": "Clients",
  "home.clients.heading": "Ce que disent nos partenaires.",
  "home.clients.prev": "Précédent",
  "home.clients.next": "Suivant",
  "home.final.eyebrow": "Construisons",
  "home.final.titleA": "Un projet ?",
  "home.final.titleB": "Construisons",
  "home.final.titleC": "quelque chose d'exceptionnel.",
  "home.final.start": "Démarrer un projet",
  "home.final.booking": "Réservations ouvertes pour le T3 2026 · Réponse sous 24 h",

  "about.eyebrow": "À propos",
  "about.title1": "Une entreprise digitale",
  "about.title2": "au service de projets",
  "about.title3": "ambitieux",
  "about.intro":
    "ScaleShark est une entreprise digitale qui accompagne les entreprises dans la création et le développement de leur présence en ligne. Nous combinons stratégie, design et développement pour concevoir des sites web modernes, efficaces et adaptés à chaque activité. Notre objectif est de transformer vos idées en solutions digitales professionnelles, utiles et pensées pour soutenir votre croissance.",
  "about.mission.eyebrow": "Mission",
  "about.mission.heading":
    "Nous construisons des systèmes numériques qui se comportent comme l'entreprise qui les porte.",
  "about.mission.body":
    "Chaque mission part du résultat — revenu, conversion, temps gagné, vélocité produit — et remonte jusqu'au système le plus simple et le plus durable qui y mène. Nous ne livrons pas des livrables. Nous livrons du logiciel fonctionnel.",
  "about.stats.projects": "Projets livrés",
  "about.stats.stores": "Boutiques lancées",
  "about.stats.automations": "Automatisations construites",
  "about.stats.satisfaction": "Satisfaction client",
  "about.expertise.eyebrow": "Expertise",
  "about.expertise.heading": "Ce que nous construisons.",
  "about.expertise.ecom.title": "Développement E-Commerce",
  "about.expertise.ecom.desc": "Boutiques Shopify sur mesure et solutions e-commerce headless pensées pour la croissance et la conversion.",
  "about.expertise.webapps.title": "Applications Web",
  "about.expertise.webapps.desc": "Applications web full-stack avec des frameworks modernes, optimisées pour la performance et l'expérience utilisateur.",
  "about.expertise.automation.title": "Automatisation de Workflows",
  "about.expertise.automation.desc": "Systèmes d'automatisation intelligents qui fluidifient les opérations et éliminent les tâches répétitives.",
  "about.expertise.ai.title": "Intégration IA",
  "about.expertise.ai.desc": "Solutions IA appliquées pour le service client, la génération de contenu et l'analyse de données.",
  "about.whyus.eyebrow": "Pourquoi nous choisir",
  "about.whyus.heading": "Pas de blabla, que des résultats.",
  "about.whyus.reason1.title": "Exécution de niveau senior",
  "about.whyus.reason1.desc": "Chaque projet est géré par des développeurs expérimentés, pas des juniors qui apprennent à vos frais.",
  "about.whyus.reason2.title": "Périmètre fixe, prix fixe",
  "about.whyus.reason2.desc": "Tarification claire dès le départ. Pas de surprises, pas de dérive de périmètre, pas de révisions sans fin.",
  "about.whyus.reason3.title": "Conçu pour durer",
  "about.whyus.reason3.desc": "Nous écrivons du code maintenable avec documentation, vous n'êtes jamais prisonnier de nos services.",
  "about.whyus.reason4.title": "Livraison rapide, itérations plus rapides",
  "about.whyus.reason4.desc": "Lancement en quelques semaines, pas en mois. Puis nous itérons sur la base de données utilisateur réelles.",
  "about.final.heading": "Prêt à construire quelque chose de grandiose ?",
  "about.final.desc": "Parlons de votre projet. Pas de discours commercial, juste une conversation franche sur vos besoins.",
  "about.final.cta": "Démarrer un projet",
  "about.final.portfolio": "Voir nos réalisations",
  "about.team.eyebrow": "Équipe",
  "about.team.heading": "Opérateurs seniors.",
  "about.values.eyebrow": "Valeurs",
  "about.values.heading": "Notre façon de travailler.",
  "about.journey.eyebrow": "Parcours",
  "about.journey.heading": "Comment le studio a grandi.",
  "about.studio.eyebrow": "Studio",
  "about.studio.heading": "Dans les coulisses.",

  "services.eyebrow": "Services",
  "services.title1": "Ce que nous",
  "services.title2": "livrons.",
  "services.intro":
    "Six pratiques que nous livrons de bout en bout. Chaque mission est cadrée sur un objectif, tarifée en conséquence, et menée par une équipe senior dès le lancement.",
  "services.notSure": "Vous ne savez pas où vous situer ?",
  "services.letsTalk": "Parlons-en.",
  "services.start": "Démarrer un projet",
  "services.serviceLabel": "Service",
  "services.deliverLabel": "Ce que nous livrons",
  "services.discuss": "Discuter de ce service",

  "portfolio.eyebrow": "Portfolio",
  "portfolio.title1": "Travaux",
  "portfolio.title2": "sélectionnés.",
  "portfolio.intro":
    "Un aperçu de nos travaux récents. Chaque projet est accompagné d'une courte étude de cas — défi, stratégie, stack et résultats mesurables.",
  "portfolio.cat.all": "Tous",
  "portfolio.cat.shopify": "Shopify",
  "portfolio.cat.websites": "Sites d'entreprise",
  "portfolio.cat.ai": "IA",
  "portfolio.cat.automation": "Automatisation",
  "portfolio.cat.integrations": "Intégrations",

  "contact.eyebrow": "Contact",
  "contact.title1": "Commençons",
  "contact.title2": "quelque chose.",
  "contact.intro":
    "Parlez-nous de votre projet et nous vous répondrons sous 24 heures avec les prochaines étapes.",
  "contact.studio": "Studio",
  "contact.booking": "Réservations T3 2026",
  "contact.prefer.eyebrow": "Vous préférez réserver ?",
  "contact.prefer.body":
    "Nous gardons des créneaux d'introduction chaque semaine. Demandez-en un dans le brief et nous enverrons un lien de calendrier avec la réponse.",
  "contact.step": "Étape",
  "contact.back": "Retour",
  "contact.next": "Suivant",
  "contact.send": "Envoyer le brief",
  "contact.q.type": "Que souhaitez-vous construire ?",
  "contact.q.name": "Votre nom",
  "contact.q.name.ph": "ex. Alex Fischer",
  "contact.q.company": "Entreprise",
  "contact.q.company.ph": "Nom de l'entreprise",
  "contact.q.budget": "Budget estimé",
  "contact.q.timeline": "Calendrier",
  "contact.q.details": "Parlez-nous du projet",
  "contact.q.details.ph":
    "Objectifs, situation actuelle, liens pertinents. Plus c'est précis, plus le premier appel sera utile.",
  "contact.q.email": "Où répondre ?",
  "contact.q.email.ph": "vous@entreprise.com",
  "contact.q.email.note": "Nous l'utilisons uniquement pour la réponse.",
  "contact.done.title": "Brief bien reçu.",
  "contact.done.body":
    "Merci, {name}. Nous répondrons sous 24 heures avec les prochaines étapes et une proposition d'appel.",
  "contact.done.fallback": "à vous",
  "contact.step.type": "Type de projet",
  "contact.step.you": "À propos de vous",
  "contact.step.budget": "Budget",
  "contact.step.timeline": "Calendrier",
  "contact.step.details": "Détails",
  "contact.step.contact": "Contact",
  "contact.type.shopify": "Boutique Shopify",
  "contact.type.website": "Site d'entreprise",
  "contact.type.redesign": "Refonte de site",
  "contact.type.integration": "Intégration sur mesure",
  "contact.type.automation": "Automatisation",
  "contact.type.ai": "Solution IA",
  "contact.type.other": "Autre",
  "contact.budget.1": "<15k €",
  "contact.budget.2": "15k – 35k €",
  "contact.budget.3": "35k – 75k €",
  "contact.budget.4": "75k – 150k €",
  "contact.budget.5": "150k €+",
  "contact.timeline.asap": "Dès que possible",
  "contact.timeline.1": "1–3 mois",
  "contact.timeline.2": "3–6 mois",
  "contact.timeline.flex": "Flexible",
  "contact.faq.eyebrow": "FAQ",
  "contact.faq.heading": "Questions fréquentes.",

  "footer.eyebrow": "Travaillons ensemble",
  "footer.have": "Un",
  "footer.project": "projet ?",
  "footer.studio": "Studio",
  "footer.services": "Services",
  "footer.service.shopify": "Shopify",
  "footer.service.websites": "Sites web",
  "footer.service.redesign": "Refonte",
  "footer.service.integrations": "Intégrations",
  "footer.service.automation": "Automatisation",
  "footer.service.ai": "IA",
  "footer.social": "Réseaux",
  "footer.location": "Localisation",
  "footer.booking": "Réservations T3 2026",
  "footer.reply": "Réponse sous 24 h",
  "footer.rights": "Tous droits réservés.",
  "footer.privacy": "Confidentialité",
  "footer.terms": "Conditions",
  "footer.cookies": "Cookies",

  "preloader.tag": "ScaleShark · Chargement de l'expérience",

  "modal.close": "Fermer",
  "modal.case": "Étude de cas",
  "modal.client": "Client",
  "modal.industry": "Secteur",
  "modal.duration": "Durée",
  "modal.year": "Année",
  "modal.services": "Services",
  "modal.stack": "Stack technique",
  "modal.visit": "Visiter le site",
  "modal.challenge": "Défi",
  "modal.strategy": "Stratégie",
  "modal.results": "Résultats clés",
  "modal.gallery": "Galerie du projet",
  "modal.testimonial": "Témoignage client",

  "lang.switch": "Langue",
};

const dicts: Record<Lang, Dict> = { en, fr };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("scaleshark-lang") as Lang | null;
      if (saved === "en" || saved === "fr") setLangState(saved);
    } catch {
      /* noop */
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("scaleshark-lang", l);
      document.documentElement.lang = l;
    } catch {
      /* noop */
    }
  }, []);

  const t = useCallback(
    (key: string) => dicts[lang][key] ?? dicts.en[key] ?? key,
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useT() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    return {
      lang: "en" as Lang,
      setLang: () => {},
      t: (k: string) => (en as Dict)[k] ?? k,
    };
  }
  return ctx;
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useT();
  return (
    <div
      className={`inline-flex items-center rounded-full border border-border bg-surface/40 p-0.5 text-xs font-medium backdrop-blur ${className}`}
    >
      {(["en", "fr"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          data-cursor="hover"
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wider transition ${
            lang === l ? "bg-ink text-background" : "text-ink-dim hover:text-ink"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
