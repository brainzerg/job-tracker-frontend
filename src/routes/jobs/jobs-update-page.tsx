import { useEffect, useState } from "react"
import { Title } from "../../components/common"
import { useNavigate, useParams } from "react-router-dom"
import { Job, JobForm } from "../../common/types/jobs.ts"
import { JobsFormSection } from "../../components/jobs/jobs-form-section.tsx"
import { getJobById, updateJob } from "../../api/jobs.ts"

type Params = {
  jobId: string
}

export const JobsUpdatePage = () => {
  const [jobToUpdate, setJobToUpdate] = useState<Job | undefined>()

  const navigate = useNavigate()

  const { jobId } = useParams<Params>()

  const getJob = async () => {
    const job = await getJobById(Number(jobId))
    setJobToUpdate(job)
  }

  useEffect(() => {
    if (jobId) {
      getJob()
    }
  }, [jobId])

  const onSubmit = async (jobForm: JobForm) => {
    await updateJob(jobForm)
    navigate("/jobs")
  }

  return (
    <div>
      <Title text={"Update A Job Entry"} />
      {jobToUpdate && (
        <JobsFormSection onSubmit={onSubmit} initialValue={jobToUpdate} />
      )}
    </div>
  )
}
