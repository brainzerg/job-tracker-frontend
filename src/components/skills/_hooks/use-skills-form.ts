import { useEffect, useState } from "react"
import { SkillForm } from "../../../common/types/skill.ts"

type Props = {
  initialValue?: SkillForm
}

export const useSkillsForm = ({ initialValue }: Props) => {
  const [name, setName] = useState<string>("")
  const [proficiency, setProficiency] = useState<string>("")

  useEffect(() => {
    if (initialValue) {
      setName(initialValue.name)
      setProficiency(initialValue.proficiency)
    }
  }, [initialValue])

  return {
    name,
    setName,
    proficiency,
    setProficiency,
  }
}
