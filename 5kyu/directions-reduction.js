/**
 * My Solution
 */

function dirReduc(arr) {
  newDirections = []
  arr.map(direction => {
    switch (direction.toUpperCase()) {
      case 'NORTH':
        if (newDirections[newDirections.length - 1] === 'SOUTH') newDirections.pop('SOUTH')
        else newDirections.push('NORTH')
        break
      case 'SOUTH':
        if (newDirections[newDirections.length - 1] === 'NORTH') newDirections.pop('NORTH')
        else newDirections.push('SOUTH')
        break
      case 'WEST':
        if (newDirections[newDirections.length - 1] === 'EAST') newDirections.pop('EAST')
        else newDirections.push('WEST')
        break
      case 'EAST':
        if (newDirections[newDirections.length - 1] === 'WEST') newDirections.pop('WEST')
        else newDirections.push('EAST')
        break
    }
  })
  return newDirections
}

/**
 * Best Solution
 */

function dirReduc2(arr) {
  const opposite = { NORTH: 'SOUTH', EAST: 'WEST', SOUTH: 'NORTH', WEST: 'EAST' }

  return arr.reduce((dirs, dir) => {
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop()
    else dirs.push(dir)
    return dirs
  }, [])
}
