import { ArrowRight02Icon, Share05Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/constants/external-links";
import { cn } from "@/lib/utils";

const steps = [
  {
    eyebrow: "Step 1",
    title: "Sign up for Maestro Cloud and start your free trial",
    cta: "Get started",
    href: EXTERNAL_LINKS.CLOUD_TRIAL,
  },
  {
    eyebrow: "Step 2",
    title: "Upload tests from your CLI, or integrate directly into your CI",
    cta: "Read the docs",
    href: EXTERNAL_LINKS.DOCS,
  },
  {
    eyebrow: "Step 3",
    title: "Get fast results with parallel execution",
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
      "Ensures your app works for all your users with configurable device models and OS versions",
    body: "You know what devices your users are using. Maestro Cloud lets you test across a variety of device configurations, so you can tune your device to match the distribution of your user base.",
    href: EXTERNAL_LINKS.DOCS,
  },
];

const flows = [
  {
    title: "Nightly Releases",
    body: "Use Maestro automatically run scheduled builds and deploy to production servers",
  },
  {
    title: "Pull Requests",
    body: "Run unit and integration tests on every pull request to avoid merging breaking changes.",
  },
  {
    title: "Regression Testing",
    body: "Make sure every change is backwards-compatible with the current version.",
  },
];

const caseStudies = [
  {
    title: "Eneco Slashed Regression Testing from 16 Hours to < 1 Hour",
    body: "What used to take 4 teams a full 16+ hours of testing now takes under an hour with Maestro.",
  },
  {
    title: "How Wahed Cut Test Creation Time by 95%",
    body: "By switching to Maestro, Wahed's team went from spending 3-4 hours per test to just 10-15 minutes.",
  },
  {
    title: "Doccla Eliminated a Full Day of Manual Testing",
    body: "Doccla replaced a full day of manual regression testing with a fully automated Maestro pipeline.",
  },
  {
    title: "Komoot Built 100+ Tests in Just Two Weeks",
    body: "Komoot was able to get up and running with a robust suite of over 100 tests in less than 2 weeks.",
  },
];

export function CloudPage() {
  return (
    <main>
      <CloudHero />
      <UpgradeSteps />
      <FeatureBlocks />
      <DesignedForFlows />
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
                Maestro&apos;s official, purpose-built device cloud
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <Button asChild>
                <a href={EXTERNAL_LINKS.CLOUD_TRIAL}>Start a Free Trial</a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href={EXTERNAL_LINKS.BOOK_DEMO}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Demo
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
          <Button
            asChild
            variant="ghost"
          >
            <a
              href={EXTERNAL_LINKS.CLOUD_DASHBOARD}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloud dashboard
              <HugeiconsIcon icon={Share05Icon} className="size-4" strokeWidth={1.8} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function UpgradeSteps() {
  return (
    <section className="border-b">
      <div className="bordered-div-padding space-y-8 md:space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="section-heading">
            Take your Maestro tests to the next level. Upgrade in under two
            minutes.
          </h2>
        </div>
        <div className="grid border md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              className={cn(
                "bordered-div-padding flex min-h-[320px] flex-col justify-between gap-8",
                index < steps.length - 1 && "border-b md:border-r md:border-b-0",
              )}
              key={step.eyebrow}
            >
              <div className="space-y-5">
                <p className="section-overline">{step.eyebrow}</p>
                <h3 className="text-foreground text-lg leading-snug font-medium md:text-xl">
                  {step.title}
                </h3>
              </div>
              <div className="space-y-6">
                <PlaceholderFrame
                  label={`${step.eyebrow} image placeholder`}
                  aspectClassName="aspect-[4/3]"
                />
                <InlineLink href={step.href}>{step.cta}</InlineLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeatureBlocks() {
  return (
    <section className="border-b">
      <div className="grid md:grid-cols-2">
        {features.map((feature, index) => (
          <article
            className={cn(
              "bordered-div-padding flex flex-col gap-8 border-b md:min-h-[520px]",
              index % 2 === 0 && "md:border-r",
              index === features.length - 1 && "md:col-span-2 md:border-r-0",
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
              aspectClassName={index === features.length - 1 ? "aspect-[16/7]" : "aspect-[5/3]"}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export function DesignedForFlows() {
  return (
    <section className="border-b">
      <div className="bordered-div-padding space-y-8 md:space-y-10">
        <h2 className="section-heading">Designed for every flow</h2>
        <div className="grid border md:grid-cols-3">
          {flows.map((flow, index) => (
            <div
              className={cn(
                "bordered-div-padding min-h-48 space-y-4",
                index < flows.length - 1 && "border-b md:border-r md:border-b-0",
              )}
              key={flow.title}
            >
              <h3 className="card-heading">{flow.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {flow.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudies() {
  return (
    <section className="border-b">
      <div className="bordered-div-padding space-y-8 md:space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="section-heading">
            Join thousands of companies who have turned testing into traction
          </h2>
        </div>
        <div className="grid gap-0 border md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <article
              className={cn(
                "bordered-div-padding flex min-h-[300px] flex-col justify-between gap-8 border-b",
                index % 2 === 0 && "md:border-r",
                index >= caseStudies.length - 2 && "md:border-b-0",
              )}
              key={study.title}
            >
              <div className="space-y-4">
                <p className="section-overline">Read the full case study</p>
                <h3 className="text-foreground text-lg leading-snug font-medium md:text-xl">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                  {study.body}
                </p>
              </div>
              <PlaceholderFrame
                label="Case study image placeholder"
                aspectClassName="aspect-[16/8]"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CloudCta() {
  return (
    <section>
      <div className="bordered-div-padding text-center lg:!py-25">
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
            <a href={EXTERNAL_LINKS.CLOUD_TRIAL}>Start Testing</a>
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
      className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-secondary"
      href={href}
    >
      {children}
      <HugeiconsIcon icon={ArrowRight02Icon} className="size-4" strokeWidth={1.8} />
    </a>
  );
}
