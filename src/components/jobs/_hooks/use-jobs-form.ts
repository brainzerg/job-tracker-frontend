import { Job } from "../../../common/types/jobs.ts"
import { useEffect, useState } from "react"

type Props = {
  initialValue?: Job
}

export const useJobsForm = ({ initialValue }: Props) => {
  const [startDate, setStartDate] = useState<string>("")
  const [companyId, setCompanyId] = useState<string>("")
  const [position, setPosition] = useState<string>("")
  const [salary, setSalary] = useState<string>("")
  const [location, setLocation] = useState<string>("")
  const [skills, setSkills] = useState<string>("")

  useEffect(() => {
    if (initialValue) {
      const { startDate, companyId, position, salary, location, skills } =
        initialValue
      setSalary(salary)
      setStartDate(startDate)
      setCompanyId(String(companyId))
      setPosition(position)
      setLocation(location)
      setSkills(skills.join(","))
    }
  }, [initialValue])

  return {
    startDate,
    companyId,
    position,
    salary,
    location,
    skills,
    setSkills,
    setStartDate,
    setPosition,
    setCompanyId,
    setSalary,
    setLocation,
  }
}
