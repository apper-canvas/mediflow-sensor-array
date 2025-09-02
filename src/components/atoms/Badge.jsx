import { cn } from "@/utils/cn"

const Badge = ({ children, variant = "default", className }) => {
  const variants = {
    default: "bg-slate-100 text-slate-800 border-slate-200",
    available: "bg-emerald-100 text-emerald-800 border-emerald-200",
    occupied: "bg-rose-100 text-rose-800 border-rose-200",
    cleaning: "bg-amber-100 text-amber-800 border-amber-200",
    maintenance: "bg-slate-100 text-slate-800 border-slate-200",
    scheduled: "bg-blue-100 text-blue-800 border-blue-200",
    completed: "bg-emerald-100 text-emerald-800 border-emerald-200",
    cancelled: "bg-rose-100 text-rose-800 border-rose-200"
  }

  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}

export default Badge