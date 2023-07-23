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
import { Pagination } from "../../components/common/Pagination.tsx"
import { Contacts } from "../../common/types/contacts.ts"

const mockData: Contacts[] = [
  {
    id: 1,
    name: "John Smith",
    email: "jsmith@gmail.com",
    phone: "000-111-2222",
    companyName: "Walmart",
  },
  {
    id: 2,
    name: "Alice Smith",
    email: "asmith@gmail.com",
    phone: "000-111-2222",
    companyName: "Nike",
  },
  {
    id: 3,
    name: "Steve Jobs",
    email: "sjobs@gmail.com",
    phone: "000-111-2222",
    companyName: "Tektronix",
  },
  {
    id: 4,
    name: "Tim Cook",
    email: "tcook@gmail.com",
    phone: "000-111-2222",
    companyName: "Garmin",
  },
  {
    id: 5,
    name: "Jeff Bezos",
    email: "jebzos@gmail.com",
    phone: "000-111-2222",
    companyName: "HP",
  },
]

export const ContactsPage = () => {
  const [contacts, setContacts] = useState<Contacts[]>([])

  useEffect(() => {
    async function fetchContacts() {
      // TODO: replace mockData with data from API
      // const data = await getCompaniesList()
      const data = await Promise.resolve(mockData)
      setContacts(data)
      return data
    }

    fetchContacts()
  }, [])

  return (
    <div>
      <Title text={"Companies"} />
      <div className={TablePageCss.tableHeader}>
        <NavLink to={"/contacts/new"}>
          <Button variant={ButtonVariant.Green}>create</Button>
        </NavLink>
        <Pagination />
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
            {/* TODO: Mock data here for now. Replace with data from server */}
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
                    <Button variant={ButtonVariant.Red}>delete</Button>
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
