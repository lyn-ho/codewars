const incrementString = str => {
  if (isNaN(str.slice(-1))) return `${str}1`

  let nums = str.match(/\d+/g)[0]
  let chars = str.replace(/\d+/g, '')

  let incrementdNum = +nums + 1

  if (nums.length > incrementdNum.toString().length) {
    return `${chars}${'0'.repeat(nums.length - incrementdNum.toString().length)}${incrementdNum}`
  }

  return `${chars}${incrementdNum}`
}

/**
 * Better One
 */

function incrementString2(input) {
  if (isNaN(parseInt(input[input.length - 1]))) return input + '1'
  return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
    var up = parseInt(p2) + 1
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up
  })
}
