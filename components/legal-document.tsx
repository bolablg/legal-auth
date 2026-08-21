import type { LegalSection, ProductConfig } from "../lib/products";
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

export function LegalDocument({ product, type }: Readonly<{ product: ProductConfig; type: "privacy" | "terms" }>) {
  const document = product.legal[type];
  return (
    <LegalShell product={product} label={type === "privacy" ? "Privacy policy" : "Terms of service"} title={document.title} intro={document.intro} asideLinks={document.sections.slice(0, 4).map((section) => ({ id: section.id, label: section.title.replace(/^\d+\.\s*/, "") }))}>
      <p className="legal-kicker">Last updated · {document.updated}</p>
      <div className="legal-document-sections">
        {document.sections.map((section) => renderSection(section, product.supportEmail))}
      </div>
    </LegalShell>
  );
}
