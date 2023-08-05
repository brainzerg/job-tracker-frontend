import { api } from "./config.ts"
import { Contacts, ContactsForm } from "../common/types/contacts.ts"
import { GenericOk } from "../common/types/api.ts"

const url = "/api/contacts"

export const getContactsList = async () => {
  const response = await api.get<Contacts[]>(url)

  return response.data
}

export const getContactById = async (id: number) => {
  const response = await api.get<Contacts>(url + "/" + id)

  return response.data
}

export const createContact = async (payload: ContactsForm) => {
  const response = await api.post<Contacts>(url, payload)

  return response.data
}

export const deleteContact = async (id: number) => {
  const response = await api.delete<Contacts>(url + "/" + id)

  return response.data
}

export const updateContact = async (payload: ContactsForm) => {
  const response = await api.put<GenericOk>(url + "/" + payload.id, payload)

  return response.data
}
