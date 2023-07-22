export const parseSize = (size: number | string): string => {
  if (typeof size === "string") {
    return size
  }

  return `${size / 16}rem`
}
