let fruit = ["apple", "orange", "apple", "apple", "oranage", "apple"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function sorting(){
    for ( let i = 0; i< fruit.length; i++) {
        if (fruit[i] === "apple") {
            appleShelf.textContent += fruit[i];
        } else if (fruit[i] === "orange")
        {
            appleShelf.textContent += fruit[i];
        }
    }
}