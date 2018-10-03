function bouncingBall(h, bounce, w) {
  return (rebounds =
    bounce > 0 && bounce < 1 && w < h
      ? 1 + 2 * Math.floor(Math.log(w / h) / Math.log(bounce))
      : -1)
}
