import { api } from "./config.ts"
import { Application, ApplicationForm } from "../common/types/applications.ts"

const url = "/api/applications"

export const getApplicationsList = async () => {
  const response = await api.get<Application[]>(url)

  return response.data
}

export const getApplicationById = async (id: number) => {
  const response = await api.get<Application>(url + "/" + id)

  return response.data
}

export const createApplication = async (payload: ApplicationForm) => {
  const response = await api.post<Application>(url, payload)

  return response.data
}

export const deleteApplication = async (id: number) => {
  const response = await api.delete<Application>(url + "/" + id)

  return response.data
}

export const updateApplication = async (payload: ApplicationForm) => {
  const response = await api.put<ApplicationForm>(url + "/" + payload.id, payload)

  return response.data
}
