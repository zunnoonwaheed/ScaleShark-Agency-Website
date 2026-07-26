import { createFileRoute } from "@tanstack/react-router";
import { FadeUp } from "@/components/reveal";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — ScaleShark" },
      {
        name: "description",
        content: "Cookie Policy and tracking information for ScaleShark.",
      },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <>
      <section className="pb-16 pt-40 md:pt-48">
        <div className="mx-auto max-w-[900px] px-5 md:px-8">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.25em] text-violet">Legal</p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.05] tracking-tight">
              Cookie Policy
            </h1>
            <p className="mt-6 text-sm text-ink-dim">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[900px] space-y-12 px-5 md:px-8">
          <FadeUp delay={0.1}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">1. What Are Cookies?</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">2. How We Use Cookies</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                We use cookies for the following purposes:
              </p>
              <ul className="mt-4 space-y-2 text-ink-dim">
                <li>• <strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li>• <strong>Performance Cookies:</strong> Help us understand how visitors use our website</li>
                <li>• <strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                <li>• <strong>Analytics Cookies:</strong> Collect information about site usage to improve our services</li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">3. Types of Cookies We Use</h2>

              <h3 className="mt-6 font-display text-xl font-semibold">3.1 Strictly Necessary Cookies</h3>
              <p className="mt-4 leading-relaxed text-ink-dim">
                These cookies are essential for the website to function and cannot be disabled. They include:
              </p>
              <ul className="mt-4 space-y-2 text-ink-dim">
                <li>• Session management cookies</li>
                <li>• Security cookies</li>
                <li>• Load balancing cookies</li>
              </ul>

              <h3 className="mt-6 font-display text-xl font-semibold">3.2 Analytics and Performance Cookies</h3>
              <p className="mt-4 leading-relaxed text-ink-dim">
                We may use analytics services to understand how visitors interact with our website:
              </p>
              <ul className="mt-4 space-y-2 text-ink-dim">
                <li>• Page views and navigation patterns</li>
                <li>• Time spent on pages</li>
                <li>• Traffic sources</li>
                <li>• Device and browser information</li>
              </ul>

              <h3 className="mt-6 font-display text-xl font-semibold">3.3 Functionality Cookies</h3>
              <p className="mt-4 leading-relaxed text-ink-dim">
                These cookies remember your choices and preferences:
              </p>
              <ul className="mt-4 space-y-2 text-ink-dim">
                <li>• Language preferences</li>
                <li>• Theme settings (if applicable)</li>
                <li>• Form data you've entered</li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">4. Third-Party Cookies</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                We may use third-party services that set their own cookies. These may include:
              </p>
              <ul className="mt-4 space-y-2 text-ink-dim">
                <li>• <strong>Analytics providers:</strong> To understand website performance</li>
                <li>• <strong>Social media platforms:</strong> For social sharing features</li>
                <li>• <strong>Hosting providers:</strong> For content delivery and security</li>
              </ul>
              <p className="mt-4 leading-relaxed text-ink-dim">
                These third parties have their own privacy and cookie policies, which we encourage you to review.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">5. Cookie Duration</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                Cookies can be either:
              </p>
              <ul className="mt-4 space-y-2 text-ink-dim">
                <li>• <strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                <li>• <strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.6}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">6. Managing Cookies</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                You have the right to accept or reject cookies. You can control cookies through:
              </p>

              <h3 className="mt-6 font-display text-xl font-semibold">6.1 Browser Settings</h3>
              <p className="mt-4 leading-relaxed text-ink-dim">
                Most browsers allow you to:
              </p>
              <ul className="mt-4 space-y-2 text-ink-dim">
                <li>• View cookies stored on your device</li>
                <li>• Delete cookies individually or all at once</li>
                <li>• Block cookies from specific websites</li>
                <li>• Block all cookies</li>
                <li>• Receive notifications when cookies are set</li>
              </ul>

              <h3 className="mt-6 font-display text-xl font-semibold">6.2 Browser-Specific Instructions</h3>
              <ul className="mt-4 space-y-2 text-ink-dim">
                <li>• <strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                <li>• <strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
                <li>• <strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                <li>• <strong>Edge:</strong> Settings → Privacy → Cookies</li>
              </ul>

              <p className="mt-4 leading-relaxed text-ink-dim">
                Note: Blocking all cookies may affect the functionality of our website.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.7}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">7. Your Consent</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                By using our website, you consent to our use of cookies in accordance with this Cookie Policy. When you first visit our site, we may display a cookie banner requesting your consent for non-essential cookies.
              </p>
              <p className="mt-4 leading-relaxed text-ink-dim">
                You can withdraw your consent at any time by adjusting your browser settings or contacting us.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.8}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">8. Do Not Track Signals</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                Some browsers offer a "Do Not Track" (DNT) feature. While we respect your privacy choices, the industry has not yet established a standard for responding to DNT signals.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.9}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">9. Updates to This Policy</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. Please check this page regularly for updates.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={1.0}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">10. CNIL Compliance</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                This Cookie Policy complies with the guidelines set by the French Data Protection Authority (CNIL - Commission Nationale de l'Informatique et des Libertés) and the EU ePrivacy Directive.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={1.1}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">11. More Information</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                For more information about cookies and how to manage them, visit:
              </p>
              <ul className="mt-4 space-y-2 text-ink-dim">
                <li>
                  •{" "}
                  <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" className="text-violet hover:underline" target="_blank" rel="noopener noreferrer">
                    CNIL Cookie Guidelines
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="https://www.allaboutcookies.org/" className="text-violet hover:underline" target="_blank" rel="noopener noreferrer">
                    All About Cookies
                  </a>
                </li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={1.2}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">12. Contact Us</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                If you have questions about our use of cookies, please contact us:
              </p>
              <p className="mt-4 leading-relaxed text-ink-dim">
                Email:{" "}
                <a href="mailto:Scalesharkweb@gmail.com" className="text-violet hover:underline">
                  Scalesharkweb@gmail.com
                </a>
                <br />
                WhatsApp:{" "}
                <a href="https://wa.me/33650986994" className="text-violet hover:underline">
                  +33 6 50 98 69 94
                </a>
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
