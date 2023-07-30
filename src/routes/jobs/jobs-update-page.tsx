import { useEffect, useState } from "react"
import { Title } from "../../components/common"
import { useParams } from "react-router-dom"
import { Job, JobForm } from "../../common/types/jobs.ts"
import { JobsFormSection } from "../../components/jobs/jobs-form-section.tsx"

type Params = {
  jobId: string
}

const mockData = {
  id: 1,
  salary: "$10,000",
  location: "Alaska",
  position: "SE 1",
  companyId: 2,
  companyName: "Alaska State",
  startDate: "2023-09-01",
  skills: ["C", "C++"],
}

export const JobsUpdatePage = () => {
  const [updateJob, setUpdateJob] = useState<Job | undefined>()
  const { jobId } = useParams<Params>()

  useEffect(() => {
    if (jobId) {
      // TODO: fetch company info and setUpdateJob
      console.log("jobId:", jobId)
      setTimeout(() => {
        setUpdateJob(mockData)
      }, 1000)
    }
  }, [jobId])

  const onSubmit = (s: JobForm) => {
    // TODO: send update data to server
    console.log(s)
  }

  return (
    <div>
      <Title text={"Update A Job Entry"} />
      {updateJob && (
        <JobsFormSection onSubmit={onSubmit} initialValue={updateJob} />
      )}
    </div>
  )
}
