import { Title } from "../../components/common"
import { ApplicationsFormSection } from "../../components/applications/applications-form-section.tsx"
import { ApplicationForm } from "../../common/types/applications.ts"
import { createApplication } from "../../api/applications.ts"
import { useNavigate } from "react-router-dom"

export const ApplicationsCreatePage = () => {
  const navigate = useNavigate()

  const onSubmit = async (applicationForm: ApplicationForm) => {
    await createApplication(applicationForm)
    navigate("/applications")
  }

  return (
    <div>
      <Title text={"Create an application"} />
      <ApplicationsFormSection onSubmit={onSubmit} />
    </div>
  )
}
