function getRandomInt(max) {
  Math.random();
}

// Example usage
console.log(getRandomInt(10)); // Output: 4

var num = parseInt(prompt("Enter a number between 1 and 20")); // Prompt user for input
if (num >= 1 && num <= 20) {
  console.log(`The number is ${num}.`);
} else {
  console.log("Please enter a number between 1 and 20.");
}
