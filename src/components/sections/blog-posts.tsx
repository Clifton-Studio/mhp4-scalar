import { cn } from "@/lib/utils";

const posts = [
  {
    href: "https://maestro.dev/blog/new-maestro-studio",
    image:
      "https://a.storyblok.com/f/340025/1200x630/0e9e97a63d/cover-blog-post-1200x630.png/m/0x288",
    alt: "New Maestro Studio",
    author: "Manu Armani",
    date: "April 21, 2026",
    title: "New Maestro Studio",
    description:
      "Today, we're announcing a completely redesigned Maestro Studio! Modern, elegant, and with new features that make building tests faster than ever. Maestro Studio is the desktop app for Maestro, the mobile UI testing framework used by teams at Microsoft, Meta, Uber, Amazon, DoorDash, and hundreds more.",
  },
  {
    href: "https://maestro.dev/blog/maestro-mcp-an-introduction",
    image:
      "https://a.storyblok.com/f/340025/1200x676/8d060bbaa6/banner_blogpost-2.png/m/0x288",
    alt: "Maestro MCP: An introduction",
    author: "Simon Gilmurray",
    date: "April 14, 2026",
    title: "Maestro MCP: An introduction",
    description:
      "Keeping up with the pace of development in this new agentic AI world has become one of the biggest challenges that teams face. One of the key things to come out of these new workflows is that validation and testing are now more important than ever.",
  },
  {
    href: "https://maestro.dev/blog/maestro-cli-2-4-0",
    image:
      "https://a.storyblok.com/f/340025/1600x900/841b2210b4/cli-2_4_0.png/m/0x288",
    alt: "CLI 2.4.0: iOS 26 and more devices on Maestro Cloud",
    author: "Proksh Luthra",
    date: "April 3, 2026",
    title: "CLI 2.4.0: iOS 26 and more devices on Maestro Cloud",
    description:
      "Support for iOS 26 is now available. --device-os=iOS-26 works both locally and on Cloud. Use --device-os=iOS-26-2 if you need a specific build. The iOS device catalog also got a significant expansion. iPhone 13 Mini and iPhone 16 Pro Max are in - two of the most requested models. Run maestro list-cloud-devices --platform=ios to see the full list.",
  },
  {
    href: "https://maestro.dev/blog/visual-testing",
    image:
      "https://a.storyblok.com/f/340025/1536x1024/09e3fd0a7c/visual_testing.png/m/0x288",
    alt: "Introducing Visual Testing in Maestro",
    author: "Dan Caseley",
    date: "March 2, 2026",
    title: "Introducing Visual Testing in Maestro",
    description:
      "Functional tests are good at catching broken logic: a button that doesn’t respond, a screen that doesn’t load, a field that rejects valid input. But they’re blind to a whole category of bugs - the ones you can only see.",
  },
  {
    href: "https://maestro.dev/blog/how-maestro-is-reinventing-mobile-test-automation",
    image:
      "https://a.storyblok.com/f/340025/1848x1202/6592677d2f/maestro-studio-screenshot.jpeg/m/0x288",
    alt: "How Maestro is Reinventing Mobile Test Automation",
    author: "Leland Takamine",
    date: "September 25, 2025",
    title: "How Maestro is Reinventing Mobile Test Automation",
    description: "",
  },
  {
    href: "https://maestro.dev/blog/automating-apple-maps-simple-e2e-testing-with-maestro",
    image:
      "https://a.storyblok.com/f/340025/2692x2160/585ec13c98/apple-maps-test.png/m/0x288",
    alt: "Automating Apple Maps: Dead Simple E2E Testing with Maestro",
    author: "Leland Takamine",
    date: "September 4, 2025",
    title: "Automating Apple Maps: Dead Simple E2E Testing with Maestro",
    description: "",
  },
  {
    href: "https://maestro.dev/blog/showing-tap-indicators-on-ios-recordings",
    image:
      "https://a.storyblok.com/f/340025/2880x1672/faa519a6b0/tap-indicators-on-ios.png/m/0x288",
    alt: "Showing Tap Indicators on iOS Screen Recording",
    author: "Amanjeet Singh",
    date: "August 29, 2025",
    title: "Showing Tap Indicators on iOS Screen Recording",
    description: "",
  },
  {
    href: "https://maestro.dev/blog/introducing-maestro-2-0-0",
    image:
      "https://a.storyblok.com/f/340025/2880x1672/874c56e5be/maestro2.png/m/0x288",
    alt: "Maestro 2.0 - Laying the foundation for the future of testing",
    author: "Proksh Luthra",
    date: "August 26, 2025",
    title: "Maestro 2.0 - Laying the foundation for the future of testing",
    description: "",
  },
  {
    href: "https://maestro.dev/blog/what-if-we-test-google-maps-",
    image:
      "https://a.storyblok.com/f/340025/800x627/de38d6aeae/google-maps-test-2.png/m/0x288",
    alt: "Google Maps UI Test Automation with Maestro - Full Tutorial",
    author: "Leland Takamine",
    date: "July 1, 2025",
    title: "Google Maps UI Test Automation with Maestro - Full Tutorial",
    description: "",
  },
  {
    href: "https://maestro.dev/blog/wahed-maestro-mobile-testing-speed",
    image:
      "https://a.storyblok.com/f/340025/1280x720/dccc10611b/test.png/m/0x288",
    alt: "From Hours to Minutes: How Wahed Revolutionized Mobile App Testing with Maestro",
    author: "Jake Krupski",
    date: "May 28, 2025",
    title: "From Hours to Minutes: How Wahed Revolutionized Mobile App Testing with Maestro",
    description: "",
  },
  {
    href: "https://maestro.dev/blog/ios18-ipad-on-cloud",
    image: "https://maestro.dev/_astro/ios18-ipad.DNpCP-40_Z1thtRH.webp",
    alt: "iOS 18 & iPad Support in the Cloud",
    author: "Leland Takamine",
    date: "April 23, 2025",
    title: "iOS 18 & iPad Support in the Cloud",
    description:
      "Additional OS versions and device model options available for iOS in the cloud",
  },
  {
    href: "https://maestro.dev/blog/maestro-gpt-cli-chat",
    image: "https://maestro.dev/_astro/maestro-gpt-cli.BVOYCMhm_Z2o1Swv.webp",
    alt: "$ maestro chat",
    author: "Leland Takamine",
    date: "April 21, 2025",
    title: "$ maestro chat",
    description: "MaestroGPT is now available in the Maestro CLI",
  },
  {
    href: "https://maestro.dev/blog/maestro-case-study-eneco",
    image:
      "https://maestro.dev/_astro/maestro-case-study-eneco.OmiYhzPA_2gpUmo.webp",
    alt: "Case Study: How Eneco Upgraded from Manual QA to Automated Testing with Maestro",
    author: "Jake Krupski",
    date: "April 9, 2025",
    title: "Case Study: How Eneco Upgraded from Manual QA to Automated Testing with Maestro",
    description: "",
  },
  {
    href: "https://maestro.dev/blog/introducing-maestro-webhooks",
    image:
      "https://maestro.dev/_astro/introducing-maestro-webhooks-hero.DteeBsFL_Z13JX3f.webp",
    alt: "Introducing: Maestro Webhooks",
    author: "Felipe Duarte",
    date: "March 29, 2025",
    title: "Introducing: Maestro Webhooks",
    description: "",
  },
  {
    href: "https://maestro.dev/blog/introducing-maestro-gpt",
    image:
      "https://maestro.dev/_astro/introducing-maestro-gpt-hero.BSIji7cD_1aVGxw.webp",
    alt: "Introducing MaestroGPT",
    author: "Leland Takamine",
    date: "March 20, 2025",
    title: "Introducing MaestroGPT",
    description: "We're thrilled to announce MaestroGPT: Your AI-powered Maestro expert",
  },
  {
    href: "https://maestro.dev/blog/case-study-doccla",
    image: "https://maestro.dev/_astro/doccla-thumbnail.aY3_v10L_2eXgSE.webp",
    alt: "Case Study: How Doccla Transformed Mobile App Testing with Maestro",
    author: "Jake Krupski",
    date: "March 12, 2025",
    title: "Case Study: How Doccla Transformed Mobile App Testing with Maestro",
    description: "",
  },
  {
    href: "https://maestro.dev/blog/introducing-maestro-slack-bot",
    image: "https://maestro.dev/_astro/maestro-bot-hero.wyyMukL6_Z1G5bpL.webp",
    alt: "Introducing: Maestro Slack Bot",
    author: "Leland Takamine",
    date: "March 4, 2025",
    title: "Introducing: Maestro Slack Bot",
    description: "",
  },
  {
    href: "https://maestro.dev/blog/maestro-workbench-a-community-contribution",
    image:
      "https://maestro.dev/_astro/1_JoBHQbWT1hc1i5E4nMexSg.D2xxPLAx_Z1oGDC8.webp",
    alt: "Maestro Workbench: A Community Contribution",
    author: "Dan Caseley",
    date: "February 19, 2025",
    title: "Maestro Workbench: A Community Contribution",
    description: "",
  },
  {
    href: "https://maestro.dev/blog/recent-improvements-to-maestro-january-2025",
    image:
      "https://maestro.dev/_astro/1_XDRMKjDFHqgL_1THdNUa0A.DfiMwDTT_Z21aPAI.webp",
    alt: "Recent improvements to Maestro (January 2025)",
    author: "Dan Caseley",
    date: "January 31, 2025",
    title: "Recent improvements to Maestro (January 2025)",
    description: "",
  },
  {
    href: "https://maestro.dev/blog/recent-improvements-to-robin",
    image:
      "https://maestro.dev/_astro/1_tKm0hV743BXU2x7jJyNWiA.BnJBUk5z_1RgEm1.webp",
    alt: "Recent improvements to the Maestro console",
    author: "Dan Caseley",
    date: "December 19, 2024",
    title: "Recent improvements to the Maestro console",
    description: "",
  },
  {
    href: "https://maestro.dev/blog/whats-new-in-maestro-1-39-0",
    image:
      "https://maestro.dev/_astro/1_REA_D6dOj-_9Cnkw6k0BCg.CW01FDK2_ZBLywP.webp",
    alt: "What's new in Maestro: 1.39.0",
    author: "Bartek Pacia",
    date: "October 16, 2024",
    title: "What's new in Maestro: 1.39.0",
    description: "",
  },
  {
    href: "https://maestro.dev/blog/whats-new-in-maestro-1-37-0",
    image:
      "https://maestro.dev/_astro/1__nAyJ1zag1F1YV0nwBqvqA.8TcaFcG1_Z20TWKD.webp",
    alt: "What's new in Maestro: 1.37.0",
    author: "Bartek Pacia",
    date: "July 29, 2024",
    title: "What's new in Maestro: 1.37.0",
    description: "",
  },
  {
    href: "https://maestro.dev/blog/the-power-of-open-source-making-maestro-work-better-with-flutter",
    image:
      "https://maestro.dev/_astro/1_T8OSnDrr-nib0R2uFIxzUw.DL2rgt4K_Z22fp31.webp",
    alt: "The power of open-source. Making Maestro work better with Flutter",
    author: "Bartek Pacia",
    date: "March 6, 2024",
    title: "The power of open-source. Making Maestro work better with Flutter",
    description: "",
  },
  {
    href: "https://maestro.dev/blog/music-app-ui-testing-series-end-to-end-flutter-testing-with-maestro-part-2",
    image:
      "https://maestro.dev/_astro/1_7lpEx5DuQY5FBY7xPZPBzg.BlHTiug6_TFXaw.webp",
    alt: "Music App UI Testing Series: End-to-End Flutter Testing with Maestro — Part 2",
    author: "Ashish Kharche",
    date: "October 17, 2023",
    title: "Music App UI Testing Series: End-to-End Flutter Testing with Maestro — Part 2",
    description: "Write UI tests for your Flutter Apps",
  },
];

export default function BlogPosts() {
  return (
    <main>
      <section className="border-b">
        <div className="bordered-div-padding flex flex-col items-center text-center !pt-12 md:!pt-16 lg:!pt-20">
          <div className="max-w-4xl space-y-6 md:space-y-8 lg:space-y-10">
            <div className="space-y-2">
              <p className="section-overline">BLOG</p>
              <h1 className="text-4xl leading-snug font-light tracking-tighter md:text-[2.625rem] lg:text-5xl">
                The Maestro Blog
              </h1>
            </div>
            <p className="text-muted-foreground mx-auto max-w-[760px] text-sm leading-relaxed md:text-lg lg:text-xl">
              Release notes, product updates, guides, case studies, and more
              for mobile UI testing with Maestro.
            </p>
          </div>
        </div>

        <div className="bordered-div-padding !pt-6 !pb-10 md:!pt-7 md:!pb-[50px] lg:!pt-8 lg:!pb-[60px]">
          <div className="grid grid-cols-1 border md:grid-cols-2">
            {posts.map((post, index) => (
              <BlogCard
                key={post.href}
                post={post}
                className={cn(
                  "border-b",
                  index % 2 === 0 && "md:border-r",
                  index >= posts.length - 2 && "md:border-b-0",
                  index === posts.length - 1 && "border-b-0",
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function BlogCard({
  post,
  className,
}: {
  post: (typeof posts)[number];
  className?: string;
}) {
  return (
    <article className={cn("bordered-div-padding", className)}>
      <div className="group space-y-6">
        <div className="overflow-hidden rounded-sm rounded-tl-lg border bg-muted/40">
          <a href={post.href}>
            <img
              src={post.image}
              alt={post.alt}
              loading="lazy"
              className="aspect-[1.88] h-auto w-full object-cover"
            />
          </a>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-muted-foreground md:text-sm">
            <span>{post.author}</span>
            <span aria-hidden="true">•</span>
            <span>{post.date}</span>
          </div>
          <a
            className="thick-underline-link"
            href={post.href}
          >
            <h2 className="section-heading text-lg">
              {post.title}
            </h2>
          </a>
          {post.description ? (
            <p className="line-clamp-3 !mt-3 text-muted-foreground text-sm leading-relaxed md:text-base">
              {post.description}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
