export type Contacts = {
  id: number
  name: string
  email: string
  phone: string
  companyId: number
  companyName: string
}

export type ContactsForm = {
  id?: number
  name: string
  email: string
  phone: string
  companyId: number
}
