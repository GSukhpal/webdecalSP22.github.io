function averageThreeNumbers(a, b, c) {
    let sum = a+b+c;
    let avg = Math.floor(sum/3);
    return avg;
}

function createSentence(num, noun) {  
    let x = "On average, a Berkeley student has " + num + " " + noun + " ."; 
    return x; 
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);
let avg = averageThreeNumbers(x,y,z);
let sentence = createSentence(avg, 'Lions');
console.log(sentence);