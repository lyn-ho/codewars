function array_diff(a, b) {
  return a.filter(val => !b.includes(val))
}
