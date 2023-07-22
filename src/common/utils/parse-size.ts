import { Size } from "../types/components.ts"

export const parseSize = (size: Size): string => {
  if (typeof size === "string") {
    return size
  }

  return `${size / 16}rem`
}
