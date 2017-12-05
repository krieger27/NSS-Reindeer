console.log("heyyyyy")

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

for (let i=0; i <reindeer.length; i++){
    hohohoElement.innerHTML += `<div>${colors[i]} ${reindeer[i]}</div>`;
}
