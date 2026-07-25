import { createFileRoute } from "@tanstack/react-router";
import { FadeUp } from "@/components/reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — ScaleShark" },
      {
        name: "description",
        content: "Terms and Conditions for ScaleShark services.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <section className="pb-16 pt-40 md:pt-48">
        <div className="mx-auto max-w-[900px] px-5 md:px-8">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.25em] text-violet">Legal</p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.05] tracking-tight">
              Terms & Conditions
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
              <h2 className="font-display text-2xl font-semibold">1. Agreement to Terms</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                By accessing or using ScaleShark's services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">2. Services</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                ScaleShark provides digital agency services including:
              </p>
              <ul className="mt-4 space-y-2 text-ink-dim">
                <li>• E-commerce development (Shopify and custom solutions)</li>
                <li>• Web application development</li>
                <li>• Website design and redesign</li>
                <li>• Integration services</li>
                <li>• Workflow automation</li>
                <li>• AI implementation and integration</li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">3. Project Scope and Pricing</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                All projects are subject to a detailed scope of work and pricing agreement. We operate on a fixed-scope, fixed-price model unless otherwise agreed in writing. Any changes to the agreed scope may result in additional fees.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">4. Payment Terms</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                Payment terms will be specified in each project agreement. Generally:
              </p>
              <ul className="mt-4 space-y-2 text-ink-dim">
                <li>• A deposit is required before work commences</li>
                <li>• Milestone payments may be required for larger projects</li>
                <li>• Final payment is due upon project completion</li>
                <li>• Late payments may incur interest charges as permitted by French law</li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">5. Client Responsibilities</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                You agree to:
              </p>
              <ul className="mt-4 space-y-2 text-ink-dim">
                <li>• Provide timely feedback and necessary materials</li>
                <li>• Ensure you have rights to all content you provide</li>
                <li>• Respond to requests for information within agreed timeframes</li>
                <li>• Pay all fees according to the agreed schedule</li>
                <li>• Maintain backup copies of your data</li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.6}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">6. Intellectual Property</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                Upon full payment, you own the final deliverables created specifically for your project. However:
              </p>
              <ul className="mt-4 space-y-2 text-ink-dim">
                <li>• We retain ownership of our general methodologies and tools</li>
                <li>• Third-party components remain property of their respective owners</li>
                <li>• We may use the work in our portfolio unless otherwise agreed</li>
                <li>• Source code and documentation transfer upon final payment</li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.7}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">7. Warranties and Disclaimers</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                We warrant that our services will be performed professionally and in accordance with industry standards. However, we cannot guarantee specific business results. All services are provided "as is" to the extent permitted by French law.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.8}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">8. Limitation of Liability</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                To the maximum extent permitted by law, our total liability for any claims arising from our services shall not exceed the fees paid for the specific project. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.9}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">9. Confidentiality</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                Both parties agree to keep confidential information private and use it only for the purposes of the project. This obligation continues after project completion.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={1.0}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">10. Project Timeline</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                We provide estimated timelines for project completion. While we make every effort to meet these timelines, they are estimates and may be affected by factors including client feedback delays, scope changes, or unforeseen technical issues.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={1.1}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">11. Termination</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                Either party may terminate the agreement with written notice. Upon termination:
              </p>
              <ul className="mt-4 space-y-2 text-ink-dim">
                <li>• You remain responsible for payment of work completed</li>
                <li>• We will deliver all work completed to date</li>
                <li>• Refunds are determined on a case-by-case basis</li>
                <li>• Confidentiality obligations continue</li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={1.2}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">12. Support and Maintenance</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                Post-launch support is available as a separate service. Bug fixes during an agreed warranty period (typically 30 days) are included. Additional support, updates, or feature additions require a separate agreement.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={1.3}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">13. Third-Party Services</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                Projects may involve third-party services (hosting, APIs, plugins). You are responsible for maintaining accounts and paying fees for these services. We are not liable for third-party service failures or changes.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={1.4}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">14. Governing Law</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                These terms are governed by French law. Any disputes will be subject to the exclusive jurisdiction of the French courts.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={1.5}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">15. Changes to Terms</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the new terms. Existing projects remain under the terms agreed at project start.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={1.6}>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl font-semibold">16. Contact</h2>
              <p className="mt-4 leading-relaxed text-ink-dim">
                For questions about these Terms & Conditions, please contact us:
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
