import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const linkVariants = cva(
  "hover:text-primary fill-foreground hover:fill-primary inline-block hover:-skew-x-6 transition-all duration-300 origin-bottom",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a"
    return (
      <Comp
        className={cn(linkVariants({ variant, size, className }))}
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    )
  }
)
Link.displayName = "Link"

export { Link, linkVariants }
