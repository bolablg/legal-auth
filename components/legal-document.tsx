import Link from "next/link";
import type { DocumentConfig, LegalSection } from "../lib/content";
import { globalDocuments } from "../lib/global-content";
import { platform } from "../lib/platform";
import type { ProductConfig } from "../lib/products";
import { LegalShell } from "./site-shell";

function renderSection(section: LegalSection, supportEmail: string) {
  return (
    <section id={section.id} className="legal-section" key={section.id}>
      <h2>{section.title}</h2>
      {section.blocks.map((block, index) => {
        if (block.kind === "heading") return <h3 key={`${section.id}-heading-${index}`}>{block.text}</h3>;
        if (block.kind === "list") {
          return <ul key={`${section.id}-list-${index}`}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
        }
        const text = block.text.replace("the support address listed below", supportEmail);
        return <p key={`${section.id}-paragraph-${index}`}>{text}</p>;
      })}
    </section>
  );
}

function DocumentSections({ document, supportEmail }: Readonly<{ document: DocumentConfig; supportEmail: string }>) {
  return (
    <>
      <p className="legal-kicker">Last updated · {document.updated}</p>
      <div className="legal-document-sections">
        {document.sections.map((section) => renderSection(section, supportEmail))}
      </div>
    </>
  );
}

function asideLinks(document: DocumentConfig) {
  return document.sections.slice(0, 4).map((section) => ({ id: section.id, label: section.title.replace(/^\d+\.\s*/, "") }));
}

export function GlobalLegalDocument({ type }: Readonly<{ type: "privacy" | "terms" }>) {
  const document = globalDocuments[type];
  return (
    <LegalShell label={type === "privacy" ? "General privacy" : "General terms"} title={document.title} intro={document.intro} asideLinks={asideLinks(document)} reviewNote="Starter template · This shared policy needs owner and legal review before relying on it across BOLABLG.com applications.">
      <DocumentSections document={document} supportEmail={platform.supportEmail} />
    </LegalShell>
  );
}

export function LegalDocument({ product, type }: Readonly<{ product: ProductConfig; type: "privacy" | "terms" }>) {
  const document = product.legal[type];
  return (
    <LegalShell product={product} label={type === "privacy" ? "Privacy policy" : "Terms of service"} title={document.title} intro={document.intro} asideLinks={document.sections.slice(0, 4).map((section) => ({ id: section.id, label: section.title.replace(/^\d+\.\s*/, "") }))}>
      <div className="legal-product-note">
        <strong>{product.name} product notice.</strong> Read this page with the <Link href="/privacy">general BOLABLG.com Privacy Policy</Link> and <Link href="/terms">general Terms of Service</Link>. It adds product-specific context; it does not replace the shared documents.
      </div>
      <DocumentSections document={document} supportEmail={product.supportEmail} />
    </LegalShell>
  );
}
