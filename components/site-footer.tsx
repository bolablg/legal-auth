import Link from "next/link";
import { ArrowUpRight, BridgeIcon } from "./icons";
import { navigation } from "../lib/site";
import { defaultProduct, productRoute, type ProductConfig } from "../lib/products";

export function SiteFooter({ product = defaultProduct }: Readonly<{ product?: ProductConfig }>) {
  const isDefault = product.slug === defaultProduct.slug;
  const route = (page: "privacy" | "terms" | "help") => isDefault ? `/${page}` : productRoute(product, page);
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="brand footer-brand" href="/" aria-label={`${product.name} home`}>
          <span className="brand-mark"><BridgeIcon size={22} /></span>
          <span className="brand-wordmark">Stack<span>Bridge</span></span>
        </Link>
        <p>One legal and authentication foundation. More than one product to support.</p>
        <a className="footer-external" href={product.homepageUrl}>
          Go to {product.name} <ArrowUpRight size={15} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {product.name}</span>
        <nav aria-label="Footer navigation">
          {navigation.slice(1).map((item) => (
            <Link key={item.href} href={route(item.href.slice(1) as "privacy" | "terms" | "help")}>{item.label}</Link>
          ))}
        </nav>
        <span className="footer-note">Built for people who keep learning.</span>
      </div>
    </footer>
  );
}
