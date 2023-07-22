import { ComponentPropsWithoutRef, CSSProperties } from "react"
import InputCss from "./css/input.module.css"

type Props = {
  width?: CSSProperties["width"]
} & ComponentPropsWithoutRef<"input">

export const Input = ({ width = "100%", ...props }: Props) => (
  <input style={{ width }} className={InputCss.input} {...props} />
)
