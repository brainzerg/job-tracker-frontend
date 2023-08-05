import { Title } from "../../components/common"
import { ContactsFormSection } from "../../components/contacts/contacts-form-section.tsx"
import { ContactsForm } from "../../common/types/contacts.ts"
import { useNavigate } from "react-router-dom"
import { createContact } from "../../api/contacts.ts"

export const ContactsCreatePage = () => {
  const navigate = useNavigate()

  const onSubmit = async (form: ContactsForm) => {
    console.log(form)
    await createContact(form)
    navigate("/contacts")
  }

  return (
    <div>
      <Title text={"Create A Contacts Entry"} />
      <ContactsFormSection onSubmit={onSubmit} />
    </div>
  )
}
