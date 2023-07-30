import FormPageCss from "../../styles/common-css/form-page.module.css"
import { Button, ButtonVariant, Input, Select, SelectOption } from "../common"
import { Job, JobForm } from "../../common/types/jobs.ts"
import { FormEventHandler, useEffect, useState } from "react"
import { Company } from "../../common/types/company.ts"
import { useJobsForm } from "./_hooks/use-jobs-form.ts"

type Props = {
  initialValue?: Job
  onSubmit: (jobForm: JobForm) => void
}

// TODO: replace this with an api call
const mockCompanyList: Company[] = [
  { id: 1, name: "Walmart", headquarters: "Portland, Oregon" },
  { id: 2, name: "Nike", headquarters: "Portland, Oregon" },
  { id: 3, name: "Tektronix", headquarters: "Portland, Oregon" },
  { id: 4, name: "Garmin", headquarters: "Portland, Oregon" },
  { id: 5, name: "HP", headquarters: "Portland, Oregon" },
]

export const JobsFormSection = ({ onSubmit, initialValue }: Props) => {
  const [companyList, setCompanyList] = useState<Company[]>([])

  const {
    setJobFormField,
    jobForm: { id, skills, position, location, companyId, salary, startDate },
  } = useJobsForm({ initialValue })

  useEffect(() => {
    async function getCompanyList() {
      const data = await Promise.resolve(mockCompanyList)
      setCompanyList(data)
    }

    getCompanyList()
  }, [])

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onSubmit({ salary, location, companyId, position, id, skills, startDate })
  }

  const companyOptionList: SelectOption[] = companyList.map((company) => ({
    label: company.name,
    value: String(company.id),
  }))

  return (
    <form className={FormPageCss.formContainer} onSubmit={handleSubmit}>
      <div className={FormPageCss.inputRow}>
        <p className={FormPageCss.inputRowLabel}>Start Date</p>
        <Input
          initialValue={startDate}
          onBlur={(e) => setJobFormField("startDate", e.target.value)}
        />
      </div>
      <div className={FormPageCss.inputRow}>
        <p className={FormPageCss.inputRowLabel}>Company</p>
        <Select
          options={companyOptionList}
          onChange={(theCompanyId) =>
            setJobFormField("companyId", theCompanyId)
          }
          value={companyId}
        />
      </div>
      <div className={FormPageCss.inputRow}>
        <p className={FormPageCss.inputRowLabel}>Position</p>
        <Input
          initialValue={position}
          onBlur={(e) => setJobFormField("position", e.target.value)}
        />
      </div>
      <div className={FormPageCss.inputRow}>
        <p className={FormPageCss.inputRowLabel}>Salary</p>
        <Input
          initialValue={salary}
          onBlur={(e) => setJobFormField("salary", e.target.value)}
        />
      </div>
      <div className={FormPageCss.inputRow}>
        <p className={FormPageCss.inputRowLabel}>Location</p>
        <Input
          initialValue={location}
          onBlur={(e) => setJobFormField("location", e.target.value)}
        />
      </div>
      <div className={FormPageCss.inputRow}>
        <p className={FormPageCss.inputRowLabel}>Skills</p>
        <Input
          initialValue={skills}
          onBlur={(e) => setJobFormField("skills", e.target.value)}
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
