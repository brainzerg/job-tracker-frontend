import { api } from "./config.ts"
import { Skill, SkillForm } from "../common/types/skill.ts"

const url = "/api/companies"

export const getSkillsList = async () => {
  const response = await api.get<Skill[]>(url)

  return response.data
}

export const getSkillById = async (id: number) => {
  const response = await api.get<Skill>(url + "/" + id)

  return response.data
}

export const createSkill = async (payload: SkillForm) => {
  const response = await api.post<Skill>(url, payload)

  return response.data
}

export const deleteSkill = async (id: number) => {
  const response = await api.delete<Skill>(url + "/" + id)

  return response.data
}

export const updateSkill = async (payload: Skill) => {
  const response = await api.put<Skill>(url, payload)

  return response.data
}
