import PaginationCss from "./css/pagination.module.css"
import { Button } from "./Button.tsx"

type Props = {
  page?: number
  totalPages?: number
}

export const Pagination = ({ page = 1, totalPages = 1 }: Props) => {
  const canClickPrev = page > 1
  const canClickNext = page < totalPages

  return (
    <div className={PaginationCss.container}>
      <Button disabled={!canClickPrev}>
        <span
          className={`material-symbols-outlined ${PaginationCss.icon}`}
          style={{
            fontSize: "16px",
            color: canClickPrev ? "black" : "#e5e5e5",
          }}
        >
          arrow_back_ios
        </span>
      </Button>
      <span>
        Page {page} of {totalPages}
      </span>
      <Button disabled={!canClickNext}>
        <span
          className={`material-symbols-outlined ${PaginationCss.icon}`}
          style={{
            fontSize: "16px",
            color: canClickNext ? "black" : "#e5e5e5",
          }}
        >
          arrow_forward_ios
        </span>
      </Button>
    </div>
  )
}
