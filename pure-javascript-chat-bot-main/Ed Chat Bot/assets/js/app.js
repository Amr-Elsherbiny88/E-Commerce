var msg_input = document.querySelector("input.input_chat");
var	msg_repeated = 0;
var	msgFound = false;

window.onload = function(){
	botDefaultSettings();
	sendMessage(document.querySelector(".chat"));
}


function botDefaultSettings(){
	// app icon
	link = document.createElement("link");
	link.rel = 'icon';
	link.href = bot.profile;
	document.head.appendChild(link);

	// app title
	document.title = bot.app_title;
}


function sendMessage(chat_box){
	// input pressing
	msg_input.addEventListener("keypress",function(e){
		if (e.key === "Enter") {
		 	if(msg_input.value != ""){
		 		// append the user massege
		 		chat_box.innerHTML += `<div class="msg">
				<span class="user_msg msg_content">${msg_input.value}</span></div>`;
				// a sound to user know he send the messages
				document.querySelector(".user_message_sound").play();	
				setTimeout(()=>{
				botMessage(msg_input.value.toLowerCase(),chat_box);
				msg_input.value = '';
				msg_input.focus();	
				document.querySelector(".chat").scrollTop = 9999999999999999999999999999999999999;					
				},1000);
		 	}
		}
	});
}


function botMessage(user_msg,chat_box){
msgFound = false;	
	// loop throgh messages
	for(let i = 0; i < messages.length; i++){
		for(let x = 0; x < messages[i].msg.length; x++){
			// if bot understand user message
			if (user_msg == messages[i].msg[x] || user_msg == messages[i].msg[x] + " "  || user_msg == " " + messages[i].msg[x] || user_msg == "and " + messages[i].msg[x] || user_msg == "tell me " + messages[i].msg[x] || user_msg == "what is " + messages[i].msg[x] || user_msg == `${bot.name} ${messages[i].msg[x]}` || user_msg == `${messages[i].msg[x]} ${bot.name}` || user_msg == `${messages[i].msg[x]} bot` || user_msg == `do you know ${messages[i].msg[x]}`|| user_msg == `do you know the ${messages[i].msg[x]}`|| user_msg == `you know ${messages[i].msg[x]}`|| user_msg == `you know the ${messages[i].msg[x]}`) {
					sendMessageFun(messages[i].respond[Math.floor(Math.random() * messages[i].respond.length)],chat_box);
			}
		}
	}
		specailMessage(user_msg,chat_box);	
}

function specailMessage(user_msg,chat_box){
	// hellos
	if (user_msg.includes("hi") || user_msg.includes("hello") || user_msg.includes("hey")) {
	     sendMessageFun('hello how are you',chat_box);
		 return false;
	}
	

		// byes
	if (user_msg.includes("bye")) {
	     sendMessageFun('comeback later please!',chat_box);
		 return false;
	}
			// movies
	if (user_msg.includes("movie")) {
	     sendMessageFun(`i think : (${movies[Math.floor(Math.random() * movies.length)]}), is good`,chat_box);
		 return false;
	}else {
		sendMessageFun('sorry i cant help you at this point please send an email and they will help you ',chat_box);
		
		return false;
	}
	
	// programming languages
	for(let i = 0; i < msg_25.msg.length; i++){
		console.log(msg_25.msg[i]);
		if (msgFound == false) {
			if (user_msg.includes(msg_25.msg[i])) {
				 sendMessageFun(msg_25.respond[Math.floor(Math.random() * msg_25.respond.length)],chat_box);
				 msgFound = true;
			}			
		}

	}


	// countries
	for(let i = 0; i < msg_20.msg.length; i++){
		console.log(msg_20.msg[i]);
		if (msgFound == false) {
			if (user_msg.includes(msg_20.msg[i])) {
				 sendMessageFun(msg_20.respond[Math.floor(Math.random() * msg_20.respond.length)],chat_box);
				 msgFound = true;
			}			
		}

	}

	// pens
	for(let i = 0; i < msg_21.msg.length; i++){
		console.log(msg_21.msg[i]);
		if (msgFound == false) {
			if (user_msg.includes(msg_21.msg[i])) {
				 sendMessageFun(msg_21.respond[Math.floor(Math.random() * msg_21.respond.length)],chat_box);
				 msgFound = true;
			}			
		}

	}	
	// colors
	for(let i = 0; i < msg_29.msg.length; i++){
		console.log(msg_29.msg[i]);
		if (msgFound == false) {
			if (user_msg.includes(msg_29.msg[i])) {
				 sendMessageFun(msg_29.respond[Math.floor(Math.random() * msg_29.respond.length)],chat_box);
				 msgFound = true;
			}			
		}

	}		

	// animals
	for(let i = 0; i < msg_18.msg.length; i++){
		console.log(msg_18.msg[i]);
		if (msgFound == false) {
			if (user_msg.includes(msg_18.msg[i])) {
				 sendMessageFun(msg_18.respond[Math.floor(Math.random() * msg_18.respond.length)],chat_box);
				 msgFound = true;
			}			
		}

	}	


		for(let i = 0; i < msg_42.msg.length; i++){
		console.log(msg_42.msg[i]);
		if (msgFound == false) {
			if (user_msg.includes(msg_42.msg[i])) {
				 sendMessageFun(msg_42.respond[Math.floor(Math.random() * msg_42.respond.length)],chat_box);
				 msgFound = true;
			}			
		}

	}			

}


function sendMessageFun(msg,chat_box){
	chat_box.innerHTML += `<div class="msg">
	<span class="bot_msg msg_content">${msg}</span></div>`;
	msgFound = true;
	// a sound to make user know bot send a message
	document.querySelector(".bot_message_sound").play();	
	msg_input.removeAttribute("disabled","");
	msg_input.focus();
	msg_repeated++;
}



// loading page start
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
//   loading page end
