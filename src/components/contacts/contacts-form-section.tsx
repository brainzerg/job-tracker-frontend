import { Contacts, ContactsForm } from "../../common/types/contacts.ts"
import { FormEventHandler, useEffect, useState } from "react"
import { Company } from "../../common/types/company.ts"
import { useContactsForm } from "./_hooks/use-contacts-form.ts"
import FormPageCss from "../../styles/common-css/form-page.module.css"
import { Button, ButtonVariant, Input, Select, SelectOption } from "../common"
import { getCompaniesList } from "../../api/companies.ts"

type Props = {
  initialValue?: Contacts
  onSubmit: (form: ContactsForm) => void
}

export const ContactsFormSection = ({ initialValue, onSubmit }: Props) => {
  const [companyList, setCompanyList] = useState<Company[]>([])

  const { setContactsFormField, contactsForm } = useContactsForm({
    initialValue,
  })
  const { name, phone, companyId, email } = contactsForm

  async function fetchCompaniesList() {
    const data = await getCompaniesList()
    setCompanyList(data)
    setContactsFormField("companyId", data[0].id)
  }

  const isUpdate = !!initialValue

  useEffect(() => {
    if (!isUpdate) {
      fetchCompaniesList()
    }
  }, [])

  console.log("company id:", companyId)

  const handleForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onSubmit(contactsForm)
  }

  const companyOptionList: SelectOption[] = companyList.map((company) => ({
    label: company.name,
    value: String(company.id),
  }))

  return (
    <form className={FormPageCss.formContainer} onSubmit={handleForm}>
      <div className={FormPageCss.inputRow}>
        <p className={FormPageCss.inputRowLabel}>Name</p>
        <Input
          initialValue={name}
          onBlur={(e) => setContactsFormField("name", e.target.value)}
        />
      </div>
      <div className={FormPageCss.inputRow}>
        <p className={FormPageCss.inputRowLabel}>Email</p>
        <Input
          initialValue={email}
          onBlur={(e) => setContactsFormField("email", e.target.value)}
        />
      </div>
      <div className={FormPageCss.inputRow}>
        <p className={FormPageCss.inputRowLabel}>Phone</p>
        <Input
          initialValue={phone}
          onBlur={(e) => setContactsFormField("phone", e.target.value)}
        />
      </div>
      <div className={FormPageCss.inputRow}>
        <p className={FormPageCss.inputRowLabel}>Company</p>
        {isUpdate && <Input value={initialValue.companyName} disabled />}
        {!isUpdate && (
          <Select
            disabled={!!initialValue}
            options={companyOptionList}
            value={companyId}
            onChange={(theCompanyId) =>
              setContactsFormField("companyId", +theCompanyId)
            }
          />
        )}
      </div>
      <div className={FormPageCss.submitContainer}>
        <Button type={"submit"} variant={ButtonVariant.Green} width={100}>
          Create
        </Button>
      </div>
    </form>
  )
}
