function getRandomInt(max) {
    var maxNumber = max;
    var min = 0;

    if (max < min) {
        max = min + max / 2;
        min = 1;
    }

    var rand = Math.floor(Math.random() * max);
    return max - (rand - min); 
}

// Example usage:
console.log(getRandomInt(10)); // Output: 3
