import bedsData from "@/services/mockData/beds.json"

class BedService {
  constructor() {
    this.beds = [...bedsData]
  }

  async getAll() {
    await this.delay(300)
    return [...this.beds]
  }

  async getById(id) {
    await this.delay(200)
    const bed = this.beds.find(b => b.Id === parseInt(id))
    if (!bed) throw new Error("Bed not found")
    return { ...bed }
  }

  async create(bedData) {
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
    await this.delay(400)
    const index = this.beds.findIndex(b => b.Id === parseInt(id))
    if (index === -1) throw new Error("Bed not found")
    
    this.beds[index] = { ...this.beds[index], ...bedData }
    return { ...this.beds[index] }
  }

  async delete(id) {
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