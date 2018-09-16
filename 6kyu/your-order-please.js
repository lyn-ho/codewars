function order(words) {
  const reg = /\d/
  return words
    .split(' ')
    .sort((s1, s2) => reg.exec(s1) - reg.exec(s2))
    .join(' ')
}

/**
 *
 */

function order2(words) {
  const reg = /\d/
  return words
    .split(' ')
    .sort((s1, s2) => s1.match(reg) - s2.match(reg))
    .join(' ')
}
