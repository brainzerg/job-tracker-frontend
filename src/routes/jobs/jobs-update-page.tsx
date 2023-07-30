import { FormEventHandler, useEffect, useState } from "react"
import {
  Button,
  ButtonVariant,
  Input,
  Select,
  SelectOption,
  Title,
} from "../../components/common"
import FormPageCss from "../../styles/common-css/form-page.module.css"
import { useParams } from "react-router-dom"
import { useJobsForm } from "../../components/jobs/_hooks/use-jobs-form.ts"
import { Job } from "../../common/types/jobs.ts"
import { Company } from "../../common/types/company.ts"

type Params = {
  jobId: string
}

// TODO: replace this with an api call
const mockCompanyList: Company[] = [
  { id: 1, name: "Walmart", headquarters: "Portland, Oregon" },
  { id: 2, name: "Nike", headquarters: "Portland, Oregon" },
  { id: 3, name: "Tektronix", headquarters: "Portland, Oregon" },
  { id: 4, name: "Garmin", headquarters: "Portland, Oregon" },
  { id: 5, name: "HP", headquarters: "Portland, Oregon" },
]

export const JobsUpdatePage = () => {
  const [updateJob, setUpdateJob] = useState<Job | undefined>()
  const { jobId } = useParams<Params>()
  const [companyList, setCompanyList] = useState<Company[]>([])

  useEffect(() => {
    async function getCompanyList() {
      const data = await Promise.resolve(mockCompanyList)
      setCompanyList(data)
    }

    getCompanyList()
  }, [])

  useEffect(() => {
    if (jobId) {
      // TODO: fetch company info and setUpdateJob
      console.log("jobId:", jobId)
    }
  }, [jobId])

  const {
    skills,
    setSkills,
    companyId,
    setCompanyId,
    salary,
    setSalary,
    position,
    setPosition,
    location,
    setLocation,
    startDate,
    setStartDate,
  } = useJobsForm({ initialValue: updateJob })

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    // TODO: send update data to server
    console.log({ skills, salary, position, location, startDate, companyId })
  }

  const companyOptionList: SelectOption[] = companyList.map((company) => ({
    label: company.name,
    value: String(company.id),
  }))

  return (
    <div>
      <Title text={"Update A Job Entry"} />
      <form className={FormPageCss.formContainer} onSubmit={onSubmit}>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Start Date</p>
          <Input onBlur={(e) => setStartDate(e.target.value)} />
        </div>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Company</p>
          <Select
            options={companyOptionList}
            onChange={setCompanyId}
            value={companyId}
          />
        </div>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Position</p>
          <Input onBlur={(e) => setPosition(e.target.value)} />
        </div>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Salary</p>
          <Input onBlur={(e) => setSalary(e.target.value)} />
        </div>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Location</p>
          <Input onBlur={(e) => setLocation(e.target.value)} />
        </div>
        <div className={FormPageCss.inputRow}>
          <p className={FormPageCss.inputRowLabel}>Skills</p>
          <Input onBlur={(e) => setSkills(e.target.value)} />
        </div>
        <div className={FormPageCss.submitContainer}>
          <Button type={"submit"} variant={ButtonVariant.Green} width={100}>
            Create
          </Button>
        </div>
      </form>
    </div>
  )
}
