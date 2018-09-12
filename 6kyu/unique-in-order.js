function(iterable) {
  let result = Array.isArray(iterable) ? iterable : iterable.split('')
  return result.filter((item, index) => index === 0 || item !== result[index - 1])
}