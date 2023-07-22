import { ComponentPropsWithoutRef, ReactNode } from "react"
import ButtonCss from "./css/button.module.css"

export enum ButtonVariant {
  Default = "_default",
  Blue = "blue",
  Red = "red",
  Green = "green",
}

type Props = {
  variant?: ButtonVariant
  padding?: string
  children?: ReactNode
} & ComponentPropsWithoutRef<"button">

export const Button = ({
  children,
  variant = ButtonVariant.Default,
  padding = "4px 8px",
  ...props
}: Props) => {
  return (
    <button
      {...props}
      style={{
        padding,
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
      }}
      className={variant === ButtonVariant.Default ? "" : ButtonCss[variant]}
    >
      {children}
    </button>
  )
}
