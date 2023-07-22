import PaginationCss from "./css/pagination.module.css"
import { Button } from "./Button.tsx"
import { palette } from "../../styles/palette.ts"

type Props = {
  page?: number
  totalPages?: number
}

export const Pagination = ({ page = 1, totalPages = 1 }: Props) => {
  const canClickPrev = page > 1
  const canClickNext = page < totalPages

  return (
    <div className={PaginationCss.container}>
      <Button disabled={!canClickPrev} padding={""}>
        <span
          className={`material-symbols-outlined ${PaginationCss.icon}`}
          style={{
            fontSize: "16px",
            color: canClickPrev ? "black" : palette.gray["300"],
          }}
        >
          arrow_back_ios
        </span>
      </Button>
      <span>
        Page {page} of {totalPages}
      </span>
      <Button disabled={!canClickNext} padding={""}>
        <span
          className={`material-symbols-outlined ${PaginationCss.icon}`}
          style={{
            fontSize: "16px",
            color: canClickNext ? "black" : palette.gray["300"],
          }}
        >
          arrow_forward_ios
        </span>
      </Button>
    </div>
  )
}
