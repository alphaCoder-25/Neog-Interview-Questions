const input = document.querySelector("#input");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

red.addEventListener("click", applyRed);
green.addEventListener("click", applyGreen);
blue.addEventListener("click", applyBlue);

function applyRed(){
    input.style.color = "red";          
};

function applyGreen(){
    input.style.color = "green";
};

function applyBlue(){
    input.style.color = "blue";
};