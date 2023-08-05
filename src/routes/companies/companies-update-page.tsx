import { useCompanyForm } from "../../components/companies/_hooks/use-company-form.ts"
import { FormEventHandler, useEffect, useState } from "react"
import { Button, ButtonVariant, Input, Title } from "../../components/common"
import FormPageCss from "../../styles/common-css/form-page.module.css"
import { useNavigate, useParams } from "react-router-dom"
import { getCompanyById, updateCompany } from "../../api/companies.ts"
import { Company } from "../../common/types/company.ts"

type Params = {
  companyId: string
}

export const CompaniesUpdatePage = () => {
  const { companyId } = useParams<Params>()
  const [initialValue, setInitialValue] = useState<Company | undefined>()

  const navigate = useNavigate()

  const fetchCompanyById = async (companyId: number) => {
    const company = await getCompanyById(companyId)
    setInitialValue(company)
  }

  useEffect(() => {
    if (companyId) {
      fetchCompanyById(+companyId)
    }
  }, [companyId])

  const {
    name,
    setName,
    headquarters,
    setHeadquarters,
    products,
    setProducts,
  } = useCompanyForm({
    initialValue,
  })

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    await updateCompany({
      name,
      headqtrs: headquarters,
      products,
      id: Number(companyId),
    })

    navigate("/companies")
  }

  return (
    <div>
      <Title text={"Update A Company Entry"} />
      <form className={FormPageCss.formContainer} onSubmit={onSubmit}>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Name</p>
          <Input initialValue={name} onBlur={(e) => setName(e.target.value)} />
        </div>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Headquarters</p>
          <Input
            initialValue={headquarters}
            onBlur={(e) => setHeadquarters(e.target.value)}
          />
        </div>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Products</p>
          <Input
            initialValue={products}
            onBlur={(e) => setProducts(e.target.value)}
          />
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
