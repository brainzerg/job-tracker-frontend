import { Button, ButtonVariant, Input, Title } from "../../components/common"
import CompanyCreatePageCss from "./css/companies-create.module.css"
import { FormEventHandler } from "react"
import { useCompanyForm } from "../../components/companies/_hooks/use-company-form.ts"

export const CompaniesCreatePage = () => {
  const { name, setName, headquarters, setHeadquarters } = useCompanyForm({})

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    // TODO: send data to server
    console.log("name: ", name, "headquarters: ", headquarters)
  }

  return (
    <div>
      <Title text={"Create A Company Entry"} />
      <form className={CompanyCreatePageCss.formContainer} onSubmit={onSubmit}>
        <div className={CompanyCreatePageCss.inputRow}>
          <p className={CompanyCreatePageCss.inputRowLabel}>Name</p>
          <Input onBlur={(e) => setName(e.target.value)} />
        </div>
        <div className={CompanyCreatePageCss.inputRow}>
          <p className={CompanyCreatePageCss.inputRowLabel}>Headquarters</p>
          <Input onBlur={(e) => setHeadquarters(e.target.value)} />
        </div>
        <div className={CompanyCreatePageCss.submitContainer}>
          <Button type={"submit"} variant={ButtonVariant.Green} width={100}>
            Create
          </Button>
        </div>
      </form>
    </div>
  )
}
