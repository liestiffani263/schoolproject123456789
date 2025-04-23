function printHello() {
  console.log('Hello World!');
}

// Function to check if a number is even or odd

function isEven(num) {
  return num % 2 === 0;
}

// Function to generate and display random numbers between 1 and 10 (inclusive)

function getRandomNumbers(maxNum) {
  let numbers = [];
  for (let i = 0; i < maxNum; i++) {
    numbers.push(Math.floor(Math.random() * 10));
  }
  return numbers;
}

// Function to play a game of rock-paper-scissors
function playRockPaperScissors(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log('It is a tie!');
  } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
             (userChoice === 'paper' && computerChoice === 'rock') ||
             (userChoice === 'scissors' && computerChoice === 'paper')) {
    console.log(`${userChoice} beats ${computerChoice}`);
  } else {
    console.log(`You lose! ${computerChoice} beats ${userChoice}`);
  }
}
