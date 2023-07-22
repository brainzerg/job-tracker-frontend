import { useAuth0 } from "@auth0/auth0-react"
import TopNavCss from "./css/top-nav-bar.module.css"
import { Button } from "../common/Button.tsx"

export const TopNavBar = () => {
  const { isAuthenticated, user, logout, loginWithRedirect } = useAuth0()

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/applications",
      },
      authorizationParams: {
        prompt: "login",
        screen_hint: "signup",
        scope: "openid email profile",
      },
    })
  }

  const handleLogout = async () => {
    await logout()
  }

  return (
    <header className={TopNavCss.header}>
      <section className={TopNavCss.headerContent}>
        <h1 className={TopNavCss.title}>Job Tracker</h1>
        <div className={TopNavCss.userControlContainer}>
          {isAuthenticated ? (
            <>
              <p className={TopNavCss.userControlWelcome}>
                Welcome, {user?.name}
              </p>
              <Button onClick={handleLogout}>Log out</Button>
            </>
          ) : (
            <Button onClick={handleSignUp}>Log in</Button>
          )}
        </div>
      </section>
    </header>
  )
}
