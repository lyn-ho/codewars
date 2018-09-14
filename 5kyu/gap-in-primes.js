function gap(g, m, n) {
  let lastPrime = 0
  let isPrime = x => {
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) return false
    }
    return true
  }

  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (i - lastPrime === g) return [lastPrime, i]
      else lastPrime = i
    }
  }
  return null
}
