const btnLoaded = document.querySelector("#btn-loaded");
const output = document.querySelector("#output");

btnLoaded.addEventListener("click", hideText);

function hideText(){
    output.style.display = "none";
}