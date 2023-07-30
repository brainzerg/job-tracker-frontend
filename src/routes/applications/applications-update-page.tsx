import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {
  Application,
  ApplicationForm,
} from "../../common/types/applications.ts"
import { Title } from "../../components/common"
import { ApplicationsFormSection } from "../../components/applications/applications-form-section.tsx"

type Params = {
  applicationId: string
}

const mockApplication: Application = {
  id: 1,
  companyId: 2,
  jobId: 2,
  startDate: "2023-09-10",
  status: "SUBMITTED",
  applyDate: "2023-08-02",
  position: "SE 2",
  companyName: "Tektronix",
}

export const ApplicationsUpdatePage = () => {
  const [application, setApplication] = useState<Application | undefined>()
  const {} = useParams<Params>()

  useEffect(() => {
    async function getApplicationById() {
      // TODO: replace with API call to get application by id
      const data = await Promise.resolve(mockApplication)
      setApplication(data)
    }

    getApplicationById()
  }, [])

  const onSubmit = (applicationForm: ApplicationForm) => {
    // TODO: sent PUT request to the server to update application
    console.log(applicationForm)
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
