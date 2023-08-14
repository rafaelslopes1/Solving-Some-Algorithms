function isPrimeNumber(value: number): boolean {
  for (let i = 2, square_root = Math.sqrt(value); i < square_root; i++) {
    if (value % i === 0) {
      return false;
    }
  }

  return value > 1;
}

function printNPrimeNumbers(n: number) {
  let count = 0;
  for (let i = 2; count < n; i++) {
    if (isPrimeNumber(i)) {
      console.log(i);
      count++;
    }
  }
}