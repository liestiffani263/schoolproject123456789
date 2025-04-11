function randomFunction() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  return `random number is: ${randomNumber}`;
}

console.log(randomFunction());
