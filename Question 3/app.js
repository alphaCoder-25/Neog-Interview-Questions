const input1 = document.querySelector("#input-1");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const outputBox = document.querySelector("#output-box");

add.addEventListener('click', increase);
subtract.addEventListener('click', decrease);

function increase(){
    const defaultFontSize = 16;    
    input1.style.fontSize = `${defaultFontSize + 2}px`;
}

function decrease(){
    const defaultFontSize = 16;
    input1.style.fontSize = `${defaultFontSize - 2}px`;
}
