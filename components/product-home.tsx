import Link from "next/link";
import { ArrowRight, ArrowUpRight, BridgeIcon, CheckIcon } from "./icons";
import { SiteShell } from "./site-shell";
import type { ProductConfig } from "../lib/products";
import { productRoute } from "../lib/products";

export function ProductHome({ product }: Readonly<{ product: ProductConfig }>) {
  return (
    <SiteShell product={product}>
      <section className="home-hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> {product.eyebrow}</div>
          <h1>{product.hero.headline}<br /><em>{product.hero.emphasis}</em></h1>
          <p className="hero-lede">{product.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={product.homepageUrl}>Explore the workspace <ArrowUpRight size={16} /></a>
            <a className="text-link" href="#paths">View available paths <ArrowRight size={16} /></a>
          </div>
          <div className="hero-proof"><CheckIcon size={16} /> Built around transfer, not repetition</div>
        </div>
        <div className="hero-map" aria-label="A visual showing expertise carried from one platform to another">
          <div className="map-caption">The bridge is the method</div>
          <div className="map-stage">
            <div className="map-orbit orbit-one" />
            <div className="map-orbit orbit-two" />
            <div className="map-path path-left"><span>what you know</span></div>
            <div className="map-path path-right"><span>where you are going</span></div>
            <div className="map-bridge"><BridgeIcon size={62} /></div>
            <div className="map-node node-source"><strong>GCP</strong><small>source</small></div>
            <div className="map-node node-target"><strong>AWS</strong><small>destination</small></div>
            <div className="map-center-label">transfer<br />the pattern</div>
          </div>
          <div className="map-footnote"><span>01</span> One route is live now; the library grows with you.</div>
        </div>
      </section>

      <section className="statement-band" aria-label={`${product.name} statement`}>
        <span className="statement-index">01 / 03</span>
        <p>{product.hero.statement}</p>
      </section>

      <section className="section-block paths-section" id="paths">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" /> Path library</div>
            <h2>Find your next<br /><em>bridge.</em></h2>
          </div>
          <p>Start with a role, choose the platform you know, and see where your existing mental models can take you next.</p>
        </div>
        <div className="route-list">
          {product.pathLibrary.map((route, index) => (
            <div className={`route-card${route.status === "live" ? " route-card-active" : ""}`} key={route.profile}>
              <div className="route-number">0{index + 1}</div>
              <div className="route-main">
                <div className="route-title-row"><h3>{route.profile}</h3><span className={`status-pill${route.status === "live" ? " status-live" : ""}`}><i /> {route.status === "live" ? "Available now" : "Coming soon"}</span></div>
                <p>{route.meta}</p>
                <div className="route-flow"><span>{route.source}</span><ArrowRight size={17} /><span>{route.destination}</span></div>
              </div>
              {route.status === "live" ? <a className="route-action" href={product.homepageUrl} aria-label={`Open ${route.profile} path`}><ArrowUpRight size={20} /></a> : <span className="route-action route-action-muted" aria-hidden="true">—</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="section-block philosophy-section">
        <div className="philosophy-mark"><BridgeIcon size={38} /></div>
        <div className="philosophy-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> The {product.name} principle</div>
          <h2>Translate the <em>thinking.</em><br />Learn the syntax.</h2>
          <p>The services change names. The hard-won instincts—how to model, move, secure, observe, and explain data—are yours to keep. {product.name} makes that continuity visible and actionable.</p>
          <Link className="text-link" href={productRoute(product, "help")}>Need a handrail? Visit support <ArrowRight size={16} /></Link>
        </div>
        <div className="principle-list">
          <div><span>01</span><strong>Start from expertise</strong><p>Meet the learner at the platform they already understand.</p></div>
          <div><span>02</span><strong>Make the translation explicit</strong><p>Map services, patterns, and trade-offs side by side.</p></div>
          <div><span>03</span><strong>Practice toward evidence</strong><p>Turn a route into a repeatable, accountable learning path.</p></div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="closing-ornament" aria-hidden="true"><span /><span /><span /></div>
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" /> Your next platform is already mapped</div>
          <h2>Build on what<br /><em>you know.</em></h2>
        </div>
        <a className="button button-dark" href={product.homepageUrl}>Open {product.name} <ArrowUpRight size={16} /></a>
      </section>
    </SiteShell>
  );
}
