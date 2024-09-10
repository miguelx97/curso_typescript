// random number between 0 and 5
function randomIntFromInterval(min: number, max: number): number {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const randomNumber = randomIntFromInterval(0, 5);

// user insert number between 0 and 5 by console
const userNumber = randomIntFromInterval(0, 5);

console.log(randomNumber);
console.log(userNumber);
