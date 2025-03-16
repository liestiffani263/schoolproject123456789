function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

const numbers = [1, 2, 3, 4, 5];
const selectedNumbers = [];
for (let i = 0; i < 5; i++) {
  const index = randomNumber(numbers.length);
  selectedNumbers.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(selectedNumbers);
