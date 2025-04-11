function getRandomInt(max) {
  Math.floor(Math.random() * (max - 0 + 1)) + 0;
}

const arr = [];
let i = 0;

while (i < 50) {
  arr.push(getRandomInt(200));
  i++;
}
console.log(arr);
