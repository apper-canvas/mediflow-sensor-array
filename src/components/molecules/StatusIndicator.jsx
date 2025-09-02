import ApperIcon from "@/components/ApperIcon"
import Badge from "@/components/atoms/Badge"

const StatusIndicator = ({ status, showIcon = true }) => {
  const statusConfig = {
    available: {
      variant: "available",
      icon: "Check",
      text: "Available"
    },
    occupied: {
      variant: "occupied", 
      icon: "User",
      text: "Occupied"
    },
    cleaning: {
      variant: "cleaning",
      icon: "Sparkles",
      text: "Cleaning"
    },
    maintenance: {
      variant: "maintenance",
      icon: "Wrench",
      text: "Maintenance"
    },
    scheduled: {
      variant: "scheduled",
      icon: "Calendar",
      text: "Scheduled"
    },
    completed: {
      variant: "completed",
      icon: "CheckCircle",
      text: "Completed"
    },
    cancelled: {
      variant: "cancelled",
      icon: "XCircle",
      text: "Cancelled"
    }
  }

  const config = statusConfig[status] || statusConfig.available

  return (
    <Badge variant={config.variant} className="inline-flex items-center gap-1">
      {showIcon && <ApperIcon name={config.icon} className="w-3 h-3" />}
      {config.text}
    </Badge>
  )
}

export default StatusIndicator