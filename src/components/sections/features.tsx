import { CalendarClock, ChartBar, SquarePen } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: SquarePen,
    title: "Agentic test management",
    description:
      "Unblock high-velocity development by powering up your local agents or activating fully autonomous agents to manage test coverage upon every PR. Ensure your 100s of PRs are doing what they should, well.",
    image: {
      src: "/images/homepage/feature-agentic-test-management-dark.png",
      alt: "Agentic test management interface",
      width: 626,
      height: 800,
    },
  },
  {
    icon: CalendarClock,
    title: "Deterministic test execution",
    description:
      "Maestro flows are defined in human-readable YAML files so you and your agents always track to ground truth, not a black box. Have complete confidence with concrete, auditable tests.",
    image: {
      src: "/images/homepage/feature-deterministic-test-execution-dark.png",
      alt: "Deterministic test execution details",
      width: 800,
      height: 1020,
    },
  },
  {
    icon: ChartBar,
    title: "Reliable, open-source framework",
    description:
      "Trusted by thousands of top-tier teams, Maestro is a super-efficient, transparent platform for your QA. Build on a trustworthy foundation dedicated to the agentic future. Extend it yourself if you like.",
    image: {
      src: "/images/homepage/feature-reliable-open-source-framework-dark.png",
      alt: "Reliable open-source framework report",
      width: 800,
      height: 1020,
    },
  },
];

export function Features() {
  return (
    <section>
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
          Features
        </p>
      </div>
      <div className="bordered-div-padding !pb-0">
        <div className="max-w-3xl space-y-4">
          <h3 className="section-heading">
            Battle-tested. AI-native.
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            Robust, open-source, time-tested - and now fully primed for human
            and AI development.
          </p>
        </div>
      </div>

      <div className="bordered-div-padding !pt-6 !pb-10 md:!pt-7 md:!pb-[50px] lg:!pt-8 lg:!pb-[60px]">
        <div className="grid grid-cols-1 border md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={[
                "rounded-none border-x-0 border-y-0 shadow-none",
                index > 0 ? "md:border-l" : "",
                index > 0 ? "border-t md:border-t-0" : "",
              ].join(" ")}
            >
              <CardContent className="flex h-full flex-col gap-6">
                <div className="space-y-4">
                  <h4 className="card-heading flex items-center gap-2">
                    <feature.icon className="size-5" />
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                    {feature.description}
                  </p>
                </div>
                <div className="bg-muted mt-auto overflow-hidden rounded-md border">
                  <img
                    src={feature.image.src}
                    alt={feature.image.alt}
                    width={feature.image.width}
                    height={feature.image.height}
                    className="h-auto w-full"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
