const input = document.querySelector("#input");
const h1 = document.querySelector("#h1");
const h2 = document.querySelector("#h2");
const h3 = document.querySelector("#h3");
const outputDiv = document.querySelector("#outputDiv");

console.log(outputDiv);

h1.addEventListener("click", applyh1);
h2.addEventListener("click", applyh2);
h3.addEventListener("click", applyh3);

function applyh1(){
    outputDiv.innerHTML = `<h1>${input.value}</h1>`;
}

function applyh2(){
    outputDiv.innerHTML = `<h2>${input.value}</h2>`;
}

function applyh3(){
    outputDiv.innerHTML = `<h3>${input.value}</h3>`;
}