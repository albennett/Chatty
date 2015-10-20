//Get input element 
var messageInput = document.getElementById("message-input");

//Get message holder 
var messageHolder = document.getElementById("message-holder");

//bolean if edit mode is on
var IAmEditing = false;



function postMessage(e) {
	//time Stamp 
	var theDate = new Date;

	for(var i = 0; i < users.names.length; i ++){
		if(document.getElementsByClassName("users")[i].checked === true){
			var theOneChecked = document.getElementsByClassName("users")[i].value;
			console.log(theOneChecked);
		}
	}
	if(e.keyCode === 13){
			if(IAmEditing === true){
				document.getElementsByClassName("pToAdd")[0].innerHTML = document.getElementById("message-input").value;
				IAmEditing = false;
				console.log("I am editing", IAmEditing);
				document.getElementsByClassName("pToAdd")[0].classList.remove("pToAdd");
		} else if(theOneChecked !== undefined){
	messageHolder.innerHTML += "<div class='mHolder'><p class='message-Item'><span>"+theOneChecked+":</span> "+messageInput.value+"</p>"+"<button class='bRemove'>Delete</button><button class='edit'>Edit</button><span class='date'>message sent on: "+theDate+"</span></div></div>";
	messageInput.value = "";
			} else {
	messageHolder.innerHTML += "<div class='mHolder'><p class='message-Item'>"+messageInput.value+"</p>"+"<button class='bRemove'>Delete</button><button class='edit'>Edit</button><span class='date'>message sent on: "+theDate+"</span></div> ";
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
	if(document.getElementById("message-holder").getElementsByClassName("mHolder").length > 20){
		document.getElementById("message-holder").removeChild(document.getElementById("message-holder").childNodes[0]);
	}
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
	// console.log(this + "This is what we are targeting");
	// console.log(this.parentNode + "This is the parent");
	// console.log(this.parentNode.parentNode + "this is the grandparent");
	this.parentNode.parentNode.removeChild(this.parentNode);
}


messageInput.addEventListener("keyup", postMessage);
document.getElementById("clear_box").addEventListener("click", clearBox);
// console.log(messageHolder.getElementsByTagName("button"));

var buttons = messageHolder.getElementsByClassName("bRemove");
console.log(buttons);
// buttons.addEventListener("click", testSay);
// buttons.addEventListener("click", testSay);




//object for bonus 
var users = {
  names: ["Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"]
};

for (var i = 0; i< users.names.length; i++){
	document.getElementById("radioHolder").innerHTML += users.names[i]+"<input class='users' name='user' type='radio' value="+users.names[i]+">";
}

// console.log(document.getElementsByClassName("users"));

// console.log(document.getElementById("message-holder").getElementsByClassName("mHolder").length);





