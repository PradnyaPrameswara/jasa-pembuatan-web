import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground"
          aria-label="Open Mobile Menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-surface/95 backdrop-blur-md w-[300px] sm:w-[360px] border-l border-border shadow-2xl"
      >
        {/* Hidden title for screen readers */}
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Access site pages and contact form
        </SheetDescription>

        <nav className="flex flex-col gap-5 mt-10 px-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-xl font-medium text-foreground/80 hover:text-foreground transition-colors tracking-tight py-2 border-b border-border/30 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8">
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow interactive-scale hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              Discuss Your Project
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
