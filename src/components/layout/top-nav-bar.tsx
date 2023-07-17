import Layout from "./layout.module.css"
import { useAuth0 } from "@auth0/auth0-react"

export const TopNavBar = () => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0()

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

  return (
    <header className={Layout.topNavContainer}>
      <div className={Layout.topNavTitle}>Job Tracker Application</div>
      <div className={Layout.topNavControl}>
        {isAuthenticated ? (
          <p>Welcome, {user?.name}</p>
        ) : (
          <button onClick={handleSignUp}>Log in</button>
        )}
      </div>
    </header>
  )
}
