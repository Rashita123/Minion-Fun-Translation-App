var button = document.querySelector("#button");
var input = document.querySelector("#input-box");
var output = document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json";

function constructURL(text){
    return serverURL+"?text="+text;
}

function errorHandler(error){
    console.log("Error Occured",error);
    alert("Error Occured. Try again after some time!");
}

function clickHandler(){
    var inputText=input.value;
    fetch(constructURL(inputText))
    .then (response => response.json())
    .then(json => {
        output.innerText=json.contents.translated;
    })
    .catch(errorHandler);
}

button.addEventListener("click",clickHandler);