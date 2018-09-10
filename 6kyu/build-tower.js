/**
 * My Solution
 */

function towerBuilder(nFloors) {
  let space,
    star,
    tower = []
  for (i = 1; i <= nFloors; i++) {
    space = ' '.repeat(nFloors - i)
    star = '*'.repeat(2 * i - 1)
    tower.push(`${space}${star}${space}`)
  }

  return tower
}

/**
 * Best Solution
 */

function towerBuilder(n) {
  return Array.from({ length: n }, function(v, k) {
    const spaces = ' '.repeat(n - k - 1)
    return spaces + '*'.repeat(k + k + 1) + spaces
  })
}
