function calculateFinalAmount(
  initialAmount: number,
  interestRate: number,
  investmentTimeInMonths: number
): number {
  return initialAmount * ((1 + interestRate) ** investmentTimeInMonths);
}

const initialAmount = 300; //Type a number
const interestRate = 0.01; //Type a number
const investmentTimeInMonths = 12; //Type a number

const finalAmount = calculateFinalAmount(initialAmount, interestRate, investmentTimeInMonths);

console.log(finalAmount);