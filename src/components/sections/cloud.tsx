import {
  BlendIcon,
  Forward02Icon,
  ThreeDViewIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

import { Button } from "@/components/ui/button";

const cloudFeatures = [
  {
    title: "Parallel execution",
    description:
      "Run your entire test suite across real devices simultaneously to cut CI wait times down to minutes. Enterprise-grade.",
    icon: Forward02Icon,
  },
  {
    title: "Test with context",
    description:
      "Every run includes step-by-step video playback, detailed logs, and flake detection so you can diagnose and fix bugs efficiently.",
    icon: ThreeDViewIcon,
  },
  {
    title: "Seamless CI integration",
    description:
      "Plug Maestro into your existing pipeline with a single command to get instant reporting and deep diagnostic context.",
    icon: BlendIcon,
  },
];

type CloudFeatureIcon = IconSvgElement;

const dashboardRows = [
  ["Today, 10:42 AM", "wikipedia-ios", "iOS", "iPhone 17 Pro / iOS 26.2", "3m 18s", "24 success / 0 failure"],
  ["Today, 10:31 AM", "checkout-android", "Android", "Pixel 9 / API 36", "5m 04s", "18 success / 0 failure"],
  ["Today, 10:18 AM", "maps-regression", "iOS", "iPad Air / iOS 26.2", "4m 46s", "21 success / 2 failure"],
  ["Today, 10:02 AM", "settings-smoke", "Android", "Galaxy S25 / API 35", "2m 12s", "16 success / 0 failure"],
  ["Today, 9:49 AM", "release-candidate", "Mixed", "24-device matrix", "6m 38s", "29 success / 0 failure"],
  ["Today, 9:34 AM", "onboarding-flow", "iOS", "iPhone SE / iOS 25.6", "1m 54s", "12 success / 0 failure"],
  ["Today, 9:17 AM", "profile-tests", "Android", "Pixel Fold / API 36", "3m 52s", "20 success / 0 failure"],
  ["Today, 8:59 AM", "search-suite", "iOS", "iPhone 16 / iOS 26.0", "2m 43s", "15 success / 0 failure"],
  ["Today, 8:41 AM", "payments-smoke", "Android", "Galaxy Tab S10 / API 35", "6m 11s", "27 success / 0 failure"],
  ["Today, 8:22 AM", "saved-items", "iOS", "iPad Pro / iOS 26.2", "4m 09s", "19 success / 0 failure"],
  ["Today, 8:05 AM", "auth-regression", "Android", "Pixel 8 / API 35", "5m 31s", "23 success / 0 failure"],
  ["Yesterday, 5:48 PM", "notifications", "iOS", "iPhone 15 / iOS 25.7", "2m 27s", "14 success / 0 failure"],
  ["Yesterday, 5:21 PM", "article-reader", "Android", "OnePlus 13 / API 36", "3m 06s", "22 success / 0 failure"],
  ["Yesterday, 4:56 PM", "deep-links", "iOS", "iPhone 17 Pro / iOS 26.2", "1m 38s", "11 success / 0 failure"],
  ["Yesterday, 4:30 PM", "nightly-matrix", "Mixed", "18-device matrix", "6m 55s", "30 success / 0 failure"],
];

function CloudDashboardMockup() {
  return (
    <div
      aria-label="Maestro Cloud dashboard showing agent usage metrics"
      className="relative aspect-square overflow-hidden bg-[oklch(0.935_0_0)] lg:aspect-auto lg:h-full"
      role="img"
    >
      <div className="@container absolute top-[5%] left-[5%] aspect-[1040/1440] w-[90%] overflow-hidden rounded-[1.15cqw] border border-black/10 bg-[#fbfaf8] shadow-[0_4px_42px_-18px_rgba(0,0,0,0.34),0_10px_20px_-12px_rgba(0,0,0,0.24)] [container-type:inline-size] lg:top-[8%]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="flex h-[3.7cqw] items-center border-b border-black/5 bg-[#f4f2ef] px-[1.9cqw]">
            <div className="flex items-center gap-[0.9cqw]">
              <span className="size-[1.15cqw] rounded-full bg-[#c7c2bb]" />
              <span className="size-[1.15cqw] rounded-full bg-[#c7c2bb]" />
              <span className="size-[1.15cqw] rounded-full bg-[#c7c2bb]" />
            </div>
            <p className="mx-auto text-[1.35cqw] leading-none font-medium tracking-normal text-[#8d8b86]">app.maestro.dev/test-runs</p>
          </div>
        <div className="flex h-[5.45cqw] items-center gap-[3.08cqw] border-b border-black/10 px-[2.69cqw] text-[1.35cqw]">
          <img className="h-[1.25cqw] w-auto" src="/layout/maestro-logo.svg" alt="Maestro" />
          <span>Dashboard</span>
          <span className="flex h-full items-center border-b-[0.19cqw] border-[#24241f] font-semibold">Test runs</span>
        </div>
        <div className="px-[3.08cqw] pt-[3.46cqw]">
          <div className="grid grid-cols-4 gap-[2.5cqw]">
            {[
              ["Total flow runs", "3069", "+1% m/m"],
              ["Average run time", "3min", ""],
              ["Failed flow runs", "23", ""],
              ["Passing rate", "99.25%", "+1% m/m"],
            ].map(([label, value, delta]) => (
              <div className="rounded-[1.92cqw] border border-black/10 bg-white p-[1.73cqw]" key={label}>
                <p className="text-[1.35cqw] leading-none font-semibold text-[#5d5a6f]">{label}</p>
                <p className="mt-[1.15cqw] flex items-baseline text-[3.08cqw] leading-none font-semibold text-[#161229]">
                  <span>{value}</span>
                  {delta ? <span className="ml-[0.77cqw] text-[1.15cqw] font-semibold text-[#4fa365]">{delta}</span> : null}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-[3.46cqw] rounded-[1.92cqw] border border-black/10 bg-white px-[1.92cqw] pt-[1.92cqw] pb-[2.69cqw]">
            <p className="text-[1.35cqw] leading-none font-semibold text-[#5d5a6f]">Run history</p>
            <div className="mt-[1.35cqw] h-[14.62cqw]">
              <svg className="h-full w-full" viewBox="0 0 940 190" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M0 28 L90 26 L167 27 L171 82 L175 28 L285 27 L350 30 L412 25 L513 26 L517 108 L521 27 L650 24 L736 26 L812 25 L876 29 L940 27 L940 190 L0 190 Z"
                  fill="#dceaff"
                />
                <path
                  d="M0 28 L90 26 L167 27 L171 82 L175 28 L285 27 L350 30 L412 25 L513 26 L517 108 L521 27 L650 24 L736 26 L812 25 L876 29 L940 27"
                  fill="none"
                  stroke="#8fb5ff"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="px-[2.69cqw] py-[1.92cqw]">
          <div className="grid grid-cols-[1.15fr_1.1fr_0.65fr_1.45fr_0.75fr_1fr] border-b border-black/5 pb-[1.15cqw] text-[1.35cqw] font-semibold text-[#2c2c2a]">
            <span>Run start</span>
            <span>Workspace</span>
            <span>OS</span>
            <span>Device config</span>
            <span>Duration</span>
            <span>Results</span>
          </div>
          {dashboardRows.map(([runStart, workspace, os, device, duration, results]) => (
            <div className="grid grid-cols-[1.15fr_1.1fr_0.65fr_1.45fr_0.75fr_1fr] border-b border-black/5 py-[1.15cqw] text-[1.35cqw] font-normal text-[#777]" key={`${runStart}-${workspace}`}>
              <span className="text-[#777]">{runStart}</span>
              <span>{workspace}</span>
              <span>{os}</span>
              <span className="text-[#777]">{device}</span>
              <span className="text-[#777]">{duration}</span>
              <span className={results.includes("2 failure") ? "text-[#b43a34]" : "text-[#1f8a67]"}>{results}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export function Cloud() {
  return (
    <section id="cloud">
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
          Maestro Cloud
        </p>
      </div>
      <div className="bordered-div-padding !pb-0">
        <div className="max-w-3xl space-y-4">
          <h3 className="section-heading">
            Scale in our cloud
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            Maestro Cloud provides high-speed, test-tuned infrastructure.
          </p>
        </div>
      </div>

      <div className="bordered-div-padding !pt-6 !pb-10 md:!pt-7 md:!pb-[50px] lg:!pt-8 lg:!pb-[60px]">
        <div className="overflow-hidden rounded-3xl border bg-[oklch(0.935_0_0)] md:aspect-[5/3] lg:aspect-auto lg:h-[320px]">
          <CloudDashboardMockup />
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {cloudFeatures.map((feature) => (
            <div className="flex gap-3" key={feature.title}>
              <HugeiconsIcon
                icon={feature.icon as CloudFeatureIcon}
                className="size-5 shrink-0"
                strokeWidth={1.8}
              />
              <div>
                <h4 className="card-heading">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild>
            <a href="/cloud">Learn more about Maestro Cloud</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
