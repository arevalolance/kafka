export const getInitials = (name) => {
  const names = name && name.split(" ")
  const firstLetter = names && names[0]
  const lastLetter = names && names[names.length - 1]

  return firstLetter[0] || "" + lastLetter[0] || ""
}
