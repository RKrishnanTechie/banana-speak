
var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv =  document.querySelector("#output");

btnTranslate.addEventListener("click",clickHandler);

function clickHandler() {
    outputDiv.innerHTML = "asdfghjkl " + textInput.value;

};
