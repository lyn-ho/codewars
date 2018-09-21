function longestConsec(strarr, k) {
  if (strarr === [] || k > strarr.length || k <= 0) {
    return ''
  }
  let str = ''
  for (let i = 0; i < strarr.length; i++) {
    let temp = strarr.slice(i, i + k).join('')
    if (temp.length > str.length) {
      str = temp
    }
  }
  return str
}
