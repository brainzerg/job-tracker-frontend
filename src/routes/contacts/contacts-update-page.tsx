import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Title } from "../../components/common"
import { getContactById, updateContact } from "../../api/contacts.ts"
import { Contacts, ContactsForm } from "../../common/types/contacts.ts"
import { ContactsFormSection } from "../../components/contacts/contacts-form-section.tsx"

type Params = {
  contactsId: string
}

export const ContactsUpdatePage = () => {
  const { contactsId } = useParams<Params>()
  const [initialValue, setInitialValue] = useState<Contacts | undefined>()
  const navigate = useNavigate()

  const fetchContactById = async () => {
    const contact = await getContactById(Number(contactsId))
    setInitialValue(contact)
  }

  useEffect(() => {
    if (contactsId) {
      fetchContactById()
    }
  }, [contactsId])

  const onSubmit = async (form: ContactsForm) => {
    await updateContact({ ...form, id: Number(contactsId) })
    navigate("/contacts")
  }

  return (
    <div>
      <Title text={"Update A Contact Entry"} />
      {initialValue && (
        <ContactsFormSection onSubmit={onSubmit} initialValue={initialValue} />
      )}
    </div>
  )
}
