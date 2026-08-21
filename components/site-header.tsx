import Link from "next/link";
import { ArrowUpRight, BridgeIcon } from "./icons";
import { navigation, site } from "../lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="StackBridge home">
        <span className="brand-mark"><BridgeIcon size={24} /></span>
        <span className="brand-wordmark">Stack<span>Bridge</span></span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </nav>
      <a className="header-cta" href={site.appUrl}>
        Open workspace <ArrowUpRight size={15} />
      </a>
    </header>
  );
}
