"use client";

import {
  Github01Icon,
  NewTwitterIcon,
  SlackIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import Logo from "@/components/layout/logo";
import { EXTERNAL_LINKS } from "@/constants/external-links";

const footerLinkGroups = [
  {
    title: "Product",
    links: [
      { label: "Maestro Studio", href: EXTERNAL_LINKS.STUDIO },
      { label: "Maestro CLI", href: EXTERNAL_LINKS.CLI },
      { label: "Cloud", href: EXTERNAL_LINKS.CLOUD },
      { label: "Pricing", href: EXTERNAL_LINKS.PRICING },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: EXTERNAL_LINKS.DOCS },
      { label: "Blog", href: EXTERNAL_LINKS.BLOG },
      { label: "Playground", href: EXTERNAL_LINKS.PLAYGROUND },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: EXTERNAL_LINKS.GITHUB_REPO },
      { label: "Slack", href: EXTERNAL_LINKS.SLACK },
      { label: "X/Twitter", href: EXTERNAL_LINKS.TWITTER },
      { label: "Email us", href: EXTERNAL_LINKS.EMAIL },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Privacy Notice", href: "/privacy-policy" },
    ],
  },
];

function isExternalLink(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

const Footer = () => {
  const logoWordmarkClass =
    "w-[min(100%,400px)] translate-y-1/4 invert opacity-10 md:translate-y-1/3 md:h-32 md:w-full lg:h-73";
  const smallLogoClass = "h-4 w-auto invert";

  return (
    <footer className="dark overflow-hidden bg-background text-foreground">
      <div className="mx-3.5 max-w-[1200px] border-x border-b md:mx-7 xl:mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr]">
          <div className="bordered-div-padding flex flex-col justify-between gap-8 border-b md:border-r md:border-b-0">
            <Logo href="/" wordmarkClassName={smallLogoClass} />
            <div className="flex items-center space-x-3">
              <a
                href={EXTERNAL_LINKS.SLACK}
                className="py-2.5 pr-3 transition-opacity hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Slack"
              >
                <HugeiconsIcon
                  icon={SlackIcon}
                  className="size-5"
                  strokeWidth={1.8}
                />
              </a>
              <a
                href={EXTERNAL_LINKS.GITHUB_REPO}
                className="px-3 py-2.5 transition-opacity hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <HugeiconsIcon
                  icon={Github01Icon}
                  className="size-5"
                  strokeWidth={1.8}
                />
              </a>
              <a
                href={EXTERNAL_LINKS.TWITTER}
                className="px-3 py-2.5 transition-opacity hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <HugeiconsIcon
                  icon={NewTwitterIcon}
                  className="size-5"
                  strokeWidth={1.8}
                />
              </a>
            </div>
          </div>
          <div className="bordered-div-padding grid grid-cols-2 gap-8 lg:grid-cols-4">
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-medium">{group.title}</h2>
                <ul className="text-muted-foreground mt-4 space-y-3 text-sm">
                  {group.links.map((link) => {
                    const external = isExternalLink(link.href);

                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="hover:text-foreground transition-opacity hover:opacity-80"
                          {...(external
                            ? {
                                target: "_blank",
                                rel: "noopener noreferrer",
                              }
                            : {})}
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Large Logo */}
        <Logo
          className="justify-center"
          iconClassName="hidden"
          wordmarkClassName={logoWordmarkClass}
        />
      </div>
    </footer>
  );
};

export default Footer;
