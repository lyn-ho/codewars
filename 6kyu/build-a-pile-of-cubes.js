const findNb = m => {
  let n = 0

  while (m > 0) {
    n++
    m -= Math.pow(n, 3)
  }

  return m ? -1 : n
}
