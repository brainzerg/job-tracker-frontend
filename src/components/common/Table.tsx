import { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react"
import TableCss from "./css/table.module.css"
import { ChildrenProps } from "../../common/types/components.ts"

type TableProps = {
  children: ReactNode
} & ComponentPropsWithoutRef<"table">

export const Table = ({ children }: TableProps) => {
  return <table className={TableCss.table}>{children}</table>
}

export const TableContainer = ({ children }: ChildrenProps) => (
  <div className={TableCss.tableContainer}>{children}</div>
)

type TableRowProps = {
  children: ReactNode
  textAlign?: CSSProperties["textAlign"]
} & ComponentPropsWithoutRef<"tr">

export const Tr = ({
  children,
  textAlign = "center",
  ...props
}: TableRowProps) => (
  <tr style={{ textAlign }} {...props} className={TableCss.tr}>
    {children}
  </tr>
)

type TableCellProps = {
  children: ReactNode
  textAlign?: CSSProperties["textAlign"]
} & ComponentPropsWithoutRef<"td" | "th">

export const Td = ({
  children,
  textAlign = "center",
  ...props
}: TableCellProps) => (
  <td style={{ padding: "4px 0", textAlign }} {...props}>
    {children}
  </td>
)

export const Th = ({
  children,
  textAlign = "center",
  ...props
}: TableCellProps) => (
  <th style={{ padding: "4px 0", textAlign }} {...props}>
    {children}
  </th>
)

type TableHeadProps = {
  children: ReactNode
} & ComponentPropsWithoutRef<"thead">

export const Thead = ({ children, ...props }: TableHeadProps) => (
  <thead style={{ borderBottom: "1px solid black" }} {...props}>
    {children}
  </thead>
)
