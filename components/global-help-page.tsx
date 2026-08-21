import Link from "next/link";
import { ArrowUpRight } from "./icons";
import { SiteShell } from "./site-shell";
import { globalAuthHelp } from "../lib/global-content";
import { platform } from "../lib/platform";

export function GlobalHelpPage() {
  return (
    <SiteShell>
      <section className="legal-hero help-hero">
        <div className="eyebrow"><span className="eyebrow-dot" /> {platform.name} / Account help</div>
        <h1>{globalAuthHelp.title}</h1>
        <p>{globalAuthHelp.intro}</p>
      </section>
      <div className="help-layout">
        <div className="help-steps">
          {globalAuthHelp.steps.map((step, index) => (
            <article className="help-step" key={step.title}>
              <span className="help-step-number">0{index + 1}</span>
              <div><h2>{step.title}</h2><p>{step.body}</p></div>
            </article>
          ))}
        </div>
        <aside className="help-contact">
          <span className="aside-label">Shared support</span>
          <h2>Still stuck?</h2>
          <p>Send a short description and tell us which product you were trying to reach. Please do not include passwords, one-time codes, API keys, or other secrets.</p>
          <a className="button button-primary" href={`mailto:${platform.supportEmail}`}>Email support <ArrowUpRight size={16} /></a>
          <Link className="help-home-link" href="/products">Choose a product <ArrowUpRight size={15} /></Link>
        </aside>
      </div>
    </SiteShell>
  );
}
