//Get input element 
var messageInput = document.getElementById("message-input");

//Get message holder 
var messageHolder = document.getElementById("message-holder");

function postMessage(e) {
	if(e.keyCode === 13){
	messageHolder.innerHTML += "<div class='mHolder'><p class='message-Item'>"+messageInput.value+"</p>"+"<button class='bRemove'>Delete</button></div>";
	messageInput.value = "";
	}
	var buttons = messageHolder.getElementsByClassName("bRemove");
	for(var i = 0; i < buttons.length; i++){
		buttons[i].addEventListener("click", getParent);
	}
	document.getElementById("clear_box").disabled=false;
}


function clearBox(){
	messageHolder.innerHTML = "";
	document.getElementById("clear_box").disabled=true;
}

function getParent(){
	console.log("Hello you clicked a button");
	console.log(this + "This is what we are targeting");
	console.log(this.parentNode + "This is the parent");
	console.log(this.parentNode.parentNode + "this is the grandparent");
	this.parentNode.parentNode.removeChild(this.parentNode);
}


messageInput.addEventListener("keyup", postMessage);
document.getElementById("clear_box").addEventListener("click", clearBox);
// console.log(messageHolder.getElementsByTagName("button"));

var buttons = messageHolder.getElementsByClassName("bRemove");
console.log(buttons);
// buttons.addEventListener("click", testSay);
// buttons.addEventListener("click", testSay);
