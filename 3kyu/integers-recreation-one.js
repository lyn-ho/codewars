function listSquared(m, n) {
  let matches = []
  for (let i = m; i <= n; ++i) {
    let sum = getDivisors(i).reduce((sum, n) => sum + Math.pow(n, 2), 0)

    if (Number.isInteger(Math.sqrt(sum))) {
      matches.push([i, sum])
    }
  }
  return matches
}

function getDivisors(n) {
  let divisors = []

  for (let i = 1; i < n; ++i) {
    if (n % i) continue

    divisors.push(i)
  }

  divisors.push(n)

  return divisors
}
