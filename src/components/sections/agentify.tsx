import { Bot, BrainCircuit, ShieldCheck, Workflow } from "lucide-react";

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
    <section id="agentify" className="container">
      <div className="bordered-div-padding border border-t-0">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
            <Workflow className="size-5" />
            Automation Automation
          </h2>
          <h3 className="font-weight-display text-2xl leading-snug tracking-tighter md:text-3xl lg:text-5xl">
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
      </div>
    </section>
  );
}
