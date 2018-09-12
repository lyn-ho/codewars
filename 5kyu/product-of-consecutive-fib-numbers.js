function productFib(prod) {
  let n = 0
  let nPlus = 1
  while (n * nPlus < prod) {
    nPlus = n + nPlus
    n = nPlus - n
  }
  return [n, nPlus, n * nPlus === prod]
}

/**
 * Better Solution
 */

function productFib2(prod) {
  let [a, b] = [0, 1]
  while (a * b < prod) [a, b] = [b, a + b]
  return [a, b, a * b === prod]
}
