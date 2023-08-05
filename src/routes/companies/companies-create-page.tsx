import { Button, ButtonVariant, Input, Title } from "../../components/common"
import FormPageCss from "../../styles/common-css/form-page.module.css"
import { FormEventHandler } from "react"
import { useCompanyForm } from "../../components/companies/_hooks/use-company-form.ts"
import { createCompany } from "../../api/companies.ts"
import { useNavigate } from "react-router-dom"

export const CompaniesCreatePage = () => {
  const {
    name,
    setName,
    headquarters,
    setHeadquarters,
    products,
    setProducts,
  } = useCompanyForm({})
  const navigate = useNavigate()

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    await createCompany({ name, products, headqtrs: headquarters })
    navigate("/companies")
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
          <p className={FormPageCss.inputRowLabel}>Headquarters</p>
          <Input onBlur={(e) => setHeadquarters(e.target.value)} />
        </div>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Products</p>
          <Input onBlur={(e) => setProducts(e.target.value)} />
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
