import { createFileRoute } from "@tanstack/react-router";
import { FadeUp } from "@/components/reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ScaleShark" },
      {
        name: "description",
        content: "Privacy Policy and GDPR compliance information for ScaleShark.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <section className="pb-16 pt-40 md:pt-48">
        <div className="mx-auto max-w-[900px] px-5 md:px-8">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.25em] text-violet">Legal</p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.05] tracking-tight">
              Privacy Policy
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
              <h2 className="font-display text-2xl font-semibold">1. Introduction</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                ScaleShark ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, in accordance with the General Data Protection Regulation (GDPR) and French data protection laws (RGPD).
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">2. Data Controller</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                The data controller responsible for your personal data is:
              </p>
              <p className="mt-2 leading-relaxed text-ink-dim">
                ScaleShark<br />
                Email: muhammadzunnoon.web@gmail.com<br />
                WhatsApp: +33 6 50 98 69 94
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">3. Information We Collect</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="mt-4 space-y-2 text-ink-dim">
                <li>• Name and company information</li>
                <li>• Email address and phone number</li>
                <li>• Project details and budget information</li>
                <li>• Communications you send to us</li>
                <li>• Technical data (IP address, browser type, device information)</li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">4. Legal Basis for Processing</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                Under GDPR/RGPD, we process your personal data based on:
              </p>
              <ul className="mt-4 space-y-2 text-ink-dim">
                <li>• Your consent (Article 6(1)(a) GDPR)</li>
                <li>• Performance of a contract (Article 6(1)(b) GDPR)</li>
                <li>• Legitimate interests (Article 6(1)(f) GDPR)</li>
                <li>• Legal obligations (Article 6(1)(c) GDPR)</li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">5. How We Use Your Information</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                We use the information we collect to:
              </p>
              <ul className="mt-4 space-y-2 text-ink-dim">
                <li>• Provide and maintain our services</li>
                <li>• Respond to your inquiries and project requests</li>
                <li>• Send you updates and marketing communications (with consent)</li>
                <li>• Improve our website and services</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.6}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">6. Your Rights Under GDPR/RGPD</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                You have the following rights:
              </p>
              <ul className="mt-4 space-y-2 text-ink-dim">
                <li>• <strong>Right to Access:</strong> Request access to your personal data</li>
                <li>• <strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                <li>• <strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                <li>• <strong>Right to Restriction:</strong> Request limitation of processing</li>
                <li>• <strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                <li>• <strong>Right to Object:</strong> Object to processing of your data</li>
                <li>• <strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
              </ul>
              <p className="mt-4 leading-relaxed text-ink-dim">
                To exercise these rights, please contact us at muhammadzunnoon.web@gmail.com or via WhatsApp at +33 6 50 98 69 94.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.7}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">7. Data Retention</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Contact information and project details are typically retained for 3 years after last contact.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.8}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">8. Data Security</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.9}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">9. International Data Transfers</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                Your data may be transferred to and processed in countries outside the European Economic Area (EEA). We ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={1.0}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">10. Cookies</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                We use cookies and similar tracking technologies. For detailed information, please see our Cookie Policy.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={1.1}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">11. Third-Party Services</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                We may use third-party service providers (e.g., analytics, hosting) who have access to your personal data only to perform tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={1.2}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">12. Children's Privacy</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                Our services are not intended for individuals under 16 years of age. We do not knowingly collect personal data from children.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={1.3}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">13. Changes to This Policy</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={1.4}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">14. Complaints</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                If you have concerns about how we handle your personal data, you have the right to lodge a complaint with the French data protection authority (CNIL - Commission Nationale de l'Informatique et des Libertés) at{" "}
                <a href="https://www.cnil.fr" className="text-violet hover:underline" target="_blank" rel="noopener noreferrer">
                  www.cnil.fr
                </a>
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={1.5}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">15. Contact Us</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <p className="mt-4 leading-relaxed text-ink-dim">
                Email:{" "}
                <a href="mailto:muhammadzunnoon.web@gmail.com" className="text-violet hover:underline">
                  muhammadzunnoon.web@gmail.com
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
