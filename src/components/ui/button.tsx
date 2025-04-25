import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[8px] px-3 py-2 text-[14px] transition-colors",
  {
    variants: {
      variant: {
        primary:
          "bg-[#5939A2] text-white border border-[#5939A2] hover:bg-[#6F47CB] hover:border-[#6F47CB]",
        primaryGray:
          "bg-[#121212] text-white border border-[#121212] hover:bg-[#3F3F3F] hover:border-[#3F3F3F]",
        secondaryOutlined:
          "bg-white text-[#121212] border border-[#D1D1D1] hover:bg-[#EBEBEB]",
        destructive:
          "bg-[#EF4444] text-white border border-[#EF4444] hover:bg-[#dc2626]",
        destructiveOutlined:
          "bg-transparent text-[#D50B3E] border border-[#FBB1C4] hover:bg-[#FEE2E2] hover:text-[#B91C1C] hover:border-[#EF4444]",
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
