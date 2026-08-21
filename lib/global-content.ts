import type { AuthHelpConfig, DocumentConfig } from "./content";
import { platform } from "./platform";

const supportAddress = "the support address listed below";

export const globalDocuments: { privacy: DocumentConfig; terms: DocumentConfig } = {
  privacy: {
    title: "A clear account of the information around BOLABLG.com.",
    intro: "This general privacy template explains how the BOLABLG legal and account center is intended to work. Product-specific notices add the detail for each application.",
    updated: "August 20, 2026",
    sections: [
      {
        id: "scope",
        title: "1. Scope",
        blocks: [
          { kind: "paragraph", text: "This general Privacy Policy applies to the public legal and account center at legal.bolablg.com and describes the baseline approach for BOLABLG.com applications that link to it. It is a shared foundation, not a replacement for a product-specific privacy notice." },
          { kind: "paragraph", text: "Each product page should identify the application, the information it handles, the providers it actually uses, and any additional choices that apply to that product. If a product notice conflicts with this general policy, the product notice should control for that product-specific practice." },
          { kind: "paragraph", text: "This page is a practical starter template, not legal advice. The BOLABLG.com owner should confirm the actual entities, jurisdictions, providers, retention periods, legal bases, and contact process before relying on it." },
        ],
      },
      {
        id: "information",
        title: "2. Information handled by this center",
        blocks: [
          { kind: "heading", text: "When you browse" },
          { kind: "paragraph", text: "The hosting provider may process basic request information needed to deliver and secure this site, such as browser and device characteristics, approximate location derived from an IP address, timestamps, and security logs. The owner should update this section if analytics, advertising, cookies, forms, or other optional tools are enabled." },
          { kind: "heading", text: "When you contact support" },
          { kind: "paragraph", text: `If you contact ${supportAddress}, the owner may receive the contact details and message you choose to send. Please do not include passwords, one-time codes, API keys, or other secrets.` },
          { kind: "heading", text: "When you follow a product link" },
          { kind: "paragraph", text: "A product may process additional account, learning, billing, or technical information after you leave this center. The relevant product page should explain those practices separately." },
        ],
      },
      {
        id: "authentication",
        title: "3. Authentication and product data",
        blocks: [
          { kind: "paragraph", text: `Some BOLABLG.com applications use ${platform.authProvider} for account registration, sign-in, verification, and related access controls. When you use one of those applications, ${platform.authProvider} may process the information required for the authentication transaction. The product-specific page should identify that relationship and link to the provider's current documentation where appropriate.` },
          { kind: "paragraph", text: "The legal center itself is not intended to replace a product's authentication system or to collect account credentials. Product-specific notices should explain what the application receives from its authentication provider and what it stores in its own systems." },
        ],
      },
      {
        id: "use",
        title: "4. How information may be used",
        blocks: [
          { kind: "list", items: ["To publish and maintain this legal and account center.", "To respond to questions, access requests, and support messages.", "To link users to the correct product policies and authentication guidance.", "To maintain reliability, diagnose problems, prevent abuse, and protect the site.", "To meet legal obligations and exercise or defend legal rights where appropriate."] },
          { kind: "paragraph", text: "A product owner should not use personal information for a materially different purpose without providing an appropriate notice and, where required, obtaining a choice or consent." },
        ],
      },
      {
        id: "sharing",
        title: "5. Sharing and service providers",
        blocks: [
          { kind: "paragraph", text: "The owner may use providers for hosting, security, email, authentication, analytics, storage, or other operational needs, but the provider list should match the tools actually enabled. This starter document intentionally does not claim a fixed list of subprocessors." },
          { kind: "paragraph", text: "Product-specific pages should identify material providers and explain when a product shares information with them. The owner should use appropriate contractual, technical, and organizational safeguards for those relationships." },
        ],
      },
      {
        id: "choices",
        title: "6. Your choices and rights",
        blocks: [
          { kind: "paragraph", text: "Depending on where you live, you may have rights to request access to, correction of, deletion of, or a copy of personal information, or to object to or restrict certain processing. You may also have choices about communications, optional cookies, and account closure." },
          { kind: "paragraph", text: `To make a request, contact ${supportAddress} with enough information for the owner to understand and verify it. The owner should confirm the applicable response timelines, identity-verification process, and product-specific routing before relying on this template.` },
        ],
      },
      {
        id: "retention-security",
        title: "7. Retention and security",
        blocks: [
          { kind: "paragraph", text: "Information should be kept only for as long as it is needed for the purposes described in the applicable notice, unless a longer period is required by law. The owner should use reasonable administrative, technical, and organizational measures to protect information. No online service can promise absolute security." },
        ],
      },
      {
        id: "children",
        title: "8. Children",
        blocks: [
          { kind: "paragraph", text: "BOLABLG.com applications should state their intended audience and age requirements accurately. Unless a product notice says otherwise, the services are not knowingly designed for children under the minimum age required by applicable law. Contact the owner if you believe a child provided personal information." },
        ],
      },
      {
        id: "contact",
        title: "9. Contact and changes",
        blocks: [
          { kind: "paragraph", text: `Questions about this general policy can be sent to ${supportAddress}. The owner may update it as BOLABLG.com applications, providers, or legal requirements change. Material changes should receive a new effective date and an appropriate notice.` },
        ],
      },
    ],
  },
  terms: {
    title: "A straightforward foundation for using BOLABLG.com services.",
    intro: "These general terms describe the intended relationship around this public legal center. Product-specific terms or addenda govern the application you choose to use.",
    updated: "August 20, 2026",
    sections: [
      {
        id: "about",
        title: "1. About these terms",
        blocks: [
          { kind: "paragraph", text: "These general Terms of Service govern your use of the public legal and account center at legal.bolablg.com. The center provides public information, links to BOLABLG.com products, general account guidance, and policy documents." },
          { kind: "paragraph", text: "A product may have additional terms, an agreement, or rules that apply to its own workspace. Those product-specific terms should be read together with these general terms." },
          { kind: "paragraph", text: "These are starter terms, not legal advice. The BOLABLG.com owner should confirm the legal entity, governing law, dispute process, availability commitments, and jurisdiction-specific disclosures before relying on them." },
        ],
      },
      {
        id: "use",
        title: "2. Using the legal center",
        blocks: [
          { kind: "paragraph", text: "You may browse and use this center for lawful informational purposes. You are responsible for the accuracy of information you submit through any contact or support channel and for keeping any account credentials secure on the linked product." },
          { kind: "paragraph", text: "The center does not create an account for you, approve product access, or replace a product's authentication flow. Follow the instructions on the relevant product page." },
        ],
      },
      {
        id: "content",
        title: "3. Content and links",
        blocks: [
          { kind: "paragraph", text: "The owner and its licensors retain rights in the center's original copy, interface, branding, and software, except for content made available under a separate license. You may not copy, resell, scrape, or redistribute the center in a way that harms its operation or misrepresents the source." },
          { kind: "paragraph", text: "The center may link to BOLABLG.com products and third-party services. A link is provided for convenience and does not mean the owner controls or guarantees the linked service." },
        ],
      },
      {
        id: "acceptable-use",
        title: "4. Acceptable use",
        blocks: [
          { kind: "paragraph", text: "You may not interfere with the center, bypass access controls, probe infrastructure without permission, introduce malicious code, harvest information, impersonate another person, or use the site to violate another person's rights or applicable law." },
          { kind: "paragraph", text: `If you find a security issue, report it responsibly to ${supportAddress} and avoid accessing or changing data that is not yours.` },
        ],
      },
      {
        id: "product-terms",
        title: "5. Product-specific terms",
        blocks: [
          { kind: "paragraph", text: "When you follow a product link or use a BOLABLG.com application, the product's own terms, privacy notice, authentication rules, and acceptable-use requirements may apply. The product directory is the source of truth for the applications currently represented in this center." },
        ],
      },
      {
        id: "availability",
        title: "6. Availability and changes",
        blocks: [
          { kind: "paragraph", text: "The owner may change, pause, or discontinue the center, its content, or its links. The center may depend on third-party hosting, authentication, email, and security providers. To the extent permitted by law, it is provided on an “as available” basis without a promise that every page or link will always be complete, current, or error-free." },
        ],
      },
      {
        id: "liability",
        title: "7. Liability and legal review",
        blocks: [
          { kind: "paragraph", text: "The owner should have qualified counsel tailor any liability limits, warranty disclaimers, indemnity terms, consumer-rights disclosures, and governing-law provisions to the jurisdictions and audiences served. Nothing in these starter terms is intended to remove rights that cannot legally be waived." },
        ],
      },
      {
        id: "contact",
        title: "8. Contact and changes",
        blocks: [
          { kind: "paragraph", text: `Questions about these general terms can be sent to ${supportAddress}. The owner may update these terms as BOLABLG.com services change. Material changes should be communicated with a new effective date and an appropriate notice.` },
        ],
      },
    ],
  },
};

export const globalAuthHelp: AuthHelpConfig = {
  title: "Account help, without the runaround.",
  intro: `This is the shared starting point for BOLABLG.com applications that use ${platform.authProvider} for registration or sign-in. Choose a product when you need product-specific access guidance.`,
  steps: [
    { title: "Start at the product you want", body: "Open the product directory and choose the application you are trying to use. Its product page explains the correct sign-in link, access model, and product-specific support route." },
    { title: "Use the same account consistently", body: "If a product uses an approval queue or an allow-list, sign in with the same email address that requested access. Successful authentication does not necessarily mean the product workspace has approved the account." },
    { title: "Complete verification carefully", body: `Follow the verification instructions shown by ${platform.authProvider} or the product. Never send passwords, one-time codes, API keys, or cloud credentials to support.` },
    { title: "Take product questions to the product page", body: "A missing invitation, an access decision, or a saved-progress issue may belong to the product rather than the legal center. Use its product-specific help page or support address so the right owner can respond." },
  ],
};
