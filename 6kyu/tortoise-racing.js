const race = (v1, v2, g) => {
  if (v2 <= v1) {
    return null
  }

  const res = Math.floor((3600 * g) / (v2 - v1))
  return [Math.floor(res / 3600), Math.floor(res / 60) % 60, res % 60]
}

/**
 * Better One
 */

function races(v1, v2, g) {
  let time = g / (v2 - v1)
  return v2 > v1
    ? [
        Math.floor(time),
        Math.floor((time * 60) % 60),
        Math.floor((time * 3600) % 60)
      ]
    : null
}
