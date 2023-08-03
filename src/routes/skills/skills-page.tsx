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
import { Skill } from "../../common/types/skill.ts"
import TablePageCss from "../../styles/common-css/table-page.module.css"
import { useEffect, useState } from "react"
import { Pagination } from "../../components/common/Pagination.tsx"
import { NavLink } from "react-router-dom"
import { getSkillsList } from "../../api/skills.ts"

/*
const mockData: Skill[] = [
  { id: 1, name: "Java", proficiency: "beginner" },
  { id: 2, name: "C++", proficiency: "intermediate" },
  { id: 3, name: "C", proficiency: "advanced" },
  { id: 4, name: "React", proficiency: "intermediate" },
  { id: 5, name: "NodeJS", proficiency: "beginner" },
]
*/

export const SkillsPage = () => {
  const [skills, setSkills] = useState<Skill[]>([])

  useEffect(() => {
    async function setup() {
      const skillsList = await getSkillsList()
      setSkills(skillsList)
    }
    setup()
  }, [])

  return (
    <div>
      <Title text={"Skills"} />
      <div className={TablePageCss.tableHeader}>
        <NavLink to={"/skills/new"}>
          <Button variant={ButtonVariant.Green}>create</Button>
        </NavLink>
        <Pagination />
      </div>
      <TableContainer>
        <Table>
          <Thead>
            <Tr textAlign={"center"}>
              <Th>name</Th>
              <Th>proficiency</Th>
              <Th>actions</Th>
            </Tr>
          </Thead>
          <tbody>
            {skills.map((row) => (
              <Tr key={row.id}>
                <Td>{row.name}</Td>
                <Td>{row.proficiency}</Td>
                <Td>
                  <div className={TablePageCss.tableButtonContainer}>
                    <NavLink to={`/skills/${row.id}`}>
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
