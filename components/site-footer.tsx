import Link from "next/link";
import { ArrowUpRight, BridgeIcon } from "./icons";
import { navigation, site } from "../lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="brand footer-brand" href="/" aria-label="StackBridge home">
          <span className="brand-mark"><BridgeIcon size={22} /></span>
          <span className="brand-wordmark">Stack<span>Bridge</span></span>
        </Link>
        <p>One body of expertise. More than one place to practice it.</p>
        <a className="footer-external" href={site.appUrl}>
          Go to StackBridge <ArrowUpRight size={15} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} StackBridge</span>
        <nav aria-label="Footer navigation">
          {navigation.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <span className="footer-note">Built for people who keep learning.</span>
      </div>
    </footer>
  );
}
