import { Button, ButtonVariant, Input, Title } from "../../components/common"
import FormPageCss from "../../styles/common-css/form-page.module.css"
import { FormEventHandler } from "react"
import { useSkillsForm } from "../../components/skills/_hooks/use-skills-form.ts"
import { createSkill } from "../../api/skills.ts"
import { useNavigate } from "react-router-dom"

export const SkillsCreatePage = () => {
  const { name, setName, proficiency, setProficiency } = useSkillsForm({})
  const navigate = useNavigate()

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    await createSkill({ name, proficiency })
    navigate("/skills")
  }

  return (
    <div>
      <Title text={"Create A Skill Entry"} />
      <form className={FormPageCss.formContainer} onSubmit={onSubmit}>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Name</p>
          <Input onBlur={(e) => setName(e.target.value)} />
        </div>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Proficiency</p>
          <Input onBlur={(e) => setProficiency(e.target.value)} />
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
