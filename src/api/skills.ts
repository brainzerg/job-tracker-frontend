import { api } from "./config.ts"
import { Skill, SkillForm } from "../common/types/skill.ts"
import { GenericOk } from "../common/types/api.ts"

const url = "/api/skills"

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
  const response = await api.delete<GenericOk>(url + "/" + id)

  return response.data
}

export const updateSkill = async (payload: SkillForm) => {
  const response = await api.put<Skill>(url + "/" + payload.skillId, payload)

  return response.data
}
