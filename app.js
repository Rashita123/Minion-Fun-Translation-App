var button = document.querySelector("#button");
var input = document.querySelector("#input-box");
var output = document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json";

function constructURL(text){
    return serverURL+"?text="+text;
}

var inputText=input.value;
function clickHandler(){
    fetch(constructURL(inputText))
    .then (response => response.json())
    .then(json => {
        output.innerText=json.contents.translated;
    })
}

button.addEventListener("click",clickHandler);