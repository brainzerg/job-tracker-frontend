import { useEffect, useState } from "react"
import { CompanyForm } from "../../../common/types/company.ts"

type Props = {
  initialValue?: CompanyForm
}

export const useCompanyForm = ({ initialValue }: Props) => {
  const [name, setName] = useState<string>("")
  const [headquarters, setHeadquarters] = useState<string>("")

  useEffect(() => {
    if (initialValue) {
      setName(initialValue.name)
      setHeadquarters(initialValue.headquarters)
    }
  }, [initialValue])

  return {
    name,
    setName,
    headquarters,
    setHeadquarters,
  }
}
