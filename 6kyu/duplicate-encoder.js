function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .reduce((acc, char, i, arr) => {
      const symbol = arr.filter(letter => letter === char).length < 2 ? '(' : ')'
      return acc + symbol
    }, '')
}

/**
 * Better One
 */

function duplicateEncode2(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function(a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('')
}
