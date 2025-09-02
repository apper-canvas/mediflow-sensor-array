import { cn } from "@/utils/cn"

const Loading = ({ className, rows = 3 }) => {
  return (
    <div className={cn("space-y-4 p-6", className)}>
      <div className="animate-pulse space-y-4">
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="space-y-2">
            <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded w-3/4"></div>
            <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded w-1/2"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary-200 border-t-primary-600"></div>
      </div>
    </div>
  )
}

export default Loading