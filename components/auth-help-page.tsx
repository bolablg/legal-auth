import { ArrowUpRight } from "./icons";
import { SiteShell } from "./site-shell";
import type { ProductConfig } from "../lib/products";

export function AuthHelpPage({ product }: Readonly<{ product: ProductConfig }>) {
  return (
    <SiteShell product={product}>
      <section className="legal-hero help-hero">
        <div className="eyebrow"><span className="eyebrow-dot" /> {product.name} / Account help</div>
        <h1>{product.authHelp.title}</h1>
        <p>{product.authHelp.intro}</p>
      </section>
      <div className="help-layout">
        <div className="help-steps">
          {product.authHelp.steps.map((step, index) => (
            <article className="help-step" key={step.title}>
              <span className="help-step-number">0{index + 1}</span>
              <div><h2>{step.title}</h2><p>{step.body}</p></div>
            </article>
          ))}
        </div>
        <aside className="help-contact">
          <span className="aside-label">Support contact</span>
          <h2>Still stuck?</h2>
          <p>Send a short description of the issue. Please do not include passwords, one-time codes, API keys, or other secrets.</p>
          <a className="button button-primary" href={`mailto:${product.supportEmail}`}>Email support <ArrowUpRight size={16} /></a>
          <a className="help-home-link" href={product.homepageUrl}>Return to {product.name} <ArrowUpRight size={15} /></a>
        </aside>
      </div>
    </SiteShell>
  );
}
