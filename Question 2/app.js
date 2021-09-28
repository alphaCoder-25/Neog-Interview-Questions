const input1 = document.querySelector("#input-1");
const input2 = document.querySelector("#input-2");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const outputBox = document.querySelector("#output-box");

add.addEventListener('click', addition);
subtract.addEventListener('click', subtraction);
multiply.addEventListener('click', multiplication);
divide.addEventListener('click', division);

function addition() {
    const result = Number(input1.value) + Number(input2.value);
    output(`Addition is: ${result}`);
};

function subtraction() {
    const result = (input1.value) - (input2.value);
    output(`Subtraction is: ${result}`);
};

function multiplication() {
    const result = (input1.value) * (input2.value);
    output(`Multiplication is: ${result}`);
};

function division() {
    const result = (input1.value) / (input2.value);
    output(`Division is: ${result}`);
};

function output(message) {
    outputBox.innerText = message;
};