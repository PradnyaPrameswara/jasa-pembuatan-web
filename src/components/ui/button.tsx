import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const glassControl =
  "border backdrop-blur-[24px] backdrop-saturate-[165%] transition-[transform,background-color,border-color,box-shadow,filter,color] duration-200 ease-[var(--ease-out-strong)] motion-reduce:transform-none motion-reduce:transition-none";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-[-0.01em] outline-none select-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: cn(
          glassControl,
          "border-white/30 bg-[radial-gradient(circle_at_20%_0%,rgba(0,255,255,.24),transparent_44%),linear-gradient(145deg,rgba(5,10,48,.72),rgba(0,0,255,.4))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.4),inset_0_-1px_0_rgba(255,255,255,.08),0_10px_30px_rgba(2,5,48,.22)] hover:-translate-y-px hover:border-white/50 hover:brightness-105 active:scale-[.98]",
        ),
        secondary: cn(
          glassControl,
          "border-white/35 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,.34),transparent_48%),linear-gradient(145deg,rgba(255,255,255,.18),rgba(255,255,255,.07))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.48),0_10px_28px_rgba(2,5,48,.12)] hover:-translate-y-px hover:border-white/50 hover:bg-white/15 active:scale-[.98]",
        ),
        outline: cn(
          glassControl,
          "border-white/30 bg-white/[0.07] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.24),0_8px_24px_rgba(2,5,48,.08)] hover:-translate-y-px hover:border-white/50 hover:bg-white/15 active:scale-[.98]",
        ),
        ghost:
          "border border-transparent bg-transparent text-white/80 transition-[transform,background-color,color] duration-200 ease-[var(--ease-out-strong)] hover:bg-white/10 hover:text-white active:scale-[.98] motion-reduce:transform-none motion-reduce:transition-none",
        destructive: cn(
          glassControl,
          "border-red-100/25 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,.2),transparent_44%),linear-gradient(145deg,rgba(145,18,32,.76),rgba(225,48,67,.48))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.3),0_10px_28px_rgba(70,3,18,.2)] hover:-translate-y-px hover:brightness-105 active:scale-[.98]",
        ),
        link: "text-cyan-spectrum underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-11 px-7 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  ),
);

Button.displayName = "Button";

export { Button, buttonVariants };
