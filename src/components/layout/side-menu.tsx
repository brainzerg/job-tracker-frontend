import { NavLink } from "react-router-dom"

import SideMenuCss from "./css/side-menu.module.css"
import { getClassName } from "../../common/utils/get-class-name.ts"

const menu = ["applications", "jobs", "contacts", "skills", "companies"]

export const SideMenu = () => {
  return (
    <ul className={SideMenuCss.container}>
      {menu.map((menuItem) => (
        <li key={menuItem} className={SideMenuCss.item}>
          <NavLink
            to={"/" + menuItem}
            className={({ isActive }) =>
              getClassName({
                [SideMenuCss.selected]: isActive,
              })
            }
          >
            {menuItem}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
