import { ComponentType } from "react"
import { withAuthenticationRequired } from "@auth0/auth0-react"

export const AuthenticationGuard = ({
  component,
}: {
  component: ComponentType
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>loading</div>,
  })
  return <Component />
}
