import { ReactNode } from "react"
import TitleCss from "./css/title.module.css"

type Props = {
  text: ReactNode
}
export const Title = ({ text }: Props) => {
  return <h1 className={TitleCss.pageTitle}>{text}</h1>
}
