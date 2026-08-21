import type { Metadata } from "next";
import { LegalShell } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "The StackBridge starter privacy policy.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      label="Privacy policy"
      title="A clear account of the information that supports the bridge."
      intro="This starter policy is written for StackBridge’s public brand and legal site. It should be reviewed and updated by the owner before production use."
    >
      <section id="scope" className="legal-section">
        <p className="legal-kicker">Last updated · August 20, 2026</p>
        <h2>1. Scope</h2>
        <p>This Privacy Policy describes how StackBridge may handle information when you visit this public website or use the StackBridge learning workspace. StackBridge is a learning product designed to help people carry professional data, AI, analytics, engineering, and cloud expertise across platforms.</p>
        <p>This page is a practical starter template, not legal advice. The StackBridge owner should confirm the actual providers, retention periods, jurisdictions, contact details, and legal bases that apply to the deployed product.</p>
      </section>

      <section id="information" className="legal-section">
        <h2>2. Information we may handle</h2>
        <h3>Account and access information</h3>
        <p>If the workspace requires an account, an authentication provider such as Clerk may process identifiers needed to create and secure that account. StackBridge may receive the account identifier and basic profile information made available by that provider.</p>
        <h3>Learning and workspace information</h3>
        <p>The workspace may store information you choose to create, such as path selection, progress, check-ins, notes, diagnostic results, and access requests. The exact fields and storage provider should be confirmed for each deployment.</p>
        <h3>Technical information</h3>
        <p>Hosting, authentication, database, and security providers may process technical information such as request metadata, browser details, approximate location derived from an IP address, and logs needed to operate and protect the service. StackBridge should only enable analytics or non-essential cookies when they are actually used and appropriately disclosed.</p>
      </section>

      <section className="legal-section">
        <h2>3. How information may be used</h2>
        <ul>
          <li>To provide, personalize, and secure the learning workspace.</li>
          <li>To save progress and support accountability features.</li>
          <li>To review access requests and prevent unauthorized use.</li>
          <li>To maintain reliability, diagnose problems, and respond to support requests.</li>
          <li>To meet legal obligations and protect the service, users, and other people.</li>
        </ul>
        <p>StackBridge should not use learning notes or account information for a new purpose that is materially different from the purpose described here without providing an appropriate notice.</p>
      </section>

      <section className="legal-section">
        <h2>4. Sharing and service providers</h2>
        <p>StackBridge may share the minimum information needed with carefully selected providers that host, authenticate, store, secure, or deliver the service. Providers should process information only for the agreed service purposes and under appropriate contractual or technical safeguards.</p>
        <p>This starter document intentionally does not claim a fixed list of subprocessors. The owner should publish an accurate provider list before relying on this policy.</p>
      </section>

      <section id="choices" className="legal-section">
        <h2>5. Your choices and rights</h2>
        <p>Depending on where you live, you may have rights to request access to, correction of, deletion of, or a copy of personal information, or to object to or restrict certain processing. You may also be able to close your account through the authentication provider or by contacting StackBridge.</p>
        <p>To make a request, include enough information for StackBridge to understand and verify it. The owner should confirm the applicable response timelines and identity-verification process for the jurisdictions served.</p>
      </section>

      <section className="legal-section">
        <h2>6. Retention and security</h2>
        <p>Information should be kept only for as long as it is needed for the purposes described in this policy, unless a longer period is required by law. StackBridge should use reasonable administrative, technical, and organizational measures to protect information, but no online service can promise absolute security.</p>
      </section>

      <section className="legal-section">
        <h2>7. Children</h2>
        <p>StackBridge is intended for professional learners and is not knowingly designed for children under the minimum age required by applicable law. If you believe a child provided personal information, contact StackBridge so the owner can review and remove it where appropriate.</p>
      </section>

      <section id="contact" className="legal-section">
        <h2>8. Contact and changes</h2>
        <p>Questions about this policy can be sent to <a href="mailto:bolajibalogoun@gmail.com">bolajibalogoun@gmail.com</a>. StackBridge may update this policy as the product, providers, or legal requirements change. The owner should publish a new effective date and a clear notice for material changes.</p>
      </section>
    </LegalShell>
  );
}
