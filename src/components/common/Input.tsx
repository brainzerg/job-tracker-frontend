import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  CSSProperties,
  useEffect,
  useState,
} from "react"
import InputCss from "./css/input.module.css"

type Props = {
  width?: CSSProperties["width"]
  initialValue?: string
} & ComponentPropsWithoutRef<"input">

export const Input = ({
  width = "100%",
  initialValue = "",
  ...props
}: Props) => {
  const [value, setValue] = useState<string>(initialValue)

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue)
    }
  }, [initialValue])

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  return (
    <input
      style={{ width }}
      className={InputCss.input}
      value={value}
      onChange={handleChange}
      {...props}
    />
  )
}
