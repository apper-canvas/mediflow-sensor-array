import wardsData from "@/services/mockData/wards.json"

class WardService {
  constructor() {
    this.wards = [...wardsData]
    this.apperClient = null
    this.tableName = 'ward_c' // Database table name when available
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
    //     {"field": {"Name": "type"}},
    //     {"field": {"Name": "totalBeds"}},
    //     {"field": {"Name": "floor"}}
    //   ]
    // }
    // const response = await this.apperClient.fetchRecords(this.tableName, params)
    // return response.data || []
    
    // Current mock implementation
    await this.delay(300)
    return [...this.wards]
  }

  async getById(id) {
    // TODO: Replace with ApperClient when database available
    // this.initApperClient()
    // const params = {
    //   fields: [
    //     {"field": {"Name": "Id"}},
    //     {"field": {"Name": "name"}},
    //     {"field": {"Name": "type"}},
    //     {"field": {"Name": "totalBeds"}},
    //     {"field": {"Name": "floor"}}
    //   ]
    // }
    // const response = await this.apperClient.getRecordById(this.tableName, parseInt(id), params)
    // return response.data

    // Current mock implementation
    await this.delay(200)
    const ward = this.wards.find(w => w.Id === parseInt(id))
    if (!ward) throw new Error("Ward not found")
    return { ...ward }
  }

  async create(wardData) {
    // TODO: Replace with ApperClient when database available
    // this.initApperClient()
    // const params = {
    //   records: [{
    //     name: wardData.name,
    //     type: wardData.type,
    //     totalBeds: parseInt(wardData.totalBeds),
    //     floor: parseInt(wardData.floor)
    //   }]
    // }
    // const response = await this.apperClient.createRecord(this.tableName, params)
    // return response.results?.[0]?.data

    // Current mock implementation
    await this.delay(400)
    const newId = Math.max(...this.wards.map(w => w.Id)) + 1
    const newWard = {
      Id: newId,
      ...wardData
    }
    this.wards.push(newWard)
    return { ...newWard }
  }

  async update(id, wardData) {
    // TODO: Replace with ApperClient when database available
    // this.initApperClient()
    // const params = {
    //   records: [{
    //     Id: parseInt(id),
    //     name: wardData.name,
    //     type: wardData.type,
    //     totalBeds: parseInt(wardData.totalBeds),
    //     floor: parseInt(wardData.floor)
    //   }]
    // }
    // const response = await this.apperClient.updateRecord(this.tableName, params)
    // return response.results?.[0]?.data

    // Current mock implementation
    await this.delay(400)
    const index = this.wards.findIndex(w => w.Id === parseInt(id))
    if (index === -1) throw new Error("Ward not found")
    
    this.wards[index] = { ...this.wards[index], ...wardData }
    return { ...this.wards[index] }
  }

  async delete(id) {
    // TODO: Replace with ApperClient when database available
    // this.initApperClient()
    // const params = { RecordIds: [parseInt(id)] }
    // const response = await this.apperClient.deleteRecord(this.tableName, params)
    // return response.results?.[0]?.success

    // Current mock implementation
    await this.delay(300)
    const index = this.wards.findIndex(w => w.Id === parseInt(id))
    if (index === -1) throw new Error("Ward not found")
    
    const deletedWard = this.wards.splice(index, 1)[0]
    return { ...deletedWard }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

export const wardService = new WardService()