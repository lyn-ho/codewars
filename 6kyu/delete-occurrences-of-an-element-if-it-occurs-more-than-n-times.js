function deleteNth(arr, n) {
  let cache = {}
  return arr.filter(c => {
    cache[c] = ~~cache[c] + 1
    return cache[c] <= n
  })
}
