import { useSkillsForm } from "../../components/skills/_hooks/use-skills-form.ts"
import { FormEventHandler, useEffect, useState } from "react"
import { Button, ButtonVariant, Input, Title } from "../../components/common"
import FormPageCss from "../../styles/common-css/form-page.module.css"
import { useNavigate, useParams } from "react-router-dom"
import { getSkillById, updateSkill } from "../../api/skills.ts"
import { Skill } from "../../common/types/skill.ts"

type Params = {
  skillId: string
}

export const SkillsUpdatePage = () => {
  const { skillId } = useParams<Params>()
  const [skillToEdit, setSkillToEdit] = useState<Skill | undefined>()

  const navigate = useNavigate()

  useEffect(() => {
    if (skillId) {
      async function fetchSkill() {
        const skill = await getSkillById(Number(skillId))
        setSkillToEdit(skill)
      }

      fetchSkill()
    }
  }, [skillId])

  const { name, setName, proficiency, setProficiency } = useSkillsForm({
    initialValue: skillToEdit,
  })

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    console.log("skillid:", skillId)

    await updateSkill({ skillId: Number(skillId), name, proficiency })
    navigate("/skills")
  }

  return (
    <div>
      <Title text={"Update A Skill Entry"} />
      <form className={FormPageCss.formContainer} onSubmit={onSubmit}>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Name</p>
          <Input initialValue={name} onBlur={(e) => setName(e.target.value)} />
        </div>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Proficiency</p>
          <Input
            initialValue={proficiency}
            onBlur={(e) => setProficiency(e.target.value)}
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
