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
];

export function DownloadMenu() {
  return (
    <div className="inline-flex rounded-md shadow-sm">
      <Button asChild className="rounded-r-none">
        <a href="/download">Download</a>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            aria-label="Choose download option"
            className="rounded-l-none border-l border-primary-foreground/20 px-3"
          >
            <ChevronDown className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-56">
          {downloadOptions.map((option) => (
            <DropdownMenuItem key={option.href} asChild>
              <a href={option.href}>{option.label}</a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
