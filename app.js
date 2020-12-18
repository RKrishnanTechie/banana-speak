
var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv =  document.querySelector("#output");

btnTranslate.addEventListener("click",clickHandler);

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something went wrong with server!, try again later")
}

function clickHandler() {
    
    // get the input
    inputText = textInput.value;
     
    //server processing
fetch(getTranslationURL(inputText))
    .then(Response => Response.json())
    .then(json => 
    {
        //to get only the translated content 
        translatedText = json.contents.translated;
    //output 
    outputDiv.innerText = translatedText;
    })

    .catch(errorHandler);
}


