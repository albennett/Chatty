//Get input element 
var messageInput = document.getElementById("message-input");

//Get message holder 
var messageHolder = document.getElementById("message-holder");
var iAmEditing = false;
function postMessage(e) {
	if(e.keyCode === 13){
		if (iAmEditing === true) {
			document.getElementsByClassName("addP")[0].innerHTML = document.getElementById("messageInput").value;
		}
	messageHolder.innerHTML += "<div class='mHolder'><p class='message-Item'>"+messageInput.value+"</p>"+"<button class='bRemove'>Delete</button></div>" 
	+ "<button class='edit'>Edit</button></div>" ;
	messageInput.value = "";
	}
	var buttons = messageHolder.getElementsByClassName("bRemove");
	for(var i = 0; i < buttons.length; i++){
		buttons[i].addEventListener("click", getParent);
	}
	document.getElementById("clear_box").disabled=false;
	var edit = messageHolder.getElementsByClassName("edit");
	for (var i = 0; i < edit.length; i++) {
		edit[i].addEventListener("click", editMessage);
	}
}

function editMessage() {
	console.log("I edit!");
	console.log(this.parentNode.childNodes[0]);
	var theChild = this.parentNode.childNodes[0].classList.add("addP");

}

function clearBox(){
	messageHolder.innerHTML = "";
	document.getElementById("clear_box").disabled=true;
	console.log(this + "This is what we are targeting");
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
var edit = messageHolder.getElementsByClassName("edit");
console.log(edit);
console.log(buttons);
// buttons.addEventListener("click", testSay);
// buttons.addEventListener("click", testSay);
