function count(dir, walk) {
  return walk.filter(function(d) {
    return d == dir;
  }).length;
}

function isValidWalk(walk) {
  return walk.length === 10 &&
  count('n', walk) == count('s', walk) &&
  count('e', walk) == count('w', walk)
}