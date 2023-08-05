import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {
  Application,
  ApplicationForm,
} from "../../common/types/applications.ts"
import { Title } from "../../components/common"
import { ApplicationsFormSection } from "../../components/applications/applications-form-section.tsx"
import {
  getApplicationById,
  updateApplication,
} from "../../api/applications.ts"

type Params = {
  applicationId: string
}

export const ApplicationsUpdatePage = () => {
  const [application, setApplication] = useState<Application | undefined>()
  const { applicationId } = useParams<Params>()
  const navigate = useNavigate()

  const fetchApplicationById = async () => {
    const theApplication = await getApplicationById(Number(applicationId))
    setApplication(theApplication)
  }

  useEffect(() => {
    if (applicationId) {
      fetchApplicationById()
    }
  }, [applicationId])

  const onSubmit = async (applicationForm: ApplicationForm) => {
    await updateApplication({ ...applicationForm, id: Number(applicationId) })
    navigate("/applications")
  }

  return (
    <div>
      <Title text={"Update An Application Entry"} />
      {application && (
        <ApplicationsFormSection
          onSubmit={onSubmit}
          initialValue={application}
        />
      )}
    </div>
  )
}
