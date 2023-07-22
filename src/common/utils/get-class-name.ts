type ClassNameInput = string | Record<string, boolean | null | undefined>

export const getClassName = (...inputs: ClassNameInput[]): string => {
  const names: string[] = []

  inputs.forEach((input) => {
    if (typeof input === "string") {
      if (input.length > 0) {
        names.push(input)
      }
      return
    }
    for (const [key, value] of Object.entries(input)) {
      if (value) {
        names.push(key)
      }
    }
  })

  return names.join(" ")
}
