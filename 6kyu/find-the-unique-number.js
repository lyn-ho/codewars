function findUniq(arr) {
  return arr.filter(val => arr.indexOf(val) === arr.lastIndexOf(val))[0]
}

/**
 *
 */

function findUniq2(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n))
}
