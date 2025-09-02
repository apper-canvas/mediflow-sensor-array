import { useState } from "react"
import PatientList from "@/components/organisms/PatientList"
import PatientForm from "@/components/organisms/PatientForm"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"

const Patients = () => {
  const [view, setView] = useState("list") // list, add, edit
  const [selectedPatient, setSelectedPatient] = useState(null)

  const handleAddPatient = () => {
    setSelectedPatient(null)
    setView("add")
  }

  const handleEditPatient = (patient) => {
    setSelectedPatient(patient)
    setView("edit")
  }

  const handleSave = () => {
    setView("list")
    setSelectedPatient(null)
  }

  const handleCancel = () => {
    setView("list")
    setSelectedPatient(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Patients
          </h1>
          <p className="text-slate-600 mt-1">Manage patient records and information</p>
        </div>
        
        {view !== "list" && (
          <Button variant="outline" onClick={handleCancel}>
            <ApperIcon name="ArrowLeft" className="w-4 h-4 mr-2" />
            Back to List
          </Button>
        )}
      </div>

      {view === "list" && (
        <PatientList
          onSelectPatient={handleEditPatient}
          onAddPatient={handleAddPatient}
        />
      )}

      {(view === "add" || view === "edit") && (
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
              <ApperIcon name={view === "add" ? "UserPlus" : "UserCheck"} className="w-6 h-6 mr-2" />
              {view === "add" ? "Register New Patient" : "Edit Patient Information"}
            </h2>
            
            <PatientForm
              patient={selectedPatient}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Patients