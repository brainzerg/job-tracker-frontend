import { FormEventHandler } from "react"
import {
  Button,
  ButtonVariant,
  Input,
  Select,
  SelectOption,
  Title,
} from "../../components/common"
import FormPageCss from "../../styles/common-css/form-page.module.css"
import { useContactsForm } from "../../components/contacts/_hooks/use-contacts-form.ts"
import { defaultSelectOption } from "../../common/constants/select-option.ts"

const mockData: SelectOption[] = [
  defaultSelectOption,
  { value: "1", label: "Walmart" },
  { value: "2", label: "Nike" },
  { value: "3", label: "Tektronix" },
  { value: "4", label: "Garmin" },
  { value: "5", label: "HP" },
]

export const ContactsCreatePage = () => {
  const { name, setName, phone, setPhone, setEmail, setCompanyId, companyId } =
    useContactsForm({})

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    // TODO: send data to server
    console.log("name: ", name, "phone: ", phone)
    console.log("company id: ", companyId)
  }

  return (
    <div>
      <Title text={"Create A Company Entry"} />
      <form className={FormPageCss.formContainer} onSubmit={onSubmit}>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Name</p>
          <Input onBlur={(e) => setName(e.target.value)} />
        </div>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Email</p>
          <Input onBlur={(e) => setEmail(e.target.value)} />
        </div>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Phone</p>
          <Input onBlur={(e) => setPhone(e.target.value)} />
        </div>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Company</p>
          <Select options={mockData} onChange={setCompanyId} />
        </div>
        <div className={FormPageCss.submitContainer}>
          <Button type={"submit"} variant={ButtonVariant.Green} width={100}>
            Create
          </Button>
        </div>
      </form>
    </div>
  )
}
