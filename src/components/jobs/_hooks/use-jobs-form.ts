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
    companyId: "",
    startDate: "",
    salary: "",
    id: "",
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
      const { id, startDate, companyId, position, salary, location, skills } =
        initialValue
      setJobForm({
        startDate,
        salary,
        location,
        skills: skills.join(","),
        companyId: String(companyId),
        position,
        id: String(id),
      })
    }
  }, [initialValue])

  return { jobForm, setJobFormField }
}
