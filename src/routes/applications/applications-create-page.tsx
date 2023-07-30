import { Title } from "../../components/common"
import { ApplicationsFormSection } from "../../components/applications/applications-form-section.tsx"
import { ApplicationForm } from "../../common/types/applications.ts"

export const ApplicationsCreatePage = () => {
  const onSubmit = (applicationForm: ApplicationForm) => {
    // TODO: post call to the server here
    console.log(applicationForm)
  }

  return (
    <div>
      <Title text={"Create an application"} />
      <ApplicationsFormSection onSubmit={onSubmit} />
    </div>
  )
}
