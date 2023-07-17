import { useAuth0 } from "@auth0/auth0-react"

export const CallbackPage = () => {
  const { error } = useAuth0()

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.name}</p>
        <p>Message: {error.message}</p>
        <p>{error.stack}</p>
      </div>
    )
  }

  return <div>Logging in...</div>
}
