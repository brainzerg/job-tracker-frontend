import { ComponentPropsWithoutRef, ReactNode } from "react"

type Props = {
  children?: ReactNode
} & ComponentPropsWithoutRef<"button">

export const Button = ({ children, ...props }: Props) => {
  return <button {...props}>{children}</button>
}
