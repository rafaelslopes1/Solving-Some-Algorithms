function factorial(value: number): number {
  if (value < 0) {
    return -1;
  }

  if (value === 1 || value === 0) {
    return 1;
  }

  return value * factorial(value - 1);
}

const interestNumber = 5 //Type a number
const factorialResult = factorial(interestNumber);

console.log(factorialResult)