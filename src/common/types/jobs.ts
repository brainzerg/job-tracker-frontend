export type Job = {
  id: number
  startDate: string
  companyId: number
  companyName: string
  position: string
  salary: string
  location: string
  skills: string[]
}

export type JobForm = {
  startDate: string
  companyId: number
  position: string
  salary: string
  location: string
  skills: string[]
}
