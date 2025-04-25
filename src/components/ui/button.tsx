import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[8px] px-3 py-2 text-[14px] transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-[#5939A2] text-white hover:bg-[#5939A2]/90",
        primaryGray: "bg-[#121212] text-white hover:bg-[#121212]/90",
        secondaryOutlined: "bg-[#10B981] text-white hover:bg-[#10B981]/90",
        destructive: "bg-[#EF4444] text-white hover:bg-[#EF4444]/90",
        destructiveOutlined:
          "bg-transparent border border-[#FBB1C4] text-[#D50B3E] hover:bg-[#EF4444]/90",
        secondary: "bg-[#10B981] text-white hover:bg-[#10B981]/90",
        outline:
          "bg-transparent border border-input text-foreground hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
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
