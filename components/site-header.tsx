import Link from "next/link";
import { ArrowUpRight, CenterIcon } from "./icons";
import { navigation } from "../lib/site";
import type { ProductConfig } from "../lib/products";
import { platform } from "../lib/platform";

export function SiteHeader({ product }: Readonly<{ product?: ProductConfig }>) {
  return (
    <header className="site-header">
      <div className="brand-cluster">
        <Link className="brand" href="/" aria-label={`${platform.name} ${platform.legalCenterName}`}>
          <span className="brand-mark"><CenterIcon size={24} /></span>
          <span className="brand-wordmark">BOLABLG<span>.com</span></span>
        </Link>
        {product ? <Link className="product-context" href={`/products/${product.slug}`}><span>Product</span>{product.name}</Link> : <span className="brand-context">{platform.legalCenterName}</span>}
      </div>
      <nav className="site-nav" aria-label="Primary navigation">
        {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <a className="header-cta" href={product ? product.homepageUrl : "/products"}>
        {product ? `Open ${product.name}` : "Browse products"} <ArrowUpRight size={15} />
      </a>
    </header>
  );
}
