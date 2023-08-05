import { Title } from "../../components/common"
import { JobsFormSection } from "../../components/jobs/jobs-form-section.tsx"
import { JobForm } from "../../common/types/jobs.ts"
import { createJob } from "../../api/jobs.ts"
import { useNavigate } from "react-router-dom"

export const JobsCreatePage = () => {
  const navigate = useNavigate()

  const onSubmit = async (jobForm: JobForm) => {
    await createJob(jobForm)
    navigate("/jobs")
  }

  return (
    <div>
      <Title text={"Create A Job Entry"} />
      <JobsFormSection onSubmit={onSubmit} />
    </div>
  )
}
