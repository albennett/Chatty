//Get input element 
/*var messageInput = $("#message-input");

//Get message holder 
var messageHolder = $("#message-holder");
*/
//bolean if edit mode is on
var IAmEditing = false;



function postMessage(e) {
}

//function to clear message holder
function clearBox(){
	$("#message-holder").innerHTML = "";
	$("#clear_box").disabled=true;
}

//function for editing messages when edit button clicked
function editMessage(){
	//set value of input to first childnode
	$("#message-input").value = this.parentNode.childNodes[0].innerHTML;

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
$("#message-input").keypress(function(e){
	console.log("e", e);
	//create time Stamp 
	var theDate = new Date;

	//loop over radio buttons
	for(var i = 0; i < users.names.length; i++){

		//if button is checked
		if($(".users")[i].checked === true){
			console.log("theonecheck", theOneChecked);

			//get the value of the radio button and set it equal to theOneChecked variable
			var theOneChecked = $(".users")[i].value;
			console.log(theOneChecked);
		}
	}

	//if enter key is presses
	if(e.which === 13){
		console.log("insideife", e);

			//if edit mode is on (true)
			if(IAmEditing === true){

				//get element with class name pToAdd
				$(".pToAdd")[0].html($("#message-input").val());

				// IAmEditing to false
				IAmEditing = false;

				console.log("I am editing", IAmEditing);

				//remove edit class
				$(".pToAdd")[0].classList.remove("pToAdd");

				//if user is selected, put value of that radio button before the input message
		} else if(theOneChecked !== undefined){
			//output with radio value
	$("#message-holder").append("<div class='mHolder'><p class='message-Item'><span>"+theOneChecked+":</span> "+$("#message-input").val() +"</p>"+
	"<button class='bRemove'>Delete</button><button class='edit'>Edit</button><span class='date'>message sent on: "+theDate+"</span></div></div>");
			//clear input
	$("#message-input").val(""); 
			} else {
			//output with username value
	$("#message-holder").append("<div class='mHolder'><p class='message-Item'>"+$("#message-input").val()+"</p>"+"<button class='bRemove'>Delete</button><button class='edit'>Edit</button><span class='date'>message sent on: "+theDate+"</span></div> ");
			//clear value
	$("#message-input").val("");
		}
	}	
	//get all buttons with delete class
	var buttons = $("#message-holder .bRemove");

	//get all buttons with edit class
	var edits = $("#message-holder .edit");

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
	$("#clear_box").disabled=false;

	//if the length of the divs inside of the message holder is greater than 20
	if($("#message-holder .mHolder").length > 20){

		//remove te first child node
		$("#message-holder").removeChild($("#message-holder").childNodes[0]);
	}
});
//add event listener for clear function
$("#clear_box").click(function() {
	clearBox();
});
// console.log(messageHolder.getElementsByTagName("button"));

var buttons = $("#message-input .bRemove");
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
	$("#radioHolder").append(users.names[i]+"<input class='users' name='user' type='radio' value="+users.names[i]+">");
}

// console.log($(".users"));

// console.log($("#message-holder").getElementsByClassName("mHolder").length);





