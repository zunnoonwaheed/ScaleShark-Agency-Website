import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useSiteData } from "@/lib/use-site-data";
import { FadeUp, SplitReveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { useT } from "@/lib/i18n";
import type { Service } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ScaleShark" },
      {
        name: "description",
        content:
          "Shopify, business websites, redesign, integrations, workflow automation, and applied AI — six practices delivered by a senior team.",
      },
      { property: "og:title", content: "Services — ScaleShark" },
      {
        property: "og:description",
        content:
          "Six practices, one senior team: Shopify, websites, redesign, integrations, automation, AI.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useT();
  const { services } = useSiteData();

  return (
    <>
      {/* Hero Section */}
      <section className="pb-20 pt-40 md:pb-32 md:pt-48">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-violet">{t("services.eyebrow")}</p>
          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.25rem)] font-semibold leading-[1.02] tracking-tight">
            <SplitReveal as="span" text={t("services.title1")} className="block" />
            <SplitReveal as="span" text={t("services.title2")} className="inline italic text-violet" />
          </h1>
          <FadeUp delay={0.4}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-dim md:text-xl">
              {t("services.intro")}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} reverse={index % 2 === 1} />
      ))}

      {/* CTA Section */}
      <section className="border-t border-border py-32 md:py-40">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center md:px-10">
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            {t("services.notSure")} <span className="italic text-violet">{t("services.letsTalk")}</span>
          </h2>
          <Magnetic>
            <Link
              to="/contact"
              data-cursor="hover"
              className="inline-flex items-center gap-3 rounded-full bg-violet px-8 py-4 text-base font-medium text-primary-foreground transition hover:bg-violet-glow"
            >
              {t("services.start")} →
            </Link>
          </Magnetic>
        </div>
      </section>
    </>
  );
}

function ServiceSection({ service, index, reverse }: { service: Service; index: number; reverse: boolean }) {
  const { t } = useT();

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className={`grid gap-12 md:grid-cols-2 md:items-center md:gap-16 lg:gap-20 ${reverse ? "md:grid-flow-dense" : ""}`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={reverse ? "md:col-start-2" : ""}
          >
            {/* Service Number */}
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="font-display text-xl font-semibold text-violet">{service.number}</span>
              <span className="h-px w-12 bg-violet/40" />
              <span className="text-xs uppercase tracking-widest text-ink-dim">
                {String(index + 1).padStart(2, "0")} / {String(6).padStart(2, "0")}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              {service.title}
            </h2>

            {/* Tagline */}
            <p className="mt-4 text-xl leading-relaxed text-ink-dim md:text-2xl">
              {service.tagline}
            </p>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
              {service.description}
            </p>

            {/* Deliverables */}
            <div className="mt-10">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-dim">
                {t("services.deliverLabel")}
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                    <span className="text-sm leading-relaxed text-ink/80">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/contact"
                data-cursor="hover"
                className="group inline-flex items-center gap-3 text-base font-medium text-violet transition hover:gap-4"
              >
                {t("services.discuss")}
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`relative ${reverse ? "md:col-start-1 md:row-start-1" : ""}`}
          >
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface/30 shadow-2xl shadow-black/20 transition-all duration-500 hover:shadow-violet/10">
              <div className="absolute inset-0 bg-gradient-to-br from-violet/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <img
                src={service.image}
                alt={service.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute right-6 top-6 rounded-full border border-violet/30 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-violet backdrop-blur-sm">
                {service.number}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
