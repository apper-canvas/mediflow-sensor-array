import { forwardRef } from "react"
import { cn } from "@/utils/cn"

const Select = forwardRef(({ 
  children,
  className, 
  error,
  ...props 
}, ref) => {
  return (
    <select
      className={cn(
        "flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm transition-colors",
        "focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        error && "border-rose-500 focus:border-rose-500 focus:ring-rose-500/20",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  )
})

Select.displayName = "Select"

export default Select