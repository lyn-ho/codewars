function list(names) {
  if (names.length === 0) return ''
  let lastName = names.pop()
  if (names.length === 0) return lastName.name
  let result = names.map(names => names.name).join(', ')

  return `${result} & ${lastName.name}`
}
