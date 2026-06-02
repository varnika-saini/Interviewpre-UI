import Link from "next/link";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/common/brand-icons";
import { Logo } from "@/components/common/logo";
import { FOOTER_LINKS, APP_NAME } from "@/constants";

export function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The all-in-one platform to practice, track, and ace your next
              technical interview.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[GitHubIcon, LinkedInIcon, XIcon].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {2026} {APP_NAME}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built for engineers, by engineers.
          </p>
        </div>
      </div>
    </footer>
  );
}
