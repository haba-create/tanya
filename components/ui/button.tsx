import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-raleway font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-[48px]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-calm btn-hover-lift",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-calm",
        outline:
          "border-2 border-primary bg-background hover:bg-primary hover:text-primary-foreground shadow-calm",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-calm btn-hover-lift",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline min-h-[44px]",
        sage: "bg-sage-400 text-white hover:bg-sage-500 shadow-calm btn-hover-lift",
        lavender: "bg-lavender-400 text-white hover:bg-lavender-500 shadow-calm btn-hover-lift",
        terracotta: "bg-terracotta-400 text-white hover:bg-terracotta-500 shadow-calm btn-hover-lift",
      },
      size: {
        default: "h-12 px-8 py-3 text-base",
        sm: "h-11 px-6 py-2 text-sm",
        lg: "h-14 px-10 py-3 text-lg",
        xl: "h-16 px-12 py-4 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
