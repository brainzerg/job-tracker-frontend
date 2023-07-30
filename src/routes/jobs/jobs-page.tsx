import { useEffect, useState } from "react"
import { Job } from "../../common/types/jobs.ts"
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
import { Pagination } from "../../components/common/Pagination.tsx"

const mockData: Job[] = [
  {
    id: 1,
    salary: "$10,000",
    location: "Alaska",
    position: "SE 1",
    companyId: 1,
    companyName: "Alaska State",
    startDate: "2023-09-01",
    skills: ["C", "C++"],
  },
  {
    id: 2,
    salary: "$10,000",
    location: "Portland",
    position: "SE 2",
    companyId: 1,
    companyName: "Alaska State",
    startDate: "2023-09-01",
    skills: ["Java"],
  },
  {
    id: 3,
    salary: "$10,000",
    location: "NYC",
    position: "SE 3",
    companyId: 1,
    companyName: "Alaska State",
    startDate: "2023-09-01",
    skills: ["Javascript", "React"],
  },
  {
    id: 4,
    salary: "$10,000",
    location: "Toronto",
    position: "SE 3",
    companyId: 1,
    companyName: "Alaska State",
    startDate: "2023-09-01",
    skills: ["Javascript", "React", "Express"],
  },
]

export const JobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    async function getJobsFromApi() {
      // TODO: replace with an API call that returns the list of jobs
      const data = await Promise.resolve(mockData)
      setJobs(data)
    }
    getJobsFromApi()
  }, [])

  return (
    <div>
      <Title text={"Jobs"} />
      <div className={TablePageCss.tableHeader}>
        <NavLink to={"/jobs/new"}>
          <Button variant={ButtonVariant.Green}>create</Button>
        </NavLink>
        <Pagination />
      </div>
      <TableContainer>
        <Table>
          <Thead>
            <Tr textAlign={"center"}>
              <Th>start date</Th>
              <Th>company</Th>
              <Th>position</Th>
              <Th>salary</Th>
              <Th>location</Th>
              <Th>actions</Th>
            </Tr>
          </Thead>
          <tbody>
            {jobs.map((row) => (
              <Tr key={row.id}>
                <Td>{row.startDate}</Td>
                <Td>{row.companyName}</Td>
                <Td>{row.position}</Td>
                <Td>{row.salary}</Td>
                <Td>{row.location}</Td>
                <Td>
                  <div className={TablePageCss.tableButtonContainer}>
                    <NavLink to={`/jobs/${row.id}`}>
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
