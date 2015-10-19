function changeChecked (event) {
var optionChosen = document.getElementsByName("checked-input");
var choseDarkTheme = document.getElementById("darkinput");
var choseLargeText = document.getElementById("largetext");
var messageHolder = document.getElementById("message-holder");

 if (choseDarkTheme.checked && choseDarkTheme.value === "darktheme") {
  document.getElementById("message-holder").style.backgroundColor = "black";
  console.log("hey");
 }
console.log("hey");
  if(choseLargeText.checked && choseLargeText.value === "largetext") {
  document.getElementById("message-holder").style.fontSize = "xx-large";
  console.log("hello");
 }
} 

document.getElementById("darkinput").addEventListener("change", changeChecked);
changeChecked();
 document.getElementById("message-holder").innerHTML = "<div id='messageid'>hello</div>";
 document.getElementById("largetext").addEventListener("change", changeChecked);
changeChecked();