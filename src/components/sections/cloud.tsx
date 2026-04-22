import { CloudIcon, FastForward, Plug, SearchCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

const cloudFeatures = [
  {
    title: "Parallel execution",
    description:
      "Run your entire test suite across real devices simultaneously to cut CI wait times down to minutes. Enterprise-grade.",
    icon: FastForward,
  },
  {
    title: "Test with context",
    description:
      "Every run includes step-by-step video playback, detailed logs, and flake detection so you can diagnose and fix bugs efficiently.",
    icon: SearchCheck,
  },
  {
    title: "Seamless CI integration",
    description:
      "Plug Maestro into your existing pipeline with a single command to get instant reporting and deep diagnostic context.",
    icon: Plug,
  },
];

export function Cloud() {
  return (
    <section id="cloud" className="container">
      <div className="bordered-div-padding border border-t-0">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
            <CloudIcon className="size-5" />
            Maestro Cloud
          </h2>
          <h3 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
            Scale in our cloud
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            Maestro Cloud provides high-speed, test-tuned infrastructure.
          </p>
        </div>

        <div className="bg-muted mt-8 overflow-hidden rounded-md border">
          <img
            src="/images/homepage/maestro-dashboard.png"
            alt="Maestro Cloud dashboard"
            width={2561}
            height={712}
            className="h-auto w-full"
          />
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {cloudFeatures.map((feature) => (
            <div className="flex gap-3" key={feature.title}>
              <feature.icon className="mt-1 size-5 shrink-0" />
              <div>
                <h4 className="font-weight-display text-lg leading-snug">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button asChild>
            <a href="/cloud">Learn more about Maestro Cloud</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
