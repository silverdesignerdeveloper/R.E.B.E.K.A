// Keybard Map Debugging
// enter = 13

// $("#term-command").keypress(function(e){
// 	alert(e.which);
// })

var help = "See a list of commands below:  <br> " + 
" - help <br> " + 
" - clear <br> " + 
" - Who are you?  <br> " + 
" - What do you do? <br> " + 
" - Who made this?";


var notFound = "Command not found! Use 'help' for a list of commands";
var whoAreYou = "We are some really cool developers who love what we do. See our 'about us' page for more <3";
var whatDoYouDo = "We build lots of really awesome things";
var whoMadeThis = "Jonjoe Whitfield our lead developer got a little bit bored and a little bit drunk one night and decided to build it :D";

$("#terminal").keypress(function(e){
	function output(o){
		$("#term-user-bar").remove()		
		$("#terminal>#term-inner").append("<p id='term-output'>[<span class='term-font-green'>User</span>]$ "+cmd+"</p>");
		$("#terminal>#term-inner").append("<p id='term-output'>"+o+"</p>");
		$("#terminal>#term-inner").append("<div id='term-user-bar'><p>[<span class='term-font-green'>User</span>]$ </p><input id='term-command' type='text'></div>");
		$("#term-command").focus();
	}

	function clear(){
		$("#terminal>#term-inner").remove();
		$("#terminal").append("<div id='term-inner'></div>");
		$("#terminal>#term-inner").append("<div id='term-user-bar'><p>[<span class='term-font-green'>User</span>]$ </p><input id='term-command' type='text'></div>");
		$("#term-command").focus();
	}

	if (e.which === 13) {
		console.log($("#term-command").val());
		var cmd = $("#term-command").val();
		switch(cmd){
			case "help":
				output(help);
				break;
			case "Who are you?": 
				output(whoAreYou);
				break;
			case "What do you do?":
				output(whatDoYouDo);
				break;
			case "Who made this?":
				output(whoMadeThis);
				break;
			case "clear":
				clear();
				break;
			default:
				output(notFound);
				break;
		}
	};
})