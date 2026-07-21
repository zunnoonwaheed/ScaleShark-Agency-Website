import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import type { Project } from "@/lib/site-data";
import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  const { t } = useT();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.3 });

  useEffect(() => {
    if (!project) return;

    // Lock body scroll
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Reset scroll to top when modal opens
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setShowSticky(el.scrollTop > 240);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[120] flex flex-col overflow-hidden bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* Sticky bar */}
          <motion.div
            initial={false}
            animate={{ y: showSticky ? 0 : -80, opacity: showSticky ? 1 : 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto fixed inset-x-0 top-0 z-30 border-b border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="mx-auto flex h-[64px] max-w-[1240px] items-center gap-3 px-5 md:px-8">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <span className="hidden text-xs uppercase tracking-[0.2em] text-ink-dim md:inline">
                  {project.category}
                </span>
                <span className="hidden h-3 w-px bg-border md:inline" />
                <p className="truncate font-display text-base font-medium md:text-lg">
                  {project.title}
                </p>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-lg transition hover:border-violet hover:text-violet"
                  aria-label={t("modal.close")}
                >
                  ×
                </button>
              </div>
            </div>
            <motion.div className="h-[2px] origin-left bg-violet" style={{ scaleX: progress }} />
          </motion.div>

          <motion.div
            ref={scrollRef}
            data-lenis-prevent
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain scroll-smooth"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* Top close bar (always visible before sticky triggers) */}
            <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 pt-6 md:px-8">
              <span className="text-xs uppercase tracking-[0.2em] text-ink-dim">
                {project.industry} · {project.year}
              </span>
              <button
                onClick={onClose}
                className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition hover:border-violet hover:text-violet"
              >
                {t("modal.close")} <span className="text-lg leading-none">×</span>
              </button>
            </div>

            {/* Hero */}
            <div className="mx-auto max-w-[1240px] px-5 pb-16 pt-8 md:px-8 md:pt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet">
                  {t("modal.case")}
                </p>
                <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.02] tracking-tight">
                  {project.title}
                </h2>
                <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink-dim">
                  {project.strategy}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="mt-12 overflow-hidden rounded-3xl border border-border bg-surface/60 shadow-2xl"
              >
                <img
                  src={project.cover}
                  alt={project.title}
                  className="aspect-[16/10] w-full object-cover"
                />
              </motion.div>
            </div>

            {/* Overview grid */}
            <div className="border-y border-border bg-surface/30 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mx-auto grid max-w-[1240px] gap-8 px-5 py-12 sm:grid-cols-2 md:grid-cols-4 md:px-8"
              >
                <Info label={t("modal.client")} value={project.client} />
                <Info label={t("modal.industry")} value={project.industry} />
                <Info label={t("modal.duration")} value={project.duration} />
                <Info label={t("modal.year")} value={project.year} />
              </motion.div>
            </div>

            {/* Body */}
            <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:grid-cols-[240px_1fr] md:gap-16 md:px-8">
              <aside className="space-y-8 md:sticky md:top-24 md:self-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="space-y-8"
                >
                  <Info label={t("modal.services")} value={project.services.join(" · ")} />
                  <Info label={t("modal.stack")} value={project.stack.join(" · ")} />
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:bg-violet-glow hover:shadow-xl hover:shadow-violet/30"
                  >
                    {t("modal.visit")} →
                  </a>
                </motion.div>
              </aside>

              <div className="space-y-14">
                <Section title={t("modal.challenge")} body={project.challenge} />
                <Section title={t("modal.strategy")} body={project.strategy} />

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-violet">
                    {t("modal.results")}
                  </h3>
                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {project.metrics.map((m, i) => (
                      <motion.div
                        key={m.v}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="group rounded-2xl border border-border bg-gradient-to-br from-surface/80 to-surface/40 p-6 shadow-lg transition-all duration-300 hover:border-violet/40 hover:shadow-xl"
                      >
                        <p className="font-display text-4xl font-bold tracking-tight text-violet transition-transform duration-300 group-hover:scale-105">
                          {m.k}
                        </p>
                        <p className="mt-2 text-sm font-medium text-ink-dim">{m.v}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-violet">
                    {t("modal.gallery")}
                  </h3>
                  <div className="mt-6 grid gap-5">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="group overflow-hidden rounded-3xl border border-border bg-surface/40 shadow-xl transition-all duration-300 hover:border-violet/40 hover:shadow-2xl"
                    >
                      <img
                        src={project.hover}
                        alt=""
                        className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </motion.div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="group overflow-hidden rounded-2xl border border-border bg-surface/40 shadow-lg transition-all duration-300 hover:border-violet/40 hover:shadow-xl"
                      >
                        <img
                          src={project.cover}
                          alt=""
                          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group overflow-hidden rounded-2xl border border-border bg-surface/40 shadow-lg transition-all duration-300 hover:border-violet/40 hover:shadow-xl"
                      >
                        <img
                          src={project.hover}
                          alt=""
                          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <motion.figure
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl border border-violet/20 bg-gradient-to-br from-surface/80 to-surface/40 p-8 shadow-xl md:p-12"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet">
                    {t("modal.testimonial")}
                  </p>
                  <blockquote className="mt-6 font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-violet/20" />
                    <div>
                      <p className="font-semibold text-ink">{project.testimonial.name}</p>
                      <p className="text-sm text-ink-dim">{project.testimonial.role}</p>
                    </div>
                  </figcaption>
                </motion.figure>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-dim">{label}</p>
      <p className="mt-2 font-medium text-sm md:text-base">{value}</p>
    </div>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-violet">{title}</h3>
      <p className="mt-5 text-lg leading-relaxed text-ink/90 md:text-xl">{body}</p>
    </motion.div>
  );
}
