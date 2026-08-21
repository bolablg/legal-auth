import type { ReactNode } from "react";
import type { CSSProperties } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import type { ProductConfig } from "../lib/products";
import { platform } from "../lib/platform";

export function SiteShell({ children, product }: Readonly<{ children: ReactNode; product?: ProductConfig }>) {
  const brand = product?.brand ?? platform.brand;
  const theme = { "--accent": brand.accent, "--accent-dark": brand.accentDark } as CSSProperties;
  return (
    <div className="site-shell" style={theme}>
      <SiteHeader product={product} />
      <main>{children}</main>
      <SiteFooter product={product} />
    </div>
  );
}

export function LegalShell({ children, product, label, title, intro, asideLinks, reviewNote }: Readonly<{
  children: ReactNode;
  product?: ProductConfig;
  label: string;
  title: string;
  intro: string;
  asideLinks?: Array<{ id: string; label: string }>;
  reviewNote?: string;
}>) {
  const links = asideLinks ?? [
    { id: "scope", label: "Scope" },
    { id: "information", label: "Information" },
    { id: "choices", label: "Your choices" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <SiteShell product={product}>
      <section className="legal-hero">
        <div className="eyebrow"><span className="eyebrow-dot" /> {product ? `${product.name} /` : `${platform.name} /`} {label}</div>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      <div className="legal-layout">
        <aside className="legal-aside" aria-label="On this page">
          <span className="aside-label">On this page</span>
          {links.map((link) => <a key={link.id} href={`#${link.id}`}>{link.label}</a>)}
        </aside>
        <article className="legal-copy">
          <div className="legal-review-note">
            <span className="review-pip" /> {reviewNote ?? "Starter template · Owner and legal review required before relying on this document."}
          </div>
          {children}
        </article>
      </div>
    </SiteShell>
  );
}
