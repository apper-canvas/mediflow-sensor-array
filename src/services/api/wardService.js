import wardsData from "@/services/mockData/wards.json"

class WardService {
  constructor() {
    this.wards = [...wardsData]
  }

  async getAll() {
    await this.delay(300)
    return [...this.wards]
  }

  async getById(id) {
    await this.delay(200)
    const ward = this.wards.find(w => w.Id === parseInt(id))
    if (!ward) throw new Error("Ward not found")
    return { ...ward }
  }

  async create(wardData) {
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
    await this.delay(400)
    const index = this.wards.findIndex(w => w.Id === parseInt(id))
    if (index === -1) throw new Error("Ward not found")
    
    this.wards[index] = { ...this.wards[index], ...wardData }
    return { ...this.wards[index] }
  }

  async delete(id) {
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