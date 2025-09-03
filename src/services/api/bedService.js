import bedsData from "@/services/mockData/beds.json"

class BedService {
  constructor() {
    this.beds = [...bedsData]
    this.apperClient = null
    this.tableName = 'bed_c' // Database table name when available
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
    //     {"field": {"Name": "wardId"}},
    //     {"field": {"Name": "bedNumber"}},
    //     {"field": {"Name": "status"}},
    //     {"field": {"Name": "patientId"}},
    //     {"field": {"Name": "admissionDate"}},
    //     {"field": {"Name": "expectedDischarge"}}
    //   ]
    // }
    // const response = await this.apperClient.fetchRecords(this.tableName, params)
    // return response.data || []
    
    // Current mock implementation
    await this.delay(300)
    return [...this.beds]
  }

  async getById(id) {
    // TODO: Replace with ApperClient when database available
    // this.initApperClient()
    // const params = {
    //   fields: [
    //     {"field": {"Name": "Id"}},
    //     {"field": {"Name": "wardId"}},
    //     {"field": {"Name": "bedNumber"}},
    //     {"field": {"Name": "status"}},
    //     {"field": {"Name": "patientId"}},
    //     {"field": {"Name": "admissionDate"}},
    //     {"field": {"Name": "expectedDischarge"}}
    //   ]
    // }
    // const response = await this.apperClient.getRecordById(this.tableName, parseInt(id), params)
    // return response.data

    // Current mock implementation
    await this.delay(200)
    const bed = this.beds.find(b => b.Id === parseInt(id))
    if (!bed) throw new Error("Bed not found")
    return { ...bed }
  }

  async create(bedData) {
    // TODO: Replace with ApperClient when database available
    // this.initApperClient()
    // const params = {
    //   records: [{
    //     wardId: parseInt(bedData.wardId),
    //     bedNumber: bedData.bedNumber,
    //     status: bedData.status,
    //     patientId: bedData.patientId ? parseInt(bedData.patientId) : null,
    //     admissionDate: bedData.admissionDate,
    //     expectedDischarge: bedData.expectedDischarge
    //   }]
    // }
    // const response = await this.apperClient.createRecord(this.tableName, params)
    // return response.results?.[0]?.data

    // Current mock implementation
    await this.delay(400)
    const newId = Math.max(...this.beds.map(b => b.Id)) + 1
    const newBed = {
      Id: newId,
      ...bedData
    }
    this.beds.push(newBed)
    return { ...newBed }
  }

  async update(id, bedData) {
    // TODO: Replace with ApperClient when database available
    // this.initApperClient()
    // const params = {
    //   records: [{
    //     Id: parseInt(id),
    //     wardId: parseInt(bedData.wardId),
    //     bedNumber: bedData.bedNumber,
    //     status: bedData.status,
    //     patientId: bedData.patientId ? parseInt(bedData.patientId) : null,
    //     admissionDate: bedData.admissionDate,
    //     expectedDischarge: bedData.expectedDischarge
    //   }]
    // }
    // const response = await this.apperClient.updateRecord(this.tableName, params)
    // return response.results?.[0]?.data

    // Current mock implementation
    await this.delay(400)
    const index = this.beds.findIndex(b => b.Id === parseInt(id))
    if (index === -1) throw new Error("Bed not found")
    
    this.beds[index] = { ...this.beds[index], ...bedData }
    return { ...this.beds[index] }
  }

  async delete(id) {
    // TODO: Replace with ApperClient when database available
    // this.initApperClient()
    // const params = { RecordIds: [parseInt(id)] }
    // const response = await this.apperClient.deleteRecord(this.tableName, params)
    // return response.results?.[0]?.success

    // Current mock implementation
    await this.delay(300)
    const index = this.beds.findIndex(b => b.Id === parseInt(id))
    if (index === -1) throw new Error("Bed not found")
    
    const deletedBed = this.beds.splice(index, 1)[0]
    return { ...deletedBed }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

export const bedService = new BedService()