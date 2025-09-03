import appointmentsData from "@/services/mockData/appointments.json"

class AppointmentService {
  constructor() {
    this.appointments = [...appointmentsData]
    this.apperClient = null
    this.tableName = 'appointment_c' // Database table name when available
  }

  // Initialize ApperClient when needed
  initApperClient() {
    if (!this.apperClient && window.ApperSDK) {
      const { ApperClient } = window.ApperSDK
      this.apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      })
    }
  }

  async getAll() {
    // TODO: Replace with ApperClient when database available
    // this.initApperClient()
    // const params = {
    //   fields: [
    //     {"field": {"Name": "Id"}},
    //     {"field": {"Name": "patientId"}},
    //     {"field": {"Name": "doctorId"}},
    //     {"field": {"Name": "dateTime"}},
    //     {"field": {"Name": "duration"}},
    //     {"field": {"Name": "type"}},
    //     {"field": {"Name": "status"}},
    //     {"field": {"Name": "notes"}}
    //   ]
    // }
    // const response = await this.apperClient.fetchRecords(this.tableName, params)
    // return response.data || []
    
    // Current mock implementation
    await this.delay(300)
    return [...this.appointments]
  }

  async getById(id) {
    // TODO: Replace with ApperClient when database available
    // this.initApperClient()
    // const params = {
    //   fields: [
    //     {"field": {"Name": "Id"}},
    //     {"field": {"Name": "patientId"}},
    //     {"field": {"Name": "doctorId"}},
    //     {"field": {"Name": "dateTime"}},
    //     {"field": {"Name": "duration"}},
    //     {"field": {"Name": "type"}},
    //     {"field": {"Name": "status"}},
    //     {"field": {"Name": "notes"}}
    //   ]
    // }
    // const response = await this.apperClient.getRecordById(this.tableName, parseInt(id), params)
    // return response.data

    // Current mock implementation
    await this.delay(200)
    const appointment = this.appointments.find(a => a.Id === parseInt(id))
    if (!appointment) throw new Error("Appointment not found")
    return { ...appointment }
  }

  async create(appointmentData) {
    // TODO: Replace with ApperClient when database available
    // this.initApperClient()
    // const params = {
    //   records: [{
    //     patientId: parseInt(appointmentData.patientId),
    //     doctorId: parseInt(appointmentData.doctorId),
    //     dateTime: appointmentData.dateTime,
    //     duration: parseInt(appointmentData.duration),
    //     type: appointmentData.type,
    //     status: appointmentData.status,
    //     notes: appointmentData.notes
    //   }]
    // }
    // const response = await this.apperClient.createRecord(this.tableName, params)
    // return response.results?.[0]?.data

    // Current mock implementation
    await this.delay(400)
    const newId = Math.max(...this.appointments.map(a => a.Id)) + 1
    const newAppointment = {
      Id: newId,
      ...appointmentData
    }
    this.appointments.push(newAppointment)
    return { ...newAppointment }
  }

  async update(id, appointmentData) {
    // TODO: Replace with ApperClient when database available
    // this.initApperClient()
    // const params = {
    //   records: [{
    //     Id: parseInt(id),
    //     patientId: parseInt(appointmentData.patientId),
    //     doctorId: parseInt(appointmentData.doctorId),
    //     dateTime: appointmentData.dateTime,
    //     duration: parseInt(appointmentData.duration),
    //     type: appointmentData.type,
    //     status: appointmentData.status,
    //     notes: appointmentData.notes
    //   }]
    // }
    // const response = await this.apperClient.updateRecord(this.tableName, params)
    // return response.results?.[0]?.data

    // Current mock implementation
    await this.delay(400)
    const index = this.appointments.findIndex(a => a.Id === parseInt(id))
    if (index === -1) throw new Error("Appointment not found")
    
    this.appointments[index] = { ...this.appointments[index], ...appointmentData }
    return { ...this.appointments[index] }
  }

  async delete(id) {
    // TODO: Replace with ApperClient when database available
    // this.initApperClient()
    // const params = { RecordIds: [parseInt(id)] }
    // const response = await this.apperClient.deleteRecord(this.tableName, params)
    // return response.results?.[0]?.success

    // Current mock implementation
    await this.delay(300)
    const index = this.appointments.findIndex(a => a.Id === parseInt(id))
    if (index === -1) throw new Error("Appointment not found")
    
    const deletedAppointment = this.appointments.splice(index, 1)[0]
    return { ...deletedAppointment }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

export const appointmentService = new AppointmentService()