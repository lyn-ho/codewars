function multiply(n, o) {
  let prefix = /^\-/.test(n) + /^\-/.test(o) === 1 ? '-' : ''
  let dotIndex =
    (n.indexOf('.') === -1 ? 0 : n.length - n.indexOf('.') - 1) +
    (o.indexOf('.') === -1 ? 0 : o.length - o.indexOf('.') - 1)
  o = o
    .replace(/\-|\./g, '')
    .split('')
    .reverse()
  n = n
    .replace(/\-|\./g, '')
    .split('')
    .reverse()
  const resArr = []
  for (let i = 0; i < o.length; i++) {
    for (let j = 0; j < n.length; j++) {
      resArr[i + j] ? (resArr[i + j] += o[i] * n[j]) : (resArr[i + j] = o[i] * n[j])
      resArr[i + j + 1] = Math.floor(resArr[i + j] / 10) + (resArr[i + j + 1] || 0)
      resArr[i + j] = resArr[i + j] % 10
    }
  }
  let res = resArr.reverse()
  if (dotIndex) res.splice(res.length - dotIndex, 0, '.')
  res = res
    .join('')
    .replace(/\.(\d*[1-9])?(0+)$/, '.$1')
    .replace(/\.$|^0+/g, '')
    .replace(/^\./, '0.')
  return res === '0' || !res ? '0' : prefix + res
}
