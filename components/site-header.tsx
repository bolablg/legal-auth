import Link from "next/link";
import { ArrowUpRight, BridgeIcon } from "./icons";
import { navigation } from "../lib/site";
import { defaultProduct, productRoute, type ProductConfig } from "../lib/products";

export function SiteHeader({ product = defaultProduct }: Readonly<{ product?: ProductConfig }>) {
  const isDefault = product.slug === defaultProduct.slug;
  const route = (page?: "privacy" | "terms" | "help") => isDefault ? (page ? `/${page}` : "/") : productRoute(product, page);
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label={`${product.name} home`}>
        <span className="brand-mark"><BridgeIcon size={24} /></span>
        <span className="brand-wordmark">Stack<span>Bridge</span></span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href === "/" ? route() : route(item.href.slice(1) as "privacy" | "terms" | "help")}>{item.label}</Link>
        ))}
      </nav>
      <a className="header-cta" href={product.homepageUrl}>
        Open workspace <ArrowUpRight size={15} />
      </a>
    </header>
  );
}
