import { Shapes } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const surfaces = [
  {
    title: "Power up your favorite agent",
    description:
      'Turn your coding agent into a mobile expert with our official Skill, MCP server, and Claude Plugin. Give agents the "eyes and hands" to build and verify E2E coverage locally, ensuring every change is fully tested before you ever open a PR.',
    image: {
      src: "/images/homepage/adaptive-agent-dark.png",
      width: 1000,
      height: 602,
    },
  },
  {
    title: "Build tests in Maestro Studio",
    description:
      'A visual IDE for Mac and Windows that makes manual test creation feel like magic. Contextual autocomplete, "tap-tap-tap" YAML generation, deep selector inspection, and an embedded emulator to fix broken flows or validate agent-generated coverage in seconds.',
    image: {
      src: "/images/homepage/adaptive-studio-dark.png",
      width: 1740,
      height: 1050,
    },
  },
  {
    title: "Use the Maestro CLI",
    description:
      "The lightweight, open-source engine for developers who prefer to bring their own IDE. Use the CLI to run human-readable YAML tests with the fastest, most dependable runner in mobile - whether you're iterating locally or executing at scale in CI.",
    image: {
      src: "/images/homepage/adaptive-cli-dark.png",
      width: 1112,
      height: 658,
    },
  },
];

export function Surfaces() {
  return (
    <section id="surfaces">
      <div className="bordered-div-padding">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-muted-foreground flex items-center gap-2 text-sm leading-snug font-medium md:text-base">
            <Shapes className="size-5" />
            Surfaces
          </h2>
          <h3 className="section-heading">
            Build like the wind
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            Write and manage tests wherever you like, however fast you like.
          </p>
        </div>
      </div>

      <div className="bordered-div-padding !pt-0">
        <div className="grid grid-cols-1 border md:grid-cols-3">
          {surfaces.map((surface, index) => (
            <Card
              key={surface.title}
              className={[
                "rounded-none border-x-0 border-y-0 shadow-none",
                index > 0 ? "md:border-l" : "",
                index > 0 ? "border-t md:border-t-0" : "",
              ].join(" ")}
            >
              <CardContent className="flex h-full flex-col gap-6">
                <div className="bg-muted overflow-hidden rounded-md border">
                  <img
                    src={surface.image.src}
                    alt={surface.title}
                    width={surface.image.width}
                    height={surface.image.height}
                    className="h-auto w-full"
                  />
                </div>
                <div>
                  <h4 className="card-heading">
                    {surface.title}
                  </h4>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    {surface.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
