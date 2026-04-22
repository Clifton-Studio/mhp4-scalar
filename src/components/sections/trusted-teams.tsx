"use client";

import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

interface Company {
  name: string;
  logo: string;
  href?: string;
}

interface TrustedTeamsProps {
  heading?: string;
  subheading?: string;
  topRowCompanies?: Company[];
  bottomRowCompanies?: Company[];
  className?: string;
}

const brandfetchToken = "1idjMwySZlfLUyQ7x24";

const brandfetchLogo = (domain: string) =>
  `https://cdn.brandfetch.io/${domain}/w/300/logo?c=${brandfetchToken}`;

const maestroCompanies: Company[] = [
  {
    name: "Microsoft",
    logo: brandfetchLogo("microsoft.com"),
    href: "https://microsoft.com",
  },
  { name: "Meta", logo: brandfetchLogo("meta.com"), href: "https://meta.com" },
  {
    name: "DoorDash",
    logo: brandfetchLogo("doordash.com"),
    href: "https://doordash.com",
  },
  { name: "Uber", logo: brandfetchLogo("uber.com"), href: "https://uber.com" },
  { name: "xAI", logo: brandfetchLogo("x.ai"), href: "https://x.ai" },
  {
    name: "Amazon",
    logo: brandfetchLogo("amazon.com"),
    href: "https://amazon.com",
  },
  {
    name: "Disney",
    logo: brandfetchLogo("disney.com"),
    href: "https://disney.com",
  },
  {
    name: "Stripe",
    logo: brandfetchLogo("stripe.com"),
    href: "https://stripe.com",
  },
  {
    name: "Kraken",
    logo: brandfetchLogo("kraken.com"),
    href: "https://kraken.com",
  },
  {
    name: "Block",
    logo: brandfetchLogo("block.xyz"),
    href: "https://block.xyz",
  },
  { name: "Deel", logo: brandfetchLogo("deel.com"), href: "https://deel.com" },
  {
    name: "DuckDuckGo",
    logo: brandfetchLogo("duckduckgo.com"),
    href: "https://duckduckgo.com",
  },
  { name: "Brex", logo: brandfetchLogo("brex.com"), href: "https://brex.com" },
  {
    name: "Flipkart",
    logo: brandfetchLogo("flipkart.com"),
    href: "https://flipkart.com",
  },
  { name: "KFC", logo: brandfetchLogo("kfc.com"), href: "https://kfc.com" },
  { name: "IKEA", logo: brandfetchLogo("ikea.com"), href: "https://ikea.com" },
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
  },
  {
    name: "GoodRx",
    logo: brandfetchLogo("goodrx.com"),
    href: "https://goodrx.com",
  },
  {
    name: "Yum! Brands",
    logo: brandfetchLogo("yum.com"),
    href: "https://yum.com",
  },
  {
    name: "Holland & Barrett",
    logo: brandfetchLogo("hollandandbarrett.com"),
    href: "https://hollandandbarrett.com",
  },
  {
    name: "Skyscanner",
    logo: brandfetchLogo("skyscanner.com"),
    href: "https://skyscanner.com",
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
      className={cn("overflow-hidden px-4 py-8 md:py-10 lg:py-12", className)}
    >
      <div className="space-y-8 lg:space-y-12">
        <div className="text-center">
          <h2 className="font-ui-mono mb-4 text-balance font-normal uppercase leading-[1.5] tracking-[0.06em]">
            <span className="md:hidden">Trusted by</span>
            <span className="max-md:hidden">{heading}</span>
            {subheading ? (
              <>
                <br className="max-md:hidden" />
                <span className="text-muted-foreground">{subheading}</span>
              </>
            ) : null}
          </h2>
        </div>

        <div className="hidden w-full flex-col items-center gap-6 md:flex">
          {desktopRows.map((companies, index) => (
            <LogoRow companies={companies} key={index} />
          ))}
        </div>

        <div className="flex w-full flex-col items-center gap-8 md:hidden">
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
        >
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className="h-8 max-w-36 object-contain"
          />
        </a>
      ))}
    </div>
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
            className="mx-6 inline-block transition-opacity hover:opacity-70"
          >
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="h-6 w-auto object-contain"
            />
          </a>
        ))}
      </Marquee>
    </div>
  );
}
