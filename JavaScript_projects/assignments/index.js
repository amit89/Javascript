let firstName = "Amit";
let lastName = "Rahi";
console.log(firstName + lastName);
let purchaseButton = document.getElementById("price-btn");
let errorMessage =  document.getElementById("error-el");

function purchase(){
    errorMessage.textContent = "Please try again after sometimes."
}