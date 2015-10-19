function changeChecked (event) {
var optionChosen = document.getElementsByName("checked-input");
var choseDarkTheme = document.getElementById("dark-input");
var choseLargeText = document.getElementById("large-text");
var messageHolder = document.getElementById("message-holder");

 if (choseDarkTheme.checked) {
  document.getElementById("message-holder").style.backgroundColor = "black";
  console.log("hey");
 }
console.log("hey");
  if(choseLargeText.checked) {
  document.getElementById("message-holder").style.fontSize = "xx-large";
  // console.log("hello");
 }
} 

document.getElementById("dark-input").addEventListener("change", changeChecked);
changeChecked();
 // document.getElementById("message-holder").innerHTML = "<div id='messageid'>hello</div>";
 document.getElementById("large-text").addEventListener("change", changeChecked);
changeChecked();