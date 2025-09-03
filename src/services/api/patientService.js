import patientsData from "@/services/mockData/patients.json"

class PatientService {
  constructor() {
    this.patients = [...patientsData]
    this.apperClient = null
    this.tableName = 'patient_c' // Database table name when available
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
    //     {"field": {"Name": "name"}},
    //     {"field": {"Name": "dateOfBirth"}},
    //     {"field": {"Name": "gender"}},
    //     {"field": {"Name": "phone"}},
    //     {"field": {"Name": "email"}},
    //     {"field": {"Name": "address"}},
    //     {"field": {"Name": "bloodType"}},
    //     {"field": {"Name": "allergies"}},
    //     {"field": {"Name": "emergencyContact"}},
    //     {"field": {"Name": "medicalHistory"}}
    //   ]
    // }
    // const response = await this.apperClient.fetchRecords(this.tableName, params)
    // return response.data || []
    
    // Current mock implementation
    await this.delay(300)
    return [...this.patients]
  }

  async getById(id) {
    // TODO: Replace with ApperClient when database available
    // this.initApperClient()
    // const params = {
    //   fields: [
    //     {"field": {"Name": "Id"}},
    //     {"field": {"Name": "name"}},
    //     {"field": {"Name": "dateOfBirth"}},
    //     {"field": {"Name": "gender"}},
    //     {"field": {"Name": "phone"}},
    //     {"field": {"Name": "email"}},
    //     {"field": {"Name": "address"}},
    //     {"field": {"Name": "bloodType"}},
    //     {"field": {"Name": "allergies"}},
    //     {"field": {"Name": "emergencyContact"}},
    //     {"field": {"Name": "medicalHistory"}}
    //   ]
    // }
    // const response = await this.apperClient.getRecordById(this.tableName, parseInt(id), params)
    // return response.data

    // Current mock implementation
    await this.delay(200)
    const patient = this.patients.find(p => p.Id === parseInt(id))
    if (!patient) throw new Error("Patient not found")
    return { ...patient }
  }

  async create(patientData) {
    // TODO: Replace with ApperClient when database available
    // this.initApperClient()
    // const params = {
    //   records: [{
    //     name: patientData.name,
    //     dateOfBirth: patientData.dateOfBirth,
    //     gender: patientData.gender,
    //     phone: patientData.phone,
    //     email: patientData.email,
    //     address: patientData.address,
    //     bloodType: patientData.bloodType,
    //     allergies: Array.isArray(patientData.allergies) ? patientData.allergies.join(',') : patientData.allergies,
    //     emergencyContact: JSON.stringify(patientData.emergencyContact),
    //     medicalHistory: Array.isArray(patientData.medicalHistory) ? patientData.medicalHistory.join(',') : patientData.medicalHistory
    //   }]
    // }
    // const response = await this.apperClient.createRecord(this.tableName, params)
    // return response.results?.[0]?.data

    // Current mock implementation
    await this.delay(400)
    const newId = Math.max(...this.patients.map(p => p.Id)) + 1
    const newPatient = {
      Id: newId,
      ...patientData
    }
    this.patients.push(newPatient)
    return { ...newPatient }
  }

  async update(id, patientData) {
    // TODO: Replace with ApperClient when database available
    // this.initApperClient()
    // const params = {
    //   records: [{
    //     Id: parseInt(id),
    //     name: patientData.name,
    //     dateOfBirth: patientData.dateOfBirth,
    //     gender: patientData.gender,
    //     phone: patientData.phone,
    //     email: patientData.email,
    //     address: patientData.address,
    //     bloodType: patientData.bloodType,
    //     allergies: Array.isArray(patientData.allergies) ? patientData.allergies.join(',') : patientData.allergies,
    //     emergencyContact: JSON.stringify(patientData.emergencyContact),
    //     medicalHistory: Array.isArray(patientData.medicalHistory) ? patientData.medicalHistory.join(',') : patientData.medicalHistory
    //   }]
    // }
    // const response = await this.apperClient.updateRecord(this.tableName, params)
    // return response.results?.[0]?.data

    // Current mock implementation
    await this.delay(400)
    const index = this.patients.findIndex(p => p.Id === parseInt(id))
    if (index === -1) throw new Error("Patient not found")
    
    this.patients[index] = { ...this.patients[index], ...patientData }
    return { ...this.patients[index] }
  }

  async delete(id) {
    // TODO: Replace with ApperClient when database available
    // this.initApperClient()
    // const params = { RecordIds: [parseInt(id)] }
    // const response = await this.apperClient.deleteRecord(this.tableName, params)
    // return response.results?.[0]?.success

    // Current mock implementation
    await this.delay(300)
    const index = this.patients.findIndex(p => p.Id === parseInt(id))
    if (index === -1) throw new Error("Patient not found")
    
    const deletedPatient = this.patients.splice(index, 1)[0]
    return { ...deletedPatient }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

export const patientService = new PatientService()