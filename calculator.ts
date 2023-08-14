function calculate(
  number_1: number,
  number_2: number,
  operator: '+' | '-' | '*' | '/'
): number {
  switch (operator) {
    case '+': return number_1 + number_2;
    case '-': return number_1 - number_2;
    case '*': return number_1 * number_2;
    case '/': return number_1 / number_2;
  }
}

const number_1 = 20; // Type a number
const number_2 = 23; // Type a number
const operator = '+'; // Type a operator (e.g. +, -, *, /)

const result = calculate(number_1, number_2, operator);

console.log(result);