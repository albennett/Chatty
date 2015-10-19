var optionChosen = document.getElementsByName("checked-input");
var choseDarkTheme = document.getElementById("dark-input");
var choseLargeText = document.getElementById("large-text");
var messageHolder = document.getElementById("message-holder");

function changeDark (event) {
 if (choseDarkTheme.checked) {
  document.body.classList.toggle("dark-styles");
  document.body.style.color = "white";
  console.log("hey");
 } else {
 	document.body.classList.toggle("dark-styles");
 	document.body.style.color = "black";
 }
 console.log("hey");
}

function changeSize(event) {
  if(choseLargeText.checked) {
  document.getElementById("message-holder").classList.toggle("font-sizes");
  // console.log("hello");
 } else {
 	document.getElementById("message-holder").classList.toggle("font-sizes");
 }
}

document.getElementById("dark-input").addEventListener("change", changeDark);

 // document.getElementById("message-holder").innerHTML = "<div id='messageid'>hello</div>";
 document.getElementById("large-text").addEventListener("change", changeSize);
