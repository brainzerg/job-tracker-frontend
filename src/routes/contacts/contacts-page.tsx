import {
  Button,
  ButtonVariant,
  Table,
  TableContainer,
  Td,
  Th,
  Thead,
  Title,
  Tr,
} from "../../components/common"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import TablePageCss from "../../styles/common-css/table-page.module.css"
import { Contacts } from "../../common/types/contacts.ts"
import { deleteContact, getContactsList } from "../../api/contacts.ts"

export const ContactsPage = () => {
  const [contacts, setContacts] = useState<Contacts[]>([])

  const fetchContacts = async () => {
    const data = await getContactsList()
    setContacts(data)
  }

  const onClickDelete = async (contactId: number) => {
    await deleteContact(contactId)
    fetchContacts()
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  return (
    <div>
      <Title text={"Contacts"} />
      <div className={TablePageCss.tableHeader}>
        <NavLink to={"/contacts/new"}>
          <Button variant={ButtonVariant.Green}>create</Button>
        </NavLink>
      </div>
      <TableContainer>
        <Table>
          <Thead>
            <Tr textAlign={"center"}>
              <Th>name</Th>
              <Th>email</Th>
              <Th>phone</Th>
              <Th>company</Th>
              <Th>actions</Th>
            </Tr>
          </Thead>
          <tbody>
            {contacts.map((row) => (
              <Tr key={row.id}>
                <Td>{row.name}</Td>
                <Td>{row.email}</Td>
                <Td>{row.phone}</Td>
                <Td>{row.companyName}</Td>
                <Td>
                  <div className={TablePageCss.tableButtonContainer}>
                    <NavLink to={`/contacts/${row.id}`}>
                      <Button variant={ButtonVariant.Blue}>update</Button>
                    </NavLink>
                    <Button
                      variant={ButtonVariant.Red}
                      onClick={() => onClickDelete(row.id)}
                    >
                      delete
                    </Button>
                  </div>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </div>
  )
}
