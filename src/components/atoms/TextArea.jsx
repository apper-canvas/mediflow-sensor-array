import { forwardRef } from "react"
import { cn } from "@/utils/cn"

const TextArea = forwardRef(({ 
  className, 
  error,
  ...props 
}, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm transition-colors",
        "placeholder:text-slate-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20",
        "disabled:cursor-not-allowed disabled:opacity-50 resize-none",
        error && "border-rose-500 focus:border-rose-500 focus:ring-rose-500/20",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

TextArea.displayName = "TextArea"

export default TextArea