function calculateAverage(numbers) {
  if (!numbers || numbers.length === 0) {
    throw new Error('No numbers provided');
  }

  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return sum / numbers.length;
}

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max <= min) {
    throw new Error('Max value must be greater than the min value');
  }

  const randomIndex = Math.floor(Math.random() * (max - min + 1));
  return randomIndex;
}

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return String.fromCharCode(Math.floor(Math.random() * (characters.length - 1)) + characters);
}
