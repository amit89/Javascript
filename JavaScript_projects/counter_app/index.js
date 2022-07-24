let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
console.log(countEl);
let count = 0;

function increment(){
    console.log("The button was clicked");
    count += 1;
    countEl.textContent = count;
    console.log(count);
}

function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = count;
}

function reset(){
    console.log("Reseting the count to 0");
    count = 0;
    countEl.textContent = count;
    saveEl.textContent = "Prevoius entries:";
}

function decrement(){
    console.log("Decremnet the count by one");
    count -=1;
    countEl.textContent = count;
}