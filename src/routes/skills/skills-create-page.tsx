import { Button, ButtonVariant, Input, Title } from "../../components/common"
import FormPageCss from "../../styles/common-css/form-page.module.css"
import { FormEventHandler } from "react"
import { useSkillsForm } from "../../components/skills/_hooks/use-skills-form.ts"

export const SkillsCreatePage = () => {
  const { name, setName, proficiency, setProficiency } = useSkillsForm({})

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    // TODO: send data to server
    console.log("name: ", name, "proficiency: ", proficiency)
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
