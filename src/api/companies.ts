import { api } from "./config.ts"
import { Company, CompanyForm } from "../common/types/company.ts"

const url = "/api/companies"

export const getCompaniesList = async () => {
  const response = await api.get<Company[]>(url)

  return response.data
}

export const getCompanyById = async (id: number) => {
  const response = await api.get<Company>(url + "/" + id)

  return response.data
}

export const createCompany = async (payload: CompanyForm) => {
  const response = await api.post<Company>(url, payload)

  return response.data
}

export const deleteCompany = async (id: number) => {
  const response = await api.delete<Company>(url + "/" + id)

  return response.data
}

export const updateCompany = async (payload: CompanyForm) => {
  const response = await api.put<CompanyForm>(url + "/" + payload.id, payload)

  return response.data
}
