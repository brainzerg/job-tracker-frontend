export type Job = {
  id: number
  startdate: string
  companyId: number
  companyName: string
  position: string
  salary: string
  location: string
  skills: string
}

export type JobForm = {
  id?: string
  startdate: string
  companyId: string
  position: string
  salary: string
  location: string
  skills: string
}
