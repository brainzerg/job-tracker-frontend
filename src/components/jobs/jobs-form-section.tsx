import FormPageCss from "../../styles/common-css/form-page.module.css"
import { Button, ButtonVariant, Input, Select, SelectOption } from "../common"
import { Job, JobForm } from "../../common/types/jobs.ts"
import { FormEventHandler, useEffect, useState } from "react"
import { Company } from "../../common/types/company.ts"
import { useJobsForm } from "./_hooks/use-jobs-form.ts"
import { getCompaniesList } from "../../api/companies.ts"

type Props = {
  initialValue?: Job
  onSubmit: (jobForm: JobForm) => void
}

export const JobsFormSection = ({ onSubmit, initialValue }: Props) => {
  const [companyList, setCompanyList] = useState<Company[]>([])

  const isUpdate = !!initialValue

  const {
    setJobFormField,
    jobForm: { id, skills, position, location, companyId, salary, startdate },
  } = useJobsForm({ initialValue })

  async function fetchCompaniesList() {
    const data = await getCompaniesList()
    setCompanyList(data)
    setJobFormField("companyId", data[0].id)
  }

  useEffect(() => {
    if (!isUpdate) {
      fetchCompaniesList()
    }
  }, [])

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onSubmit({
      salary,
      location,
      companyId,
      position,
      id,
      skills,
      startdate,
    })
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
          initialValue={startdate}
          onBlur={(e) => setJobFormField("startdate", e.target.value)}
        />
      </div>
      <div className={FormPageCss.inputRow}>
        <p className={FormPageCss.inputRowLabel}>Company</p>
        {isUpdate && <Input value={initialValue.companyName} disabled />}
        {!isUpdate && (
          <Select
            disabled={!!initialValue}
            options={companyOptionList}
            onChange={(theCompanyId) =>
              setJobFormField("companyId", +theCompanyId)
            }
            value={companyId}
          />
        )}
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
