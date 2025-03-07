var numbers = ["One", "Two", "Three", "Four", "Five"];
function randomNumber(){
    var number = Math.floor(Math.random()*numbers.length);
    return numbers[number];
}
