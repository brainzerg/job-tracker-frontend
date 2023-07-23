import { useEffect, useState } from "react"
import { ContactsForm } from "../../../common/types/contacts.ts"

type Props = {
  initialValue?: ContactsForm
}

export const useContactsForm = ({ initialValue }: Props) => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [companyId, setCompanyId] = useState<string>("")

  useEffect(() => {
    if (initialValue) {
      setName(initialValue.name)
      setEmail(initialValue.email)
      setPhone(initialValue.phone)
      setCompanyId(initialValue.companyId)
    }
  }, [initialValue])

  return {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    companyId,
    setCompanyId,
  }
}
