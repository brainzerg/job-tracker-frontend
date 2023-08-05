import { useEffect, useState } from "react"
import { Application } from "../../common/types/applications.ts"
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
import TablePageCss from "../../styles/common-css/table-page.module.css"
import { NavLink } from "react-router-dom"
import {
  deleteApplication,
  getApplicationsList,
} from "../../api/applications.ts"

export const ApplicationsPage = () => {
  const [applications, setApplications] = useState<Application[]>([])

  const fetchApplicationsList = async () => {
    const data = await getApplicationsList()
    setApplications(data)
  }

  useEffect(() => {
    fetchApplicationsList()
  }, [])

  const onClickDelete = async (applicationId: number) => {
    await deleteApplication(applicationId)
    fetchApplicationsList()
  }

  return (
    <div>
      <Title text={"Applications"} />
      <div className={TablePageCss.tableHeader}>
        <NavLink to={"/applications/new"}>
          <Button variant={ButtonVariant.Green}>create</Button>
        </NavLink>
      </div>
      <TableContainer>
        <Table>
          <Thead>
            <Tr textAlign={"center"}>
              <Th>apply date</Th>
              <Th>company</Th>
              <Th>position</Th>
              <Th>start date</Th>
              <Th>status</Th>
              <Th>actions</Th>
            </Tr>
          </Thead>
          <tbody>
            {applications.map((row) => (
              <Tr key={row.id}>
                <Td>{row.applydate}</Td>
                <Td>{row.companyName}</Td>
                <Td>{row.position}</Td>
                <Td>{row.startdate}</Td>
                <Td>{row.status}</Td>
                <Td>
                  <div className={TablePageCss.tableButtonContainer}>
                    <NavLink to={`/applications/${row.id}`}>
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
