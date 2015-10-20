//Get input element 
var messageInput = document.getElementById("message-input");

//Get message holder 
var messageHolder = document.getElementById("message-holder");

//bolean if edit mode is on
var IAmEditing = false;



function postMessage(e) {

	//create time Stamp 
	var theDate = new Date;

	//loop over radio buttons
	for(var i = 0; i < users.names.length; i ++){

		//if button is checked
		if(document.getElementsByClassName("users")[i].checked === true){

			//get the value of the radio button and set it equal to theOneChecked variable
			var theOneChecked = document.getElementsByClassName("users")[i].value;
			console.log(theOneChecked);
		}
	}

	//if enter key is presses
	if(e.keyCode === 13){

			//if edit mode is on (true)
			if(IAmEditing === true){

				//get element with class name pToAdd
				document.getElementsByClassName("pToAdd")[0].innerHTML = document.getElementById("message-input").value;

				// IAmEditing to false
				IAmEditing = false;

				console.log("I am editing", IAmEditing);

				//remove edit class
				document.getElementsByClassName("pToAdd")[0].classList.remove("pToAdd");

				//if user is selected, put value of that radio button before the input message
		} else if(theOneChecked !== undefined){
			//output with radio value
	messageHolder.innerHTML += "<div class='mHolder'><p class='message-Item'><span>"+theOneChecked+":</span> "+messageInput.value+"</p>"+
	"<button class='bRemove'>Delete</button><button class='edit'>Edit</button><span class='date'>message sent on: "+theDate+"</span></div></div>";
			//clear input
	messageInput.value = "";
			} else {
			//output with username value
	messageHolder.innerHTML += "<div class='mHolder'><p class='message-Item'>"+messageInput.value+"</p>"+"<button class='bRemove'>Delete</button><button class='edit'>Edit</button><span class='date'>message sent on: "+theDate+"</span></div> ";
			//clear value
	messageInput.value = "";
		}
	}	
	//get all buttons with delete class
	var buttons = messageHolder.getElementsByClassName("bRemove");

	//get all buttons with edit class
	var edits = messageHolder.getElementsByClassName("edit");

	//for length of button elements
	for(var i = 0; i < buttons.length; i++){
		//connected them with event lister for delete function
		buttons[i].addEventListener("click", getParent);
	}

	//for length of button elements
	for(var i = 0; i < buttons.length; i++){

		//connect with edit function
		edits[i].addEventListener("click", editMessage);
	}

	//enable clear button
	document.getElementById("clear_box").disabled=false;

	//if the length of the divs inside of the message holder is greater than 20
	if(document.getElementById("message-holder").getElementsByClassName("mHolder").length > 20){

		//remove te first child node
		document.getElementById("message-holder").removeChild(document.getElementById("message-holder").childNodes[0]);
	}
}

//function to clear message holder
function clearBox(){
	messageHolder.innerHTML = "";
	document.getElementById("clear_box").disabled=true;
}

//function for editing messages when edit button clicked
function editMessage(){
	//set value of input to first childnode
	document.getElementById("message-input").value = this.parentNode.childNodes[0].innerHTML;

	//set iAmEditing to true
	IAmEditing = true;

	//add class pToAdd
	this.parentNode.childNodes[0].classList.add('pToAdd');
}

//function to remove parent node from buttons
function getParent(){
	console.log("Hello you clicked a button");
	// console.log(this + "This is what we are targeting");
	// console.log(this.parentNode + "This is the parent");
	// console.log(this.parentNode.parentNode + "this is the grandparent");
	this.parentNode.parentNode.removeChild(this.parentNode);
}


//run function of enter key press
messageInput.addEventListener("keyup", postMessage);
//add event listener for clear function
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

//loop over users to created radio buttons
for (var i = 0; i< users.names.length; i++){
	//output radio buttons
	document.getElementById("radioHolder").innerHTML += users.names[i]+"<input class='users' name='user' type='radio' value="+users.names[i]+">";
}

// console.log(document.getElementsByClassName("users"));

// console.log(document.getElementById("message-holder").getElementsByClassName("mHolder").length);





