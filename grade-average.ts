function calculateAverage(grade1: number, grade2: number, grade3: number): number {
  return (grade1 + grade2 + grade3) / 3;
}

const grade1 = 3.5; // Type a number between 0 and 10
const grade2 = 5.6; // Type a number between 0 and 10
const grade3 = 6.5; // Type a number between 0 and 10

const average = calculateAverage(grade1, grade2, grade3);

console.log(average);