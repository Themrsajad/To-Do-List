import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold rtl:font-medium no-select shadow-sm outline-hidden hover:cursor-pointer active:scale-95 delay-0 transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 rtl:[&_span]:-mb-1",
  {
    variants: {
      variant: {
        primary:
          "bg-dLight text-cLight hover:bg-dLight/90 dark:bg-bDark dark:text-cDark dark:hover:bg-bDark/90",
        red: "bg-red text-cLight hover:bg-red/90 dark:bg-red dark:text-bDark dark:hover:bg-red/90",
        secondary:
          "bg-aLight text-bLight hover:bg-aLight/95 dark:bg-aDark dark:text-bDark dark:hover:bg-aDark/90",
        mobile: "bg-cLight text-bLight dark:bg-aDark/30 dark:text-bDark",
      },
      size: {
        sm: "min-h-[2.2rem] py-2 px-3",
        lg: "h-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
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
