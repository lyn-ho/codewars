function duplicateCount(text) {
  text = text.toLowerCase()

  let counts = {}
  let count = 0
  text.split('').forEach(i => {
    counts[i] = (counts[i] || 0) + 1
    if (counts[i] === 2) count++
  })

  return count
}

function duplicateCount2(text) {
  return (
    text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/([^])\1+/g) || []
  ).length
}

function duplicateCount3(text) {
  return text
    .toLowerCase()
    .split('')
    .filter(function(val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i
    }).length
}
