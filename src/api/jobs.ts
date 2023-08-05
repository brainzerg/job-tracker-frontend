import { api } from "./config.ts"
import { Job, JobForm } from "../common/types/jobs.ts"

const url = "/api/jobs"

export const getJobsList = async () => {
  const response = await api.get<Job[]>(url)

  return response.data
}

export const getJobById = async (id: number) => {
  const response = await api.get<Job>(url + "/" + id)

  return response.data
}

export const createJob = async (payload: JobForm) => {
  const response = await api.post<Job>(url, payload)

  return response.data
}

export const deleteJob = async (id: number) => {
  const response = await api.delete<Job>(url + "/" + id)

  return response.data
}

export const updateJob = async (payload: JobForm) => {
  const response = await api.put<Job>(url + "/" + payload.id, payload)

  return response.data
}

export const getJobsFromCompany = async (companyId: number) => {
  const response = await api.get<Job[]>(url + "/jobs-from-company", {
    params: { companyId },
  })

  return response.data
}
