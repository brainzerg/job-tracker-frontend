import { useAuth0 } from "@auth0/auth0-react"
import { Route, Routes } from "react-router-dom"
import { AuthenticationGuard } from "./auth/authentication-guard.tsx"
import { ApplicationsPage } from "./routes/applications/applications-page.tsx"
import { HomePage } from "./routes/home-page.tsx"
import { ErrorPage } from "./error-page.tsx"
import { CallbackPage } from "./routes/callback-page.tsx"
import { CompaniesPage } from "./routes/companies/companies-page.tsx"
import { CompaniesCreatePage } from "./routes/companies/companies-create-page.tsx"

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
        path={"/companies/new"}
        element={<AuthenticationGuard component={CompaniesCreatePage} />}
      />
      <Route
        path={"/companies"}
        element={<AuthenticationGuard component={CompaniesPage} />}
      />
      <Route path={"/callback"} element={<CallbackPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
