import type { AuthHelpConfig, DocumentConfig } from "./content";

export type { AuthHelpConfig, DocumentConfig, LegalBlock, LegalSection } from "./content";

export type ProductConfig = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  homepageUrl: string;
  supportEmail: string;
  brand: { accent: string; accentDark: string };
  hero: { headline: string; emphasis: string; statement: string };
  pathLibrary: Array<{
    profile: string;
    source: string;
    destination: string;
    meta: string;
    status: "live" | "soon";
  }>;
  dataNotice: {
    title: string;
    intro: string;
    provider: string;
    categories: Array<{ label: string; detail: string }>;
    purposes: string[];
    retention: string;
    security: string;
  };
  legal: {
    privacy: DocumentConfig;
    terms: DocumentConfig;
  };
  authHelp: AuthHelpConfig;
};

/**
 * Product registry for the public legal/authentication companion site.
 * Add a product here to make the reusable `/products/[slug]` routes available.
 */
export const products: Record<string, ProductConfig> = {
  stackbridge: {
    slug: "stackbridge",
    name: "StackBridge",
    eyebrow: "A translation layer for modern practice",
    tagline: "Carry your data and AI expertise across cloud platforms.",
    description: "StackBridge helps experienced practitioners carry what they know across clouds, tools, and certification paths—without starting from zero.",
    homepageUrl: "https://stackbridge.bolablg.com",
    supportEmail: "bolajibalogoun@gmail.com",
    brand: { accent: "#ad6956", accentDark: "#874c3e" },
    hero: {
      headline: "Keep the expertise.",
      emphasis: "Change the platform.",
      statement: "Platform fluency should compound. Your next certification should build on the systems thinking you already earned.",
    },
    pathLibrary: [
      { profile: "Data engineering", source: "Google Cloud", destination: "Amazon Web Services", meta: "Professional Data Engineer → Data Engineer", status: "live" },
      { profile: "Machine learning engineering", source: "Choose your starting platform", destination: "More bridges to come", meta: "Role and platform translation", status: "soon" },
      { profile: "Cloud architecture", source: "Choose your starting platform", destination: "More bridges to come", meta: "Role and platform translation", status: "soon" },
    ],
    dataNotice: {
      title: "What StackBridge handles to make the path personal.",
      intro: "This product-specific data notice sits beside the general BOLABLG.com Privacy Policy. It records the intended data model for the StackBridge workspace and should be updated whenever the implementation changes.",
      provider: "Clerk for account registration, sign-in, verification, and access control.",
      categories: [
        { label: "Account and access", detail: "The identity and basic profile information made available by the authentication provider, plus access-request state needed to decide whether a workspace can be opened." },
        { label: "Learning workspace", detail: "Path selection, progress, check-ins, notes, diagnostic results, and other learning evidence that a member chooses to create." },
        { label: "Technical context", detail: "Operational logs and request metadata needed to host, secure, troubleshoot, and improve reliability. The owner should keep this list aligned with the enabled providers." },
      ],
      purposes: ["Create and secure an account.", "Personalize the selected learning path and save progress.", "Support accountability features and access requests.", "Operate, troubleshoot, and protect the workspace.", "Respond to support questions and meet applicable obligations."],
      retention: "Keep account, learning, and technical information only for as long as the StackBridge owner confirms it is needed for the stated purposes, a user requests deletion where applicable, or law requires a longer period.",
      security: "StackBridge should use reasonable administrative, technical, and organizational safeguards, including the controls provided by its hosting and authentication providers. Do not put passwords, cloud credentials, API keys, or other secrets in learning notes.",
    },
    legal: {
      privacy: {
        title: "A clear account of the information that supports the bridge.",
        intro: "This starter policy is written for the public StackBridge brand and legal site. It should be reviewed and updated by the owner before production use.",
        updated: "August 20, 2026",
        sections: [
          {
            id: "scope",
            title: "1. Scope",
            blocks: [
              { kind: "paragraph", text: "This Privacy Policy describes how StackBridge may handle information when you visit this public website or use the StackBridge learning workspace. StackBridge is a learning product designed to help people carry professional data, AI, analytics, engineering, and cloud expertise across platforms." },
              { kind: "paragraph", text: "This page is a practical starter template, not legal advice. The StackBridge owner should confirm the actual providers, retention periods, jurisdictions, contact details, and legal bases that apply to the deployed product." },
            ],
          },
          {
            id: "information",
            title: "2. Information we may handle",
            blocks: [
              { kind: "heading", text: "Account and access information" },
              { kind: "paragraph", text: "If the workspace requires an account, an authentication provider such as Clerk may process identifiers needed to create and secure that account. StackBridge may receive the account identifier and basic profile information made available by that provider." },
              { kind: "heading", text: "Learning and workspace information" },
              { kind: "paragraph", text: "The workspace may store information you choose to create, such as path selection, progress, check-ins, notes, diagnostic results, and access requests. The exact fields and storage provider should be confirmed for each deployment." },
              { kind: "heading", text: "Technical information" },
              { kind: "paragraph", text: "Hosting, authentication, database, and security providers may process technical information such as request metadata, browser details, approximate location derived from an IP address, and logs needed to operate and protect the service. StackBridge should only enable analytics or non-essential cookies when they are actually used and appropriately disclosed." },
            ],
          },
          {
            id: "use",
            title: "3. How information may be used",
            blocks: [
              { kind: "list", items: ["To provide, personalize, and secure the learning workspace.", "To save progress and support accountability features.", "To review access requests and prevent unauthorized use.", "To maintain reliability, diagnose problems, and respond to support requests.", "To meet legal obligations and protect the service, users, and other people."] },
              { kind: "paragraph", text: "StackBridge should not use learning notes or account information for a new purpose that is materially different from the purpose described here without providing an appropriate notice." },
            ],
          },
          {
            id: "sharing",
            title: "4. Sharing and service providers",
            blocks: [
              { kind: "paragraph", text: "StackBridge may share the minimum information needed with carefully selected providers that host, authenticate, store, secure, or deliver the service. Providers should process information only for the agreed service purposes and under appropriate contractual or technical safeguards." },
              { kind: "paragraph", text: "This starter document intentionally does not claim a fixed list of subprocessors. The owner should publish an accurate provider list before relying on this policy." },
            ],
          },
          {
            id: "choices",
            title: "5. Your choices and rights",
            blocks: [
              { kind: "paragraph", text: "Depending on where you live, you may have rights to request access to, correction of, deletion of, or a copy of personal information, or to object to or restrict certain processing. You may also be able to close your account through the authentication provider or by contacting StackBridge." },
              { kind: "paragraph", text: "To make a request, include enough information for StackBridge to understand and verify it. The owner should confirm the applicable response timelines and identity-verification process for the jurisdictions served." },
            ],
          },
          {
            id: "security",
            title: "6. Retention and security",
            blocks: [
              { kind: "paragraph", text: "Information should be kept only for as long as it is needed for the purposes described in this policy, unless a longer period is required by law. StackBridge should use reasonable administrative, technical, and organizational measures to protect information, but no online service can promise absolute security." },
            ],
          },
          {
            id: "children",
            title: "7. Children",
            blocks: [
              { kind: "paragraph", text: "StackBridge is intended for professional learners and is not knowingly designed for children under the minimum age required by applicable law. If you believe a child provided personal information, contact StackBridge so the owner can review and remove it where appropriate." },
            ],
          },
          {
            id: "contact",
            title: "8. Contact and changes",
            blocks: [
              { kind: "paragraph", text: "Questions about this policy can be sent to the support address listed below. StackBridge may update this policy as the product, providers, or legal requirements change. The owner should publish a new effective date and a clear notice for material changes." },
            ],
          },
        ],
      },
      terms: {
        title: "A straightforward agreement for a learning workspace.",
        intro: "These starter terms describe the intended relationship between StackBridge and its users. They require owner and legal review before production use.",
        updated: "August 20, 2026",
        sections: [
          {
            id: "scope",
            title: "1. About these terms",
            blocks: [
              { kind: "paragraph", text: "These Terms of Service govern access to the StackBridge public website and learning workspace. StackBridge helps experienced practitioners translate professional knowledge across cloud platforms, tools, and certification paths." },
              { kind: "paragraph", text: "These are starter terms, not legal advice. The StackBridge owner should confirm the business entity, governing law, dispute process, availability commitments, payment terms, and other product-specific details before relying on them." },
            ],
          },
          {
            id: "use",
            title: "2. Using StackBridge",
            blocks: [
              { kind: "paragraph", text: "You may use StackBridge only in accordance with these terms and applicable law. You are responsible for the accuracy of information you provide, for keeping your account credentials secure, and for activity performed through your account." },
              { kind: "paragraph", text: "Access may be invitation-based or subject to an approval process. StackBridge may limit, suspend, or revoke access when needed to protect the service, investigate misuse, or comply with law." },
              { kind: "heading", text: "Learning content is educational" },
              { kind: "paragraph", text: "StackBridge’s roadmaps, translations, examples, and links are educational resources. They are not professional, legal, security, financial, or certification authority advice. You are responsible for validating implementation decisions against current official provider documentation and your own environment." },
            ],
          },
          {
            id: "content",
            title: "3. Your content",
            blocks: [
              { kind: "paragraph", text: "You retain ownership of the notes, reflections, and other content you submit, subject to the rights needed for StackBridge and its providers to host, store, back up, display, and process that content to operate the service." },
              { kind: "paragraph", text: "You must have the rights needed to submit your content and must not upload secrets, credentials, personal information about other people without authorization, or material that is unlawful, harmful, infringing, or intended to compromise the service." },
            ],
          },
          {
            id: "platform",
            title: "4. StackBridge content",
            blocks: [
              { kind: "paragraph", text: "StackBridge and its licensors retain rights in the website, product interface, branding, software, and original learning content, except for content that belongs to you or is made available under a separate open-source or third-party license." },
              { kind: "paragraph", text: "These terms do not grant a right to copy, resell, reverse engineer, scrape, or commercially redistribute StackBridge except as allowed by law or an applicable license." },
            ],
          },
          {
            id: "acceptable-use",
            title: "5. Acceptable use",
            blocks: [
              { kind: "paragraph", text: "You may not misuse StackBridge, interfere with its operation, bypass access controls, probe accounts or infrastructure without permission, introduce malicious code, or use the service to violate another person’s rights or applicable law." },
              { kind: "paragraph", text: "If you find a security issue, report it responsibly to the support address listed below and avoid accessing or changing data that is not yours." },
            ],
          },
          {
            id: "availability",
            title: "6. Availability and third parties",
            blocks: [
              { kind: "paragraph", text: "StackBridge may change, pause, or discontinue features. The service may depend on third-party hosting, authentication, database, cloud, and documentation providers. Their products and terms may apply to the relevant part of your use." },
              { kind: "paragraph", text: "To the extent permitted by law, StackBridge is provided on an “as available” basis without promises that every path, link, translation, or feature will always be complete, current, or error-free." },
            ],
          },
          {
            id: "liability",
            title: "7. Liability and indemnity",
            blocks: [
              { kind: "paragraph", text: "The owner should have qualified counsel tailor any liability limits, warranty disclaimers, indemnity terms, and consumer-rights disclosures to the jurisdictions and audiences served. Nothing in these starter terms is intended to remove rights that cannot legally be waived." },
            ],
          },
          {
            id: "contact",
            title: "8. Contact and changes",
            blocks: [
              { kind: "paragraph", text: "Questions about these terms can be sent to the support address listed below. StackBridge may update these terms as the service changes. Material changes should be communicated with a new effective date and an appropriate notice." },
            ],
          },
        ],
      },
    },
    authHelp: {
      title: "A handrail for getting into the workspace.",
      intro: "Use this page when an account, invitation, or sign-in flow needs a little more context. It is designed to be reusable by a product’s authentication screen.",
      steps: [
        { title: "Start with the sign-in link", body: "Use the product’s official homepage and choose the sign-in or create-account action. Do not send passwords, access codes, or cloud credentials by email." },
        { title: "Check the account you used", body: "If a product uses an approval queue, sign in with the same email address that requested access. A successful authentication does not necessarily mean the account has been approved for the workspace." },
        { title: "Ask for help", body: "If the link loops, an invitation is missing, or access is still pending, contact the product support address below with a short description and the account email—never with a password or secret." },
      ],
    },
  },
};

export function getProduct(slug: string): ProductConfig | undefined {
  return products[slug];
}

export function productRoute(product: ProductConfig, page?: "privacy" | "terms" | "help" | "data"): string {
  return `/products/${product.slug}${page ? `/${page}` : ""}`;
}
