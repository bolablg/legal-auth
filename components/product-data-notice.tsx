import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldIcon } from "./icons";
import type { ProductConfig } from "../lib/products";
import { SiteShell } from "./site-shell";

export function ProductDataNotice({ product }: Readonly<{ product: ProductConfig }>) {
  return (
    <SiteShell product={product}>
      <section className="legal-hero data-hero">
        <div className="eyebrow"><span className="eyebrow-dot" /> {product.name} / Data & security</div>
        <h1>{product.dataNotice.title}</h1>
        <p>{product.dataNotice.intro}</p>
      </section>
      <div className="data-layout">
        <aside className="data-provider-card">
          <div className="data-provider-mark"><ShieldIcon size={30} /></div>
          <span className="aside-label">Authentication provider</span>
          <h2>{product.dataNotice.provider.split(" for ")[0]}</h2>
          <p>{product.dataNotice.provider}</p>
          <Link className="help-home-link" href="/help">General account help <ArrowUpRight size={15} /></Link>
        </aside>
        <article className="data-copy">
          <div className="legal-product-note"><strong>Product-specific notice.</strong> Read this page with the <Link href="/privacy">general BOLABLG.com Privacy Policy</Link> and <Link href={`/products/${product.slug}/privacy`}>{product.name} Privacy Notice</Link>.</div>
          <section className="data-section" id="categories">
            <div className="eyebrow"><span className="eyebrow-dot" /> Information map</div>
            <h2>Three kinds of context.</h2>
            <div className="data-category-grid">
              {product.dataNotice.categories.map((category, index) => <div className="data-category" key={category.label}><span>0{index + 1}</span><h3>{category.label}</h3><p>{category.detail}</p></div>)}
            </div>
          </section>
          <section className="data-section" id="purposes">
            <div className="eyebrow"><span className="eyebrow-dot" /> Why it is used</div>
            <h2>Useful information, used with a purpose.</h2>
            <ul className="data-purpose-list">{product.dataNotice.purposes.map((purpose) => <li key={purpose}><ArrowRight size={15} />{purpose}</li>)}</ul>
          </section>
          <section className="data-section data-two-column" id="retention">
            <div><div className="eyebrow"><span className="eyebrow-dot" /> Retention</div><h2>Keep only what the path needs.</h2><p>{product.dataNotice.retention}</p></div>
            <div><div className="eyebrow"><span className="eyebrow-dot" /> Security</div><h2>Protect the work.</h2><p>{product.dataNotice.security}</p></div>
          </section>
          <div className="data-footer-links"><Link className="text-link" href={`/products/${product.slug}/help`}>Product account help <ArrowRight size={16} /></Link><Link className="text-link" href={product.homepageUrl}>Open {product.name} <ArrowUpRight size={16} /></Link></div>
        </article>
      </div>
    </SiteShell>
  );
}
