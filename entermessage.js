//Get input element 
var messageInput = document.getElementById("message-input");

//Get message holder 
var messageHolder = document.getElementById("message-holder");

function postMessage(e) {
	if(e.keyCode === 13){
	messageHolder.innerHTML += "<div class='mHolder'><p class='message-Item'>"+messageInput.value+"</p>"+"<button>Delete</button></div>";
	messageInput.value = "";
	}
}


function clearBox(){
	messageHolder.innerHTML = "";
}

function testSay(){
	console.log("Hello you clicked a button");
}


messageInput.addEventListener("keyup", postMessage);
document.getElementById("clear_box").addEventListener("click", clearBox);
document.getElementsByTagName("");

