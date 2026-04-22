"use client";

import * as React from "react";

import { motion, AnimatePresence } from "motion/react";

import { ThemeToggle } from "@/components/elements/theme-toggle";
import Logo from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  href: string;
};

const navigationItems: NavItem[] = [
  { title: "Documentation", href: "/docs" },
  { title: "Cloud", href: "/cloud" },
  { title: "Community", href: "/community" },
  { title: "Blog", href: "/blog" },
  { title: "Pricing", href: "/pricing" },
];

interface NavbarProps {
  currentPage?: string;
}

function Navbar({ currentPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isAtMost } = useMediaQuery();
  const isMobile = isAtMost("md");
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  const isMenuColorInverted = isMenuOpen && isMobile;

  React.useEffect(() => {
    // Get initial theme from localStorage, default to 'light' if none exists
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    setTheme(savedTheme || "light");

    // Listen for theme changes
    const handleStorageChange = () => {
      const newTheme = localStorage.getItem("theme") as "light" | "dark" | null;
      if (newTheme) {
        setTheme(newTheme);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Listen for direct DOM class changes (for immediate updates)
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      observer.disconnect();
    };
  }, []);

  React.useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isMenuOpen, isMobile]);

  return (
    <header
      className={cn(
        "bg-background relative z-50 transition-all duration-300",
        isMenuColorInverted
          ? theme === "dark"
            ? "light bg-foreground text-background [&_*]:border-border/30"
            : "dark bg-background text-foreground"
          : "",
      )}
    >
      <div className="container">
        <div className={cn("flex items-center border-x border-b py-4 lg:py-6")}>
          <Logo
            className={cn(
              "ps-6 transition-all duration-300",
              isMenuColorInverted
                ? theme === "dark"
                  ? "[&>img]:invert-0"
                  : "[&>img]:invert"
                : "dark:[&>img]:invert",
            )}
          />

          {/* Hamburger Menu Button (Mobile Only) */}
          <div className="me-6 ml-auto flex flex-1 items-center justify-end lg:me-0 lg:hidden">
            <ThemeToggle />

            <Button
              variant="outline"
              size="icon"
              className={cn("relative flex !bg-transparent")}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute block h-0.5 w-full rounded-full bg-current transition-transform duration-500 ease-in-out",
                    isMenuOpen ? "rotate-45" : "-translate-y-1.5",
                  )}
                ></span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute block h-0.5 w-full rounded-full bg-current transition-transform duration-500 ease-in-out",
                    isMenuOpen ? "opacity-0" : "",
                  )}
                ></span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute block h-0.5 w-full rounded-full bg-current transition-transform duration-500 ease-in-out",
                    isMenuOpen ? "-rotate-45" : "translate-y-1.5",
                  )}
                ></span>
              </div>
            </Button>
          </div>
          {/* Desktop Navigation */}
          <div className="ms-auto hidden flex-1 items-center justify-end gap-3 lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {navigationItems.map((item) => (
                  <DesktopNavItem
                    key={item.title}
                    item={item}
                    currentPage={currentPage}
                  />
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <NavBarAction />
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth feel
                }}
                className={cn(
                  "bg-background fixed inset-x-0 top-16 bottom-0 z-40 container flex flex-col overflow-hidden text-sm font-medium lg:hidden",
                  isMenuColorInverted
                    ? theme === "dark"
                      ? "light bg-foreground text-background"
                      : "dark bg-background text-foreground"
                    : "",
                )}
              >
                <motion.div
                  className="bordered-div-padding flex flex-1 flex-col space-y-3 overflow-y-auto border-x"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                >
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.2 + index * 0.05,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                    >
                      <MobileNavItem
                        item={item}
                        setIsMenuOpen={setIsMenuOpen}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="border border-b-0 p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.2 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

const NavBarAction = () => {
  return (
    <div className="bordered-div-padding flex items-center justify-between border lg:border-none lg:!py-0 lg:ps-0 lg:pe-6">
      <ThemeToggle className="hidden lg:block" />
    </div>
  );
};

function MobileNavItem({
  item,
  setIsMenuOpen,
}: {
  item: NavItem;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}) {
  return (
    <a href={item.href} className="block" onClick={() => setIsMenuOpen(false)}>
      <Button variant="ghost" size="sm">
        {item.title}
      </Button>
    </a>
  );
}

function DesktopNavItem({
  item,
  currentPage,
}: {
  item: NavItem;
  currentPage?: string;
}) {
  return (
    <NavigationMenuItem className="">
      <a
        href={item.href}
        className={cn(
          navigationMenuTriggerStyle(),
          "text-base font-medium",
          currentPage === item.href && "text-secondary",
        )}
      >
        {item.title}
      </a>
    </NavigationMenuItem>
  );
}

export default Navbar;
