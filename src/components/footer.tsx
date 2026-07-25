import { Link } from "@tanstack/react-router";
import { Magnetic } from "./magnetic";
import { Marquee } from "./marquee";
import { useT } from "@/lib/i18n";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-violet/5 to-transparent" />

      <div className="mx-auto max-w-[1600px] px-6 pb-10 pt-24 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ink-dim">
              {t("footer.eyebrow")}
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.25rem)] font-semibold leading-[1.02] tracking-tight">
              {t("footer.have")}
              <br />
              {t("footer.project")}
            </h2>
            <div className="mt-10">
              <Magnetic strength={0.25}>
                <a
                  href="https://wa.me/33650986994"
                  data-cursor="hover"
                  className="group inline-flex items-center gap-3 text-2xl font-medium underline decoration-violet/40 decoration-2 underline-offset-8 transition hover:decoration-violet md:text-4xl"
                >
                  +33 6 50 98 69 94
                  <span aria-hidden className="transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-ink-dim">
                {t("footer.studio")}
              </p>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-violet">
                    {t("nav.home")}
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:text-violet">
                    {t("nav.portfolio")}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-violet">
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-violet">
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-ink-dim">
                {t("footer.services")}
              </p>
              <ul className="space-y-2">
                <li>Shopify</li>
                <li>Websites</li>
                <li>Redesign</li>
                <li>Integrations</li>
                <li>Automation</li>
                <li>AI</li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-ink-dim">
                {t("footer.social")}
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://instagram.com"
                    className="hover:text-violet"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    className="hover:text-violet"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    className="hover:text-violet"
                    rel="noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://dribbble.com"
                    className="hover:text-violet"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Dribbble
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-ink-dim">
                {t("footer.location")}
              </p>
              <ul className="space-y-2 text-ink-dim">
                <li>Lisbon · Amsterdam</li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  {t("footer.booking")}
                </li>
                <li>{t("footer.reply")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-border py-6">
        <Marquee>
          {["Shopify", "Websites", "Redesign", "Integrations", "Automation", "AI", "ScaleShark"].map(
            (label, i) => (
              <span
                key={i}
                className="font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold uppercase tracking-tight text-ink/10"
              >
                {label} <span className="text-violet/40">◆</span>
              </span>
            ),
          )}
        </Marquee>
      </div>

      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-4 px-6 py-8 text-xs text-ink-dim md:flex-row md:items-center md:px-10">
        <p>© {new Date().getFullYear()} ScaleShark. {t("footer.rights")}</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-violet transition">
            {t("footer.privacy")}
          </Link>
          <Link to="/terms" className="hover:text-violet transition">
            {t("footer.terms")}
          </Link>
          <Link to="/cookies" className="hover:text-violet transition">
            {t("footer.cookies")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
