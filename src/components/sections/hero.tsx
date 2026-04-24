"use client";

import { DownloadMenu } from "@/components/elements/download-menu";
import { cn } from "@/lib/utils";

interface HeroProps {
  compact?: boolean;
}

export function Hero({ compact = false }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div
        className={cn(
          "bordered-div-padding relative flex flex-col items-center gap-8 text-center md:gap-10 lg:gap-16 lg:!py-25",
          compact && "hero-copy-compact px-0 pb-0 lg:!pb-0",
        )}
      >
        {/* Main Heading */}
        <div className={cn(compact ? "hero-intro-stack" : "max-w-4xl space-y-6 md:space-y-8 lg:space-y-12")}>
          <div className={cn(compact ? "hero-title-stack" : "space-y-1")}>
            <p className="section-overline">
              E2E UI TESTING
            </p>
            <h1 className="text-3xl leading-snug tracking-tighter font-light md:text-4xl lg:text-5xl">
              Go ahead.{" "}
              <span className="block whitespace-nowrap">Code at 150mph.</span>
            </h1>
          </div>
          <p className="text-muted-foreground mx-auto max-w-[700px] text-sm leading-relaxed md:text-lg lg:text-xl">
            Maestro is mobile UI testing at agentic velocity. Open source,
            human-readable code, easy CI integrations, and powerful CLI and
            desktop apps.
          </p>
        </div>

        <DownloadMenu />
        <div
          className={cn(
            "pointer-events-none absolute top-0 left-full hidden h-[calc(100%+1px)] w-screen overflow-hidden border-b text-start select-none lg:block",
          )}
          aria-hidden="true"
          role="presentation"
        >
          <p className="p-4 whitespace-pre opacity-20">{`appId: com.example.app
---
- launchApp
- tapOn: Login
- inputText: test@example.com
- tapOn: Continue
- assertVisible: Welcome back`}</p>
        </div>
      </div>
    </section>
  );
}
