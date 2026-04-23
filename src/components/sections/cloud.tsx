import { FastForward, Plug, SearchCheck } from "lucide-react";

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
      <div className="bordered-div-padding">
        <div className="max-w-3xl space-y-4">
          <h3 className="section-heading">
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
