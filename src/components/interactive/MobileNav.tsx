import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-foreground"
        aria-label="Open Mobile Menu"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setOpen(false)}
          />

          {/* Menu Panel */}
          <div className="relative z-50 h-full w-[300px] sm:w-[360px] bg-surface/95 backdrop-blur-md border-l border-border shadow-2xl flex flex-col p-6 animate-in slide-in-from-right">
            <div className="flex justify-end mb-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                aria-label="Close Mobile Menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="flex flex-col gap-5 mt-4 px-2">
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
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 btn-material-primary h-10 px-8 w-full"
                >
                  Discuss Your Project
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
