const numberExp = (num, exp) => exp === undefined ? num : exp(num)

const plus = num => res => res + num

const minus = num => res => res - num

const times = num => res => res * num

const dividedBy = num => res => Math.floor(res / num) 

const zero = exp => numberExp(0, exp)
const one = exp => numberExp(1, exp)
const two = exp => numberExp(2, exp)
const three = exp => numberExp(3, exp)
const four = exp => numberExp(4, exp)
const five = exp => numberExp(5, exp)
const six = exp => numberExp(6, exp)
const seven = exp => numberExp(7, exp)
const eight = exp => numberExp(8, exp)
const nine = exp => numberExp(9, exp)
