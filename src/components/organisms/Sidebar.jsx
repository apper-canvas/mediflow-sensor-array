import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import ApperIcon from "@/components/ApperIcon"
import { cn } from "@/utils/cn"

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: "Dashboard", href: "/", icon: "LayoutDashboard" },
    { name: "Patients", href: "/patients", icon: "Users" },
    { name: "Appointments", href: "/appointments", icon: "Calendar" },
    { name: "Beds", href: "/beds", icon: "Bed" },
    { name: "Reports", href: "/reports", icon: "BarChart3" }
  ]

  const NavItem = ({ item, isMobile = false }) => {
    const isActive = location.pathname === item.href
    
    return (
      <NavLink
        to={item.href}
        onClick={() => isMobile && setIsMobileOpen(false)}
        className={cn(
          "flex items-center px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
          isActive
            ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg"
            : "text-slate-600 hover:text-primary-600 hover:bg-primary-50"
        )}
      >
        <ApperIcon 
          name={item.icon} 
          className={cn(
            "w-5 h-5 mr-3 transition-transform duration-200 group-hover:scale-110",
            isActive ? "text-white" : "text-slate-500 group-hover:text-primary-600"
          )} 
        />
        {item.name}
      </NavLink>
    )
  }

  return (
    <>
      {/* Mobile overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300",
          isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Mobile toggle button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-white shadow-lg border border-slate-200"
      >
        <ApperIcon name={isMobileOpen ? "X" : "Menu"} className="w-5 h-5 text-slate-600" />
      </button>

      {/* Mobile Sidebar */}
      <div className={cn(
        "fixed top-0 left-0 z-50 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 lg:hidden",
        isMobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl medical-gradient flex items-center justify-center">
              <ApperIcon name="Heart" className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                MediFlow
              </h1>
              <p className="text-xs text-slate-500">Hospital Management</p>
            </div>
          </div>
        </div>
        
        <nav className="p-6 space-y-2">
          {navigation.map((item) => (
            <NavItem key={item.name} item={item} isMobile={true} />
          ))}
        </nav>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-80 lg:flex-col lg:fixed lg:inset-y-0 bg-white shadow-xl border-r border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl medical-gradient flex items-center justify-center shadow-lg">
              <ApperIcon name="Heart" className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                MediFlow
              </h1>
              <p className="text-sm text-slate-500">Hospital Management System</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          {navigation.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </nav>

        <div className="p-6 border-t border-slate-200">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
              <ApperIcon name="UserCheck" className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">Dr. Sarah Wilson</p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar