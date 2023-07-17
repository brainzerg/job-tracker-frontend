import Layout from "./layout.module.css"

export const SideMenu = () => {
  return (
    <div className={Layout.sideMenuContainer}>
      <div className={Layout.sideMenuLink}>Applications</div>
      <div className={Layout.sideMenuLink}>Jobs</div>
      <div className={Layout.sideMenuLink}>Contacts</div>
      <div className={Layout.sideMenuLink}>Skills</div>
      <div className={Layout.sideMenuLink}>Companies</div>
    </div>
  )
}
