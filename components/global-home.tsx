import Link from "next/link";
import { ArrowRight, ArrowUpRight, CenterIcon, ShieldIcon } from "./icons";
import { SiteShell } from "./site-shell";
import { platform } from "../lib/platform";

const services = [
  { number: "01", title: "General privacy", body: "The shared baseline for information handled around BOLABLG.com services.", href: "/privacy", link: "Read the policy" },
  { number: "02", title: "General terms", body: "The plain-language foundation for using this public center and linked products.", href: "/terms", link: "Read the terms" },
  { number: "03", title: "Account help", body: `Practical guidance for registration and sign-in flows, including products using ${platform.authProvider}.`, href: "/help", link: "Get account help" },
];

export function GlobalHome() {
  return (
    <SiteShell>
      <section className="hub-hero">
        <div className="hub-hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> {platform.name} / Public legal center</div>
          <h1>One clear place for <em>the apps you use.</em></h1>
          <p>{platform.description} Find the shared policies first, then move into the product-specific notice and account guidance that applies to you.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/products">Browse the product directory <ArrowUpRight size={16} /></Link>
            <Link className="text-link" href="/privacy">Read general privacy <ArrowRight size={16} /></Link>
          </div>
        </div>
        <aside className="hub-ledger" aria-label="What this center contains">
          <div className="hub-ledger-top"><CenterIcon size={27} /><span>Shared foundation</span></div>
          <div className="hub-ledger-line" />
          <ol>
            <li><span>01</span><div><strong>General layer</strong><p>Privacy, terms, and account guidance for the center.</p></div></li>
            <li><span>02</span><div><strong>Product layer</strong><p>Application-specific notices, data practices, and support.</p></div></li>
            <li><span>03</span><div><strong>Clear handoff</strong><p>One place to know who handles what, and where to ask.</p></div></li>
          </ol>
          <div className="hub-ledger-foot"><span className="eyebrow-dot" /> {platform.authProvider} may power product account flows</div>
        </aside>
      </section>

      <section className="hub-statement" aria-label="Center statement">
        <span className="statement-index">00 / 02</span>
        <p>The legal center is the map. Each application has its own territory.</p>
      </section>

      <section className="section-block hub-services" id="services">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" /> Start here</div>
            <h2>The shared<br /><em>record.</em></h2>
          </div>
          <p>These pages explain the common foundation. Product pages add the details that should never be hidden behind a generic policy.</p>
        </div>
        <div className="hub-service-grid">
          {services.map((service) => (
            <Link className="hub-service-card" href={service.href} key={service.href}>
              <span className="hub-card-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <span className="text-link">{service.link} <ArrowRight size={15} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="hub-auth-band">
        <div className="hub-auth-mark"><ShieldIcon size={38} /></div>
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" /> Authentication note</div>
          <h2>Account flows belong to the product, with a shared handrail.</h2>
          <p>Some BOLABLG.com applications use {platform.authProvider} for registration, sign-in, verification, and access controls. This center explains the pattern; each product page identifies what happens after you choose an application.</p>
        </div>
        <Link className="text-link" href="/help">Account help <ArrowRight size={16} /></Link>
      </section>

      <section className="hub-directory-teaser" id="products">
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" /> Product directory</div>
          <h2>Choose the product<br /><em>you came for.</em></h2>
        </div>
        <div>
          <p>Start with the product, then read its overview, data notice, privacy addendum, terms, and account help as one coherent record.</p>
          <Link className="button button-dark" href="/products">Open the directory <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </SiteShell>
  );
}
