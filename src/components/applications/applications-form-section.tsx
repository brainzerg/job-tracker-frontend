import FormPageCss from "../../styles/common-css/form-page.module.css"
import { Button, ButtonVariant, Input, Select, SelectOption } from "../common"
import { FormEventHandler, useEffect, useState } from "react"
import { Company } from "../../common/types/company.ts"
import { Job } from "../../common/types/jobs.ts"
import {
  Application,
  ApplicationForm,
} from "../../common/types/applications.ts"
import { useApplicationsForm } from "./_hooks/use-applications-form.ts"

type Props = {
  onSubmit: (applicationForm: ApplicationForm) => void
  initialValue?: Application
}

// TODO: replace this with an api call
const mockCompanyList: Company[] = [
  { id: 1, name: "Walmart", headquarters: "Portland, Oregon" },
  { id: 2, name: "Nike", headquarters: "Portland, Oregon" },
  { id: 3, name: "Tektronix", headquarters: "Portland, Oregon" },
  { id: 4, name: "Garmin", headquarters: "Portland, Oregon" },
  { id: 5, name: "HP", headquarters: "Portland, Oregon" },
]

const mockJobList: Job[] = [
  {
    id: 1,
    skills: ["C++", "Java"],
    position: "SE 1",
    startDate: "2023-09-01",
    companyId: 3,
    location: "Portland, Oregon",
    salary: "$80,000",
    companyName: "Nike",
  },
  {
    id: 2,
    skills: ["Python", "Java"],
    position: "SE II",
    startDate: "2023-09-02",
    companyId: 2,
    location: "Portland, Oregon",
    salary: "$100,000",
    companyName: "Walmart",
  },
  {
    id: 3,
    skills: ["Javascript", "React"],
    position: "SE 3",
    startDate: "2023-10-01",
    companyId: 2,
    location: "Seattle, Washington",
    salary: "$120,000",
    companyName: "Microsoft",
  },
]

export const ApplicationsFormSection = ({ onSubmit, initialValue }: Props) => {
  const [companyList, setCompanyList] = useState<Company[]>([])
  const [jobList, setJobList] = useState<Job[]>([])

  const { setApplicationFormField, applicationForm } = useApplicationsForm({
    initialValue,
  })

  const { applyDate, companyId, jobId, status } = applicationForm

  useEffect(() => {
    async function getCompanyList() {
      const data = await Promise.resolve(mockCompanyList)
      setCompanyList(data)
    }
    getCompanyList()
  }, [])

  useEffect(() => {
    if (companyId) {
      async function getJobList() {
        setTimeout(async () => {
          const data = await Promise.resolve(
            mockJobList.filter(
              (mockJob) => String(mockJob.companyId) === companyId
            )
          )
          setJobList(data)
        }, 500)
      }

      getJobList()
    }
  }, [companyId])

  const companyOptionList: SelectOption[] = companyList.map((company) => ({
    label: company.name,
    value: String(company.id),
  }))

  const jobOptionList: SelectOption[] = jobList.map((job) => ({
    label: job.position,
    value: String(job.id),
  }))

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onSubmit(applicationForm)
  }

  return (
    <form className={FormPageCss.formContainer} onSubmit={handleSubmit}>
      <div className={FormPageCss.inputRow}>
        <p className={FormPageCss.inputRowLabel}>Company</p>
        <Select
          options={companyOptionList}
          onChange={(theCompanyId) =>
            setApplicationFormField("companyId", theCompanyId)
          }
          value={companyId}
        />
      </div>
      <div className={FormPageCss.inputRow}>
        <p className={FormPageCss.inputRowLabel}>Job</p>
        <Select
          options={jobOptionList}
          onChange={(theJobId) => setApplicationFormField("jobId", theJobId)}
          value={jobId}
        />
      </div>
      <div className={FormPageCss.inputRow}>
        <p className={FormPageCss.inputRowLabel}>Apply Date</p>
        <Input
          initialValue={applyDate}
          onBlur={(e) => setApplicationFormField("applyDate", e.target.value)}
        />
      </div>
      <div className={FormPageCss.inputRow}>
        <p className={FormPageCss.inputRowLabel}>Status</p>
        <Input
          initialValue={status}
          onBlur={(e) => setApplicationFormField("status", e.target.value)}
        />
      </div>
      <div className={FormPageCss.submitContainer}>
        <Button type={"submit"} variant={ButtonVariant.Green} width={100}>
          Create
        </Button>
      </div>
    </form>
  )
}
