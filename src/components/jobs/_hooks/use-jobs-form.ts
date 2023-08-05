import { Job, JobForm } from "../../../common/types/jobs.ts"
import { useEffect, useState } from "react"

type Props = {
  initialValue?: Job
}

export const useJobsForm = ({ initialValue }: Props) => {
  const [jobForm, setJobForm] = useState<JobForm>({
    skills: "",
    position: "",
    location: "",
    companyId: 0,
    startdate: "",
    salary: "",
  })

  const setJobFormField = (
    key: keyof JobForm,
    value: JobForm[keyof JobForm]
  ) => {
    setJobForm({
      ...jobForm,
      [key]: value,
    })
  }

  useEffect(() => {
    if (initialValue) {
      const { id, startdate, companyId, position, salary, location, skills } =
        initialValue
      setJobForm({
        startdate,
        salary,
        location,
        skills,
        companyId: companyId,
        position,
        id,
      })
    }
  }, [initialValue])

  return { jobForm, setJobFormField }
}
