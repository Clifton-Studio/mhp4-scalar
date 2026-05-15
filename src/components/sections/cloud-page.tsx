import {
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
    name: "Eneco",
    logoClassName: "scale-[1.85]",
    logoSrc:
      "https://cdn.brandfetch.io/eneco.com/w/300/logo?c=1idjMwySZlfLUyQ7x24",
    title: "Eneco Cut Regression Testing from 16hrs to <1hr",
    body: "What used to take 4 teams a full 16+ hours of testing now takes under an hour with Maestro.",
    href: "#",
  },
  {
    name: "Wahed",
    logoSrc:
      "https://cdn.brandfetch.io/wahed.com/w/300/logo?c=1idjMwySZlfLUyQ7x24",
    title: "Wahed Slashed Test Creation Time by 95%",
    body: "By switching to Maestro, Wahed's team went from spending 3-4 hours per test to just 10-15 minutes.",
    href: "#",
  },
  {
    name: "Doccla",
    logoClassName: "scale-[0.85]",
    logoSrc:
      "https://cdn.brandfetch.io/doccla.com/w/300/logo?c=1idjMwySZlfLUyQ7x24",
    title: "Doccla Eliminated a Full Day of Manual Testing",
    body: "Doccla replaced a full day of manual regression testing with a fully automated Maestro pipeline.",
    href: "#",
  },
  {
    name: "Komoot",
    logoSrc:
      "https://cdn.brandfetch.io/komoot.com/w/300/logo?c=1idjMwySZlfLUyQ7x24",
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

          <CloudHeroGraphic className="w-full" />
        </div>
        <div className="mt-5 flex justify-center md:mt-6 lg:justify-end">
          <a
            className="thick-underline-link inline-flex items-center gap-1 text-sm font-medium text-foreground"
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

const cloudHeroSources = [
  {
    label: "Maestro Studio",
    title: "Studio",
    rows: ["Local simulator", "Recorded flow", "Selector map"],
  },
  {
    label: "Your CLI",
    title: "Terminal",
    rows: ["maestro cloud", "Uploading flows", "Queued run"],
  },
  {
    label: "Any CI Provider",
    title: "CI",
    rows: ["Pull request", "Nightly build", "Release branch"],
  },
];

const cloudHeroDevices = [
  {
    label: "iPhone 17",
    rows: 4,
  },
  {
    label: "Pixel 9",
    rows: 3,
  },
  {
    label: "iPad Air",
    rows: 5,
  },
  {
    label: "Galaxy S25",
    rows: 4,
  },
];

function CloudHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      aria-label="Maestro Cloud routes local, CLI, and CI test runs into parallel device execution"
      className={cn(
        "relative aspect-[16/10] min-h-[340px] overflow-hidden rounded-md border bg-[oklch(0.935_0_0)] lg:aspect-[4/3] lg:min-h-[520px]",
        className,
      )}
      role="img"
    >
      <div className="absolute inset-x-[8%] top-[14%] grid grid-cols-3 gap-[5%]">
        {cloudHeroSources.map((source) => (
          <CloudSourceWindow key={source.label} source={source} />
        ))}
      </div>

      <div className="absolute left-[17%] top-[35%] h-[20%] w-px bg-black/10" />
      <div className="absolute left-1/2 top-[35%] h-[16%] w-px -translate-x-1/2 bg-black/10" />
      <div className="absolute right-[17%] top-[35%] h-[20%] w-px bg-black/10" />
      <div className="absolute left-[17%] right-[17%] top-[51%] h-px bg-black/10" />

      <div className="absolute left-1/2 top-[43%] w-[42%] -translate-x-1/2">
        <div className="overflow-hidden rounded-sm border border-black/10 bg-[#fbfaf8] text-[#252525] shadow-[0_4px_42px_-18px_rgba(0,0,0,0.34),0_10px_20px_-12px_rgba(0,0,0,0.24)]">
          <div className="flex h-5 items-center border-b border-black/5 bg-[#f4f2ef] px-2">
            <div className="flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
              <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
              <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
            </div>
            <span className="mx-auto text-[0.5rem] leading-none font-medium tracking-normal text-[#8d8b86]">
              Maestro Cloud
            </span>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-3 px-4 py-4">
            <MaestroMark />
            <div className="min-w-0">
              <p className="text-sm leading-none font-semibold text-[#252525]">
                Parallel run matrix
              </p>
              <div className="mt-3 grid grid-cols-3 gap-1.5">
                {Array.from({ length: 9 }).map((_, index) => (
                  <span
                    className="h-2 rounded-[2px] bg-[#c7c2bb]"
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-[60%] h-[10%] w-px -translate-x-1/2 bg-black/10" />
      <div className="absolute bottom-[7%] left-[8%] right-[8%] grid grid-cols-4 gap-[5%]">
        {cloudHeroDevices.map((device) => (
          <CloudDevice key={device.label} device={device} />
        ))}
      </div>
    </div>
  );
}

const featureMockups = [
  "priority",
  "notifications",
  "stability",
  "debugging",
  "devices",
] as const;

function CloudFeatureMockup({
  variant,
}: {
  variant: (typeof featureMockups)[number];
}) {
  if (variant === "priority") {
    return <PriorityRunsMockup />;
  }

  if (variant === "notifications") {
    return <NotificationsMockup />;
  }

  if (variant === "stability") {
    return <StabilityMockup />;
  }

  if (variant === "debugging") {
    return <DebuggingMockup />;
  }

  return <DeviceMatrixMockup />;
}

function MockupStage({
  ariaLabel,
  children,
}: {
  ariaLabel: string;
  children: ReactNode;
}) {
  return (
    <div
      aria-label={ariaLabel}
      className="relative mt-auto aspect-[5/3] overflow-hidden rounded-sm border bg-[oklch(0.935_0_0)]"
      role="img"
    >
      {children}
    </div>
  );
}

function PriorityRunsMockup() {
  const rows = [
    ["Medium", "feat/redesign/premium", "4eaeolc7eeb21d6e"],
    ["Critical", "fix/login-bugs", "52d74a530765f3af"],
    ["Low", "feat/redesign/profile", "ed85388ba0921472"],
    ["High", "fix/websocket", "3b79d3fad98a3b44"],
  ];

  return (
    <MockupStage ariaLabel="Prioritized Maestro Cloud run queue">
      <div className="absolute inset-x-[7%] top-[8%] space-y-3">
        {rows.map(([priority, branch, hash], index) => (
          <div
            className="grid grid-cols-[auto_1fr] gap-3 rounded-sm border border-black/10 bg-[#fbfaf8] px-4 py-3 shadow-[0_4px_42px_-18px_rgba(0,0,0,0.17),0_10px_20px_-12px_rgba(0,0,0,0.12)]"
            key={branch}
          >
            <ProgressRing offset={index} />
            <div className="min-w-0">
              <p className="truncate text-sm leading-none font-semibold text-[#252525]">
                {priority} - {branch} - {hash}
              </p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-[2px] border border-black/10 bg-white px-2 py-1">
                <span className="size-2 rounded-full bg-[#c7c2bb]" />
                <span className="font-mono text-[0.58rem] leading-none text-[#5d5d64]">
                  {branch}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MockupStage>
  );
}

function ProgressRing({ offset }: { offset: number }) {
  return (
    <div className="relative size-8 rounded-full bg-[#f4f2ef]">
      <span
        className={cn(
          "absolute inset-1 rounded-full border-4 border-[#c7c2bb] border-r-transparent border-b-transparent",
          offset % 2 === 1 && "rotate-90",
          offset % 3 === 2 && "rotate-180",
        )}
      />
      <span className="absolute inset-2 rounded-full bg-[#fbfaf8]" />
    </div>
  );
}

function NotificationsMockup() {
  const rows = [
    ["Email", "Test failure: test-login-flow", "Just now"],
    ["Slack", "maestro-bot posted in #test-runs", "Just now"],
    ["GitHub", "maestro-bot comment on PR #102", "Just now"],
    ["Webhook", "test-login-flow failed", "Just now"],
  ];

  return (
    <MockupStage ariaLabel="Maestro Cloud notifications for test results">
      <div className="absolute inset-x-[8%] top-[9%] space-y-3">
        {rows.map(([channel, title, time]) => (
          <div
            className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-sm border border-black/10 bg-[#fbfaf8] px-4 py-3 shadow-[0_4px_42px_-18px_rgba(0,0,0,0.17),0_10px_20px_-12px_rgba(0,0,0,0.12)]"
            key={channel}
          >
            <span className="flex size-8 items-center justify-center rounded-[2px] bg-[#f4f2ef] text-[0.52rem] font-semibold text-[#5d5d64]">
              {channel.slice(0, 2)}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm leading-none font-semibold text-[#252525]">
                {title}
              </p>
              <p className="mt-2 truncate text-xs leading-none text-[#8d8b86]">
                New Cloud result message delivered.
              </p>
            </div>
            <span className="text-[0.58rem] font-medium text-[#8d8b86]">
              {time}
            </span>
          </div>
        ))}
      </div>
    </MockupStage>
  );
}

function StabilityMockup() {
  return (
    <MockupStage ariaLabel="Stable test run replay with step logs">
      <div className="absolute left-[7%] top-[8%] w-[28%]">
        <MiniPhone />
      </div>
      <div className="absolute right-[7%] top-[18%] w-[63%] overflow-hidden rounded-sm border border-black/10 bg-[#fbfaf8] shadow-[0_4px_42px_-18px_rgba(0,0,0,0.17),0_10px_20px_-12px_rgba(0,0,0,0.12)]">
        <MiniWindowBar title="run log" />
        <div className="px-4 py-3 font-mono text-[0.58rem] leading-[1.8] text-[#5d5d64]">
          {[
            "Define variables",
            "Apply configuration",
            "Run login",
            "tapOn: username",
            "inputText: hello@mobile.dev",
            "assertVisible: Discover Lists",
            "scrollUntilVisible: logout",
          ].map((row, index) => (
            <p className="grid grid-cols-[1rem_1fr_auto] gap-2" key={row}>
              <span className="text-[#c7c2bb]">✓</span>
              <span className={index === 2 ? "rounded-[2px] bg-[#f4f2ef] px-2 text-[#252525]" : ""}>
                {row}
              </span>
              <span className="text-[#8d8b86]">02:{11 + index}</span>
            </p>
          ))}
        </div>
      </div>
    </MockupStage>
  );
}

function DebuggingMockup() {
  return (
    <MockupStage ariaLabel="Video playback, logs, and debug timeline">
      <div className="absolute left-[7%] top-[10%] bottom-[10%] w-[42%] overflow-hidden rounded-sm border border-black/10 bg-[#fbfaf8] shadow-[0_4px_42px_-18px_rgba(0,0,0,0.17),0_10px_20px_-12px_rgba(0,0,0,0.12)]">
        <MiniWindowBar title="video" />
        <div className="p-3">
          <div className="aspect-[9/14] rounded-[2px] bg-white p-3">
            <div className="mb-3 h-4 rounded-[2px] bg-[#f4f2ef]" />
            <div className="mb-3 h-16 rounded-[2px] bg-[#c7c2bb]" />
            <div className="space-y-1.5">
              <span className="block h-1.5 rounded-full bg-black/10" />
              <span className="block h-1.5 w-4/5 rounded-full bg-black/10" />
              <span className="block h-1.5 w-2/3 rounded-full bg-black/10" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-[7%] top-[16%] w-[48%] overflow-hidden rounded-sm border border-black/10 bg-[#fbfaf8] shadow-[0_4px_42px_-18px_rgba(0,0,0,0.34),0_10px_20px_-12px_rgba(0,0,0,0.24)]">
        <MiniWindowBar title="debug trace" />
        <div className="space-y-2 px-4 py-3">
          {["Launch app", "Tap Login", "Enter email", "Assert dashboard", "Capture artifacts"].map((row) => (
            <div className="flex items-center gap-2" key={row}>
              <span className="size-2 rounded-full bg-[#c7c2bb]" />
              <span className="h-2 flex-1 rounded-full bg-[#f4f2ef]" />
              <span className="w-8 text-right text-[0.5rem] text-[#8d8b86]">{row.length}s</span>
            </div>
          ))}
        </div>
      </div>
    </MockupStage>
  );
}

function DeviceMatrixMockup() {
  return (
    <MockupStage ariaLabel="Device model and operating system matrix">
      <div className="absolute inset-x-[8%] top-[9%] grid grid-cols-4 gap-3">
        {["iPhone 13", "iPhone SE", "Pixel 9", "iPad Air", "Galaxy S25", "Pixel Fold", "iPhone 17", "Galaxy Tab"].map((device, index) => (
          <div
            className={cn(
              "overflow-hidden rounded-sm border border-black/10 bg-[#fbfaf8] p-2 shadow-[0_4px_42px_-18px_rgba(0,0,0,0.17),0_10px_20px_-12px_rgba(0,0,0,0.12)]",
              index % 3 === 1 && "translate-y-5",
            )}
            key={device}
          >
            <div className="mx-auto aspect-[9/16] w-10 rounded-[2px] border border-black/10 bg-white p-1">
              <div className="mx-auto mb-1 h-0.5 w-3 rounded-full bg-[#c7c2bb]" />
              <div className="h-5 rounded-[1px] bg-[#f4f2ef]" />
              <div className="mt-1 space-y-1">
                <span className="block h-0.5 rounded-full bg-black/10" />
                <span className="block h-0.5 w-2/3 rounded-full bg-black/10" />
              </div>
            </div>
            <p className="mt-2 truncate text-center text-[0.48rem] font-medium text-[#5d5d64]">
              {device}
            </p>
          </div>
        ))}
      </div>
    </MockupStage>
  );
}

function WorkflowMockup() {
  const workflows = ["Nightly releases", "Pull requests", "Regression tests"];

  return (
    <MockupStage ariaLabel="Workflow cards for nightly releases, pull requests, and regression testing">
      <div className="absolute inset-x-[8%] top-[16%] grid grid-cols-3 gap-3">
        {workflows.map((workflow, index) => (
          <div
            className="rounded-sm border border-black/10 bg-[#fbfaf8] p-4 shadow-[0_4px_42px_-18px_rgba(0,0,0,0.17),0_10px_20px_-12px_rgba(0,0,0,0.12)]"
            key={workflow}
          >
            <div className="mb-6 flex size-8 items-center justify-center rounded-[2px] bg-[#f4f2ef]">
              <span className="size-3 rounded-full bg-[#c7c2bb]" />
            </div>
            <p className="text-xs font-semibold leading-tight text-[#252525]">
              {workflow}
            </p>
            <div className="mt-4 space-y-1.5">
              <span className="block h-1.5 rounded-full bg-black/10" />
              <span className="block h-1.5 w-4/5 rounded-full bg-black/10" />
              <span className="block h-1.5 w-2/3 rounded-full bg-black/10" />
            </div>
            <div className="mt-5 flex items-center gap-1.5">
              {Array.from({ length: 3 + index }).map((_, dotIndex) => (
                <span className="size-1.5 rounded-full bg-[#c7c2bb]" key={dotIndex} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </MockupStage>
  );
}

function MiniWindowBar({ title }: { title: string }) {
  return (
    <div className="flex h-5 items-center border-b border-black/5 bg-[#f4f2ef] px-2">
      <div className="flex items-center gap-1">
        <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
        <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
        <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
      </div>
      <span className="mx-auto text-[0.5rem] font-medium leading-none text-[#8d8b86]">
        {title}
      </span>
    </div>
  );
}

function MiniPhone() {
  return (
    <div className="aspect-[9/16] overflow-hidden rounded-sm border border-black/10 bg-[#fbfaf8] p-2 shadow-[0_4px_42px_-18px_rgba(0,0,0,0.17),0_10px_20px_-12px_rgba(0,0,0,0.12)]">
      <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-[#c7c2bb]" />
      <div className="space-y-3 rounded-[2px] bg-white p-3">
        <p className="text-xs font-semibold text-[#252525]">Discover Lists</p>
        <div className="h-5 rounded-[2px] bg-[#f4f2ef]" />
        <div className="h-20 rounded-[2px] bg-[#c7c2bb]" />
        <div className="space-y-1.5">
          <span className="block h-1.5 rounded-full bg-black/10" />
          <span className="block h-1.5 w-4/5 rounded-full bg-black/10" />
        </div>
      </div>
    </div>
  );
}

function CloudSourceWindow({
  source,
}: {
  source: (typeof cloudHeroSources)[number];
}) {
  return (
    <div className="overflow-hidden rounded-sm border border-black/10 bg-[#fbfaf8] shadow-[0_4px_42px_-18px_rgba(0,0,0,0.17),0_10px_20px_-12px_rgba(0,0,0,0.12)]">
      <div className="flex h-4 items-center border-b border-black/5 bg-[#f4f2ef] px-2">
        <div className="flex items-center gap-1">
          <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
          <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
          <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
        </div>
        <span className="mx-auto text-[0.46rem] leading-none font-medium tracking-normal text-[#8d8b86]">
          {source.title}
        </span>
      </div>
      <div className="px-3 py-3">
        <p className="text-[0.64rem] leading-none font-semibold text-[#252525] md:text-xs">
          {source.label}
        </p>
        <div className="mt-3 space-y-1.5">
          {source.rows.map((row) => (
            <div className="flex items-center gap-2" key={row}>
              <span className="size-2 rounded-full bg-[#c7c2bb]" />
              <span className="h-1.5 flex-1 rounded-full bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MaestroMark() {
  return (
    <div className="relative size-8 overflow-hidden rounded-[2px] bg-[#c7c2bb]">
      <span className="absolute bottom-1.5 left-1/2 size-3 -translate-x-1/2 rounded-full bg-[#fbfaf8]" />
    </div>
  );
}

function CloudDevice({
  device,
}: {
  device: (typeof cloudHeroDevices)[number];
}) {
  return (
    <div className="relative mx-auto w-full max-w-[84px]">
      <div className="aspect-[9/16] overflow-hidden rounded-sm border border-black/10 bg-[#fbfaf8] p-1 shadow-[0_4px_42px_-18px_rgba(0,0,0,0.17),0_10px_20px_-12px_rgba(0,0,0,0.12)]">
        <div className="mx-auto mb-1 h-1 w-5 rounded-full bg-[#c7c2bb]" />
        <div className="h-full rounded-[2px] bg-white px-2 py-2">
          <p className="mb-2 text-[0.46rem] leading-none font-semibold tracking-normal text-[#252525]">
            {device.label}
          </p>
          <div className="mb-2 h-8 rounded-[2px] bg-[#f4f2ef]" />
          <div className="space-y-1">
            {Array.from({ length: device.rows }).map((_, index) => (
              <div className="flex items-center gap-1" key={index}>
                <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
                <span className="h-1 flex-1 rounded-full bg-black/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CloudSignupMockup() {
  return (
    <div
      aria-label="Maestro Cloud signup form"
      className="relative aspect-[4/3] overflow-hidden rounded-sm border bg-[oklch(0.935_0_0)]"
      role="img"
    >
      <div className="absolute inset-x-[8%] top-[12%] bottom-[-18%] overflow-hidden rounded-sm border border-black/10 bg-[#fbfaf8] shadow-[0_4px_42px_-18px_rgba(0,0,0,0.17),0_10px_20px_-12px_rgba(0,0,0,0.12)]">
        <div className="flex h-5 items-center border-b border-black/5 bg-[#f4f2ef] px-2">
          <div className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
            <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
            <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
          </div>
          <span className="mx-auto text-[0.5rem] leading-none font-medium tracking-normal text-[#8d8b86]">
            app.maestro.dev/signup
          </span>
        </div>
        <div className="flex h-full flex-col items-center px-[12%] pt-[12%]">
          <div className="flex items-center gap-2">
            <MaestroMark />
            <span className="text-base leading-none font-semibold tracking-normal text-[#252525]">
              Maestro
            </span>
          </div>
          <p className="mt-5 text-lg leading-none font-semibold tracking-normal text-[#252525]">
            Sign up
          </p>
          <div className="mt-6 w-full max-w-[260px] rounded-sm border border-black/10 bg-white p-4">
            <div className="grid grid-cols-2 gap-3">
              <SignupField label="First name" value="John" />
              <SignupField label="Last name" value="Doe" />
            </div>
            <div className="mt-3">
              <SignupField label="Email" value="jdoe@hooli.com" />
            </div>
            <div className="mt-4 flex h-8 items-center justify-center rounded-[2px] bg-[#c7c2bb] text-xs font-medium text-[#252525]">
              Continue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignupField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-[0.5rem] leading-none font-semibold tracking-normal text-[#252525]">
        {label}
      </p>
      <div className="flex h-7 items-center rounded-[2px] border border-black/10 bg-[#fbfaf8] px-2 text-[0.58rem] leading-none text-[#252525]">
        {value}
      </div>
    </div>
  );
}

function CloudUploadMockup() {
  return (
    <div
      aria-label="CI configuration and CLI upload command for Maestro Cloud"
      className="relative aspect-[4/3] overflow-hidden rounded-sm border bg-[oklch(0.935_0_0)]"
      role="img"
    >
      <div className="absolute inset-x-[6%] top-[9%] bottom-[12%] overflow-hidden rounded-sm border border-black/10 bg-[#fbfaf8] text-[#5d5d64] shadow-[0_4px_42px_-18px_rgba(0,0,0,0.17),0_10px_20px_-12px_rgba(0,0,0,0.12)]">
        <div className="flex h-5 items-center border-b border-black/5 bg-[#f4f2ef] px-2">
          <div className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
            <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
            <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
          </div>
          <span className="mx-auto text-[0.5rem] leading-none font-medium tracking-normal text-[#8d8b86]">
            .github/workflows/ci.yml
          </span>
        </div>
        <div className="px-4 py-4 font-mono text-[0.55rem] leading-[1.55] tracking-normal">
          {[
            ["1", "name: Build and run Maestro tests"],
            ["2", "jobs:"],
            ["3", "  maestro-cloud:"],
            ["4", "    runs-on: ubuntu-latest"],
            ["5", "    outputs:"],
            ["6", "      app: app/build/sample.apk"],
            ["7", "    steps:"],
            ["8", "      - uses: actions/checkout@v4"],
            ["9", "      - uses: actions/setup-java@v4"],
            ["10", "      - run: ./gradlew assembleDebug"],
            ["11", "      - run: maestro cloud sample.apk flows/"],
          ].map(([line, code]) => (
            <p className="flex whitespace-pre" key={line}>
              <span className="w-4 shrink-0 text-right text-[#8d8b86]">
                {line}
              </span>
              <span className="pl-2 text-[#252525]">{code}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="absolute right-[5%] bottom-[7%] w-[58%] overflow-hidden rounded-sm border border-black/10 bg-[#fbfaf8] text-[#5d5d64] shadow-[0_4px_42px_-18px_rgba(0,0,0,0.34),0_10px_20px_-12px_rgba(0,0,0,0.24)]">
        <div className="flex h-5 items-center border-b border-black/5 bg-[#f4f2ef] px-2">
          <div className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
            <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
            <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
          </div>
          <span className="mx-auto text-[0.5rem] leading-none font-medium tracking-normal text-[#8d8b86]">
            Terminal
          </span>
        </div>
        <div className="px-4 py-4 font-mono text-[0.62rem] leading-[1.6] tracking-normal">
          <p className="whitespace-pre text-[#252525]">
            <span className="text-[#8d8b86]">&gt; </span>
            maestro cloud \
          </p>
          <p className="whitespace-pre pl-4 text-[#252525]">
            --api-key &lt;API_KEY&gt; \
          </p>
          <p className="whitespace-pre pl-4 text-[#252525]">
            --project-id &lt;PROJECT_ID&gt; \
          </p>
          <p className="whitespace-pre pl-4 text-[#252525]">
            sample.apk flows/
          </p>
        </div>
      </div>
    </div>
  );
}

const resultCards = [
  {
    time: "2 minutes ago",
    title: "Test login flow #1021",
    device: "iPhone 13",
    os: "iOS",
    locale: "en_GB",
  },
  {
    time: "3 minutes ago",
    title: "Test checkout flow #1022",
    device: "iPhone SE",
    os: "iOS",
    locale: "es_ES",
  },
  {
    time: "5 minutes ago",
    title: "Test search flow #1023",
    device: "Samsung S23",
    os: "Android 16",
    locale: "en_US",
  },
];

function CloudResultsMockup() {
  return (
    <div
      aria-label="Recent successful Maestro Cloud test results"
      className="relative aspect-[4/3] overflow-hidden rounded-sm border bg-[oklch(0.935_0_0)]"
      role="img"
    >
      <div className="absolute inset-x-[9%] top-[13%] h-px bg-black/10" />
      <div className="absolute inset-x-[9%] top-[44%] h-px bg-black/10" />
      <div className="absolute inset-x-[9%] top-[75%] h-px bg-black/10" />
      <div className="absolute inset-x-[7%] top-[7%] space-y-4">
        {resultCards.map((result, index) => (
          <ResultCard key={result.title} result={result} offset={index} />
        ))}
      </div>
    </div>
  );
}

function ResultCard({
  offset,
  result,
}: {
  offset: number;
  result: (typeof resultCards)[number];
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-sm border border-black/10 bg-[#fbfaf8] px-4 py-4 text-[#252525] shadow-[0_4px_42px_-18px_rgba(0,0,0,0.17),0_10px_20px_-12px_rgba(0,0,0,0.12)]",
        offset === 2 && "opacity-80",
      )}
    >
      <div className="grid grid-cols-[auto_1fr] gap-3">
        <div className="relative mt-1 size-7 rounded-full bg-[#c7c2bb]">
          <span className="absolute left-[8px] top-[6px] h-3 w-2 rotate-45 border-r-2 border-b-2 border-[#fbfaf8]" />
        </div>
        <div className="min-w-0">
          <p className="text-xs leading-none font-medium tracking-normal text-[#8d8b86]">
            {result.time}
          </p>
          <p className="mt-2 truncate text-sm leading-none font-semibold tracking-normal text-[#252525]">
            {result.title}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <ResultPill>{result.device}</ResultPill>
            <ResultPill>{result.os}</ResultPill>
            <ResultPill>{result.locale}</ResultPill>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultPill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-[2px] bg-[#f4f2ef] px-2 py-1 text-[0.58rem] leading-none font-semibold tracking-normal text-[#5d5d64]">
      {children}
    </span>
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
                  {index === 0 ? (
                    <CloudSignupMockup />
                  ) : index === 1 ? (
                    <CloudUploadMockup />
                  ) : index === 2 ? (
                    <CloudResultsMockup />
                  ) : (
                    <PlaceholderFrame
                      label={`${step.title} image placeholder`}
                      aspectClassName="aspect-[4/3]"
                    />
                  )}
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
            <CloudFeatureMockup variant={featureMockups[index] ?? "priority"} />
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
          <WorkflowMockup />
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
                <div
                  className="flex h-28 w-full shrink-0 items-center justify-center rounded-[2px] border bg-muted/30 md:h-36"
                >
                  <div className="flex h-[80%] w-[80%] items-center justify-center">
                    <img
                      alt={`${study.name} logo`}
                      className={cn("h-full w-full object-contain", study.logoClassName)}
                      loading="lazy"
                      src={study.logoSrc}
                    />
                  </div>
                </div>
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
    </a>
  );
}
