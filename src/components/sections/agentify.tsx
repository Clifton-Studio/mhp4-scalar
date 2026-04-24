import { Bot, BrainCircuit, ShieldCheck } from "lucide-react";

const agentifyFeatures = [
  {
    title: "The Maestro Bot",
    description:
      "Activate Maestro's cloud agent in your CI to react to every PR, analyzing code changes and binaries to create or fix tests automatically.",
    icon: Bot,
  },
  {
    title: "Trust but verify",
    description:
      "Receive PR reports with crisp summaries, evidence of coverage, and test run histories - with full logs for you or your agent to dive deeper.",
    icon: ShieldCheck,
  },
  {
    title: "Fully autonomous QA",
    description:
      "Treat the Maestro Bot like you would a true Head of QA. Set guidelines. Ask questions. Request further coverage. Build institutional knowledge.",
    icon: BrainCircuit,
  },
];

export function Agentify() {
  return (
    <section id="agentify">
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
          Intelligence
        </p>
      </div>
      <div className="bordered-div-padding !pb-10 md:!pb-16 lg:!pb-20">
        <div className="max-w-3xl space-y-4">
          <h3 className="section-heading">
            Agentify your workflow
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            Bring Maestro into your pull requests - and go full self-driving.
          </p>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {agentifyFeatures.map((feature) => (
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
      </div>
    </section>
  );
}
