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

type TerminalCodeRow = {
  line: string;
  check: string;
  content: React.ReactNode;
};

function TerminalCodeMockup({
  ariaLabel,
  children,
}: {
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div
      aria-label={ariaLabel}
      className="relative aspect-[3/4] overflow-hidden bg-[#f8f7f5] text-[#5d5d64]"
      role="img"
    >
      <div className="absolute inset-0 flex flex-col">
        <div className="flex h-14 shrink-0 items-center gap-3 border-b border-black/5 bg-[#eeecea] px-5">
          <span className="size-4 rounded-full bg-[#c7c2bb]" />
          <span className="size-4 rounded-full bg-[#c7c2bb]" />
          <span className="size-4 rounded-full bg-[#c7c2bb]" />
        </div>
        <div className="min-h-0 flex-1 overflow-hidden px-5 py-6 font-mono text-sm leading-[1.45] tracking-normal md:text-xs lg:text-base">
          {children}
        </div>
      </div>
    </div>
  );
}

function AgenticLoopCodeMockup() {
  const rows: TerminalCodeRow[] = [
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
    <TerminalCodeMockup ariaLabel="Generated Maestro YAML test">
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
    </TerminalCodeMockup>
  );
}

function AgentPlanningCodeMockup() {
  return (
    <TerminalCodeMockup ariaLabel="Agent planning Maestro tests for a settings screen">
      <div className="space-y-3 whitespace-nowrap text-[#3f3f42]">
        <p className="font-semibold">
          <span className="text-[#9b9b9b]">&gt; </span>
          write Maestro tests for the new settings screen, including
          setting/testing each setting within
          <br />
          <span className="pl-[2ch]">with full test plan, pls</span>
        </p>
        <p>
          <span className="text-[#3f3f42]">● </span>
          Let me look at the live screen and existing Maestro tests to
          understand what needs testing.
        </p>
        <p className="pl-5 text-[#9b9b9b]">
          Read emulator screen hierarchy, searched for{" "}
          <span className="font-semibold">1</span> pattern, read{" "}
          <span className="font-semibold">4</span> files, listed{" "}
          <span className="font-semibold">1</span> directory
        </p>
        <p>
          <span className="text-[#3f3f42]">● </span>
          Now I have a clear picture of the settings screen. Let me write a
          suite of focused Maestro tests.
        </p>
        <p>---</p>
        <p>Here are the tests I propose:</p>
        <div className="pl-[2ch]">
          <p className="font-semibold">Structure / Smoke</p>
          <p>
            1. <span className="text-[#9997ff]">settings_sections_visible</span>{" "}
            - scroll through the full screen and assert every section header is
            present
          </p>
        </div>
        <div className="pl-[2ch]">
          <p className="font-semibold">Content Correctness</p>
          <p>
            2. <span className="text-[#9997ff]">settings_about_shows_version</span>{" "}
            - About section shows Version and Build rows
          </p>
          <p>
            3. <span className="text-[#9997ff]">settings_voice_section_no_api_key</span>{" "}
            - voice section shows no voices loaded
          </p>
        </div>
        <div className="pl-[2ch]">
          <p className="font-semibold">Pickers</p>
          <p>
            4. <span className="text-[#9997ff]">settings_sample_rate_picker</span>{" "}
            - verify sample rate options
          </p>
          <p>
            5. <span className="text-[#9997ff]">settings_effects_profile_picker</span>{" "}
            - verify effects profile options
          </p>
        </div>
        <div className="pl-[2ch]">
          <p className="font-semibold">Persistence</p>
          <p>
            6. <span className="text-[#9997ff]">settings_toggles_persist</span>{" "}
            - toggle every switch, restart app, verify saved state
          </p>
          <p>
            7. <span className="text-[#9997ff]">settings_voice_rate_persists</span>{" "}
            - adjust speaking rate and verify value after relaunch
          </p>
          <p>
            8. <span className="text-[#9997ff]">settings_audio_encoding_persists</span>{" "}
            - choose MP3 and confirm selection survives restart
          </p>
        </div>
        <div className="pl-[2ch]">
          <p className="font-semibold">Reset</p>
          <p>
            9. <span className="text-[#9997ff]">settings_reset_to_defaults</span>{" "}
            - reset all TTS settings and verify confirmation
          </p>
          <p>
            10. <span className="text-[#9997ff]">settings_reset_cancel</span>{" "}
            - cancel reset flow and verify settings remain unchanged
          </p>
        </div>
        <div className="pl-[2ch]">
          <p className="font-semibold">Navigation</p>
          <p>
            11. <span className="text-[#9997ff]">settings_history_button_navigates</span>{" "}
            - tap History and verify empty state or recent sessions
          </p>
          <p>
            12. <span className="text-[#9997ff]">settings_back_returns_home</span>{" "}
            - navigate back and assert the home screen is visible
          </p>
        </div>
        <div className="pl-[2ch]">
          <p className="font-semibold">Accessibility</p>
          <p>
            13. <span className="text-[#9997ff]">settings_controls_accessible_labels</span>{" "}
            - verify controls expose stable accessible labels
          </p>
          <p>
            14. <span className="text-[#9997ff]">settings_dynamic_type_layout</span>{" "}
            - increase text size and verify rows remain tappable
          </p>
          <p>
            15. <span className="text-[#9997ff]">settings_voiceover_order</span>{" "}
            - assert VoiceOver traversal follows visual order
          </p>
        </div>
      </div>
    </TerminalCodeMockup>
  );
}

function GitCloneCodeMockup() {
  return (
    <TerminalCodeMockup ariaLabel="Terminal output showing a Maestro repository clone">
      <div className="space-y-0.5 whitespace-nowrap text-[#3f3f42]">
        <p>
          <span className="text-[#19834e]">t@macbookpro</span>
          <span className="text-[#5d5d64]"> </span>
          <span className="text-[#1e63c8]">Code</span>
          <span className="text-[#5d5d64]"> % </span>
          <span className="text-[#3f3f42]">
            git clone https://github.com/mobile-dev-inc/Maestro.git
          </span>
        </p>
        <p className="text-[#c77722]">---</p>
        <p>
          Cloning into <span className="text-[#19834e]">'Maestro'</span>...
        </p>
        <p>
          remote: Enumerating objects:{" "}
          <span className="text-[#c77722]">32693</span>, done.
        </p>
        <p>
          remote: Counting objects:{" "}
          <span className="text-[#c77722]">100%</span> (
          <span className="text-[#c77722]">1379/1379</span>), done.
        </p>
        <p>
          remote: Compressing objects:{" "}
          <span className="text-[#c77722]">100%</span> (
          <span className="text-[#c77722]">652/652</span>), done.
        </p>
        <p>
          remote: Total <span className="text-[#c77722]">32693</span> (delta{" "}
          <span className="text-[#c77722]">1101</span>), reused{" "}
          <span className="text-[#c77722]">743</span> (delta{" "}
          <span className="text-[#c77722]">723</span>), pack-reused{" "}
          <span className="text-[#c77722]">31314</span>
        </p>
        <p>
          Receiving objects: <span className="text-[#c77722]">100%</span> (
          <span className="text-[#c77722]">32693/32693</span>),{" "}
          <span className="text-[#c77722]">925.09</span> MiB |{" "}
          <span className="text-[#c77722]">13.99</span> MiB/s, done.
        </p>
        <p>
          Resolving deltas: <span className="text-[#c77722]">100%</span> (
          <span className="text-[#c77722]">14496/14496</span>), done.
        </p>
        <p className="text-[#c77722]">---</p>
        <p>
          <span className="text-[#19834e]">t@macbookpro</span>
          <span className="text-[#5d5d64]"> </span>
          <span className="text-[#1e63c8]">Code</span>
          <span className="text-[#5d5d64]"> % </span>
          <span className="inline-block h-[1em] w-[0.55em] translate-y-0.5 bg-[#3f3f42]" />
        </p>
      </div>
    </TerminalCodeMockup>
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
                "overflow-hidden rounded-none border-x-0 border-y-0 shadow-none",
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
                <div className="mt-auto -mr-4 -mb-4 ml-4">
                  <div className="bg-muted overflow-hidden rounded-sm rounded-tl-3xl shadow-md">
                    {index === 0 ? (
                      <AgentPlanningCodeMockup />
                    ) : index === 1 ? (
                      <AgenticLoopCodeMockup />
                    ) : index === 2 ? (
                      <GitCloneCodeMockup />
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
