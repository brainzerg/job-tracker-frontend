import { ChangeEventHandler } from "react"
import SelectCss from "./css/select.module.css"

export type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}

type Props = {
  options: SelectOption[]
  value?: string | number
  onChange: (value: string) => void
}

export const Select = ({ options = [], value, onChange }: Props) => {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    onChange(e.target.value)
  }

  return (
    <div className={SelectCss.selectContainer}>
      <select value={value} onChange={handleChange}>
        {options.map(({ label, value, disabled }) => (
          <option key={value} value={value} hidden={disabled}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}
