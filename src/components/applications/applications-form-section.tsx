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
import { getCompaniesList } from "../../api/companies.ts"
import { getJobsFromCompany } from "../../api/jobs.ts"

type Props = {
  onSubmit: (applicationForm: ApplicationForm) => void
  initialValue?: Application
}

export const ApplicationsFormSection = ({ onSubmit, initialValue }: Props) => {
  const [companyList, setCompanyList] = useState<Company[]>([])
  const [jobList, setJobList] = useState<Job[]>([])

  const { setApplicationFormField, applicationForm } = useApplicationsForm({
    initialValue,
  })

  const { applydate, companyId, jobId, status } = applicationForm

  const isUpdate = !!initialValue

  const initCompanyList = async () => {
    const data = await getCompaniesList()
    setCompanyList(data)
    setApplicationFormField("companyId", data[0].id)
  }

  useEffect(() => {
    if (!isUpdate) {
      initCompanyList()
    }
  }, [])

  const initJobList = async () => {
    if (companyId) {
      const data = await getJobsFromCompany(companyId)
      setJobList(data)
      setApplicationFormField("jobId", data[0]?.id || 0)
    }
  }

  useEffect(() => {
    if (companyId) {
      initJobList()
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
        {isUpdate && <Input value={initialValue.companyName} disabled />}
        {!isUpdate && (
          <Select
            options={companyOptionList}
            onChange={(theCompanyId) =>
              setApplicationFormField("companyId", +theCompanyId)
            }
            value={companyId}
          />
        )}
      </div>
      <div className={FormPageCss.inputRow}>
        <p className={FormPageCss.inputRowLabel}>Job</p>
        {isUpdate && <Input value={initialValue.position} disabled />}
        {!isUpdate && (
          <Select
            options={jobOptionList}
            onChange={(theJobId) => setApplicationFormField("jobId", +theJobId)}
            value={jobId}
          />
        )}
      </div>
      <div className={FormPageCss.inputRow}>
        <p className={FormPageCss.inputRowLabel}>Apply Date</p>
        <Input
          initialValue={applydate}
          onBlur={(e) => setApplicationFormField("applydate", e.target.value)}
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
