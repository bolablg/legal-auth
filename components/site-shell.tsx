import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function SiteShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function LegalShell({ children, label, title, intro }: Readonly<{
  children: ReactNode;
  label: string;
  title: string;
  intro: string;
}>) {
  return (
    <SiteShell>
      <section className="legal-hero">
        <div className="eyebrow"><span className="eyebrow-dot" /> StackBridge / {label}</div>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      <div className="legal-layout">
        <aside className="legal-aside" aria-label="On this page">
          <span className="aside-label">On this page</span>
          <a href="#scope">Scope</a>
          <a href="#information">Information</a>
          <a href="#choices">Your choices</a>
          <a href="#contact">Contact</a>
        </aside>
        <article className="legal-copy">
          <div className="legal-review-note">
            <span className="review-pip" /> Starter template · Owner and legal review required before relying on this document.
          </div>
          {children}
        </article>
      </div>
    </SiteShell>
  );
}
