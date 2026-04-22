"use client";

import { DownloadMenu } from "@/components/elements/download-menu";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bordered-div-padding relative flex flex-col items-center gap-8 text-center md:gap-10 lg:gap-16 lg:!py-25">
        {/* Main Heading */}
        <div className="max-w-4xl space-y-6 md:space-y-8 lg:space-y-12">
          <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
            Go ahead. <span className="block">Code at 150mph.</span>
          </h1>
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
        <div className="w-full max-w-[1000px] overflow-hidden rounded-[24px] border p-1 shadow-lg md:rounded-[40px]">
          <img
            src="/images/homepage/dummy-screenshot.png"
            alt="Maestro running a mobile UI test"
            width={1671}
            height={1202}
            className="h-auto w-full rounded-[20px] object-contain md:rounded-[36px]"
          />
        </div>
      </div>
    </section>
  );
}
