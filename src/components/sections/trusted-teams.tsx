import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

interface Company {
  name: string;
  logo: string;
  href?: string;
  logoScale?: string;
}

interface TrustedTeamsProps {
  heading?: string;
  subheading?: string;
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
  },
  {
    name: "Meta",
    logo: brandfetchLogo("meta.com"),
    href: "https://meta.com",
    logoScale: "scale-[1.4]",
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
    logoScale: "scale-[0.8]",
  },
  {
    name: "Amazon",
    logo: brandfetchLogo("amazon.com"),
    href: "https://amazon.com",
    logoScale: "scale-[0.8]",
  },
  {
    name: "Disney",
    logo: brandfetchLogo("disney.com"),
    href: "https://disney.com",
    logoScale: "scale-[0.9]",
  },
  {
    name: "Stripe",
    logo: brandfetchLogo("stripe.com"),
    href: "https://stripe.com",
    logoScale: "scale-[1.0]",
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
    logoScale: "scale-[0.7]",
  },
  {
    name: "DuckDuckGo",
    logo: brandfetchLogo("duckduckgo.com"),
    href: "https://duckduckgo.com",
    logoScale: "scale-[1.2]",
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
    logoScale: "scale-[0.9]",
  },
  {
    name: "KFC",
    logo: brandfetchLogo("kfc.com"),
    href: "https://kfc.com",
    logoScale: "scale-[1.0]",
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
    logoScale: "scale-[0.9]",
  },
  {
    name: "Sentry",
    logo: brandfetchLogo("sentry.io"),
    href: "https://sentry.io",
    logoScale: "scale-[1.12]",
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
    logoScale: "scale-[1.0]",
  },
  {
    name: "Holland & Barrett",
    logo: brandfetchLogo("hollandandbarrett.com"),
    href: "https://hollandandbarrett.com",
    logoScale: "scale-[1.14]",
  },
  {
    name: "Skyscanner",
    logo: brandfetchLogo("skyscanner.com"),
    href: "https://skyscanner.com",
    logoScale: "scale-[1.12]",
  },
  {
    name: "Blockchain.com",
    logo: brandfetchLogo("blockchain.com"),
    href: "https://blockchain.com",
  },
];

const companyByName = (name: string) =>
  maestroCompanies.find((company) => company.name === name)!;

const topRowCompanies = [
  "Microsoft",
  "Meta",
  "DoorDash",
  "Uber",
  "xAI",
  "Amazon",
  "Block",
  "Atlassian",
  "Blockchain.com",
  "Skyscanner",
  "Flipkart",
  "Brex",
  "IKEA",
].map(companyByName);

const bottomRowCompanies = [
  "Pinterest",
  "Bluesky",
  "Disney",
  "Stripe",
  "KFC",
  "DuckDuckGo",
  "Kraken",
  "Deel",
  "Sentry",
  "Komoot",
  "Phantom",
  "Flightradar24",
  "GoodRx",
  "Yum! Brands",
  "Holland & Barrett",
].map(companyByName);

export function TrustedTeams({
  heading = "Trusted by the world's best teams",
  subheading,
  className,
  compact = false,
}: TrustedTeamsProps) {
  return (
    <section
      className={cn(
        "overflow-visible px-4 py-8 md:overflow-hidden md:py-10 lg:py-12",
        compact && "trusted-teams-compact",
        className,
      )}
    >
      <div className={cn(compact ? "trusted-teams-stack" : "space-y-0 md:space-y-8 lg:space-y-12")}>
        <div className="text-center">
          <p className="section-overline">
            <span className="md:hidden">Trusted by thousands</span>
            <span className="max-md:hidden">{heading}</span>
            {subheading ? (
              <>
                <br className="max-md:hidden" />
                <span className="text-muted-foreground">{subheading}</span>
              </>
            ) : null}
          </p>
        </div>

        <LogoMarqueeRows />
      </div>
    </section>
  );
}

function LogoMarqueeRows() {
  return (
    <div className="trusted-logo-marquees flex w-full flex-col gap-3 overflow-hidden [container-type:inline-size]">
      <LogoMarquee companies={topRowCompanies} direction="right" />
      <LogoMarquee companies={bottomRowCompanies} direction="left" />
    </div>
  );
}

interface LogoMarqueeProps {
  companies: Company[];
  direction: "left" | "right";
}

function LogoMarquee({ companies, direction }: LogoMarqueeProps) {
  return (
    <Marquee
      autoFill
      direction={direction}
      gradient={false}
      pauseOnHover
      speed={28}
    >
      {companies.map((company) => (
        <div
          key={company.name}
          className="trusted-logo-tile mr-3 inline-flex h-[72px] items-center justify-center rounded-[13px] border border-[#e5e2de] bg-[#f4f3f0] p-5.5 md:h-[78px] md:rounded-[14px] md:p-6 lg:h-[80px]"
        >
          <LogoImage company={company} className="h-full w-full" />
        </div>
      ))}
    </Marquee>
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
        "origin-center transform-gpu object-contain grayscale",
        className,
        company.logoScale,
      )}
    />
  );
}
