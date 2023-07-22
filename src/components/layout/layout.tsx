import { ReactNode } from "react"
import { TopNavBar } from "./top-nav-bar.tsx"
import { SideMenu } from "./side-menu.tsx"
import { useAuth0 } from "@auth0/auth0-react"

import LayoutCss from "./css/layout.module.css"

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const { isAuthenticated } = useAuth0()
  return (
    <div className={LayoutCss.page}>
      <TopNavBar />
      <div className={LayoutCss.contentContainer}>
        {isAuthenticated && <SideMenu />}
        <main className={LayoutCss.mainContainer}>{children}</main>
      </div>
    </div>
  )
}
