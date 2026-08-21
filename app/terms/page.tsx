import type { Metadata } from "next";
import { LegalShell } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The StackBridge starter terms of service.",
};

export default function TermsPage() {
  return (
    <LegalShell
      label="Terms of service"
      title="A straightforward agreement for a learning workspace."
      intro="These starter terms describe the intended relationship between StackBridge and its users. They require owner and legal review before production use."
    >
      <section id="scope" className="legal-section">
        <p className="legal-kicker">Last updated · August 20, 2026</p>
        <h2>1. About these terms</h2>
        <p>These Terms of Service govern access to the StackBridge public website and learning workspace. StackBridge helps experienced practitioners translate professional knowledge across cloud platforms, tools, and certification paths.</p>
        <p>These are starter terms, not legal advice. The StackBridge owner should confirm the business entity, governing law, dispute process, availability commitments, payment terms, and other product-specific details before relying on them.</p>
      </section>

      <section id="information" className="legal-section">
        <h2>2. Using StackBridge</h2>
        <p>You may use StackBridge only in accordance with these terms and applicable law. You are responsible for the accuracy of information you provide, for keeping your account credentials secure, and for activity performed through your account.</p>
        <p>Access may be invitation-based or subject to an approval process. StackBridge may limit, suspend, or revoke access when needed to protect the service, investigate misuse, or comply with law.</p>
        <h3>Learning content is educational</h3>
        <p>StackBridge’s roadmaps, translations, examples, and links are educational resources. They are not professional, legal, security, financial, or certification authority advice. You are responsible for validating implementation decisions against current official provider documentation and your own environment.</p>
      </section>

      <section className="legal-section">
        <h2>3. Your content</h2>
        <p>You retain ownership of the notes, reflections, and other content you submit, subject to the rights needed for StackBridge and its providers to host, store, back up, display, and process that content to operate the service.</p>
        <p>You must have the rights needed to submit your content and must not upload secrets, credentials, personal information about other people without authorization, or material that is unlawful, harmful, infringing, or intended to compromise the service.</p>
      </section>

      <section className="legal-section">
        <h2>4. StackBridge content</h2>
        <p>StackBridge and its licensors retain rights in the website, product interface, branding, software, and original learning content, except for content that belongs to you or is made available under a separate open-source or third-party license.</p>
        <p>These terms do not grant a right to copy, resell, reverse engineer, scrape, or commercially redistribute StackBridge except as allowed by law or an applicable license.</p>
      </section>

      <section id="choices" className="legal-section">
        <h2>5. Acceptable use</h2>
        <p>You may not misuse StackBridge, interfere with its operation, bypass access controls, probe accounts or infrastructure without permission, introduce malicious code, or use the service to violate another person’s rights or applicable law.</p>
        <p>If you find a security issue, report it responsibly to <a href="mailto:bolajibalogoun@gmail.com">bolajibalogoun@gmail.com</a> and avoid accessing or changing data that is not yours.</p>
      </section>

      <section className="legal-section">
        <h2>6. Availability and third parties</h2>
        <p>StackBridge may change, pause, or discontinue features. The service may depend on third-party hosting, authentication, database, cloud, and documentation providers. Their products and terms may apply to the relevant part of your use.</p>
        <p>To the extent permitted by law, StackBridge is provided on an “as available” basis without promises that every path, link, translation, or feature will always be complete, current, or error-free.</p>
      </section>

      <section className="legal-section">
        <h2>7. Liability and indemnity</h2>
        <p>The owner should have qualified counsel tailor any liability limits, warranty disclaimers, indemnity terms, and consumer-rights disclosures to the jurisdictions and audiences served. Nothing in these starter terms is intended to remove rights that cannot legally be waived.</p>
      </section>

      <section id="contact" className="legal-section">
        <h2>8. Contact and changes</h2>
        <p>Questions about these terms can be sent to <a href="mailto:bolajibalogoun@gmail.com">bolajibalogoun@gmail.com</a>. StackBridge may update these terms as the service changes. Material changes should be communicated with a new effective date and an appropriate notice.</p>
      </section>
    </LegalShell>
  );
}
