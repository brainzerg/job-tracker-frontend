import { Title } from "../../components/common"
import { JobsFormSection } from "../../components/jobs/jobs-form-section.tsx"
import { JobForm } from "../../common/types/jobs.ts"

export const JobsCreatePage = () => {
  const onSubmit = (s: JobForm) => {
    // TODO: replace this with an API call
    console.log(s)
  }

  return (
    <div>
      <Title text={"Create A Job Entry"} />
      <JobsFormSection onSubmit={onSubmit} />
    </div>
  )
}
