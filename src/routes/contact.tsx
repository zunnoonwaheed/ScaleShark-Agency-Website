import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FadeUp, SplitReveal } from "@/components/reveal";
import { useT } from "@/lib/i18n";
import { useSiteData } from "@/lib/use-site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ScaleShark" },
      {
        name: "description",
        content:
          "Start a project with ScaleShark. Multi-step brief for Shopify, websites, integrations, automation, and AI work.",
      },
      { property: "og:title", content: "Contact — ScaleShark" },
      {
        property: "og:description",
        content: "Tell us about the project. We reply within 24 hours.",
      },
    ],
  }),
  component: ContactPage,
});

type FormState = {
  type: string;
  name: string;
  company: string;
  email: string;
  budget: string;
  timeline: string;
  description: string;
};

const initial: FormState = {
  type: "",
  name: "",
  company: "",
  email: "",
  budget: "",
  timeline: "",
  description: "",
};

function ContactPage() {
  const { t } = useT();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(initial);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const projectTypes = [
    t("contact.type.shopify"),
    t("contact.type.website"),
    t("contact.type.redesign"),
    t("contact.type.integration"),
    t("contact.type.automation"),
    t("contact.type.ai"),
    t("contact.type.other"),
  ];

  const budgets = [
    t("contact.budget.1"),
    t("contact.budget.2"),
    t("contact.budget.3"),
    t("contact.budget.4"),
    t("contact.budget.5"),
  ];

  const timelines = [
    t("contact.timeline.asap"),
    t("contact.timeline.1"),
    t("contact.timeline.2"),
    t("contact.timeline.flex"),
  ];

  const steps = [
    t("contact.step.type"),
    t("contact.step.you"),
    t("contact.step.budget"),
    t("contact.step.timeline"),
    t("contact.step.details"),
    t("contact.step.contact"),
  ];

  const canNext = () => {
    switch (step) {
      case 0:
        return !!data.type;
      case 1:
        return !!data.name && !!data.company;
      case 2:
        return !!data.budget;
      case 3:
        return !!data.timeline;
      case 4:
        return data.description.length > 10;
      case 5:
        return /\S+@\S+\.\S+/.test(data.email);
      default:
        return false;
    }
  };

  const next = async () => {
    if (step === steps.length - 1) {
      // Submit form to email via Web3Forms
      setSubmitting(true);
      try {
        const formData = new FormData();
        formData.append("access_key", "01a01fea-8900-47ed-bd46-a15b229aa8df");
        formData.append("subject", `New Project Inquiry from ${data.name}`);
        formData.append("from_name", "ScaleShark Website");
        formData.append("cc", "muhammadzunnoon.web@gmail.com,Scalesharkweb@gmail.com");
        formData.append("name", data.name);
        formData.append("company", data.company);
        formData.append("email", data.email);
        formData.append("message", `
Project Type: ${data.type}
Company: ${data.company}
Budget: ${data.budget}
Timeline: ${data.timeline}

Project Description:
${data.description}
        `);

        console.log("Submitting form to Web3Forms...");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        console.log("Web3Forms Response:", result);

        if (result.success) {
          console.log("✅ Form submitted successfully!");
          setDone(true);
        } else {
          console.error("❌ Form submission failed:", result.message);
          alert("There was an error submitting the form. Please try again or contact us via WhatsApp.");
        }
      } catch (error) {
        console.error("❌ Error submitting form:", error);
        alert("There was an error submitting the form. Please try again or contact us via WhatsApp.");
      } finally {
        setSubmitting(false);
      }
    } else {
      setStep((s) => s + 1);
    }
  };
  const back = () => setStep((s) => Math.max(0, s - 1));

  return (
    <>
      <section className="pb-16 pt-40 md:pt-48">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-violet">{t("contact.eyebrow")}</p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,6.5vw,5rem)] font-semibold leading-[1.02] tracking-tight">
            <SplitReveal as="span" text={t("contact.title1")} className="block" />
            <SplitReveal as="span" text={t("contact.title2")} className="inline italic text-violet" />
          </h1>
          <FadeUp delay={0.4}>
            <p className="mt-10 max-w-2xl text-lg text-ink-dim">{t("contact.intro")}</p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 md:grid-cols-[1fr_2fr] md:px-10">
          <aside className="md:sticky md:top-28 md:self-start">
            <div className="rounded-3xl border border-border bg-surface/40 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-ink-dim">{t("contact.studio")}</p>
              <a href="mailto:muhammadzunnoon.web@gmail.com" className="mt-3 block text-sm hover:text-violet transition">muhammadzunnoon.web@gmail.com</a>
              <a href="mailto:Scalesharkweb@gmail.com" className="mt-1 block text-sm hover:text-violet transition">Scalesharkweb@gmail.com</a>
              <a href="https://wa.me/33650986994" className="mt-3 block hover:text-violet transition">+33 6 50 98 69 94</a>
              <p className="mt-3 text-sm text-ink-dim">Lisbon · Amsterdam</p>
              <div className="mt-6 flex items-center gap-2 text-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                {t("contact.booking")}
              </div>
            </div>
            <div className="mt-6 rounded-3xl border border-border bg-surface/40 p-6 text-sm text-ink-dim">
              <p className="text-xs uppercase tracking-[0.2em] text-violet">
                {t("contact.prefer.eyebrow")}
              </p>
              <p className="mt-3">{t("contact.prefer.body")}</p>
            </div>
          </aside>

          <div className="rounded-3xl border border-border bg-surface/40 p-6 md:p-10">
            {!done ? (
              <>
                <div className="mb-8">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-ink-dim">
                    <span>
                      {t("contact.step")} {step + 1} / {steps.length}
                    </span>
                    <span>{steps[step]}</span>
                  </div>
                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-border">
                    <motion.div
                      className="h-full bg-violet"
                      animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {step === 0 && (
                      <Field label={t("contact.q.type")}>
                        <div className="grid gap-2 md:grid-cols-2">
                          {projectTypes.map((pt) => (
                            <button
                              key={pt}
                              onClick={() => setData({ ...data, type: pt })}
                              data-cursor="hover"
                              className={`rounded-2xl border px-5 py-5 md:px-4 md:py-4 text-left text-sm transition touch-manipulation active:scale-95 ${
                                data.type === pt
                                  ? "border-violet bg-violet/10 text-ink"
                                  : "border-border hover:border-ink hover:border-violet/60"
                              }`}
                            >
                              {pt}
                            </button>
                          ))}
                        </div>
                      </Field>
                    )}

                    {step === 1 && (
                      <div className="space-y-6">
                        <Field label={t("contact.q.name")}>
                          <Input
                            value={data.name}
                            onChange={(v) => setData({ ...data, name: v })}
                            placeholder={t("contact.q.name.ph")}
                          />
                        </Field>
                        <Field label={t("contact.q.company")}>
                          <Input
                            value={data.company}
                            onChange={(v) => setData({ ...data, company: v })}
                            placeholder={t("contact.q.company.ph")}
                          />
                        </Field>
                      </div>
                    )}

                    {step === 2 && (
                      <Field label={t("contact.q.budget")}>
                        <div className="grid gap-2 md:grid-cols-2">
                          {budgets.map((b) => (
                            <button
                              key={b}
                              onClick={() => setData({ ...data, budget: b })}
                              data-cursor="hover"
                              className={`rounded-2xl border px-5 py-5 md:px-4 md:py-4 text-left text-sm transition touch-manipulation active:scale-95 ${
                                data.budget === b
                                  ? "border-violet bg-violet/10"
                                  : "border-border hover:border-ink hover:border-violet/60"
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </Field>
                    )}

                    {step === 3 && (
                      <Field label={t("contact.q.timeline")}>
                        <div className="grid gap-2 md:grid-cols-2">
                          {timelines.map((b) => (
                            <button
                              key={b}
                              onClick={() => setData({ ...data, timeline: b })}
                              data-cursor="hover"
                              className={`rounded-2xl border px-5 py-5 md:px-4 md:py-4 text-left text-sm transition touch-manipulation active:scale-95 ${
                                data.timeline === b
                                  ? "border-violet bg-violet/10"
                                  : "border-border hover:border-ink hover:border-violet/60"
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </Field>
                    )}

                    {step === 4 && (
                      <Field label={t("contact.q.details")}>
                        <textarea
                          value={data.description}
                          onChange={(e) => setData({ ...data, description: e.target.value })}
                          rows={7}
                          placeholder={t("contact.q.details.ph")}
                          className="w-full rounded-2xl border border-border bg-background/60 p-5 md:p-4 text-base md:text-sm outline-none transition focus:border-violet focus:ring-2 focus:ring-violet/20 touch-manipulation"
                        />
                      </Field>
                    )}

                    {step === 5 && (
                      <Field label={t("contact.q.email")}>
                        <Input
                          value={data.email}
                          onChange={(v) => setData({ ...data, email: v })}
                          placeholder={t("contact.q.email.ph")}
                          type="email"
                        />
                        <p className="mt-3 text-xs text-ink-dim">{t("contact.q.email.note")}</p>
                      </Field>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-10 flex items-center justify-between">
                  <button
                    onClick={back}
                    disabled={step === 0}
                    data-cursor="hover"
                    className="text-sm md:text-sm py-2 px-3 rounded-lg text-ink-dim transition hover:text-ink disabled:opacity-30 touch-manipulation active:scale-95"
                  >
                    ← {t("contact.back")}
                  </button>
                  <button
                    onClick={next}
                    disabled={!canNext() || submitting}
                    data-cursor="hover"
                    className="inline-flex items-center gap-2 rounded-full bg-violet px-8 py-4 md:px-6 md:py-3 text-sm font-medium text-primary-foreground transition disabled:opacity-40 hover:bg-violet-glow touch-manipulation active:scale-95"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        {step === steps.length - 1 ? t("contact.send") : t("contact.next")} →
                      </>
                    )}
                  </button>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="py-16 text-center"
              >
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-violet/20 text-3xl text-violet">
                  ✓
                </div>
                <h3 className="mt-8 font-display text-4xl font-semibold tracking-tight">
                  {t("contact.done.title")}
                </h3>
                <p className="mt-4 text-ink-dim">
                  {t("contact.done.body").replace(
                    "{name}",
                    data.name || t("contact.done.fallback"),
                  )}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-4 font-display text-2xl md:text-3xl">{label}</p>
      {children}
    </div>
  );
}
function Input({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      type={type}
      className="w-full rounded-2xl border border-border bg-background/60 px-5 py-5 md:py-4 text-base outline-none transition focus:border-violet focus:ring-2 focus:ring-violet/20 touch-manipulation"
    />
  );
}

function FAQ() {
  const { t } = useT();
  const { faq } = useSiteData();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-[1120px] px-5 md:px-8">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.25em] text-violet">{t("contact.faq.eyebrow")}</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            {t("contact.faq.heading")}
          </h2>
        </FadeUp>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faq.map((f, i) => (
            <div key={f.q} className="py-6">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                data-cursor="hover"
                className="flex w-full items-center justify-between text-left"
              >
                <span className="font-display text-xl md:text-2xl">{f.q}</span>
                <span className="text-violet">{open === i ? "–" : "+"}</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-3 overflow-hidden text-ink-dim"
                  >
                    {f.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
