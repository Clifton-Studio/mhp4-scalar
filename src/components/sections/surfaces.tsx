import { Card, CardContent } from "@/components/ui/card";

const surfaces = [
  {
    title: "Power up your favorite agent",
    description:
      'The agent-first approach. Turn your coding agent into a mobile expert with our official MCP server. Give agents the "eyes and hands" to build and verify E2E coverage locally, fast and efficient, ensuring every change is fully tested before you ever open a PR.',
    image: {
      src: "/images/homepage/cursor-reference/cursor-square-reference-1.png",
      width: 1300,
      height: 1300,
    },
  },
  {
    title: "Build tests in Maestro Studio",
    description:
      'A visual IDE for Mac and Windows that makes manual test creation feel like magic. Contextual autocomplete, "tap-tap-tap" YAML generation, deep selector inspection, and an embedded emulator to fix broken flows or validate agent-generated coverage in seconds.',
    image: {
      src: "/images/homepage/cursor-reference/cursor-square-reference-2.png",
      width: 1300,
      height: 1300,
    },
  },
  {
    title: "Use the Maestro CLI",
    description:
      "The lightweight, open-source engine for developers who prefer to bring their own IDE. Use the CLI to run human-readable YAML tests with the fastest, most dependable runner in mobile - whether you're iterating locally or executing at scale in CI.",
    image: {
      src: "/images/homepage/cursor-reference/cursor-square-reference-3.png",
      width: 1358,
      height: 1356,
    },
  },
];

export function Surfaces() {
  return (
    <section id="surfaces">
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
          Surfaces
        </p>
      </div>
      <div className="bordered-div-padding !pb-0">
        <div className="max-w-3xl space-y-4">
          <h3 className="section-heading">
            Build like the wind
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            Write and manage tests wherever you like, however fast you like.
          </p>
        </div>
      </div>

      <div className="bordered-div-padding !pt-6 !pb-10 md:!pt-7 md:!pb-[50px] lg:!pt-8 lg:!pb-[60px]">
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
