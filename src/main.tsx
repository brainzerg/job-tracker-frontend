import ReactDOM from "react-dom/client"
import "./styles/global.css"
import App from "./App.tsx"
import { Layout } from "./components/layout/layout.tsx"
import { BrowserRouter } from "react-router-dom"
import { AuthProviderWithNavigate } from "./auth/auth-provider-with-navigate.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProviderWithNavigate>
      <Layout>
        <App />
      </Layout>
    </AuthProviderWithNavigate>
  </BrowserRouter>
)
