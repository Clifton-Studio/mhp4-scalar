import {
  ArrowRight02Icon,
  OneCircleIcon,
  Share05Icon,
  ThreeCircleIcon,
  TwoCircleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EXTERNAL_LINKS } from "@/constants/external-links";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: OneCircleIcon,
    title: "Sign up for Maestro Cloud and start your free trial",
    cta: "Get started",
    href: EXTERNAL_LINKS.CLOUD_TRIAL,
  },
  {
    icon: TwoCircleIcon,
    title: "Upload tests from your CLI, or integrate directly into your CI",
    cta: "Read the docs",
    href: EXTERNAL_LINKS.DOCS,
  },
  {
    icon: ThreeCircleIcon,
    title: "Get fast results with parallel, async execution",
    cta: "Learn more",
    href: EXTERNAL_LINKS.DOCS,
  },
];

const features = [
  {
    title: "Reduce test time by up to 90% with parallel, async execution",
    body: "Don't slow your team down waiting for test results. Run hundreds of tests in parallel with Maestro Cloud and receive comprehensive results back in minutes - not hours - so your team can ship fast, with confidence.",
    href: EXTERNAL_LINKS.DOCS,
  },
  {
    title:
      "Get tests results where you need them with GitHub Pull Request, Slack, email, and webhook notifications",
    body: "No need to babysit your test runs. Maestro Cloud posts results directly to GitHub pull requests, Slack, or email - configurable for every run or just failures. Use webhooks to build custom data pipelines and dashboards.",
    href: EXTERNAL_LINKS.DOCS,
  },
  {
    title:
      "Put an end to flaky tests once and for all with Maestro's purpose-built infrastructure",
    body: "Generic infrastructure == flakey tests. Stop debugging unreliable simulators and re-running jobs. With Maestro Cloud, every run means deterministic results that you can trust.",
    href: EXTERNAL_LINKS.DOCS,
  },
  {
    title: "Stop hunting through logs with best-in-class debugging tools",
    body: "Pass / fail is 1% of the story when it comes to E2E testing. With Maestro Cloud, every run includes step-by-step video playback, detailed logs, and flake detection so you can diagnose and fix bugs in seconds.",
    href: EXTERNAL_LINKS.DOCS,
  },
  {
    title:
      "Ensure your app works for all your users with configurable device models and OS versions",
    body: "You know what devices your users are using. Maestro Cloud lets you test across a variety of device configurations, so you can tune your device to match the distribution of your user base.",
    href: EXTERNAL_LINKS.DOCS,
  },
];

const flows = [
  "Automatically run scheduled builds for nightly releases, test every pull request before breaking changes merge, and keep each update backwards-compatible with reliable regression coverage.",
];

const caseStudies = [
  {
    title: "Eneco Cut Regression Testing from 16hrs to <1hr",
    body: "What used to take 4 teams a full 16+ hours of testing now takes under an hour with Maestro.",
    href: "#",
  },
  {
    title: "Wahed Slashed Test Creation Time by 95%",
    body: "By switching to Maestro, Wahed's team went from spending 3-4 hours per test to just 10-15 minutes.",
    href: "#",
  },
  {
    title: "Doccla Eliminated a Full Day of Manual Testing",
    body: "Doccla replaced a full day of manual regression testing with a fully automated Maestro pipeline.",
    href: "#",
  },
  {
    title: "Komoot Built 100+ Tests in Just Two Weeks",
    body: "Komoot was able to get up and running with a robust suite of over 100 tests in less than 2 weeks.",
    href: "#",
  },
];

export function CloudPage() {
  return (
    <main>
      <CloudHero />
      <UpgradeSteps />
      <FeatureBlocks />
      <CaseStudies />
      <CloudCta />
    </main>
  );
}

export function CloudHero() {
  return (
    <section>
      <div className="bordered-div-padding relative overflow-hidden !pt-9 md:!pt-10 lg:!pt-16 lg:!pb-8">
        <div className="grid items-center gap-6 md:gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)] lg:gap-10">
          <div className="flex flex-col items-start gap-6 md:gap-8">
            <div className="max-w-4xl space-y-3 md:space-y-4">
              <div className="space-y-2">
                <p className="section-overline">Maestro Cloud</p>
                <h1 className="-ml-[4px] text-4xl leading-snug font-light tracking-tighter md:text-[2.625rem] lg:text-5xl">
                  Enterprise-grade test execution and debugging
                </h1>
              </div>
              <p className="text-muted-foreground max-w-[760px] text-sm leading-relaxed md:text-lg lg:text-xl">
              Run your Maestro tests in parallel, across a variety of devices on
              Maestro&apos;s official, purpose-built device cloud.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <Button asChild>
                <a href={EXTERNAL_LINKS.CLOUD_TRIAL}>Start a free trial</a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href={EXTERNAL_LINKS.BOOK_DEMO}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a demo
                </a>
              </Button>
            </div>
          </div>

          <PlaceholderFrame
            className="w-full"
            label="Cloud dashboard screenshot placeholder"
            aspectClassName="aspect-[16/10] lg:aspect-[4/3]"
          />
        </div>
        <div className="mt-5 flex justify-center md:mt-6 lg:justify-end">
          <a
            className="inline-thick-link"
            href={EXTERNAL_LINKS.CLOUD_DASHBOARD}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cloud dashboard
            <HugeiconsIcon icon={Share05Icon} className="size-4" strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function UpgradeSteps() {
  return (
    <section className="border-b">
      <div className="flex items-center gap-3 border-b px-[19px] py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full border border-black/8 bg-[#ff5f57]"></span>
          <span className="h-3 w-3 rounded-full border border-black/8 bg-[#febc2e]"></span>
          <span className="h-3 w-3 rounded-full border border-black/8 bg-[#28c840]"></span>
        </div>
        <p
          className="text-muted-foreground text-xs font-medium tracking-normal uppercase md:text-sm"
          style={{
            fontFamily:
              'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          }}
        >
          UPGRADE
        </p>
      </div>
      <div className="bordered-div-padding !pb-10 space-y-6 md:!pb-[50px] md:space-y-7 lg:!pb-[60px] lg:space-y-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="section-heading">
            Upgrade in under two minutes
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            Take your Maestro tests to the next level. Send them to the Cloud.
          </p>
        </div>
        <div className="grid grid-cols-1 border md:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              className={cn(
                "overflow-hidden rounded-none border-x-0 border-y-0 shadow-none",
                index > 0 && "border-t md:border-t-0 md:border-l",
              )}
              key={step.title}
            >
              <CardContent className="flex h-full flex-col gap-4 px-4 pb-0 md:gap-5 md:px-5 md:pb-1 lg:gap-6 lg:px-6 lg:pb-2">
                <div className="space-y-4 pt-0 md:pt-1 lg:pt-2">
                  <h3 className="card-heading flex items-center gap-2">
                    <HugeiconsIcon
                      icon={step.icon}
                      className="size-5 shrink-0"
                      strokeWidth={1.8}
                    />
                    {step.title}
                  </h3>
                </div>
                <div className="mt-auto space-y-6">
                  <PlaceholderFrame
                    label={`${step.title} image placeholder`}
                    aspectClassName="aspect-[4/3]"
                  />
                  <div className="flex justify-center pb-4 md:pb-0">
                    <Button asChild>
                      <a href={step.href}>
                        {step.cta}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeatureBlocks() {
  return (
    <section className="border-b">
      <div className="flex items-center gap-3 border-b px-[19px] py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full border border-black/8 bg-[#ff5f57]"></span>
          <span className="h-3 w-3 rounded-full border border-black/8 bg-[#febc2e]"></span>
          <span className="h-3 w-3 rounded-full border border-black/8 bg-[#28c840]"></span>
        </div>
        <p
          className="text-muted-foreground text-xs font-medium tracking-normal uppercase md:text-sm"
          style={{
            fontFamily:
              'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          }}
        >
          Cloud features
        </p>
      </div>
      <div className="grid md:grid-cols-2">
        {features.map((feature, index) => (
          <article
            className={cn(
              "bordered-div-padding flex flex-col gap-6 border-b pb-6 md:min-h-[520px] md:gap-7 md:pb-7 lg:gap-8 lg:pb-8",
              index % 2 === 0 && "md:border-r",
              index === features.length - 1 && "md:border-b-0",
            )}
            key={feature.title}
          >
            <div className="max-w-2xl space-y-4">
              <h2 className="section-heading">{feature.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                {feature.body}
              </p>
              <InlineLink href={feature.href}>Learn more</InlineLink>
            </div>
            <PlaceholderFrame
              className="mt-auto"
              label="Feature image placeholder"
              aspectClassName="aspect-[5/3]"
            />
          </article>
        ))}
        <article className="bordered-div-padding flex flex-col gap-6 border-b-0 pb-6 md:min-h-[520px] md:gap-7 md:pb-7 lg:gap-8 lg:pb-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="section-heading">
              For every workflow: nightly releases, pull requests, regression
              testing, &lt;insert yours&gt;
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
              {flows[0]}
            </p>
          </div>
          <PlaceholderFrame
            className="mt-auto"
            label="Flow image placeholder"
            aspectClassName="aspect-[5/3]"
          />
        </article>
      </div>
    </section>
  );
}

export function CaseStudies() {
  return (
    <section className="border-b">
      <div className="flex items-center gap-3 border-b px-[19px] py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full border border-black/8 bg-[#ff5f57]"></span>
          <span className="h-3 w-3 rounded-full border border-black/8 bg-[#febc2e]"></span>
          <span className="h-3 w-3 rounded-full border border-black/8 bg-[#28c840]"></span>
        </div>
        <p
          className="text-muted-foreground text-xs font-medium tracking-normal uppercase md:text-sm"
          style={{
            fontFamily:
              'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          }}
        >
          Case studies
        </p>
      </div>
      <div className="bordered-div-padding space-y-6 md:space-y-7 lg:space-y-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="section-heading">
            In good companies
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            Join thousands of companies who have turned testing into traction.
          </p>
        </div>
        <div className="overflow-x-auto border">
          <div className="flex w-max">
            {caseStudies.map((study, index) => (
              <article
                className={cn(
                  "bordered-div-padding flex min-h-[300px] w-[66vw] max-w-[288px] shrink-0 flex-col gap-8 md:w-[415px] md:max-w-none",
                  index < caseStudies.length - 1 && "border-r",
                )}
                key={study.title}
              >
                <PlaceholderFrame
                  label="Case study image placeholder"
                  aspectClassName="aspect-[16/8]"
                />
                <div className="space-y-4">
                  <p className="section-overline">Case study</p>
                  <h3 className="text-foreground text-lg leading-snug font-medium md:text-xl">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                    {study.body}
                  </p>
                  <a
                    className="inline-thick-link"
                    href={study.href}
                  >
                    Read the full study
                    <HugeiconsIcon icon={Share05Icon} className="size-4" strokeWidth={1.8} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CloudCta() {
  return (
    <section>
      <div className="bordered-div-padding !py-12 text-center md:!py-16 lg:!py-25">
        <div className="mx-auto max-w-2xl space-y-6 md:space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl leading-snug font-light tracking-tighter md:text-[2.625rem] lg:text-5xl">
              Start testing for free
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed md:text-lg">
              Sign up for a free 7-day trial, no credit card required.
            </p>
          </div>
          <Button asChild>
            <a href={EXTERNAL_LINKS.CLOUD_TRIAL}>Start testing</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function PlaceholderFrame({
  label,
  className,
  aspectClassName,
}: {
  label: string;
  className?: string;
  aspectClassName: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2px] border bg-muted/40",
        aspectClassName,
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-4 rounded-[2px] border border-dashed border-foreground/20 bg-background/40" />
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-xs font-medium text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function InlineLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      className="inline-thick-link"
      href={href}
    >
      {children}
      <HugeiconsIcon icon={ArrowRight02Icon} className="size-4" strokeWidth={1.8} />
    </a>
  );
}
