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
import { deleteJob, getJobsList } from "../../api/jobs.ts"

export const JobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([])

  const getJobsFromApi = async () => {
    const data = await getJobsList()
    setJobs(data)
  }

  const onClickDelete = async (jobId: number) => {
    await deleteJob(jobId)
    getJobsFromApi()
  }

  useEffect(() => {
    getJobsFromApi()
  }, [])

  return (
    <div>
      <Title text={"Jobs"} />
      <div className={TablePageCss.tableHeader}>
        <NavLink to={"/jobs/new"}>
          <Button variant={ButtonVariant.Green}>create</Button>
        </NavLink>
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
                <Td>{row.startdate}</Td>
                <Td>{row.companyName}</Td>
                <Td>{row.position}</Td>
                <Td>{row.salary}</Td>
                <Td>{row.location}</Td>
                <Td>
                  <div className={TablePageCss.tableButtonContainer}>
                    <NavLink to={`/jobs/${row.id}`}>
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
