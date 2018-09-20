function high(x) {
  const countScoring = str => {
    if (!str) return 0
    return str
      .split('')
      .map(s => s.charCodeAt() - 'a'.charCodeAt())
      .reduce((total, cur) => total + cur)
  }

  return x.split(' ').sort((a, b) => countScoring(b) - countScoring(a))[0]
}
