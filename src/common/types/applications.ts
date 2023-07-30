export type Application = {
  id: number
  applyDate: string
  jobId: number
  companyId: number
  companyName: string
  position: string
  startDate: string
  status: string
}

export type ApplicationForm = {
  id?: number
  applyDate: string
  companyId: string
  jobId: string
  status: string
}
