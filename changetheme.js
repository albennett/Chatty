$(document).ready(function() {

var optionChosen = $("[name='checked-input']");
console.log("optionChosen", optionChosen);
var choseDarkTheme = $("#dark-input");
var choseLargeText = $("#large-text");
var messageHolder = $("#message-holder");

function changeDark (event) {
 if (choseDarkTheme.checked) {
	 $("body").toggleClass("dark-styles");
	  // $("body").css("color", "black");
	  console.log("hey");
 } else {
 	$("body").toggleClass("dark-styles");
 	// $("body").css("color", "white");
 }
 console.log("hey");
}

function changeSize(event) {
  if(choseLargeText.checked) {
  $("#message-holder").toggleClass("font-sizes");
  // console.log("hello");
 } else {
 	$("#message-holder").toggleClass("font-sizes");
 }
}

$("#dark-input").click(function(){ 
	changeDark();
});

 // $("message-holder").innerHTML = "<div id='messageid'>hello</div>";
 $("#large-text").click( changeSize);


});