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
          className="site-header-mobile-trigger md:hidden"
          aria-label="Open mobile menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="site-mobile-sheet w-[300px] sm:w-[360px]">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Access site pages and contact form
        </SheetDescription>

        <nav className="mt-12 flex flex-col gap-2 px-1" aria-label="Mobile navigation">
          {links.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="ghost"
              size="lg"
              className="site-mobile-nav-button h-12 w-full justify-start px-4 text-left text-[17px]"
            >
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </Button>
          ))}

          <div className="mt-5">
            <Button asChild variant="default" size="lg" className="w-full">
              <a href="/contact" onClick={() => setOpen(false)}>
                Discuss Your Project
              </a>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
