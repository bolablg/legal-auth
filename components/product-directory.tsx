import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "./icons";
import { products } from "../lib/products";

export function ProductDirectory() {
  const productList = Object.values(products);
  return (
    <section className="directory-block">
      <div className="directory-heading">
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" /> Available applications</div>
          <h2>A product is more<br /><em>than a link.</em></h2>
        </div>
        <p>Every entry can grow its own overview, data practices, legal addenda, and account-support trail without fragmenting the shared BOLABLG.com foundation.</p>
      </div>
      <div className="directory-list">
        {productList.map((product, index) => {
          const livePath = product.pathLibrary.find((path) => path.status === "live");
          return (
            <Link className="directory-card" href={`/products/${product.slug}`} key={product.slug} style={{ "--product-accent": product.brand.accent } as CSSProperties}>
              <span className="directory-card-number">0{index + 1}</span>
              <div className="directory-card-main">
                <div className="directory-card-top"><span className="directory-card-eyebrow">{product.eyebrow}</span><span className="status-pill status-live"><i /> Available</span></div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                {livePath ? <div className="directory-route"><span>{livePath.source}</span><ArrowRight size={15} /><span>{livePath.destination}</span></div> : null}
              </div>
              <span className="directory-card-action" aria-hidden="true"><ArrowUpRight size={19} /></span>
            </Link>
          );
        })}
      </div>
      <p className="directory-note">New BOLABLG.com applications can be added through the product registry when their public pages are ready.</p>
    </section>
  );
}
