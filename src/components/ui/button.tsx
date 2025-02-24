import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-800/50 focus-visible:border-red-800/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 w-[80vw] xl:w-[50vw] md:w-[90vw] bg-transparent rounded-full border-2 border-solid border-red-800/50 hover:border-red-800/70",
  {
    variants: {
      variant: {
        default: "bg-transparent text-zinc-300 shadow-sm hover:bg-zinc-800/40",
        destructive:
          "bg-red-950/10 text-zinc-300 shadow-sm hover:bg-red-950/20 border-red-800/50",
        outline:
          "border border-red-800/50 bg-transparent text-zinc-300 shadow-sm hover:bg-zinc-800/40",
        secondary:
          "bg-zinc-900/10 text-zinc-300 shadow-sm hover:bg-zinc-800/40",
        ghost: "hover:bg-zinc-800/40 text-zinc-300 border-transparent",
        link: "text-zinc-300 underline-offset-4 hover:underline hover:bg-zinc-800/40",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
