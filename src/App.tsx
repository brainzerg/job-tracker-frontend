import { useAuth0 } from "@auth0/auth0-react"
import { Route, Routes } from "react-router-dom"
import { AuthenticationGuard } from "./auth/authentication-guard.tsx"
import { ApplicationsPage } from "./routes/applications/applications-page.tsx"
import { HomePage } from "./routes/home-page.tsx"
import { ErrorPage } from "./error-page.tsx"
import { CallbackPage } from "./routes/callback-page.tsx"
import { CompaniesPage } from "./routes/companies/companies-page.tsx"
import { CompaniesCreatePage } from "./routes/companies/companies-create-page.tsx"
import { CompaniesUpdatePage } from "./routes/companies/companies-update-page.tsx"
import { ContactsCreatePage } from "./routes/contacts/contacts-create-page.tsx"
import { ContactsUpdatePage } from "./routes/contacts/contacts-update-page.tsx"
import { ContactsPage } from "./routes/contacts/contacts-page.tsx"
import { JobsPage } from "./routes/jobs/jobs-page.tsx"
import { JobsCreatePage } from "./routes/jobs/jobs-create-page.tsx"
import { JobsUpdatePage } from "./routes/jobs/jobs-update-page.tsx"
import { ApplicationsCreatePage } from "./routes/applications/applications-create-page.tsx"

function App() {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route
        path={"/applications"}
        element={<AuthenticationGuard component={ApplicationsPage} />}
      />
      <Route
        path={"/applications/new"}
        element={<AuthenticationGuard component={ApplicationsCreatePage} />}
      />
      <Route
        path={"/companies/new"}
        element={<AuthenticationGuard component={CompaniesCreatePage} />}
      />
      <Route
        path={"/companies/:companyId"}
        element={<AuthenticationGuard component={CompaniesUpdatePage} />}
      />
      <Route
        path={"/companies"}
        element={<AuthenticationGuard component={CompaniesPage} />}
      />
      <Route
        path={"/contacts/new"}
        element={<AuthenticationGuard component={ContactsCreatePage} />}
      />
      <Route
        path={"/contacts/:contactsId"}
        element={<AuthenticationGuard component={ContactsUpdatePage} />}
      />
      <Route
        path={"/contacts"}
        element={<AuthenticationGuard component={ContactsPage} />}
      />
      <Route
        path={"/jobs/new"}
        element={<AuthenticationGuard component={JobsCreatePage} />}
      />
      <Route
        path={"/jobs/:jobId"}
        element={<AuthenticationGuard component={JobsUpdatePage} />}
      />
      <Route
        path={"/jobs"}
        element={<AuthenticationGuard component={JobsPage} />}
      />
      <Route path={"/callback"} element={<CallbackPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
