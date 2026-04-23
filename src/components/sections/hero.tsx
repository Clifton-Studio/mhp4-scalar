"use client";

import { DownloadMenu } from "@/components/elements/download-menu";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bordered-div-padding relative flex flex-col items-center gap-8 text-center md:gap-10 lg:gap-16 lg:!py-25">
        {/* Main Heading */}
        <div className="max-w-4xl space-y-6 md:space-y-8 lg:space-y-12">
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs font-medium tracking-[0.18em] uppercase md:text-sm">
              E2E UI TESTING
            </p>
            <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl lg:font-light">
              Go ahead. <span className="block">Code at 150mph.</span>
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
        <div className="w-full max-w-[1000px] overflow-hidden rounded-[24px] border p-1 shadow-lg md:rounded-[40px]">
          <div className="aspect-[1.31/1] w-full overflow-hidden rounded-[20px] bg-black md:rounded-[36px]">
            <iframe
              src="https://www.youtube.com/embed/mGHJj6b67NQ?autoplay=1&mute=1&playsinline=1&rel=0"
              title="Maestro on YouTube"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
