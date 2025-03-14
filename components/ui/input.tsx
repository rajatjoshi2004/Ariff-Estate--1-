import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-base shadow-sm transition-colors  file:font-medium    outline-none !not-italic  disabled:cursor-not-allowed bg-[#F9FAFB] disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
)
Input.displayName = "Input"

export { Input }
