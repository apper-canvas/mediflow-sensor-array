import { useState } from "react"
import BedGrid from "@/components/organisms/BedGrid"
import BedModal from "@/components/organisms/BedModal"
import ApperIcon from "@/components/ApperIcon"

const Beds = () => {
  const [selectedBed, setSelectedBed] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleBedAction = (bed) => {
    setSelectedBed(bed)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedBed(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Bed Management
          </h1>
          <p className="text-slate-600 mt-1">Monitor and manage bed occupancy across wards</p>
        </div>
      </div>

      <BedGrid onBedAction={handleBedAction} />
      
      {showModal && (
        <BedModal
          bed={selectedBed}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default Beds