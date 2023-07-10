import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { Layout } from "./components/layout/layout.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
)
