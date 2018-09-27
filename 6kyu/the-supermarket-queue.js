function queueTime(customers, n) {
  if (customers.length === 0) return 0
  let tills = []
  for (let i = 0; i < n; i++) tills.push(0)
  while (customers.length > 0) {
    let ind = tills.indexOf(Math.min.apply(null, tills))
    tills[ind] += customers.shift()
  }
  return Math.max.apply(null, tills)
}

/**
 * Better One
 */

function queueTime2(customers, n) {
  var w = new Array(n).fill(0)
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w))
    w[idx] += t
  }
  return Math.max(...w)
}
