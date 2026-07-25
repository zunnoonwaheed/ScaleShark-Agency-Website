import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSiteData } from "@/lib/use-site-data";
import { FadeUp, SplitReveal } from "@/components/reveal";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ScaleShark" },
      {
        name: "description",
        content:
          "A senior studio building websites, storefronts, automation, and applied AI. Meet the team, values, and the way we work.",
      },
      { property: "og:title", content: "About — ScaleShark" },
      {
        property: "og:description",
        content: "A senior creative technology studio. Meet the team.",
      },
    ],
  }),
  component: AboutPage,
});

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

function Stats() {
  const { t } = useT();
  const stats = [
    { n: 140, s: "+", label: t("about.stats.projects") },
    { n: 62, s: "", label: t("about.stats.stores") },
    { n: 320, s: "+", label: t("about.stats.automations") },
    { n: 98, s: "%", label: t("about.stats.satisfaction") },
  ];
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-8 px-6 md:grid-cols-4 md:gap-12 md:px-10">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-4xl font-semibold tracking-tight text-violet md:text-6xl">
              <Counter to={s.n} suffix={s.s} />
            </p>
            <p className="mt-3 text-sm text-ink-dim">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Values() {
  const { t } = useT();
  const { values } = useSiteData();
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.25em] text-violet">{t("about.values.eyebrow")}</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
            {t("about.values.heading")}
          </h2>
        </FadeUp>
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <FadeUp key={v.t} delay={i * 0.05}>
              <div className="group rounded-3xl border border-border bg-surface/40 p-8 transition hover:border-violet/60 hover:bg-surface">
                <p className="font-display text-2xl">{v.t}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">{v.d}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  const expertiseAreas = [
    {
      title: "E-Commerce Development",
      description: "Custom Shopify stores and headless commerce solutions built for scale and conversion.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Web Applications",
      description: "Full-stack web apps with modern frameworks, optimized for performance and user experience.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Workflow Automation",
      description: "Smart automation systems that streamline operations and eliminate repetitive tasks.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: "AI Integration",
      description: "Applied AI solutions for customer service, content generation, and data analysis.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.25em] text-violet">Expertise</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
            What we build.
          </h2>
        </FadeUp>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {expertiseAreas.map((area, i) => (
            <FadeUp key={area.title} delay={i * 0.1}>
              <div className="group rounded-3xl border border-border bg-surface/40 p-8 transition hover:border-violet/60 hover:bg-surface">
                <div className="mb-4 text-violet transition-transform group-hover:scale-110">{area.icon}</div>
                <h3 className="font-display text-2xl font-semibold">{area.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-dim">{area.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    {
      title: "Senior-Level Execution",
      description: "Every project is handled by experienced developers, not juniors learning on your dime.",
    },
    {
      title: "Fixed Scope, Fixed Price",
      description: "Clear pricing upfront. No surprises, no scope creep, no endless revisions.",
    },
    {
      title: "Built to Last",
      description: "We write maintainable code with documentation, so you're never locked into our services.",
    },
    {
      title: "Ship Fast, Iterate Faster",
      description: "Launch in weeks, not months. Then we iterate based on real user data.",
    },
  ];

  return (
    <section className="border-t border-border py-24 bg-surface/20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.25em] text-violet">Why Partner With Us</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
            No fluff, just results.
          </h2>
        </FadeUp>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {reasons.map((reason, i) => (
            <FadeUp key={reason.title} delay={i * 0.1}>
              <div className="group flex gap-6">
                <div className="flex-shrink-0">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-violet/40 bg-violet/10 transition-all group-hover:border-violet group-hover:bg-violet/20">
                    <svg className="h-6 w-6 text-violet transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-violet">{reason.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink-dim">{reason.description}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const { t } = useT();
  const { processSteps } = useSiteData();
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.25em] text-violet">{t("about.journey.eyebrow")}</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
            {t("about.journey.heading")}
          </h2>
        </FadeUp>
        {/* Mobile carousel */}
        <div className="mt-12 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {processSteps.map((step) => (
            <div key={step.n} className="w-[78%] shrink-0 snap-center rounded-2xl border border-border bg-surface/40 p-5">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-violet text-xs text-violet">
                {step.n}
              </span>
              <p className="mt-5 font-display text-lg">{step.title}</p>
              <p className="mt-2 text-sm text-ink-dim">{step.body}</p>
            </div>
          ))}
        </div>

        {/* Desktop timeline */}
        <div className="mt-16 relative hidden md:block">
          <div className="absolute left-0 right-0 top-4 h-px bg-border" />
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
            {processSteps.map((step, i) => (
              <FadeUp key={step.n} delay={i * 0.05}>
                <div>
                  <div className="relative">
                    <span className="relative z-10 grid h-8 w-8 place-items-center rounded-full border border-violet bg-background text-xs text-violet">
                      {step.n}
                    </span>
                  </div>
                  <p className="mt-6 font-display text-xl">{step.title}</p>
                  <p className="mt-2 text-sm text-ink-dim">{step.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1000px] px-5 text-center md:px-8">
        <FadeUp>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
            Ready to build something great?
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-ink-dim">
            Let's discuss your project. No sales pitch, just a straightforward conversation about what you need.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              data-cursor="hover"
              className="inline-flex items-center justify-center rounded-full bg-violet px-8 py-4 font-medium text-background transition hover:bg-violet-glow"
            >
              Start a Project
            </Link>
            <Link
              to="/portfolio"
              data-cursor="hover"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 font-medium transition hover:border-violet hover:text-violet"
            >
              View Our Work
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function AboutPage() {
  const { t } = useT();
  const { team } = useSiteData();
  return (
    <>
      <section className="pb-24 pt-40 md:pt-48">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-violet">{t("about.eyebrow")}</p>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.25rem)] font-semibold leading-[1.02] tracking-tight">
            <SplitReveal as="span" text={t("about.title1")} className="block" />
            <SplitReveal as="span" text={t("about.title2")} className="block" />
            <SplitReveal as="span" text={t("about.title3")} className="inline italic text-violet" />
          </h1>
          <FadeUp delay={0.5}>
            <p className="mt-12 max-w-2xl text-xl leading-relaxed text-ink-dim">
              {t("about.intro")}
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-6 md:grid-cols-2 md:px-10">
          <motion.img
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="aspect-[4/5] w-full rounded-3xl border border-border object-cover"
          />
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.25em] text-violet">{t("about.mission.eyebrow")}</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
              {t("about.mission.heading")}
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-ink-dim">
              {t("about.mission.body")}
            </p>
          </div>
        </div>
      </section>

      <Stats />

      <Expertise />

      <Values />

      <WhyUs />

      <Timeline />

      <FinalCTA />
    </>
  );
}

