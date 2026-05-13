import { cn } from "@/lib/utils";

const insights = [
  {
    href: "https://maestro.dev/insights/debugging-flaky-test-flows-tips-qa-teams",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/69c5fa021b352ff267cc46d4-1774599868783.jpg",
    alt: "Debugging Flaky Test Flows: Tips for QA Teams",
    date: "March 27, 2026",
    title: "Debugging Flaky Test Flows: Tips for QA Teams",
    description:
      "Flaky tests are a major headache for QA teams. They pass or fail unpredictably, wasting time and resources. Here's how to tackle them effectively: 1. Use Dynamic Waits: Replace fixed sleeps with smart waits that respond to conditions like element visibility or network activity.",
  },
  {
    href: "https://maestro.dev/insights/version-control-test-automation-best-practices",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/69c5cdcb1b352ff267cc371b-1774583076309.jpg",
    alt: "Version Control for Test Automation: Best Practices",
    date: "March 27, 2026",
    title: "Version Control for Test Automation: Best Practices",
    description:
      "Test automation without version control is a recipe for chaos. It makes teamwork difficult, leads to outdated tests, and slows down scaling efforts. Version control solves these issues by organizing your test scripts, ensuring they stay in sync with your application, and streamlining collaboration.",
  },
  {
    href: "https://maestro.dev/insights/best-practices-parallel-test-execution-cli",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/69c5892c1b352ff267cc2e00-1774556318720.jpg",
    alt: "Best Practices for Parallel Test Execution via CLI",
    date: "March 26, 2026",
    title: "Best Practices for Parallel Test Execution via CLI",
  },
  {
    href: "https://maestro.dev/insights/samsung-one-ui-8-5-beta-galaxy-s24-series",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/69c588431b352ff267cc2de3-1774553293451.jpg",
    alt: "Samsung introduces One UI 8.5 Beta for Galaxy S24 series",
    date: "March 26, 2026",
    title: "Samsung introduces One UI 8.5 Beta for Galaxy S24 series",
  },
  {
    href: "https://maestro.dev/insights/detox-vs-maestro-reducing-flakiness-react-native",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/69b359be12de151ab0295302-1773370355274.jpg",
    alt: "Detox vs. Maestro: Reducing Flakiness in React Native",
    date: "March 13, 2026",
    title: "Detox vs. Maestro: Reducing Flakiness in React Native",
  },
  {
    href: "https://maestro.dev/insights/accessibility-testing-mobile-frameworks-best-practices",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/69b2328e12de151ab029354d-1773289190071.jpg",
    alt: "Best Practices for Accessibility Testing in Mobile Frameworks",
    date: "March 12, 2026",
    title: "Best Practices for Accessibility Testing in Mobile Frameworks",
  },
  {
    href: "https://maestro.dev/insights/maestro-ci-cd-cloud-testing-integration",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/69b207e212de151ab0291abd-1773286007480.jpg",
    alt: "Integrating Maestro with CI/CD for Cloud Testing",
    date: "March 12, 2026",
    title: "Integrating Maestro with CI/CD for Cloud Testing",
  },
  {
    href: "https://maestro.dev/insights/best-practices-debugging-react-native-data-flow",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/69b1635a12de151ab0290ce1-1773235425564.jpg",
    alt: "Best Practices for Debugging React Native Data Flow",
    date: "March 11, 2026",
    title: "Best Practices for Debugging React Native Data Flow",
  },
  {
    href: "https://maestro.dev/insights/parallel-testing-android-ios",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/69b15b9d12de151ab0290c51-1773233022374.jpg",
    alt: "Parallel Testing on Android and iOS",
    date: "March 11, 2026",
    title: "Parallel Testing on Android and iOS",
  },
  {
    href: "https://maestro.dev/insights/end-to-end-web-testing-tools",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/690a99c177138b8e9cf7777d-1763735976223.jpg",
    alt: "Top 10 End-to-End Web Testing Tools: Best Picks for Parallel Testing & Real-Time Debugging in 2026",
    date: "March 8, 2026",
    title:
      "Top 10 End-to-End Web Testing Tools: Best Picks for Parallel Testing & Real-Time Debugging in 2026",
  },
  {
    href: "https://maestro.dev/insights/enterprise-mobile-app-testing-solutions",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/699a5b12efc60cc2af08eec0-1771728529445.jpg",
    alt: "Top Enterprise Mobile App Testing Solutions",
    date: "February 22, 2026",
    title: "Top Enterprise Mobile App Testing Solutions",
  },
  {
    href: "https://maestro.dev/insights/best-react-native-testing-frameworks",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/699a4762efc60cc2af08db49-1771723476421.jpg",
    alt: "The 3 Best React Native Testing Frameworks",
    date: "February 22, 2026",
    title: "The 3 Best React Native Testing Frameworks",
  },
  {
    href: "https://maestro.dev/insights/best-open-source-mobile-testing-frameworks",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/6999258cefc60cc2af08be7a-1771651873484.jpg",
    alt: "The Best Open Source Mobile Testing Frameworks",
    date: "February 21, 2026",
    title: "The Best Open Source Mobile Testing Frameworks",
  },
  {
    href: "https://maestro.dev/insights/best-mobile-app-testing-frameworks",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/6998f5f8efc60cc2af08a5b2-1771644228765.jpg",
    alt: "The Best Mobile App Testing Frameworks in 2026",
    date: "February 21, 2026",
    title: "The Best Mobile App Testing Frameworks in 2026",
  },
  {
    href: "https://maestro.dev/insights/automated-mobile-app-testing-tools-frameworks",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/6997b63befc60cc2af0872b6-1771596399460.jpg",
    alt: "5 Automated Mobile App Testing Tools and Frameworks",
    date: "February 20, 2026",
    title: "5 Automated Mobile App Testing Tools and Frameworks",
  },
  {
    href: "https://maestro.dev/insights/maestro-flutter-integration-testing",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/6997a45aefc60cc2af08685f-1771549803050.jpg",
    alt: "Flutter Integration Testing with Maestro: YAML-Based, No Dart Required",
    date: "February 20, 2026",
    title: "Flutter Integration Testing with Maestro: YAML-Based, No Dart Required",
  },
  {
    href: "https://maestro.dev/insights/how-to-avoid-flaky-tests-with-built-in-tolerance",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/6996bf55efc60cc2af085036-1771489642903.jpg",
    alt: "How to Avoid Flaky Tests with Built-In Tolerance",
    date: "February 19, 2026",
    title: "How to Avoid Flaky Tests with Built-In Tolerance",
  },
  {
    href: "https://maestro.dev/insights/dynamic-ui-testing-yaml-best-practices",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/6996af5befc60cc2af084c97-1771486902857.jpg",
    alt: "Dynamic UI Testing with YAML: Best Practices",
    date: "February 19, 2026",
    title: "Dynamic UI Testing with YAML: Best Practices",
  },
  {
    href: "https://maestro.dev/insights/best-automated-testing-frameworks-mobile-apps",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/6995a637efc60cc2af08184b-1771482909397.jpg",
    alt: "7 Best Automated Testing Frameworks for Mobile Apps",
    date: "February 19, 2026",
    title: "7 Best Automated Testing Frameworks for Mobile Apps",
  },
  {
    href: "https://maestro.dev/insights/checklist-reducing-test-flakiness",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/69951607efc60cc2af07fb0c-1771397382275.jpg",
    alt: "Checklist for Reducing Test Flakiness",
    date: "February 18, 2026",
    title: "Checklist for Reducing Test Flakiness",
  },
  {
    href: "https://maestro.dev/insights/self-healing-tests-fixing-flaky-ui-automation",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/69950166efc60cc2af07eaf3-1771378008617.jpg",
    alt: "Self-Healing Tests: Fixing Flaky UI Automation",
    date: "February 18, 2026",
    title: "Self-Healing Tests: Fixing Flaky UI Automation",
  },
  {
    href: "https://maestro.dev/insights/how-to-test-react-native-forms-with-maestro-studio",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/69940764efc60cc2af07de74-1771311311942.jpg",
    alt: "How to Test React Native Forms with Maestro Studio",
    date: "February 17, 2026",
    title: "How to Test React Native Forms with Maestro Studio",
  },
  {
    href: "https://maestro.dev/insights/maestro-for-real-time-ui-validation",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/6993fcd0efc60cc2af07dc21-1771308889270.jpg",
    alt: "Maestro for Real-Time UI Validation",
    date: "February 17, 2026",
    title: "Maestro for Real-Time UI Validation",
  },
  {
    href: "https://maestro.dev/insights/yaml-test-case-generator-for-seamless-testing",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/docs.maestro.dev/699382f4efc60cc2af07afba-1771275086929.jpg",
    alt: "YAML Test Case Generator for Seamless Testing",
    date: "February 16, 2026",
    title: "YAML Test Case Generator for Seamless Testing",
  },
];

export default function InsightsPage() {
  return (
    <main>
      <section className="border-b">
        <div className="bordered-div-padding flex flex-col items-center text-center !pt-12 md:!pt-16 lg:!pt-20">
          <div className="max-w-4xl space-y-6 md:space-y-8 lg:space-y-10">
            <div className="space-y-2">
              <p className="section-overline">BLOG</p>
              <h1 className="text-4xl leading-snug font-light tracking-tighter md:text-[2.625rem] lg:text-5xl">
                Maestro Industry Insights
              </h1>
            </div>
            <p className="text-muted-foreground mx-auto max-w-[760px] text-sm leading-relaxed md:text-lg lg:text-xl">
              Actionable guides and best practices on mobile and web testing.
              Compare tools, learn automation strategies, and apply proven QA
              techniques.
            </p>
            <a
              href="/blog"
              className="thick-underline-link inline-flex text-sm font-medium text-foreground md:text-base"
            >
              Back to the main blog
            </a>
          </div>
        </div>

        <div className="bordered-div-padding !pt-6 !pb-10 md:!pt-7 md:!pb-[50px] lg:!pt-8 lg:!pb-[60px]">
          <div className="grid grid-cols-1 border md:grid-cols-2">
            {insights.map((insight, index) => (
              <InsightCard
                key={insight.href}
                insight={insight}
                className={cn(
                  "border-b",
                  index % 2 === 0 && "md:border-r",
                  index >= insights.length - 2 && "md:border-b-0",
                  index === insights.length - 1 && "border-b-0",
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function InsightCard({
  insight,
  className,
}: {
  insight: (typeof insights)[number];
  className?: string;
}) {
  return (
    <article className={cn("bordered-div-padding", className)}>
      <div className="group space-y-6">
        <div className="overflow-hidden rounded-sm rounded-tl-lg border bg-muted/40">
          <a href={insight.href}>
            <img
              src={insight.image}
              alt={insight.alt}
              loading="lazy"
              className="aspect-[1.88] h-auto w-full object-cover"
            />
          </a>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-muted-foreground md:text-sm">
            <span>{insight.date}</span>
          </div>
          <a className="thick-underline-link" href={insight.href}>
            <h2 className="section-heading text-lg">{insight.title}</h2>
          </a>
          {"description" in insight && insight.description ? (
            <p className="line-clamp-3 !mt-3 text-muted-foreground text-sm leading-relaxed md:text-base">
              {insight.description}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
