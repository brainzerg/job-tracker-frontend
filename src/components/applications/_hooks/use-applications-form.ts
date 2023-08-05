import {
  Application,
  ApplicationForm,
} from "../../../common/types/applications.ts"
import { useEffect, useState } from "react"

type Props = {
  initialValue?: Application
}

export const useApplicationsForm = ({ initialValue }: Props) => {
  const [applicationForm, setApplicationForm] = useState<ApplicationForm>({
    companyId: 0,
    jobId: 0,
    applydate: "",
    status: "",
  })

  const setApplicationFormField = (
    key: keyof ApplicationForm,
    value: ApplicationForm[keyof ApplicationForm]
  ) => {
    setApplicationForm((prev) => {
      return { ...prev, [key]: value }
    })
  }

  useEffect(() => {
    if (initialValue) {
      const { applydate, status, jobId, companyId } = initialValue
      setApplicationFormField("jobId", jobId)
      setApplicationFormField("applydate", applydate)
      setApplicationFormField("status", status)
      setApplicationFormField("companyId", companyId)
    }
  }, [])

  return {
    applicationForm,
    setApplicationFormField,
  }
}
