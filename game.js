alert("We are going to play a guessing game!");

var questions = ["Is the sky blue?", "Is Andorra in the Andes?", "Aren't Christmas lights the best?", "Did the Toronto Blue Jays win the 2015 World Series?", "Is it fair to say that Sandra Cisneros and Virginia Woolf share the same prized possession?", "On which day of October 2015 was the Canadian federal election held?"]
var answers = ["That's right! (Should be, anyways.)", "Underneath all that grey is a bit of blue.", "No, silly, the Andes are in South America and Andorra is in Europe!", "Can't fool you. The Andes are in South America and Andorra is in Europe.", "I couldn't agree more!", "What could possibly be better than Christmas lights?", "Nah, it was the Kansas City Royals this year.", "Sad, isn't it? Next year, for sure!", "I agree. A room (or a house) of one's own.", "Eh, I'd argue that the difference between a room and a house is not the point.", "That's right! What an exciting day for Justin Trudeau.", "It was on the 19th of October that Justin Trudeau was elected."]

function Question1(){
	var answer1 = prompt(questions[0]);
	var x1 = document.getElementById("answer1");
	var div = document.createElement('div');

	if(answer1 == "yes" || answer1 == "y" || answer1 == "YES" || answer1 == "Y" || answer1 == "Yes"){
		console.log("yes");
		x1.className = "correct";
		x1.innerHTML = (answers[0]);
		div.innerHTML = '<img src="image.jpg" height="200" width="200"/>';
		document.getElementById("answer1").appendChild(div);
		}

	else if (answer1 == "no" || answer1 == "n" || answer1 == "NO" || answer1 == "N" || answer1 == "No") {
		console.log("no");
		x1.className = "incorrect";
		x1.innerHTML = (answers[1]);
		}

	else {
		console.log("other");
		alert("Please phrase your answer as yes or no.");
		var Question1alt=prompt(questions[0]);
		console.log(Question1alt);
			if (Question1alt == "yes" || Question1alt == "y" || Question1alt == "YES" || Question1alt == "Y" || Question1alt == "Yes") {
			x1.className = "correct";
			x1.innerHTML = (answers[0]);
			div.innerHTML = '<img src="image.jpg" height="200" width="200"/>';
			document.getElementById("answer1").appendChild(div);
			} 
			else if (Question1alt == "no" || Question1alt == "n" || Question1alt == "NO" || Question1alt == "N" || Question1alt == "No") {
			x1.className = "incorrect";
			x1.innerHTML = (answers[1]);
			}
		}
}
console.log(Question1);
Question1();


function Question2(){
	var answer2 = prompt(questions[1]);
	var x2 = document.getElementById("answer2");
	var div = document.createElement('div');

	if (answer2 == "yes" || answer2 == "y" || answer2 == "YES" || answer2 == "Y" || answer2 == "Yes") {
		console.log("yes");
		x2.className = "incorrect";
		x2.innerHTML = (answers[2]);
		} 

	else if (answer2 == "no" || answer2 == "n" || answer2 == "NO" || answer2 == "N" || answer2 == "No") {
		console.log("no");
		x2.className = "correct";
		x2.innerHTML = (answers[3]);
		div.innerHTML = '<img src="image.jpg" height="200" width="200"/>';
		document.getElementById("answer2").appendChild(div);
		}

	else {
	alert("Please phrase your answer as yes or no.");
	var question2alt=prompt(questions[1]);
	console.log(question2alt);
		if (question2alt == "yes" || question2alt == "y" || question2alt == "YES" || question2alt == "Y" || question2alt == "Yes") {
		x2.className = "incorrect";
		x2.innerHTML = (answers[2]);
		} 
		else if (question2alt == "no" || question2alt == "n" || question2alt == "NO" || question2alt == "N" || question2alt == "No") {
		x2.className = "correct";
		x2.innerHTML = (answers[3]);
		div.innerHTML = '<img src="image.jpg" height="200" width="200"/>';
		document.getElementById("answer2").appendChild(div);
		}
	}
}
console.log(Question2);
Question2();


function Question3(){
	var answer3 = prompt(questions[2]);
	var x3 = document.getElementById("answer3");
	var div = document.createElement('div');

	if (answer3 == "yes" || answer3 == "y" || answer3 == "YES" || answer3 == "Y" || answer3 == "Yes") {
	console.log("yes");
	x3.className = "correct";
	x3.innerHTML = (answers[4]);
	div.innerHTML = '<img src="image.jpg" height="200" width="200"/>';
	document.getElementById("answer3").appendChild(div);
	} 

	else if (answer3 == "no" || answer3 == "n" || answer3 == "NO" || answer3 == "N" || answer3 == "No") {
	console.log("no");
	x3.className = "incorrect";
	x3.innerHTML = (answers[5]);
	}

	else {
	alert("Please phrase your answer as yes or no.");
	var Question3alt=prompt(questions[2]);
	console.log(Question3alt);
		if (Question3alt == "yes" || Question3alt == "y" || Question3alt == "YES" || Question3alt == "Y" || Question3alt == "Yes") {
		x3.className = "correct";
		x3.innerHTML = (answers[4]);
		div.innerHTML = '<img src="image.jpg" height="200" width="200"/>';
		document.getElementById("answer3").appendChild(div);
		} 
		else if (Question3alt == "no" || Question3alt == "n" || Question3alt == "NO" || Question3alt == "N" || Question3alt == "No") {
		x3.className = "incorrect";
		x3.innerHTML = (answers[5]);
		}
	}
}	
console.log(Question3);
Question3();


function Question4(){
	var answer4 = prompt(questions[3]);
	var x4 = document.getElementById("answer4");
	var div = document.createElement('div');

	if (answer4 == "yes" || answer4 == "y" || answer4 == "YES" || answer4 == "Y" || answer4 == "Yes") {
	x4.className = "incorrect";
	console.log("yes");
	x4.innerHTML = (answers[6]);
	} 

	else if (answer4 == "no" || answer4 == "n" || answer4 == "NO" || answer4 == "N" || answer4 == "No") {
	console.log("no");
	x4.className = "correct";
	x4.innerHTML = (answers[7]);
	div.innerHTML = '<img src="image.jpg" height="200" width="200"/>';
	document.getElementById("answer4").appendChild(div);
	}

	else {
	alert("Please phrase your answer as yes or no.");
	var Question4alt=prompt(questions[3]);
	console.log(Question4alt);
		if (Question4alt == "yes" || Question4alt == "y" || Question4alt == "YES" || Question4alt == "Y" || Question4alt == "Yes") {
		x4.className = "incorrect";
		x4.innerHTML = (answers[6]);
		} 
		else if (Question4alt == "no" || Question4alt == "n" || Question4alt == "NO" || Question4alt == "N" || Question4alt == "No") {
		x4.className = "correct";
		x4.innerHTML = (answers[7]);
		div.innerHTML = '<img src="image.jpg" height="200" width="200"/>';
		document.getElementById("answer4").appendChild(div);
		}
	}
}
console.log(Question4);
Question4();


function Question5(){
	var answer5 = prompt(questions[4]);
	var x5 = document.getElementById("answer5");
	var div = document.createElement('div');

if (answer5 == "yes" || answer5 == "y" || answer5 == "YES" || answer5 == "Y" || answer5 == "Yes") {
	console.log("yes");
	x5.className = "correct";
	x5.innerHTML = (answers[8]);
	div.innerHTML = '<img src="image.jpg" height="200" width="200"/>';
	document.getElementById("answer5").appendChild(div);
} 

else if (answer5 == "no" || answer5 == "n" || answer5 == "NO" || answer5 == "N" || answer5 == "No") {
	console.log("no");
	x5.className = "incorrect";
	x5.innerHTML = (answers[9]);
}

else {
	alert("Please phrase your answer as yes or no.");
	var Question5alt=prompt(questions[4]);
	console.log(Question5alt);
		if (Question5alt == "yes" || Question5alt == "y" || Question5alt == "YES" || Question5alt == "Y" || Question5alt == "Yes") {
		x5.className = "correct";
		x5.innerHTML =(answers[8]);
		div.innerHTML = '<img src="image.jpg" height="200" width="200"/>';
		document.getElementById("answer5").appendChild(div);
		} 
		else if (Question5alt == "no" || Question5alt == "n" || Question5alt == "NO" || Question5alt == "N" || Question5alt == "No") {
		x5.className = "incorrect";
		x5.innerHTML = (answers[9]);
		}
	}
}
console.log(Question5);
Question5();


function Question6(){
	var answer6 = prompt(questions[5]);
	var x6 = document.getElementById("answer6");
	var div = document.createElement('div');

if (answer6 == 19) {
	console.log("yes");
	x6.className = "correct";
	x6.innerHTML = (answers[10]);
	div.innerHTML = '<img src="image.jpg" height="200" width="200"/>';
	document.getElementById("answer6").appendChild(div);
	} 

else {
	console.log("no");
	x6.className = "incorrect";
	x6.innerHTML = (answers[11]);
	}
}
console.log(Question6);
Question6();