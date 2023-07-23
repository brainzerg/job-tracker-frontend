import { Button } from "../../components/common"
import { NavLink } from "react-router-dom"

export const ContactsPage = () => {
  return (
    <div>
      contacts list page
      <NavLink to={"/contacts/new"}>
        <Button>Create</Button>
      </NavLink>
    </div>
  )
}
