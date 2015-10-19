//Get input element 
var messageInput = document.getElementById("message-input");

//Get message holder 
var messageHolder = document.getElementById("message-holder");

//bolean if edit mode is on
var IAmEditing = false;

function postMessage(e) {
	if(e.keyCode === 13){
			if(IAmEditing === true){
				document.getElementsByClassName("pToAdd")[0].innerHTML = document.getElementById("message-input").value;
				IAmEditing = false;
				console.log("I am editing", IAmEditing);
				document.getElementsByClassName("pToAdd")[0].classList.remove("pToAdd");
		} else {
	messageHolder.innerHTML += "<div class='mHolder'><p class='message-Item'>"+messageInput.value+"</p>"+"<button class='bRemove'>Delete</button><button class='edit'>Edit</button></div>";
	messageInput.value = "";
		}
	}	
	var buttons = messageHolder.getElementsByClassName("bRemove");
	var edits = messageHolder.getElementsByClassName("edit");
	for(var i = 0; i < buttons.length; i++){
		buttons[i].addEventListener("click", getParent);
	}
	for(var i = 0; i < buttons.length; i++){
		edits[i].addEventListener("click", editMessage);
	}
	document.getElementById("clear_box").disabled=false;
}


function clearBox(){
	messageHolder.innerHTML = "";
	document.getElementById("clear_box").disabled=true;
}

function editMessage(){
	document.getElementById("message-input").value = this.parentNode.childNodes[0].innerHTML;
	IAmEditing = true;
	this.parentNode.childNodes[0].classList.add('pToAdd');
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
