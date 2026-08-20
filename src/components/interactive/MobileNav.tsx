import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { Menu } from "lucide-react";

const links = [
  { href: "/work", label: "Experience" },
  { href: "/services", label: "Capabilities" },
  { href: "/about", label: "About" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="border-white/15 bg-white/[0.06] text-white hover:bg-white/10 md:hidden"
          aria-label="Open mobile menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[300px] border-l border-white/15 bg-[radial-gradient(circle_at_16%_0%,rgba(0,255,255,.15),transparent_38%),linear-gradient(160deg,rgba(5,10,48,.88),rgba(6,24,93,.8))] text-white shadow-[-18px_0_60px_rgba(1,4,40,.24)] backdrop-blur-[34px] backdrop-saturate-[165%] sm:w-[360px]"
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Access experience, capabilities, profile, and contact information
        </SheetDescription>

        <nav className="mt-12 flex flex-col gap-2 px-1" aria-label="Mobile navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={buttonVariants({
                variant: "ghost",
                size: "lg",
                className:
                  "h-12 w-full justify-start border-white/[0.08] bg-white/[0.035] px-4 text-left text-[17px] text-white/90 hover:bg-white/10 hover:text-white",
              })}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-5">
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "w-full",
              })}
            >
              Get in touch
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
