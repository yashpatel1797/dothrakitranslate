var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#div-output");
var minionURL = "https://api.funtranslations.com/translate/dothraki.json";
function getTranslationURL(text) {
    return minionURL + "?" + "text=" + text
}
function errorHandler(error) {
    console.log("error occured", error);
}
function clickHandler(){
    var inputText = txtInput.value;
    // console.log(inputText)
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}
btnTranslate.addEventListener("click", clickHandler);