function comp(arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length != arr2.length) return false

  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)

  arr1 = arr1.map(n => Math.pow(n, 2))

  return JSON.stringify(arr1) === JSON.stringify(arr2)
}
