"use client";

import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

interface Company {
  name: string;
  logo: string;
  href?: string;
  logoScale?: string;
  needsScaleGutter?: boolean;
}

interface TrustedTeamsProps {
  heading?: string;
  subheading?: string;
  topRowCompanies?: Company[];
  bottomRowCompanies?: Company[];
  className?: string;
  compact?: boolean;
}

const brandfetchToken = "1idjMwySZlfLUyQ7x24";

const brandfetchLogo = (domain: string) =>
  `https://cdn.brandfetch.io/domain/${domain}/h/120/type/logo?c=${brandfetchToken}`;

const maestroCompanies: Company[] = [
  {
    name: "Microsoft",
    logo: brandfetchLogo("microsoft.com"),
    href: "https://microsoft.com",
    logoScale: "scale-[0.95]",
  },
  {
    name: "Meta",
    logo: brandfetchLogo("meta.com"),
    href: "https://meta.com",
    logoScale: "scale-[2.0]",
    needsScaleGutter: true,
  },
  {
    name: "DoorDash",
    logo: brandfetchLogo("doordash.com"),
    href: "https://doordash.com",
  },
  {
    name: "Uber",
    logo: brandfetchLogo("uber.com"),
    href: "https://uber.com",
    logoScale: "scale-[0.75]",
  },
  {
    name: "xAI",
    logo: brandfetchLogo("x.ai"),
    href: "https://x.ai",
    logoScale: "scale-[0.9]",
  },
  {
    name: "Amazon",
    logo: brandfetchLogo("amazon.com"),
    href: "https://amazon.com",
    logoScale: "scale-[0.9]",
  },
  {
    name: "Disney",
    logo: brandfetchLogo("disney.com"),
    href: "https://disney.com",
    logoScale: "scale-[1.2]",
    needsScaleGutter: true,
  },
  {
    name: "Stripe",
    logo: brandfetchLogo("stripe.com"),
    href: "https://stripe.com",
    logoScale: "scale-[1.4]",
    needsScaleGutter: true,
  },
  {
    name: "Kraken",
    logo: brandfetchLogo("kraken.com"),
    href: "https://kraken.com",
    logoScale: "scale-[0.9]",
  },
  {
    name: "Block",
    logo: brandfetchLogo("block.xyz"),
    href: "https://block.xyz",
  },
  {
    name: "Deel",
    logo: brandfetchLogo("deel.com"),
    href: "https://deel.com",
    logoScale: "scale-[0.8]",
  },
  {
    name: "DuckDuckGo",
    logo: brandfetchLogo("duckduckgo.com"),
    href: "https://duckduckgo.com",
    logoScale: "scale-[1.2]",
    needsScaleGutter: true,
  },
  {
    name: "Brex",
    logo: brandfetchLogo("brex.com"),
    href: "https://brex.com",
    logoScale: "scale-[0.8]",
  },
  {
    name: "Flipkart",
    logo: brandfetchLogo("flipkart.com"),
    href: "https://flipkart.com",
  },
  {
    name: "KFC",
    logo: brandfetchLogo("kfc.com"),
    href: "https://kfc.com",
    logoScale: "scale-[1.22]",
    needsScaleGutter: true,
  },
  {
    name: "IKEA",
    logo: brandfetchLogo("ikea.com"),
    href: "https://ikea.com",
    logoScale: "scale-[0.9]",
  },
  {
    name: "Atlassian",
    logo: brandfetchLogo("atlassian.com"),
    href: "https://atlassian.com",
  },
  {
    name: "Pinterest",
    logo: brandfetchLogo("pinterest.com"),
    href: "https://pinterest.com",
  },
  {
    name: "Bluesky",
    logo: brandfetchLogo("bsky.app"),
    href: "https://bsky.app",
  },
  {
    name: "Sentry",
    logo: brandfetchLogo("sentry.io"),
    href: "https://sentry.io",
    logoScale: "scale-[1.12]",
    needsScaleGutter: true,
  },
  {
    name: "Komoot",
    logo: brandfetchLogo("komoot.com"),
    href: "https://komoot.com",
  },
  {
    name: "Phantom",
    logo: brandfetchLogo("phantom.com"),
    href: "https://phantom.com",
  },
  {
    name: "Flightradar24",
    logo: brandfetchLogo("flightradar24.com"),
    href: "https://flightradar24.com",
    logoScale: "scale-[1.18]",
    needsScaleGutter: true,
  },
  {
    name: "GoodRx",
    logo: brandfetchLogo("goodrx.com"),
    href: "https://goodrx.com",
    logoScale: "scale-[0.9]",
  },
  {
    name: "Yum! Brands",
    logo: brandfetchLogo("yum.com"),
    href: "https://yum.com",
    logoScale: "scale-[1.35]",
    needsScaleGutter: true,
  },
  {
    name: "Holland & Barrett",
    logo: brandfetchLogo("hollandandbarrett.com"),
    href: "https://hollandandbarrett.com",
    logoScale: "scale-[1.14]",
    needsScaleGutter: true,
  },
  {
    name: "Skyscanner",
    logo: brandfetchLogo("skyscanner.com"),
    href: "https://skyscanner.com",
    logoScale: "scale-[1.12]",
    needsScaleGutter: true,
  },
  {
    name: "Blockchain.com",
    logo: brandfetchLogo("blockchain.com"),
    href: "https://blockchain.com",
  },
];

export function TrustedTeams({
  heading = "Trusted by the world's best teams",
  subheading,
  topRowCompanies = maestroCompanies.slice(0, 14),
  bottomRowCompanies = maestroCompanies.slice(14),
  className,
  compact = false,
}: TrustedTeamsProps) {
  const desktopRows = [
    maestroCompanies.slice(0, 6),
    maestroCompanies.slice(6, 12),
    maestroCompanies.slice(12, 18),
    maestroCompanies.slice(18, 23),
    maestroCompanies.slice(23),
  ];

  return (
    <section
      className={cn(
        "overflow-hidden px-4 py-8 md:py-10 lg:py-12",
        compact && "trusted-teams-compact",
        className,
      )}
    >
      <div className={cn(compact ? "trusted-teams-stack" : "space-y-0 md:space-y-8 lg:space-y-12")}>
        <div className="text-center">
          <p className="section-overline">
            <span className="md:hidden">Trusted By Thousands</span>
            <span className="max-md:hidden">{heading}</span>
            {subheading ? (
              <>
                <br className="max-md:hidden" />
                <span className="text-muted-foreground">{subheading}</span>
              </>
            ) : null}
          </p>
        </div>

        <div className="hidden w-full flex-col items-center gap-6 md:flex">
          {desktopRows.map((companies, index) => (
            <LogoRow companies={companies} key={index} />
          ))}
        </div>

        <div className="flex w-full flex-col items-center gap-1 md:hidden">
          <LogoMarquee companies={topRowCompanies} />
          <LogoMarquee companies={bottomRowCompanies} direction="right" />
        </div>
      </div>
    </section>
  );
}

interface LogoRowProps {
  companies: Company[];
}

function LogoRow({ companies }: LogoRowProps) {
  return (
    <div className="flex w-full items-center justify-center gap-x-8 lg:gap-x-10">
      {companies.map((company, index) => (
        <a
          href={company.href || "#"}
          target="_blank"
          rel="noreferrer"
          key={index}
          className={cn(
            "inline-flex items-center justify-center",
            company.needsScaleGutter && "px-4",
          )}
        >
          <LogoImage company={company} className="h-8 max-w-36" />
        </a>
      ))}
    </div>
  );
}

interface LogoImageProps {
  company: Company;
  className: string;
}

function LogoImage({ company, className }: LogoImageProps) {
  return (
    <img
      src={company.logo}
      alt={`${company.name} logo`}
      className={cn(
        "origin-center transform-gpu object-contain",
        className,
        company.logoScale,
      )}
    />
  );
}

interface LogoMarqueeProps {
  companies: Company[];
  direction?: "left" | "right";
}

function LogoMarquee({ companies, direction }: LogoMarqueeProps) {
  return (
    <div className="w-full">
      <Marquee direction={direction} pauseOnHover>
        {companies.map((company, index) => (
          <a
            href={company.href || "#"}
            target="_blank"
            rel="noreferrer"
            key={index}
            className={cn(
              "mx-5 inline-flex h-10 items-center justify-center transition-opacity hover:opacity-70",
              company.needsScaleGutter && "px-4",
            )}
          >
            <LogoImage company={company} className="h-6 max-w-[6.75rem]" />
          </a>
        ))}
      </Marquee>
    </div>
  );
}
