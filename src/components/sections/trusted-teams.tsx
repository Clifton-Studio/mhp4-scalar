import { Verified } from "lucide-react";

const companies = [
  "Microsoft",
  "Meta",
  "DoorDash",
  "Uber",
  "xAI",
  "Amazon",
  "Disney",
  "Stripe",
  "Kraken",
  "Block",
  "Deel",
  "DuckDuckGo",
  "Brex",
  "Flipkart",
  "KFC",
  "IKEA",
  "Atlassian",
  "Pinterest",
  "Bluesky",
  "Sentry",
  "Komoot",
  "Phantom",
  "Flightradar24",
  "GoodRx",
  "Yum! Brands",
  "Holland & Barrett",
  "Skyscanner",
  "Blockchain.com",
];

export function TrustedTeams() {
  return (
    <section className="container">
      <div className="bordered-div-padding border border-t-0">
        <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
          <Verified className="size-5" />
          Trusted by the world's best teams
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-md border bg-border md:grid-cols-4 lg:grid-cols-7">
          {companies.map((company) => (
            <div
              key={company}
              className="bg-background flex min-h-16 items-center justify-center px-3 py-4 text-center text-sm font-medium"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
