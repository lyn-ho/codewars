function expandedForm(num) {
  let digArr = num.toString().split('')

  let len = digArr.length

  return digArr
    .map(Number)
    .map((n, index) => n * Math.pow(10, len - index - 1))
    .filter(n => n !== 0)
    .join(' + ')
}

/**
 * Better one
 */

const expandedForm2 = n =>
  n
    .toString()
    .split('')
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(' + ')
