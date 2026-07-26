import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Magnetic } from "@/components/magnetic";
import { SplitReveal, FadeUp } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { useSiteData } from "@/lib/use-site-data";
import { ProjectModal } from "@/components/project-modal";
import type { Project } from "@/lib/site-data";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <>
      <Hero />
      <ServicesSticky />
      <FeaturedProjects onOpen={setOpen} />
      <Process />
      <Testimonials />
      <FinalCTA />
      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </>
  );
}

/* Logo Components */
const SunburstLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9">
    <path d="M20 4L24 16L36 20L24 24L20 36L16 24L4 20L16 16L20 4Z" fill="#F97316" />
  </svg>
);
const CircleLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9">
    <circle cx="20" cy="20" r="16" fill="#06B6D4" />
    <path d="M20 8L26 20L20 32L14 20L20 8Z" fill="white" opacity="0.3" />
  </svg>
);
const ShieldLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9">
    <path d="M20 4L32 12V28L20 36L8 28V12L20 4Z" fill="#0EA5E9" stroke="white" strokeWidth="1.5" />
    <rect x="14" y="16" width="12" height="8" rx="1" fill="white" />
  </svg>
);
const SquareLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9">
    <rect x="4" y="4" width="32" height="32" rx="6" fill="#F43F5E" />
    <path d="M12 12L28 12L28 20L20 28L12 28L12 12Z" fill="white" opacity="0.4" />
  </svg>
);
const DiamondLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9">
    <path d="M8 20L20 8L32 20L20 32L8 20Z" fill="#2563EB" />
    <path d="M14 20L20 14L26 20L20 26L14 20Z" fill="white" />
  </svg>
);

const logos = [
  { name: "Acme Corp", Icon: SunburstLogo },
  { name: "Stellar", Icon: CircleLogo },
  { name: "Nexus", Icon: ShieldLogo, subtitle: "University" },
  { name: "Quantum", Icon: SquareLogo },
  { name: "Vertex", Icon: DiamondLogo },
];

function TypingText({ words }: { words: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentIndex];
    if (!currentWord) return;

    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [displayText, isDeleting, currentIndex, words]);

  return (
    <span className="inline-block italic text-violet text-[0.72em] md:text-[0.78em] align-baseline">
      {displayText || "\u00A0"}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function Hero() {
  const { t } = useT();

  return (
    <section className="relative overflow-hidden pb-12 pt-32 md:pb-16 md:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet/[0.06] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 text-center md:px-10">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-[clamp(2.5rem,6.5vw,5rem)] font-semibold leading-[1.1] tracking-tight">
            <SplitReveal as="span" text={t("hero.title1")} className="block" />
            <span className="block md:inline">
              <SplitReveal as="span" text={t("hero.title2")} className="inline" />
              {" "}
            </span>
            <span className="block">
              <TypingText key="home-typing-text" words={[t("hero.word1"), t("hero.word2"), t("hero.word3")]} />
            </span>
          </h1>

          <FadeUp delay={0.6}>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-ink-dim/90 md:mt-7 md:text-base">
              {t("hero.subtitle")}
            </p>
          </FadeUp>

          <FadeUp delay={0.8}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4 md:mt-9 md:gap-6">
              <Magnetic>
                <Link
                  to="/contact"
                  data-cursor="hover"
                  className="group inline-flex items-center gap-3 rounded-full bg-violet px-7 py-3.5 font-medium text-primary-foreground transition hover:bg-violet-glow"
                >
                  {t("hero.cta")}
                  <span aria-hidden className="transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Magnetic>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces",
                  ].map((src, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.1 }}
                      className="h-9 w-9 overflow-hidden rounded-full border-2 border-background"
                    >
                      <img src={src} alt="" className="h-full w-full object-cover" />
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                  className="text-left"
                >
                  <div className="flex items-center gap-0.5 text-sm text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i === 4 ? "opacity-50" : ""}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-ink-dim">{t("hero.trust")}</p>
                </motion.div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      <div className="relative mt-10 md:mt-14">
        <FadeUp>
          <div className="mb-6 text-center md:mb-7">
            <div className="relative inline-block">
              <div className="absolute left-0 top-1/2 hidden h-px w-24 -translate-x-full bg-border md:block" />
              <p className="px-4 text-xs text-ink-dim md:text-sm">{t("hero.loved")}</p>
              <div className="absolute right-0 top-1/2 hidden h-px w-24 translate-x-full bg-border md:block" />
            </div>
          </div>
        </FadeUp>

        <div className="overflow-hidden">
          <Marquee>
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="mx-4 flex items-center gap-2.5 opacity-70 transition hover:opacity-100 md:mx-6"
              >
                <logo.Icon />
                <div className="flex flex-col whitespace-nowrap">
                  <span className="text-base font-bold leading-tight tracking-tight md:text-lg">
                    {logo.name}
                  </span>
                  {logo.subtitle && (
                    <span className="text-[10px] font-medium leading-tight tracking-tight md:text-xs">
                      {logo.subtitle}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

function ServicesSticky() {
  const { t } = useT();
  const { services } = useSiteData();

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <div className="flex items-end justify-between gap-8 border-b border-border pb-8 md:pb-10">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.25em] text-violet">{t("home.services.eyebrow")}</p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
              {t("home.services.heading")}
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <Link
              to="/services"
              data-cursor="hover"
              className="group hidden shrink-0 items-center gap-2 text-sm font-medium text-violet transition hover:gap-3 md:inline-flex"
            >
              View all services
              <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </FadeUp>
        </div>

        {/* Services List - Premium Editorial Layout */}
        <div className="mt-8 md:mt-12">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/services"
                data-cursor="hover"
                className="group relative flex flex-col gap-4 border-b border-border py-6 transition-all duration-300 hover:border-violet/40 md:flex-row md:items-center md:gap-8 md:py-8"
              >
                {/* Full Row Background Highlight on Hover */}
                <div className="absolute inset-0 -mx-6 bg-violet/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:-mx-10" />

                {/* Service Number */}
                <div className="relative z-10 flex items-center gap-4 md:w-32 md:shrink-0">
                  <span className="font-display text-3xl font-semibold text-violet transition-all duration-300 group-hover:scale-110 md:text-4xl">
                    {service.number}
                  </span>
                  <span className="h-px flex-1 bg-violet/30 transition-all duration-300 group-hover:bg-violet/60 md:hidden" />
                </div>

                {/* Title & Tagline */}
                <div className="relative z-10 flex-1">
                  <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight transition-colors duration-300 group-hover:text-violet md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim md:mt-3 md:text-base">
                    {service.tagline}
                  </p>
                </div>

                {/* Arrow */}
                <div className="relative z-10 hidden items-center gap-2 text-violet opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 md:flex md:w-20 md:justify-end">
                  <span className="text-2xl">→</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Mobile CTA */}
        <FadeUp delay={0.4}>
          <div className="mt-8 flex justify-center border-t border-border pt-8 md:hidden">
            <Link
              to="/services"
              data-cursor="hover"
              className="inline-flex items-center gap-3 rounded-full bg-violet px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-violet-glow"
            >
              View all services
              <span className="text-lg">→</span>
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function FeaturedProjects({ onOpen }: { onOpen: (p: Project) => void }) {
  const { t } = useT();
  const { projects } = useSiteData();
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured).slice(0, 4);

  return (
    <section className="relative mt-16 pb-16 md:mt-20 md:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-[600px] w-[600px] rounded-full bg-violet/5 blur-[120px]" />
        <div className="absolute right-1/3 top-40 h-[500px] w-[500px] rounded-full bg-violet-glow/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <FadeUp>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet">
                {t("home.selected.eyebrow")}
              </p>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
                {t("home.selected.heading")}
              </h2>
              <p className="mt-4 max-w-xl text-base text-ink-dim">
                {t("home.selected.desc")}
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <Link
              to="/portfolio"
              data-cursor="hover"
              className="group hidden shrink-0 items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:border-violet hover:bg-violet/10 hover:text-violet hover:shadow-lg hover:shadow-violet/20 md:inline-flex"
            >
              {t("home.selected.all")}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </FadeUp>
        </div>

        {/* Mobile: horizontal snap carousel */}
        <div className="mt-12 md:hidden">
          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {[...featured, ...rest].map((p, i) => (
              <div
                key={p.slug}
                className="w-[85%] shrink-0 snap-start first:ml-0"
              >
                <ProjectCard project={p} onOpen={onOpen} compact delay={0.05 + i * 0.03} />
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Link
              to="/portfolio"
              data-cursor="hover"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-5 py-2.5 text-sm font-medium"
            >
              {t("home.selected.all")} →
            </Link>
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="mt-16 hidden gap-6 md:grid md:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} onOpen={onOpen} delay={0.1 + i * 0.05} />
          ))}
        </div>
        <div className="mt-6 hidden gap-6 md:grid md:grid-cols-4">
          {rest.map((p, i) => (
            <ProjectCard key={p.slug} project={p} onOpen={onOpen} compact delay={0.25 + i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  onOpen,
  tall = false,
  compact = false,
  delay = 0,
}: {
  project: Project;
  onOpen: (p: Project) => void;
  tall?: boolean;
  compact?: boolean;
  delay?: number;
}) {
  return (
    <motion.button
      onClick={() => onOpen(project)}
      data-cursor="view"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      className={`group relative block w-full overflow-hidden rounded-3xl border border-border bg-surface text-left shadow-lg transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 ${
        tall ? "aspect-[4/5] md:aspect-[16/11]" : compact ? "aspect-[4/5]" : "aspect-[4/3]"
      }`}
    >
      <motion.img
        src={project.cover}
        alt={project.title}
        variants={{ rest: { scale: 1 }, hover: { scale: 1.1 } }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <motion.img
        src={project.hover}
        alt=""
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
        <motion.div
          variants={{ rest: { y: 0, opacity: 1 }, hover: { y: -3, opacity: 1 } }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80"
        >
          <span className="px-2 py-1">{project.category}</span>
          <span className="px-2 py-1">{project.year}</span>
        </motion.div>

        <div>
          <motion.h3
            variants={{ rest: { y: 0 }, hover: { y: -6 } }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`font-display font-bold tracking-tight text-white ${compact ? "text-xl md:text-2xl" : "text-3xl md:text-4xl"}`}
            style={{ letterSpacing: "-0.03em", textShadow: "0 3px 15px rgba(0,0,0,0.5)" }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            variants={{ rest: { y: 0, opacity: 0.8 }, hover: { y: -3, opacity: 1 } }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-sm font-semibold text-white/80"
          >
            {project.industry}
          </motion.p>

          <motion.div
            variants={{ rest: { y: 0 }, hover: { y: -3 } }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-white/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {project.result}
          </motion.div>
        </div>
      </div>
    </motion.button>
  );
}

function Process() {
  const { t } = useT();
  const { processSteps } = useSiteData();
  return (
    <section className="relative mt-16 border-t border-border py-16 md:mt-20 md:py-24">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.25em] text-violet">{t("home.process.eyebrow")}</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
            {t("home.process.heading")}
          </h2>
        </FadeUp>

        {/* Mobile carousel */}
        <ol className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {processSteps.map((step) => (
            <li
              key={step.n}
              className="w-[85%] shrink-0 snap-start rounded-3xl border border-border bg-surface/40 p-6 first:ml-0"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-4xl font-semibold text-violet">{step.n}</span>
                <span className="h-px w-12 bg-border" />
              </div>
              <h3 className="mt-5 font-display text-xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{step.body}</p>
            </li>
          ))}
        </ol>

        {/* Desktop grid */}
        <ol className="mt-16 hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <FadeUp key={step.n} delay={i * 0.05}>
              <li className="group relative rounded-3xl border border-border bg-surface/40 p-8 transition hover:border-violet/60 hover:bg-surface">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-5xl font-semibold text-violet">{step.n}</span>
                  <span className="h-px w-16 bg-border transition group-hover:bg-violet" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">{step.body}</p>
              </li>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useT();
  const { testimonials } = useSiteData();

  // Double testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative border-t border-border py-16 md:py-24 overflow-hidden bg-background">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 mb-12 md:mb-16">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-violet">{t("home.clients.eyebrow")}</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
            {t("home.clients.heading")}
          </h2>
        </div>
      </div>

      {/* Auto-scrolling container - FULL WIDTH */}
      <div className="relative">
        <style>
          {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-404px * ${testimonials.length}));
              }
            }
            .animate-scroll {
              animation: scroll 60s linear infinite;
            }
          `}
        </style>
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll">
              {duplicatedTestimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[340px] md:w-[380px]"
                >
                  <div className="h-full rounded-2xl border border-border/60 bg-surface-2 p-6 md:p-8 flex flex-col transition-all hover:border-violet/50 hover:shadow-lg hover:shadow-violet/10">
                    {/* Tag and Rating */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="inline-flex items-center rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-[10px] uppercase tracking-widest text-violet">
                        {item.tag}
                      </span>
                      <span className="text-xs font-semibold text-violet">
                        {item.rating}
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote className="flex-1 mb-6">
                      <p className="text-base leading-relaxed md:text-lg md:leading-relaxed text-ink">
                        "{item.quote}"
                      </p>
                    </blockquote>

                    {/* Author info */}
                    <div className="pt-6 border-t border-border/50">
                      <p className="font-semibold text-base">{item.name}</p>
                      <p className="mt-1 text-sm text-ink-dim">{item.role}</p>
                      <p className="mt-0.5 text-sm font-medium text-violet">{item.company}</p>

                      {/* Star rating */}
                      <div className="flex gap-0.5 mt-4">
                        {[...Array(5)].map((_, starIdx) => (
                          <svg key={starIdx} className="h-4 w-4 text-violet" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
            ))}
            </div>
          </div>

        {/* Subtle fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}

function FinalCTA() {
  const { t } = useT();
  return (
    <section className="relative border-t border-border py-16 md:py-24">
      <div className="relative mx-auto max-w-[1400px] px-6 text-center md:px-10">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.25em] text-violet">{t("home.final.eyebrow")}</p>
        </FadeUp>
        <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.75rem)] font-semibold leading-[1.02] tracking-tight">
          {t("home.final.titleA")} <span className="italic text-violet">{t("home.final.titleB")}</span>
          <br /> {t("home.final.titleC")}
        </h2>
        <FadeUp delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <Link
                to="/contact"
                data-cursor="hover"
                className="inline-flex items-center gap-3 rounded-full bg-violet px-8 py-4 font-medium text-primary-foreground transition hover:bg-violet-glow"
              >
                {t("home.final.start")} →
              </Link>
            </Magnetic>
            <a
              href="https://wa.me/33650986994"
              data-cursor="hover"
              className="rounded-full border border-border px-8 py-4 font-medium transition hover:border-ink"
            >
              0650986994
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
