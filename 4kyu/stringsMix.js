/**
 * My Solution
 */

function mix(s1, s2) {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("")
  const arr1 = []
  const arr2 = []

  alpha.map(x => {
    let reg = new RegExp(x, "g")
    arr1.push(s1.match(reg) || [])
    arr2.push(s2.match(reg) || [])
  })

  const max1 = []
  const max2 = []
  const equal = []

  arr1.forEach((x, index) => {
    if (x.length > arr2[index].length && x.length > 1)
      max1.push("1:" + x.join(""))
    if (x.length < arr2[index].length && arr2[index].length > 1)
      max2.push("2:" + arr2[index].join(""))
    if (x.length === arr2[index].length && x.length > 1)
      equal.push("=:" + x.join(""))
  })

  let str = max1
    .concat(max2)
    .concat(equal)
    .sort((a, b) => {
      if (b.length == a.length) {
        if (a.charCodeAt(0) == b.charCodeAt(0))
          return a.charCodeAt(2) - b.charCodeAt(2)
        else return a.charCodeAt(0) - b.charCodeAt(0)
      } else return b.length - a.length
    })

  return str.join("/")
}

/**
 * Best Solution
 */

function mix2(s1, s2) {
  const counter = s =>
    s.replace(/[^a-z]/g, '')
      .split('')
      .sort()
      .reduce((x, y) => ((x[y] = 1 + (x[y] || 0)), x), {})
  s1 = counter(s1)
  s2 = counter(s2)
  let res = [],
    keys = new Set(Object.keys(s1).concat(Object.keys(s2)))
  keys.forEach(key => {
    let c1 = s1[key] || 0,
      c2 = s2[key] || 0,
      count = Math.max(c1, c2)
    if (count > 1) {
      let from = [1, '=', 2][Math.sign(c2 - c1) + 1]
      let str = [...Array(count)].map(_ => key).join('')
      res.push(from + ':' + str)
    }
  })
  return res.sort((x, y) => y.length - x.length || (x < y ? -1 : 1)).join('/')
}
