function simplify(poly) {
  let sim = {}

  poly.match(/[+-]?[^+-]+/g).forEach(x => {
    let m = x.match(/[a-z]+/)[0]
    let k = x.replace(m, '')
    m = m.split('')
      .sort()
      .join('')
    k = Number(/\d/.test(k) ? k : k + '1')
    sim[m] = (sim[m] || 0) + k
  })

  return Object.keys(sim)
    .filter(m => sim[m])
    .sort((x, y) => x.length - y.length || (x < y ? -1 : 1))
    .map((m, i) => ({
      sign: sim[m] < 0 ? '-' : i > 0 ? '+' : '',
      k: Math.abs(sim[m]),
      m: m
    }))
    .map(o => o.sign + (o.k == 1 ? '' : o.k) + o.m)
    .join('')
}

