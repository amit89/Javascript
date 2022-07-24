// let firstcard = Math.floor((Math.random()*11)+1);
// let secondCard = Math.floor((Math.random()*11)+1);

let hasBalckJack = false;
let isAlive = true;
let result = document.getElementById("result");

function blackjack(){

let firstcard = parseInt(document.getElementById("text1").value);
let secondCard = parseInt(document.getElementById("text2").value);
let sum = firstcard + secondCard;

if(sum< 21){
    console.log("Do you want to draw a new card?");
    result.textContent = "Do you want to draw a new card?";
    document.getElementById("text3").value = sum;
    isAlive = true
} else if (sum === 21){
    console.log("You've  got the blackjack !");
    result.textContent = "You've  got the blackjack ! 😍";
    document.getElementById("text3").value = sum;
    hasBalckJack = true;
    isAlive = true
} else {
    console.log("You are out of the game");
    result.textContent = "You are out of the game";
    document.getElementById("text3").value = sum;
    isAlive = false;
}

console.log(hasBalckJack);
console.log(isAlive)
}