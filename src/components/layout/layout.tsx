import { ReactNode } from "react"
import { TopNavBar } from "./top-nav-bar.tsx"
import { SideMenu } from "./side-menu.tsx"

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <TopNavBar />
      <div style={{ display: "flex" }}>
        <SideMenu />
        {children}
      </div>
    </div>
  )
}
