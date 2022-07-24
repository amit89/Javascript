let player = {
    name: "Amit",
    chips: 1000,
}

let firstcard;
let secondCard;
let cards = []; ///ordered list of item
let sum = 0;
let hasBalckJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#card-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $" + player.chips;

console.log(cards)
console.log(isAlive)
function startGame() {
    isAlive = true;
    console.log(isAlive)
    firstcard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstcard, secondCard];
    sum = firstcard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Your cards are: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        isAlive = true

    } else if (sum === 21) {
        message = "You've  got the blackjack!";
        hasBalckJack = true

    } else {
        message = "You are out of the game";
        isAlive = false;
    }

    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
}

function newCard() {
    if (isAlive === true && hasBalckJack == false) {
        let card = getRandomCard();
        sum = sum + card;
        cards.push(card);
        renderGame();
    }
    else {
        console.log("YOu are out of game");
    }
}

function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1;
    if (random === 1) {
        return random = 11;
    }
    else if (random > 10) {
        return random = 10;
    }
    else return random;
}