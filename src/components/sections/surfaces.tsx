import { Card, CardContent } from "@/components/ui/card";

const surfaces = [
  {
    title: "Maestro MCP",
    description:
      'Power up your favorite agent with our official MCP server. Give agents the "eyes and hands" to build and verify E2E coverage locally, fast and efficient, ensuring every change is fully tested before you ever open a PR.',
    image: {
      src: "/images/homepage/cursor-reference/cursor-square-reference-1.png",
      width: 1300,
      height: 1300,
    },
  },
  {
    title: "Maestro Studio",
    description:
      'Build tests in a visual IDE for Mac and Windows that makes manual test creation feel like magic. Contextual autocomplete, "tap-tap-tap" YAML generation, deep selector inspection, and an embedded emulator.',
    image: {
      src: "/images/homepage/cursor-reference/cursor-square-reference-2.png",
      width: 1300,
      height: 1300,
    },
  },
  {
    title: "Maestro CLI",
    description:
      "The lightweight, open-source engine for developers who prefer to bring their own IDE. Run human-readable YAML tests with the fastest, best runner in mobile - whether iterating locally or executing at scale in CI.",
    image: {
      src: "/images/homepage/cursor-reference/cursor-square-reference-3.png",
      width: 1358,
      height: 1356,
    },
  },
];

function SurfaceWindowTopBar({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={["relative flex h-4 shrink-0 items-center border-b border-black/5 bg-[#eeecea] px-2.5", className].filter(Boolean).join(" ")}>
      <div className="flex items-center gap-1">
        <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
        <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
        <span className="size-1.5 rounded-full bg-[#c7c2bb]" />
      </div>
      <span className="absolute inset-x-0 translate-y-px text-center text-[0.46rem] leading-none font-medium tracking-normal text-[#8d8b86]">
        {title}
      </span>
    </div>
  );
}

function SurfaceGrainOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-screen"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.72'/%3E%3C/svg%3E\")",
      }}
      aria-hidden="true"
    />
  );
}

function StudioCodeLine({
  line,
  children,
}: {
  line: string;
  children: React.ReactNode;
}) {
  return (
    <p className="flex">
      <span className="w-4 shrink-0 text-right text-[#8d8b86]">{line}</span>
      <span className="pl-2">{children}</span>
    </p>
  );
}

const studioYamlCode = `appId: com.apple.Maps
---
- launchApp:
    clearState: true
- runFlow:
    when:
      visible: "Allow “Maps” to use your location?"
    commands:
      - tapOn: "Allow While Using App"
    label: Handle location permission if prompted

- runFlow:
    when:
      visible: "What’s New in Maps"
    commands:
      - tapOn: "Continue"
    label: Dismiss onboarding splash screen

- tapOn: 
    id: "Search"
- inputText: "Space Needle"
- waitForAnimationToEnd
- tapOn: "Space Needle, Broad St, Seattle, WA"

- assertVisible: "Space Needle"
- assertVisible: "Observation deck"

- runFlow:
    when:
      visible: 
        id: "More"
    commands:
      - tapOn:
          id: "More"
    label: Open more options if action bar is collapsed

- tapOn: "Add to Favorites"

- runFlow:
    when:
      visible: "Done"
    commands:
      - tapOn: "Done"
    label: Close the detail card to return to map

- tapOn:
    id: "Search"
- scrollUntilVisible:
    element: "Favorites"
    direction: DOWN
- tapOn: "See All"

- assertVisible: "Space Needle"
- assertVisible: "400 Broad St"`;

function HighlightedYamlLine({ line }: { line: string }) {
  const keyColor = "text-[#1e63c8]";
  const commandColor = "text-[#7b45c7]";
  const stringColor = "text-[#19834e]";

  if (!line) {
    return <span> </span>;
  }

  const leading = line.match(/^ */)?.[0] ?? "";
  const rest = line.slice(leading.length);
  const keyMatch = rest.match(/^(- )?([A-Za-z][A-Za-z0-9]*)(:)?(.*)$/);

  if (rest === "---") {
    return <span className="text-[#c77722]">---</span>;
  }

  if (!keyMatch) {
    return <span>{line}</span>;
  }

  const [, dash = "", key, colon = "", remainder = ""] = keyMatch;
  const keyClassName = dash ? commandColor : keyColor;
  const stringMatch = remainder.match(/^(.*?)(["“].*["”])(.*)$/);

  return (
    <>
      <span>{leading}</span>
      {dash ? <span className={commandColor}>{dash}</span> : null}
      <span className={keyClassName}>{key}</span>
      <span>{colon}</span>
      {stringMatch ? (
        <>
          <span>{stringMatch[1]}</span>
          <span className={stringColor}>{stringMatch[2]}</span>
          <span>{stringMatch[3]}</span>
        </>
      ) : (
        <span>{remainder}</span>
      )}
    </>
  );
}

function MaestroStudioMockup() {
  const mutedColor = "text-[#8d8b86]";

  return (
    <div
      aria-label="Maestro Studio interface showing a simulator and YAML editor"
      className="relative flex aspect-square items-start justify-start overflow-hidden bg-[radial-gradient(ellipse_at_18%_8%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.18)_28%,rgba(255,255,255,0.04)_54%,transparent_72%),radial-gradient(ellipse_at_86%_28%,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.08)_34%,transparent_64%),radial-gradient(ellipse_at_36%_92%,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.08)_34%,transparent_66%),linear-gradient(135deg,#202020_0%,#151515_48%,#2a2a2a_100%)] pt-5 pl-5"
      role="img"
    >
      <SurfaceGrainOverlay />
      <div className="origin-top-left scale-[0.72] sm:scale-[0.76] md:scale-[0.72] lg:scale-100">
        <div className="h-[350px] w-[500px] overflow-hidden rounded-sm bg-[#f8f7f5] text-[#252525] shadow-md">
          <SurfaceWindowTopBar title="Maestro Studio" className="!px-2" />
          <div className="flex h-[334px] min-h-0 bg-white text-[0.5rem] leading-[1.45]">
            <div className="w-[138px] shrink-0 border-r border-black/10 bg-[#f7f7f7] p-2">
              <div className="mb-1.5 flex items-center justify-between rounded-md border border-black/10 bg-white px-2 py-1 text-[0.46rem] shadow-sm">
                <span className="font-medium">iPhone 17 Pro</span>
                <span className="text-[#38a169]">●</span>
              </div>
              <div className="relative h-[250px] w-full overflow-hidden rounded-[12px] bg-black shadow-sm">
                <img
                  src="/images/homepage/studio-maps-screen.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex min-w-0 flex-1 flex-col border-r border-black/10 bg-white">
              <div className="flex h-6 shrink-0 items-end border-b border-black/10 px-2 text-[0.48rem]">
                <div className="flex h-5 items-center gap-1 rounded-t-sm border border-b-0 border-black/10 bg-white px-2">
                  <span className="font-medium">simple-navigation-flow.yaml</span>
                  <span className="text-[#8d8b86]">×</span>
                </div>
              </div>
              <div className="min-h-0 flex-1 overflow-hidden px-3 py-2 font-mono text-[0.45rem] leading-[1.45] tracking-normal">
                {studioYamlCode.split("\n").map((line, index) => (
                  <p className="flex whitespace-pre" key={`${index}-${line}`}>
                    <span className="w-4 shrink-0 text-right text-[#8d8b86]">
                      {index + 1}
                    </span>
                    <span className="pl-2">
                      <HighlightedYamlLine line={line} />
                    </span>
                  </p>
                ))}
              </div>
              <div className="flex h-8 shrink-0 items-center gap-2 border-t border-black/10 px-3 text-[0.48rem]">
                <span className="rounded-md bg-[#f0f0f0] px-2 py-1 font-medium">Local</span>
                <span className={mutedColor}>Cloud</span>
                <span className="ml-auto rounded-md border border-black/10 px-2 py-1">▷ Run Test</span>
              </div>
            </div>
            <div className="w-[100px] shrink-0 bg-[#f7f7f7] px-2 py-3 text-[0.5rem]">
              <p className="mb-2 font-semibold">maestro</p>
              {[
                ".maestro",
                "scripts",
                "subflows",
                "ios-flow.yaml",
                "ios-saved-flow.yaml",
                "simple-navigation-flow.yaml",
              ].map((item, index) => (
                <p
                  className={[
                    "truncate rounded-sm px-1 py-0.5",
                    index === 5 ? "bg-black/6 font-medium" : "",
                  ].join(" ")}
                  key={item}
                >
                  {item}
                </p>
              ))}
              <p className="mt-1 px-1 py-0.5 italic text-[#8d8b86]">New file</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CliSurfaceMockup() {
  const optionColor = "text-[#1e63c8]";
  const commandColor = "text-[#7b45c7]";
  const mutedColor = "text-[#8d8b86]";
  const stringColor = "text-[#19834e]";

  return (
    <div
      aria-label="Terminal output showing Maestro CLI help"
      className="relative flex aspect-square items-start justify-start overflow-hidden bg-[radial-gradient(ellipse_at_42%_-10%,rgba(255,255,255,0.58)_0%,rgba(255,255,255,0.24)_24%,rgba(255,255,255,0.06)_48%,transparent_68%),radial-gradient(ellipse_at_6%_34%,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.12)_28%,transparent_58%),radial-gradient(ellipse_at_80%_86%,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.1)_34%,transparent_64%),linear-gradient(135deg,#181818_0%,#242424_46%,#151515_100%)] pt-8 pl-8"
      role="img"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.72'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />
      <div className="origin-top-left scale-[0.7] sm:scale-[0.74] md:scale-[0.72] lg:scale-100">
        <div className="h-[300px] w-[540px] overflow-hidden rounded-sm bg-[#f8f7f5] text-[#5d5d64] shadow-md">
          <SurfaceWindowTopBar title="Terminal" className="!px-2" />
          <div className="overflow-hidden px-2.5 py-2 font-mono text-[0.45rem] leading-[1.55] tracking-normal whitespace-pre-wrap">
            <p>
              <span className={stringColor}>t@macbookpro</span>
              <span> </span>
              <span className={optionColor}>~</span>
              <span> % </span>
              <span className="text-[#3f3f42]">maestro</span>
            </p>
            <p>{" "}</p>
            <p>
              <span className={mutedColor}>Usage:</span>
              <span> maestro </span>
              <span className={optionColor}>[-hv]</span>
              <span> </span>
              <span className={optionColor}>[--[no-]ansi]</span>
              <span> </span>
              <span className={optionColor}>[--verbose]</span>
              <span> </span>
              <span className={optionColor}>[-p=&lt;platform&gt;]</span>
              <span> </span>
              <span className={optionColor}>[--udid=&lt;deviceId&gt;]</span>
              <span> </span>
              <span className={commandColor}>[COMMAND]</span>
            </p>
            <p>
              <span className={optionColor}>  -h, --help</span>
              <span>      Display help message</span>
            </p>
            <p>
              <span className={optionColor}>  --[no-]color</span>
              <span>    Enable / disable colors and ansi output</span>
            </p>
            <p>
              <span className={optionColor}>  --p=&lt;platform&gt;</span>
              <span>  (Optional) Select a platform to run on</span>
            </p>
            <p>
              <span className={optionColor}>  --d=&lt;deviceId&gt;</span>
              <span>  (Optional) Device ID to run on explicitly, can be a comma separated list of IDs</span>
            </p>
            <p>
              <span className={optionColor}>  -v, --version</span>
              <span>   Display CLI version</span>
            </p>
            <p>
              <span className={optionColor}>  --verbose</span>
              <span>       Enable verbose logging</span>
            </p>
            <p>{" "}</p>
            <p className="text-[#3f3f42]">Commands:</p>
            <p>
              <span className={commandColor}>  test</span>
              <span>              Test a Flow or set of Flows on a local iOS Simulator or Android Emulator</span>
            </p>
            <p>
              <span className={commandColor}>  cloud</span>
              <span>             Upload your flows on Cloud by using </span>
              <span className={stringColor}>`maestro cloud sample/app.apk flows_folder/</span>
            </p>
            <p>
              <span className={commandColor}>  record</span>
              <span>            Render a beautiful video of your Flow - Great for demos and bug reports</span>
            </p>
            <p>
              <span className={commandColor}>  download-samples</span>
              <span>  Download sample apps and flows for trying out maestro without setting up your own app</span>
            </p>
            <p>
              <span className={commandColor}>  login</span>
              <span>             Log into Maestro Cloud</span>
            </p>
            <p>
              <span className={commandColor}>  logout</span>
              <span>            Log out of Maestro Cloud</span>
            </p>
            <p>
              <span className={commandColor}>  bugreport</span>
              <span>         Report a bug - Help us improve your experience!</span>
            </p>
            <p>
              <span className={commandColor}>  start-device</span>
              <span>      Starts or creates an iOS Simulator or Android Emulator similar to the ones on the cloud</span>
            </p>
            <p>
              <span className={commandColor}>  chat</span>
              <span>              Use Maestro GPT to help you with Maestro documentation and code questions</span>
            </p>
            <p>
              <span className={commandColor}>  mcp</span>
              <span>               Starts the Maestro MCP server, exposing the device/commands as Model Context Protocol</span>
            </p>
            <p>{" "}</p>
            <p>
              <span className={stringColor}>t@macbookpro</span>
              <span> </span>
              <span className={optionColor}>~</span>
              <span> %</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
                  {index === 1 ? (
                    <MaestroStudioMockup />
                  ) : index === 2 ? (
                    <CliSurfaceMockup />
                  ) : (
                    <img
                      src={surface.image.src}
                      alt={surface.title}
                      width={surface.image.width}
                      height={surface.image.height}
                      className="h-auto w-full"
                    />
                  )}
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
