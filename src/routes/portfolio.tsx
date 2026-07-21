import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSiteData } from "@/lib/use-site-data";
import type { Project } from "@/lib/site-data";
import { FadeUp, SplitReveal } from "@/components/reveal";
import { ProjectModal } from "@/components/project-modal";
import { useT } from "@/lib/i18n";

const categoryKeys = [
  { id: "All", label: "portfolio.cat.all" },
  { id: "Shopify", label: "portfolio.cat.shopify" },
  { id: "Business Websites", label: "portfolio.cat.websites" },
  { id: "AI", label: "portfolio.cat.ai" },
  { id: "Automation", label: "portfolio.cat.automation" },
  { id: "Integrations", label: "portfolio.cat.integrations" },
] as const;

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — ScaleShark" },
      {
        name: "description",
        content:
          "Selected projects across Shopify, business websites, integrations, automation, and applied AI.",
      },
      { property: "og:title", content: "Portfolio — ScaleShark" },
      {
        property: "og:description",
        content: "Selected projects — cases, results, and screens.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const { t } = useT();
  const { projects, translateCategory } = useSiteData();
  const [cat, setCat] = useState<string>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      cat === "All"
        ? projects
        : projects.filter((p) => p.category === cat || p.category === translateCategory(cat)),
    [cat, projects, translateCategory],
  );

  return (
    <>
      <section className="pb-16 pt-40 md:pt-48">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-violet">{t("portfolio.eyebrow")}</p>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.25rem)] font-semibold leading-[1.02] tracking-tight">
            <SplitReveal as="span" text={t("portfolio.title1")} className="block" />
            <SplitReveal as="span" text={t("portfolio.title2")} className="inline italic text-violet" />
          </h1>
          <FadeUp delay={0.3}>
            <p className="mt-10 max-w-2xl text-lg text-ink-dim">{t("portfolio.intro")}</p>
          </FadeUp>

          <div className="mt-14 flex flex-wrap gap-2">
            {categoryKeys.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                data-cursor="hover"
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  cat === c.id
                    ? "border-violet bg-violet text-primary-foreground"
                    : "border-border text-ink-dim hover:border-ink hover:text-ink"
                }`}
              >
                {t(c.label)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8">
          {/* Mobile: horizontal carousel */}
          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {filtered.map((p) => (
              <button
                key={p.slug}
                onClick={() => setOpen(p)}
                data-cursor="view"
                className="group relative aspect-[4/5] w-[82%] shrink-0 snap-center overflow-hidden rounded-3xl border border-border bg-surface text-left"
              >
                <img src={p.cover} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="relative flex h-full flex-col justify-between p-5">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/80">
                    <span>{p.category}</span>
                    <span>{p.year}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">{p.title}</h3>
                    <p className="mt-1 text-xs text-white/70">
                      {p.industry} · <span className="text-violet">{p.result}</span>
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Desktop bento */}
          <AnimatePresence mode="wait">
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="hidden gap-6 md:grid md:grid-cols-6 md:grid-rows-[auto]"
            >
              {filtered.map((p, i) => {
                const layouts = [
                  "md:col-span-4 md:row-span-2 aspect-[4/3]",
                  "md:col-span-2 md:row-span-2 aspect-[3/4]",
                  "md:col-span-3 aspect-[4/3]",
                  "md:col-span-3 aspect-[4/3]",
                  "md:col-span-2 aspect-[4/5]",
                  "md:col-span-4 aspect-[16/9]",
                  "md:col-span-3 aspect-[4/3]",
                  "md:col-span-3 aspect-[4/3]",
                ];
                const cls = layouts[i % layouts.length];
                return (
                  <motion.button
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setOpen(p)}
                    data-cursor="view"
                    className={`group relative block overflow-hidden rounded-3xl border border-border bg-surface text-left ${cls}`}
                  >
                    <motion.img
                      src={p.cover}
                      alt={p.title}
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                    <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
                      <div className="flex items-start justify-between text-xs uppercase tracking-[0.2em] text-ink-dim">
                        <span>{p.category}</span>
                        <span>{p.year}</span>
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-semibold md:text-3xl">
                          {p.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-ink-dim">
                          <span>{p.industry}</span>
                          <span className="text-violet">· {p.result}</span>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </>
  );
}
