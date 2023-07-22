import { useCompanyForm } from "../../components/companies/_hooks/use-company-form.ts"
import { FormEventHandler, useEffect } from "react"
import { Button, ButtonVariant, Input, Title } from "../../components/common"
import CompanyCreatePageCss from "./css/companies-create.module.css"
import { useParams } from "react-router-dom"

type Params = {
  companyId: string
}

export const CompaniesUpdatePage = () => {
  const { name, setName, headquarters, setHeadquarters } = useCompanyForm({})
  const { companyId } = useParams<Params>()

  useEffect(() => {
    if (companyId) {
      // TODO: fetch company info
      console.log("companyId:", companyId)
    }
  }, [companyId])

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    // TODO: send data to server
    console.log("name: ", name, "headquarters: ", headquarters)
  }

  return (
    <div>
      <Title text={"Update A Company Entry"} />
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
            Update
          </Button>
        </div>
      </form>
    </div>
  )
}
