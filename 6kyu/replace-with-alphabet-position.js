function alphabetPosition(text) {
  const testABC = 'abcdefghijklmnopqrstuvwxyz'
  let matchStr = text.toLowerCase().match(/[a-z]/gi)
  if (!matchStr) return ''

  return matchStr.map(str => testABC.indexOf(str) + 1).join(' ')
}
