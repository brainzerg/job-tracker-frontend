import { useCompanyForm } from "../../components/companies/_hooks/use-company-form.ts"
import { FormEventHandler, useEffect } from "react"
import { Button, ButtonVariant, Input, Title } from "../../components/common"
import FormPageCss from "../../styles/common-css/form-page.module.css"
import { useParams } from "react-router-dom"

type Params = {
  companyId: string
}

export const CompaniesUpdatePage = () => {
  const { companyId } = useParams<Params>()

  useEffect(() => {
    if (companyId) {
      // TODO: fetch company info
      console.log("companyId:", companyId)
    }
  }, [companyId])

  const { name, setName, headquarters, setHeadquarters } = useCompanyForm({})

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    // TODO: send data to server
    console.log("name: ", name, "headquarters: ", headquarters)
  }

  return (
    <div>
      <Title text={"Update A Company Entry"} />
      <form className={FormPageCss.formContainer} onSubmit={onSubmit}>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Name</p>
          <Input onBlur={(e) => setName(e.target.value)} />
        </div>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Headquarters</p>
          <Input onBlur={(e) => setHeadquarters(e.target.value)} />
        </div>
        <div className={FormPageCss.submitContainer}>
          <Button type={"submit"} variant={ButtonVariant.Green} width={100}>
            Update
          </Button>
        </div>
      </form>
    </div>
  )
}
