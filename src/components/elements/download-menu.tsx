"use client";

import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const downloadOptions = [
  { label: "Studio desktop app - Mac", href: "/download#studio-mac" },
  { label: "Studio desktop app - Windows", href: "/download#studio-windows" },
  { label: "Studio desktop app - Linux", href: "/download#studio-linux" },
  { label: "Maestro CLI", href: "/download#cli" },
  {
    label: "Source code from GitHub",
    href: "https://github.com/mobile-dev-inc/Maestro",
  },
];

export function DownloadMenu() {
  return (
    <div className="inline-flex rounded-md shadow-sm">
      <Button asChild className="rounded-r-none px-3">
        <a href="/download">Download</a>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            aria-label="Choose download option"
            className="rounded-l-none border-l border-primary-foreground/20 px-2"
          >
            <ChevronDown className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-56">
          {downloadOptions.map((option) => (
            <DropdownMenuItem key={option.href} asChild>
              <a
                href={option.href}
                rel={option.href.startsWith("http") ? "noreferrer" : undefined}
                target={option.href.startsWith("http") ? "_blank" : undefined}
              >
                {option.label}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
