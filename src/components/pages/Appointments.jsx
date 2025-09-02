import { useState } from "react"
import AppointmentCalendar from "@/components/organisms/AppointmentCalendar"
import AppointmentForm from "@/components/organisms/AppointmentForm"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"

const Appointments = () => {
  const [view, setView] = useState("calendar") // calendar, add, edit
  const [selectedAppointment, setSelectedAppointment] = useState(null)

  const handleAddAppointment = () => {
    setSelectedAppointment(null)
    setView("add")
  }

  const handleEditAppointment = (appointment) => {
    setSelectedAppointment(appointment)
    setView("edit")
  }

  const handleSave = () => {
    setView("calendar")
    setSelectedAppointment(null)
  }

  const handleCancel = () => {
    setView("calendar")
    setSelectedAppointment(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Appointments
          </h1>
          <p className="text-slate-600 mt-1">Schedule and manage patient appointments</p>
        </div>
        
        {view !== "calendar" && (
          <Button variant="outline" onClick={handleCancel}>
            <ApperIcon name="ArrowLeft" className="w-4 h-4 mr-2" />
            Back to Calendar
          </Button>
        )}
      </div>

      {view === "calendar" && (
        <AppointmentCalendar
          onAddAppointment={handleAddAppointment}
          onEditAppointment={handleEditAppointment}
        />
      )}

      {(view === "add" || view === "edit") && (
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
              <ApperIcon name={view === "add" ? "CalendarPlus" : "CalendarCheck"} className="w-6 h-6 mr-2" />
              {view === "add" ? "Schedule New Appointment" : "Edit Appointment"}
            </h2>
            
            <AppointmentForm
              appointment={selectedAppointment}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Appointments