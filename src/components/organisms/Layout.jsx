import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const Layout = () => {
  return (
    <div className="h-screen bg-slate-50">
      <Sidebar />
      
      <div className="lg:pl-80 flex flex-col h-full">
        <main className="flex-1 overflow-auto">
          <div className="p-6 lg:p-8 pt-16 lg:pt-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout