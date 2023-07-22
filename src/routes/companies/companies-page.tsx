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
import CompaniesPageCss from "./css/companies.module.css"
import { useEffect, useState } from "react"
import { Pagination } from "../../components/common/Pagination.tsx"

const mockData: Company[] = [
  { id: 1, name: "Walmart", headquarters: "Portland, Oregon" },
  { id: 2, name: "Nike", headquarters: "Portland, Oregon" },
  { id: 3, name: "Tektronix", headquarters: "Portland, Oregon" },
  { id: 4, name: "Garmin", headquarters: "Portland, Oregon" },
  { id: 4, name: "HP", headquarters: "Portland, Oregon" },
]

export const CompaniesPage = () => {
  const [companies, setCompanies] = useState<Company[]>([])

  useEffect(() => {
    async function getCompanies() {
      // TODO: replace mockData with data from API
      const data = await Promise.resolve(mockData)
      setCompanies(data)
      return data
    }

    getCompanies()
  }, [])

  return (
    <div>
      <Title text={"Companies"} />
      <div className={CompaniesPageCss.tableHeader}>
        <Button variant={ButtonVariant.Green}>create</Button>
        <Pagination />
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
            {/* TODO: Mock data here for now. Replace with data from server */}
            {companies.map((row) => (
              <Tr key={row.id}>
                <Td>{row.name}</Td>
                <Td>{row.headquarters}</Td>
                <Td>
                  <div className={CompaniesPageCss.tableButtonContainer}>
                    <Button variant={ButtonVariant.Blue}>update</Button>
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
