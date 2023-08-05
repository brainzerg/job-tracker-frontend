export type Application = {
  id: number
  applydate: string
  jobId: number
  companyId: number
  companyName: string
  position: string
  startdate: string
  status: string
}

export type ApplicationForm = {
  id?: number
  applydate: string
  companyId: number
  jobId: number
  status: string
}
