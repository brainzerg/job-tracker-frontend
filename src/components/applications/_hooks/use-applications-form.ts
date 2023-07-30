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
    companyId: "",
    jobId: "",
    applyDate: "",
    status: "",
  })

  const setApplicationFormField = (
    key: keyof ApplicationForm,
    value: ApplicationForm[keyof ApplicationForm]
  ) => {
    setApplicationForm({
      ...applicationForm,
      [key]: value,
    })
  }

  useEffect(() => {
    if (initialValue) {
      const { applyDate, status, companyId } = initialValue
      setApplicationFormField("applyDate", applyDate)
      setApplicationFormField("status", status)
      setApplicationFormField("companyId", companyId)
    }
  }, [initialValue])

  return {
    applicationForm,
    setApplicationFormField,
  }
}
