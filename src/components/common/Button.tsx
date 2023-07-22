import { ComponentPropsWithoutRef, ReactNode } from "react"
import ButtonCss from "./css/button.module.css"
import { Size } from "../../common/types/components.ts"
import { parseSize } from "../../common/utils/parse-size.ts"

export enum ButtonVariant {
  Default = "_default",
  Blue = "blue",
  Red = "red",
  Green = "green",
}

type Props = {
  variant?: ButtonVariant
  padding?: string
  width?: Size
  children?: ReactNode
} & ComponentPropsWithoutRef<"button">

export const Button = ({
  children,
  variant = ButtonVariant.Default,
  padding = "4px 8px",
  width = "unset",
  ...props
}: Props) => {
  return (
    <button
      {...props}
      style={{
        padding,
        width: parseSize(width),
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={variant === ButtonVariant.Default ? "" : ButtonCss[variant]}
    >
      {children}
    </button>
  )
}
