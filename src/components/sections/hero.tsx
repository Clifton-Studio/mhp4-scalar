"use client";

import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bordered-div-padding relative flex flex-col items-center gap-8 text-center md:gap-10 lg:gap-16 lg:!py-25">
        {/* Main Heading */}
        <div className="max-w-4xl space-y-6 md:space-y-8 lg:space-y-12">
          <a
            href="/download"
            className="border-border bg-card text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded-sm border px-3 py-1.5 text-sm font-medium transition-colors"
          >
            Open source mobile UI testing
            <ArrowRight className="size-4" />
          </a>
          <h1 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
            Go ahead. <span className="block">Code at 150mph.</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-[700px] text-sm leading-relaxed md:text-lg lg:text-xl">
            Maestro is mobile UI testing at agentic velocity. Open source,
            human-readable code, easy CI integrations, and powerful CLI and
            desktop apps.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <Button asChild>
            <a href="/download">
              <Download className="size-5" />
              Download
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="/docs">Read the docs</a>
          </Button>
        </div>
        <p className="text-muted-foreground max-w-2xl text-xs leading-relaxed md:text-sm">
          Studio desktop app for Mac, Windows, and Linux. Maestro CLI for
          developers who prefer to stay in their terminal.
        </p>
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
      <div className="bordered-div-padding flex items-center justify-center border-t">
        <img
          src="/images/homepage/dummy-screenshot.png"
          alt="Maestro running a mobile UI test"
          width={1671}
          height={1202}
          className="rounded-lg mask-b-from-50% mask-b-to-90%"
        />
      </div>
    </section>
  );
}
