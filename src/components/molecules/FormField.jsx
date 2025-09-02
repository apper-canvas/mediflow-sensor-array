import { cn } from "@/utils/cn"

const FormField = ({ 
  label, 
  children, 
  error, 
  required, 
  className 
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label className="text-sm font-medium text-slate-700 block">
          {label}
          {required && <span className="text-rose-500 ml-1">*</span>}
        </label>
      )}
      {children}
      {error && (
        <p className="text-sm text-rose-600">{error}</p>
      )}
    </div>
  )
}

export default FormField