import { useEffect, useState } from "react"
import { CompanyForm } from "../../../common/types/company.ts"

type Props = {
  initialValue?: CompanyForm
}

export const useCompanyForm = ({ initialValue }: Props) => {
  const [name, setName] = useState<string>("")
  const [headquarters, setHeadquarters] = useState<string>("")
  const [products, setProducts] = useState<string>("")

  useEffect(() => {
    if (initialValue) {
      setName(initialValue.name)
      setHeadquarters(initialValue.headqtrs)
      setProducts(initialValue.products)
    }
  }, [initialValue])

  return {
    name,
    setName,
    headquarters,
    setHeadquarters,
    products,
    setProducts,
  }
}
