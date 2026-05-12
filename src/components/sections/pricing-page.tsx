import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EXTERNAL_LINKS } from "@/constants/external-links";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Local",
    price: "Free",
    priceSuffix: "Open Source",
    description:
      "Test for free on your own devices with Maestro Studio or the CLI.",
    cta: {
      label: "Read the docs",
      href: EXTERNAL_LINKS.DOCS,
    },
    features: [
      "Maestro CLI",
      "Maestro Studio",
      "Maestro GPT",
      "Maestro Slack Bot",
      "AI commands",
      "Deep analysis of flows",
    ],
  },
  {
    name: "Cloud",
    price: "$250",
    priceSuffix: "/device/mo",
    description:
      "Run your Maestro tests in parallel on our purpose-built device cloud.",
    cta: {
      label: "Start free cloud trial",
      href: EXTERNAL_LINKS.CLOUD_TRIAL,
    },
    rateNote:
      "Price per month is based on max concurrent executions. More devices means you'll be able to run more tests in parallel and get results faster. Ask about pricing for web/Chromium devices.",
    features: [
      "Includes everything in Local",
      "Hosted Android, iOS, & web devices",
      "Parallel runs for faster execution",
      "Unlimited hosted test runs",
      "Rich test reporting",
      "CI integration",
      "PR/MR integration",
    ],
  },
  {
    name: "Enterprise Cloud",
    price: "Custom pricing",
    description:
      "Custom contracts, managed testing, security review, and dedicated support.",
    cta: {
      label: "Book a demo",
      href: EXTERNAL_LINKS.ENTERPRISE_DEMO,
    },
    features: [
      "Everything in Cloud",
      "SSO",
      "Premium, dedicated support",
      "Custom contract requirements",
      "Fully-managed test cases",
      "Detailed vendor & security review",
    ],
  },
];

export function PricingPage() {
  return (
    <main>
      <section className="border-b">
        <div className="bordered-div-padding flex flex-col items-center text-center !pt-12 md:!pt-16 lg:!pt-20">
          <div className="max-w-4xl space-y-6 md:space-y-8 lg:space-y-10">
            <div className="space-y-2">
              <p className="section-overline">PRICING</p>
              <h1 className="text-4xl leading-snug font-light tracking-tighter md:text-[2.625rem] lg:text-5xl">
                Maestro is free and open source
              </h1>
            </div>
            <p className="text-muted-foreground mx-auto max-w-[760px] text-sm leading-relaxed md:text-lg lg:text-xl">
              Build, run, and debug your flows locally at no cost. When
              you&apos;re ready to scale, run your Maestro flows in parallel,
              across a variety of devices on Maestro&apos;s official,
              purpose-built device cloud.
            </p>
          </div>
        </div>

        <div className="bordered-div-padding !pt-6 !pb-10 md:!pt-7 md:!pb-[50px] lg:!pt-8 lg:!pb-[60px]">
          <div className="grid grid-cols-1 border md:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={cn(
                  "rounded-none border-x-0 border-y-0 shadow-none",
                  index > 0 && "border-t md:border-t-0 md:border-l",
                )}
              >
                <CardContent className="flex h-full flex-col gap-6 px-4 pt-0 pb-4 md:px-5 md:pt-1 md:pb-5 lg:px-6 lg:pt-2 lg:pb-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h2 className="card-heading">{plan.name}</h2>
                    </div>
                    <div className="space-y-3">
                      <p className="text-foreground text-2xl leading-none font-medium tracking-normal md:text-3xl">
                        {plan.price}
                        {"priceSuffix" in plan ? (
                          <span className="ml-3 text-muted-foreground text-base font-normal md:text-lg">
                            {plan.priceSuffix}
                          </span>
                        ) : null}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="card-heading flex gap-2 text-muted-foreground"
                      >
                        <HugeiconsIcon
                          icon={CheckmarkCircle02Icon}
                          className="size-5 shrink-0 text-foreground"
                          strokeWidth={1.8}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {"rateNote" in plan ? (
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {plan.rateNote}
                    </p>
                  ) : null}

                  <div className="mt-auto flex justify-center">
                    <Button asChild>
                      <a
                        href={plan.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {plan.cta.label}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
