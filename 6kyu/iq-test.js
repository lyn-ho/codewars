function iqTest(numbers) {
  let nArr = numbers.split(' ').map(Number)
  let oddArr = nArr.filter(num => num % 2 == 1)
  if (oddArr.length == 1) return nArr.indexOf(oddArr[0]) + 1
  let evenArr = nArr.filter(num => num % 2 == 0)
  if (evenArr.length == 1) return nArr.indexOf(evenArr[0]) + 1
}
