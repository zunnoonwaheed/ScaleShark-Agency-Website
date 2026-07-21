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
  "home.services.heading": "Six practices, one senior team.",
  "home.services.now": "Now viewing",
  "home.selected.eyebrow": "Selected work",
  "home.selected.heading": "Recent projects.",
  "home.selected.desc": "Explore our latest work showcasing innovation and results-driven design",
  "home.selected.all": "All projects",
  "home.process.eyebrow": "Process",
  "home.process.heading": "Calm, senior, transparent.",
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
  "about.title1": "A senior",
  "about.title2": "studio for",
  "about.title3": "serious work.",
  "about.intro":
    "ScaleShark is a creative technology studio built around one idea: modern businesses deserve a partner that treats the web as product, not deliverable. We combine editorial design, senior engineering, and applied AI to build systems that look exceptional, work intelligently, and help teams grow.",
  "about.mission.eyebrow": "Mission",
  "about.mission.heading": "We build digital systems that behave like the business behind them.",
  "about.mission.body":
    "Every engagement starts with the outcome — revenue, conversion, time back, product velocity — and works backwards to the simplest, most durable system that gets there. We don't ship deliverables. We ship functioning software.",
  "about.stats.projects": "Projects delivered",
  "about.stats.stores": "Stores launched",
  "about.stats.automations": "Automations built",
  "about.stats.satisfaction": "Client satisfaction",
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
    "A few short questions so we can prepare a useful first call. Six steps, roughly two minutes. We reply within 24 hours.",
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
  "home.services.heading": "Six pratiques, une équipe senior.",
  "home.services.now": "En cours",
  "home.selected.eyebrow": "Sélection",
  "home.selected.heading": "Projets récents.",
  "home.selected.desc":
    "Découvrez nos derniers travaux, alliant innovation et design orienté résultats",
  "home.selected.all": "Tous les projets",
  "home.process.eyebrow": "Processus",
  "home.process.heading": "Calme, senior, transparent.",
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
  "about.title1": "Un studio",
  "about.title2": "senior pour",
  "about.title3": "des projets sérieux.",
  "about.intro":
    "ScaleShark est un studio de technologie créative bâti autour d'une idée : les entreprises modernes méritent un partenaire qui traite le web comme un produit, pas comme un livrable. Nous combinons design éditorial, ingénierie senior et IA appliquée pour construire des systèmes qui ont fière allure, fonctionnent intelligemment et font grandir les équipes.",
  "about.mission.eyebrow": "Mission",
  "about.mission.heading":
    "Nous construisons des systèmes numériques qui se comportent comme l'entreprise qui les porte.",
  "about.mission.body":
    "Chaque mission part du résultat — revenu, conversion, temps gagné, vélocité produit — et remonte jusqu'au système le plus simple et le plus durable qui y mène. Nous ne livrons pas des livrables. Nous livrons du logiciel fonctionnel.",
  "about.stats.projects": "Projets livrés",
  "about.stats.stores": "Boutiques lancées",
  "about.stats.automations": "Automatisations construites",
  "about.stats.satisfaction": "Satisfaction client",
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
    "Quelques questions courtes pour préparer un premier appel utile. Six étapes, environ deux minutes. Nous répondons sous 24 heures.",
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
