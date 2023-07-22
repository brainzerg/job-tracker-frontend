import { api } from "./config.ts"
import { Company } from "../common/types/company.ts"

export const getCompaniesList = async () => {
  const response = await api.get<Company[]>("/api/companies")

  return response.data
}
