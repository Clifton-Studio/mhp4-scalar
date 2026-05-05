"use client";
import { useEffect, useState } from "react";

import {
  Github01Icon,
  NewTwitterIcon,
  SlackIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import Logo from "@/components/layout/logo";
import { EXTERNAL_LINKS } from "@/constants/external-links";
import { cn } from "@/lib/utils";

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
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Get initial theme from localStorage, default to 'light' if none exists
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    setTheme(savedTheme || "light");

    // Listen for theme changes
    const handleStorageChange = () => {
      const newTheme = localStorage.getItem("theme") as "light" | "dark" | null;
      if (newTheme) {
        setTheme(newTheme);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Listen for direct DOM class changes (for immediate updates)
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      observer.disconnect();
    };
  }, []);

  // Prevent hydration mismatch by using a consistent theme class until mounted
  // Footer is in light mode when dark theme is applied (inverted behavior)
  const themeClass =
    mounted && theme === "dark"
      ? "light bg-foreground text-background [&_*]:border-border/30"
      : "dark bg-background text-foreground";

  // Logo should be inverted when footer has light background (dark theme)
  // and not inverted when footer has dark background (light theme)
  const logoWordmarkClass = cn(
    "w-[min(100%,400px)] translate-y-1/4 md:translate-y-1/3 md:h-32 md:w-full lg:h-73 opacity-10",
    mounted && theme === "dark" ? "invert-0" : "invert",
  );
  const smallLogoClass = cn(
    "h-4 w-auto",
    mounted && theme === "dark" ? "invert-0" : "invert",
  );

  return (
    <footer className={cn("overflow-hidden", themeClass)}>
      <div className="container border-x border-b">
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
          <div className="bordered-div-padding grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
