import { Mail, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/icons";
import { navLinks, profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-navy-line bg-navy text-white">
      <div className="container-px mx-auto max-w-6xl py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-semibold text-navy">
                JK
              </span>
              <span className="text-base font-semibold">Jahnavi Kotana</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Associate Product Manager building customer-centric B2B SaaS
              products through discovery, data and execution.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="eyebrow text-white/40">Navigate</p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-white/40">Connect</p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4" aria-hidden /> Email
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <LinkedInIcon className="h-4 w-4" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={profile.resumePath}
                    download
                    className="inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" aria-hidden /> Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-navy-line pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Jahnavi Kotana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
