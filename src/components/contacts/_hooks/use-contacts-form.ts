import { useEffect, useState } from "react"
import { Contacts, ContactsForm } from "../../../common/types/contacts.ts"

type Props = {
  initialValue?: Contacts
}

export const useContactsForm = ({ initialValue }: Props) => {
  const [contactsForm, setContactsForm] = useState<ContactsForm>({
    name: "",
    companyId: 0,
    phone: "",
    email: "",
  })

  console.log("form:", contactsForm)

  const setContactsFormField = (
    key: keyof ContactsForm,
    value: ContactsForm[keyof ContactsForm]
  ) => {
    setContactsForm((prev) => {
      return { ...prev, [key]: value }
    })
  }

  useEffect(() => {
    if (initialValue) {
      setContactsFormField("companyId", initialValue.companyId)
      setContactsFormField("name", initialValue.name)
      setContactsFormField("email", initialValue.email)
      setContactsFormField("phone", initialValue.phone)
    }
  }, [])

  return {
    setContactsFormField,
    contactsForm,
  }
}
