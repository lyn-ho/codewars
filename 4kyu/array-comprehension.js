function ArrayComprehension(options) {
  const { generator, filters, transform } = options
  let result
  if (generator.includes('..')) {
    let gArr = generator.split('..')
    let end = parseInt(gArr[1])
    let start
    let delta
    if (gArr[0].includes(',')) {
      let dArr = gArr[0].split(',')
      start = parseInt(dArr[0])
      delta = parseInt(dArr[1]) - start
    } else {
      start = parseInt(gArr[0])
      delta = end > start ? 1 : -1
    }

    result = []

    let s = delta > 0 ? start : end
    let e = delta > 0 ? end : start

    for (let i = s; i <= e; i += Math.abs(delta)) {
      result.push(i)
    }

    if (delta < 0) result.reverse()
  } else {
    result = generator.split(',')
    result = result.map(i => parseInt(i))
  }

  if (filters) {
    for (let filter of filters) {
      result = result.filter(filter)
    }
  }

  if (transform) {
    result = result.map(i => transform(i))
  }

  return result
}
