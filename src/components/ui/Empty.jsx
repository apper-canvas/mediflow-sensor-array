import ApperIcon from "@/components/ApperIcon"
import { cn } from "@/utils/cn"

const Empty = ({ 
  title = "No data found", 
  description = "Get started by adding your first item", 
  action,
  icon = "FileX",
  className 
}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center p-8 text-center", className)}>
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-6">
        <ApperIcon name={icon} className="w-10 h-10 text-slate-400" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-8 max-w-md">{description}</p>
      {action && (
        <div className="space-y-3">
          {action}
        </div>
      )}
    </div>
  )
}

export default Empty