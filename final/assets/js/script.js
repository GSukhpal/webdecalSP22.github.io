
let dunk = document.getElementById("dunk");

dunk.onclick = function(){
    let ball = document.getElementById("ball");
    ball.style.display = "block";
    ball.style.animation = "pulse 1s 1s"
}

let block = document.getElementById("block");

block.onclick = function(){
    let hand = document.getElementById("hand");
    hand.style.display = "block";
    hand.style.animation = "pulse 1s 1s"
}
