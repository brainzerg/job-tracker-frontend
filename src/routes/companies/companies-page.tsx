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
import { Company } from "../../common/types/company.ts"
import TablePageCss from "../../styles/common-css/table-page.module.css"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { deleteCompany, getCompaniesList } from "../../api/companies.ts"

export const CompaniesPage = () => {
  const [companies, setCompanies] = useState<Company[]>([])

  const fetchCompaniesList = async () => {
    const data = await getCompaniesList()
    setCompanies(data)
  }

  const onClickDelete = async (companyId: number) => {
    await deleteCompany(companyId)
    fetchCompaniesList()
  }

  useEffect(() => {
    fetchCompaniesList()
  }, [])

  return (
    <div>
      <Title text={"Companies"} />
      <div className={TablePageCss.tableHeader}>
        <NavLink to={"/companies/new"}>
          <Button variant={ButtonVariant.Green}>create</Button>
        </NavLink>
      </div>
      <TableContainer>
        <Table>
          <Thead>
            <Tr textAlign={"center"}>
              <Th>name</Th>
              <Th>headquarters</Th>
              <Th>actions</Th>
            </Tr>
          </Thead>
          <tbody>
            {companies.map((row) => (
              <Tr key={row.id}>
                <Td>{row.name}</Td>
                <Td>{row.headqtrs}</Td>
                <Td>
                  <div className={TablePageCss.tableButtonContainer}>
                    <NavLink to={`/companies/${row.id}`}>
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
