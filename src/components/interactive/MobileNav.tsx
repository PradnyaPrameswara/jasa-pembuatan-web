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
        className="glass-overlay w-[300px] sm:w-[400px] border-l border-glass-border"
      >
        {/* Hidden title for screen readers */}
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Access site pages and contact form
        </SheetDescription>

        <nav className="flex flex-col gap-6 mt-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors tracking-tight"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8">
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex h-12 w-full items-center justify-center rounded-md bg-foreground px-4 text-base font-medium text-background shadow transition-transform active:scale-95 hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Discuss Your Project
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
