import ApperIcon from "@/components/ApperIcon"
import { cn } from "@/utils/cn"

const StatsCard = ({ 
  title, 
  value, 
  change, 
  changeType = "neutral",
  icon, 
  gradient = "medical-gradient",
  className 
}) => {
  const changeColors = {
    positive: "text-emerald-600",
    negative: "text-rose-600",
    neutral: "text-slate-600"
  }

  return (
    <div className={cn(
      "glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group",
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-600">{title}</p>
          <p className="text-3xl font-bold text-slate-900 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            {value}
          </p>
          {change && (
            <p className={cn("text-sm font-medium", changeColors[changeType])}>
              {change}
            </p>
          )}
        </div>
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
          gradient
        )}>
          <ApperIcon name={icon} className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  )
}

export default StatsCard