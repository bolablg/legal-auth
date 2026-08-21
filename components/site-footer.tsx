import Link from "next/link";
import { ArrowUpRight, CenterIcon } from "./icons";
import { navigation } from "../lib/site";
import type { ProductConfig } from "../lib/products";
import { platform } from "../lib/platform";

export function SiteFooter({ product }: Readonly<{ product?: ProductConfig }>) {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="brand footer-brand" href="/" aria-label={`${platform.name} ${platform.legalCenterName}`}>
          <span className="brand-mark"><CenterIcon size={22} /></span>
          <span className="brand-wordmark">BOLABLG<span>.com</span></span>
        </Link>
        <p>One legal and authentication foundation. More than one product to support.</p>
        {product ? <a className="footer-external" href={product.homepageUrl}>Go to {product.name} <ArrowUpRight size={15} /></a> : <Link className="footer-external" href="/products">Explore the directory <ArrowUpRight size={15} /></Link>}
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {platform.name}</span>
        <nav aria-label="Footer navigation">
          {navigation.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <span className="footer-note">Shared by BOLABLG.com applications.</span>
      </div>
    </footer>
  );
}
