"use client";

import * as React from "react";

import { Github01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { ThemeToggle } from "@/components/elements/theme-toggle";
import Logo from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EXTERNAL_LINKS } from "@/constants/external-links";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  href: string;
  openInNewWindow?: boolean;
};

const navigationItems: NavItem[] = [
  { title: "Documentation", href: EXTERNAL_LINKS.DOCS },
  { title: "Cloud", href: "/cloud" },
  {
    title: "Community",
    href: EXTERNAL_LINKS.COMMUNITY,
    openInNewWindow: true,
  },
  { title: "Blog", href: "/blog" },
  { title: "Pricing", href: "/pricing" },
];

const navControlClass =
  "h-9 rounded-[2px] hover:bg-muted/40 hover:text-accent-foreground";

interface NavbarProps {
  currentPage?: string;
}

function Navbar({ currentPage }: NavbarProps) {
  return (
    <header className="relative z-50">
      <div
        className={cn(
          "bg-background flex items-center border-b px-[19px] py-2",
        )}
      >
        <Logo className="dark:[&>img]:invert" />

        {/* Hamburger Menu Button (Mobile Only) */}
        <div className="ml-auto flex flex-1 items-center justify-end gap-1 lg:hidden">
          <GitHubLink className="px-2 lg:px-3" />
          <ThemeToggle className={cn("h-9 w-9 p-0 lg:hidden", navControlClass)} />

          <MobileNavMenu />
        </div>
        {/* Desktop Navigation */}
        <div className="ms-auto hidden flex-1 items-center justify-end gap-1 lg:flex">
          {navigationItems.map((item) => (
            <DesktopNavItem
              key={item.title}
              item={item}
              currentPage={currentPage}
            />
          ))}
          <NavBarAction />
        </div>
      </div>
    </header>
  );
}

const NavBarAction = () => {
  return (
    <>
      <GitHubLink className="hidden lg:inline-flex" />
      <ThemeToggle
        className={cn("hidden h-9 w-9 -mr-2 p-0 lg:flex", navControlClass)}
      />
    </>
  );
};

function GitHubLink({ className }: { className?: string }) {
  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className={cn(
        navControlClass,
        "w-auto gap-1 px-3 py-0",
        className,
      )}
    >
      <a
        href={EXTERNAL_LINKS.GITHUB_REPO}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <HugeiconsIcon
          icon={Github01Icon}
          className="size-5"
          strokeWidth={1.8}
        />
        <span className="text-sm font-normal">13.8k</span>
      </a>
    </Button>
  );
}

function MobileNavMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("relative -mr-2 flex h-9 w-9 rounded-[2px] p-0")}
          aria-label="Open main menu"
        >
          <HugeiconsIcon
            icon={Menu01Icon}
            className="size-5"
            strokeWidth={1.8}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-40 rounded-[2px] bg-foreground p-1 text-background shadow-xs lg:hidden [&_*]:border-border/30"
      >
        {navigationItems.map((item) => (
          <DropdownMenuItem
            key={item.href}
            asChild
            className="h-9 rounded-[2px] px-3 py-0 text-sm font-normal tracking-normal hover:bg-muted/40 hover:text-current focus:bg-muted/40 focus:text-current dark:hover:bg-[oklch(0.94_0_0)] dark:focus:bg-[oklch(0.94_0_0)]"
          >
            <a
              href={item.href}
              target={item.openInNewWindow ? "_blank" : undefined}
              rel={item.openInNewWindow ? "noopener noreferrer" : undefined}
            >
              {item.title}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DesktopNavItem({
  item,
  currentPage,
}: {
  item: NavItem;
  currentPage?: string;
}) {
  const isActive =
    currentPage === item.href ||
    (item.href !== "/" && currentPage?.startsWith(`${item.href}/`));

  return (
    <a
      href={item.href}
      target={item.openInNewWindow ? "_blank" : undefined}
      rel={item.openInNewWindow ? "noopener noreferrer" : undefined}
      className={cn(
        "relative inline-flex w-max items-center justify-center bg-background outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1",
        navControlClass,
        "px-3 py-0 text-sm font-normal tracking-normal",
        isActive &&
          "after:absolute after:right-3 after:-bottom-2 after:left-3 after:h-[6px] after:bg-foreground after:content-['']",
      )}
    >
      {item.title}
    </a>
  );
}

export default Navbar;
