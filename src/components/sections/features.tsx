import { CalendarClock, ChartBar, SquarePen } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: SquarePen,
    title: "Close the agentic loop",
    description:
      "Unlock high-velocity mobile development by powering up your agents with Maestro's AI toolkit.",
    image: {
      src: "/images/homepage/cursor-reference/terminal-output-wrapped-instruction-light-clean-faded.png",
      alt: "Terminal output showing a Maestro test planning instruction",
      width: 438,
      height: 584,
    },
  },
  {
    icon: CalendarClock,
    title: "Generate deterministic E2E tests",
    description:
      "Maestro tests are human-readable YAML files, not black boxes. Repeatable, auditable, trustworthy.",
    image: {
      src: "/images/homepage/cursor-reference/wikipedia-ios-settings-crop-light-clean-faded.png",
      alt: "Terminal output showing deterministic iOS settings test execution",
      width: 438,
      height: 584,
    },
  },
  {
    icon: ChartBar,
    title: "Build on open-source integrity",
    description:
      "Extensible and with no vendor lock-in, Maestro is the foundation for thousands of teams’ mobile testing.",
    image: {
      src: "/images/homepage/cursor-reference/code-git-clone-crop-light-clean-faded-v2.png",
      alt: "Terminal output showing a Maestro repository clone",
      width: 438,
      height: 584,
    },
  },
];

function AgenticLoopCodeMockup() {
  const rows = [
    {
      line: "1",
      check: "",
      content: <span className="text-[#8d8b86]"># .maestro/ios-settings.yaml</span>,
    },
    {
      line: "2",
      check: "",
      content: (
        <>
          <span className="text-[#1e63c8]">appId</span>
          <span className="text-[#5d5d64]">: org.wikipedia.wikipedia</span>
        </>
      ),
    },
    {
      line: "3",
      check: "",
      content: <span className="text-[#c77722]">---</span>,
    },
    {
      line: "4",
      check: "✓",
      content: <span className="text-[#7b45c7]">- launchApp</span>,
    },
    {
      line: "5",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- assertVisible</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"Welcome to Wikipedia"</span>
        </>
      ),
    },
    {
      line: "6",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- runFlow</span>
          <span className="text-[#5d5d64]">: subflows/onboarding.yaml</span>
        </>
      ),
    },
    {
      line: "7",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- tapOn</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"Year In Review"</span>
        </>
      ),
    },
    {
      line: "8",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- assertNotVisible</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#c8493f]">"Sign in to edit"</span>
        </>
      ),
    },
    {
      line: "9",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- inputText</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"qwerty"</span>
        </>
      ),
    },
    {
      line: "10",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- assertVisible</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"qwerty"</span>
        </>
      ),
    },
    {
      line: "11",
      check: "✓",
      content: <span className="text-[#7b45c7]">- eraseText</span>,
    },
    {
      line: "12",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- inputText</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"london"</span>
        </>
      ),
    },
    {
      line: "13",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- assertVisible</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"London"</span>
        </>
      ),
    },
    {
      line: "14",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- tapOn</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"London"</span>
        </>
      ),
    },
    {
      line: "15",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- assertVisible</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"United Kingdom"</span>
        </>
      ),
    },
    {
      line: "16",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- tapOn</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"Save"</span>
        </>
      ),
    },
    {
      line: "17",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- scrollUntilVisible</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"History"</span>
        </>
      ),
    },
    {
      line: "18",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- assertVisible</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"History"</span>
        </>
      ),
    },
    {
      line: "19",
      check: "✓",
      content: <span className="text-[#7b45c7]">- back</span>,
    },
    {
      line: "20",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- assertVisible</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"Search"</span>
        </>
      ),
    },
    {
      line: "21",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- tapOn</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"Settings"</span>
        </>
      ),
    },
    {
      line: "22",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- assertVisible</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"Language"</span>
        </>
      ),
    },
    {
      line: "23",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- tapOn</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"Language"</span>
        </>
      ),
    },
    {
      line: "24",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- inputText</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"English"</span>
        </>
      ),
    },
    {
      line: "25",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- assertVisible</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"English"</span>
        </>
      ),
    },
    {
      line: "26",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- tapOn</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"Done"</span>
        </>
      ),
    },
    {
      line: "27",
      check: "✓",
      content: <span className="text-[#7b45c7]">- back</span>,
    },
    {
      line: "28",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- assertVisible</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"Home"</span>
        </>
      ),
    },
    {
      line: "29",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- tapOn</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"Explore"</span>
        </>
      ),
    },
    {
      line: "30",
      check: "✓",
      content: (
        <>
          <span className="text-[#7b45c7]">- assertVisible</span>
          <span className="text-[#5d5d64]">: </span>
          <span className="text-[#19834e]">"Featured article"</span>
        </>
      ),
    },
  ];

  return (
    <div
      aria-label="Generated Maestro YAML test"
      className="relative aspect-[438/584] overflow-hidden bg-[#f8f7f5] text-[#5d5d64]"
      role="img"
    >
      <div className="absolute inset-0 flex flex-col">
        <div className="flex h-14 shrink-0 items-center gap-3 border-b border-black/5 bg-[#eeecea] px-5">
          <span className="size-4 rounded-full bg-[#c7c2bb]" />
          <span className="size-4 rounded-full bg-[#c7c2bb]" />
          <span className="size-4 rounded-full bg-[#c7c2bb]" />
        </div>
        <div className="min-h-0 flex-1 overflow-hidden px-5 py-6 font-mono text-sm leading-[1.45] tracking-normal md:text-xs lg:text-base">
          {rows.map((row) => (
            <div
              className="grid grid-cols-[1.15rem_1rem_max-content] whitespace-nowrap md:grid-cols-[1.15rem_1.4rem_max-content]"
              key={row.line}
            >
              <span className="text-right text-[#8d8b86]">{row.line}</span>
              <span className="text-right text-[#229b59]">{row.check}</span>
              <span className="pl-2 md:pl-3">{row.content}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
            Robust, open-source, time-tested - and now fully primed for human+AI development.
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
                <div className="bg-muted mt-auto mb-4 overflow-hidden rounded-sm rounded-tl-3xl shadow-md">
                  {index === 1 ? (
                    <AgenticLoopCodeMockup />
                  ) : (
                    <img
                      src={feature.image.src}
                      alt={feature.image.alt}
                      width={feature.image.width}
                      height={feature.image.height}
                      className="h-auto w-full"
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
