// let num1 = 4;
// let num2 = 5;
// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;


result = document.getElementById("result-el");

function add(){
    console.log("Addition"); 
    let num1 = parseInt(document.getElementById("num1-el").value);
    let num2 = parseInt(document.getElementById("num2-el").value);
    let sum = num1 + num2;
    result.textContent =sum;
    console.log(sum)
}

function subtract(){
    console.log("Subtractio");
    let num1 = parseInt(document.getElementById("num1-el").value);
    let num2 = parseInt(document.getElementById("num2-el").value);
    let sub = num1 - num2;
    result.textContent =sub;
    console.log(sub)
}

function divide(){
    console.log("Division");
    let num1 = parseInt(document.getElementById("num1-el").value);
    let num2 = parseInt(document.getElementById("num2-el").value);
    if (isNaN (num1 && num2)){
        result.textContent = "Please enter valid input";
    }

    else{
    let div = num1/num2;
    result.textContent =div;
    }
    console.log(div);
}

function multiply(){
    console.log("Division");
    let num1 = parseInt(document.getElementById("num1-el").value);
    let num2 = parseInt(document.getElementById("num2-el").value);
    if (isNaN (num1 && num2)){
        result.textContent = "Please enter valid input";
    }

    else{
    let mul = num1*num2;
    result.textContent = mul;
    }
    console.log(mul);
}