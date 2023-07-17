import { ReactNode } from "react"
import { TopNavBar } from "./top-nav-bar.tsx"
import { SideMenu } from "./side-menu.tsx"
import { useAuth0 } from "@auth0/auth0-react"

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const { isAuthenticated } = useAuth0()
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <TopNavBar />
      <div style={{ display: "flex" }}>
        {isAuthenticated && <SideMenu />}
        {children}
      </div>
    </div>
  )
}
