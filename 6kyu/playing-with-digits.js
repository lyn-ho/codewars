const digPow = (n, p) => {
  let sum = n
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, cur, currentIndex) => {
      return acc + Math.pow(cur, p + currentIndex)
    }, 0)

  return sum % n === 0 ? sum / n : -1
}
