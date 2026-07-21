import { createFileRoute } from "@tanstack/react-router";
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

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.25em] text-violet">{t("about.team.eyebrow")}</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
              {t("about.team.heading")}
            </h2>
          </FadeUp>

          {/* Mobile: carousel */}
          <div className="mt-12 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {team.map((m) => (
              <div
                key={m.name}
                className="w-[75%] shrink-0 snap-center overflow-hidden rounded-3xl border border-border bg-surface/40"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="font-display text-lg">{m.name}</p>
                  <p className="mt-1 text-xs text-ink-dim">{m.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop grid */}
          <div className="mt-16 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <FadeUp key={m.name} delay={i * 0.05}>
                <div className="group overflow-hidden rounded-3xl border border-border bg-surface/40">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-ink-dim">{m.bio}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-display text-xl">{m.name}</p>
                    <p className="mt-1 text-sm text-ink-dim">{m.role}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Values />
      <Timeline />
      <BehindScenes />
    </>
  );
}

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

function BehindScenes() {
  const { t } = useT();
  const imgs = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  ];
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.25em] text-violet">{t("about.studio.eyebrow")}</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
            {t("about.studio.heading")}
          </h2>
        </FadeUp>
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {imgs.map((src, i) => (
            <motion.img
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.7 }}
              src={src}
              alt=""
              className={`w-full rounded-2xl border border-border object-cover ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/5]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
