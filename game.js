alert("We are going to play a guessing game!");

function Question1(){
	var answer1 = prompt("Is the sky blue?");
	var x1 = document.getElementById("answer1");

	if(answer1 == "yes" || answer1 == "y" || answer1 == "YES" || answer1 == "Y" || answer1 == "Yes"){
		console.log("yes");
		x1.innerHTML = ("That's right! (Should be, anyways.)");
		}

	else if (answer1 == "no" || answer1 == "n" || answer1 == "NO" || answer1 == "N" || answer1 == "No") {
		console.log("no");
		x1.innerHTML = ("Underneath all that grey is a bit of blue.");
		}

	else {
		console.log("other");
		alert("Please phrase your answer as yes or no.");
		var Question1alt=prompt("Is the sky blue?");
		console.log(Question1alt);
			if (Question1alt == "yes" || Question1alt == "y" || Question1alt == "YES" || Question1alt == "Y" || Question1alt == "Yes") {
			x1.innerHTML = ("That's right! (Should be, anyways.)");
			} 
			else if (Question1alt == "no" || Question1alt == "n" || Question1alt == "NO" || Question1alt == "N" || Question1alt == "No") {
			x1.innerHTML = ("Underneath all that grey is a bit of blue.");
			}
		}

}
console.log(Question1);
Question1();


function Question2(){
	var answer2 = prompt("Is Andorra in the Andes?");
	var x2 = document.getElementById("answer2");

	if (answer2 == "yes" || answer2 == "y" || answer2 == "YES" || answer2 == "Y" || answer2 == "Yes") {
		console.log("yes");
		x2.innerHTML = ("No, silly, the Andes are in South America and Andorra is in Europe!");
		} 

	else if (answer2 == "no" || answer2 == "n" || answer2 == "NO" || answer2 == "N" || answer2 == "No") {
		console.log("no");
		x2.innerHTML = ("Can't fool you. The Andes are in South America and Andorra is in Europe.");
		}

	else {
	alert("Please phrase your answer as yes or no.");
	var question2alt=prompt("Is Andorra in the Andes?");
	console.log(question2alt);
		if (question2alt == "yes" || question2alt == "y" || question2alt == "YES" || question2alt == "Y" || question2alt == "Yes") {
		x2.innerHTML = ("No, silly, the Andes are in South America and Andorra is in Europe!");
		} 
		else if (question2alt == "no" || question2alt == "n" || question2alt == "NO" || question2alt == "N" || question2alt == "No") {
		x2.innerHTML = ("Can't fool you. The Andes are in South America and Andorra is in Europe.");
		}
		}
}
console.log(Question2);
Question2();


function Question3(){
	var answer3 = prompt("Aren't Christmas lights the best?");
	var x3 = document.getElementById("answer3");


	if (answer3 == "yes" || answer3 == "y" || answer3 == "YES" || answer3 == "Y" || answer3 == "Yes") {
	console.log("yes");
	x3.innerHTML = ("I couldn't agree more!");
	} 

	else if (answer3 == "no" || answer3 == "n" || answer3 == "NO" || answer3 == "N" || answer3 == "No") {
	console.log("no");
	x3.innerHTML = ("What could possibly be better than Christmas lights?");
	}

	else {
	alert("Please phrase your answer as yes or no.");
	var Question3alt=prompt("Aren't Christmas lights the best?");
	console.log(Question3alt);
		if (Question3alt == "yes" || Question3alt == "y" || Question3alt == "YES" || Question3alt == "Y" || Question3alt == "Yes") {
		x3.innerHTML = ("I couldn't agree more!");
		} 
		else if (Question3alt == "no" || Question3alt == "n" || Question3alt == "NO" || Question3alt == "N" || Question3alt == "No") {
		x3.innerHTML = ("What could possibly be better than Christmas lights?");
		}
	}
}	
console.log(Question3);
Question3();


function Question4(){
	var answer4 = prompt("Did the Toronto Blue Jays win the 2015 World Series?");
	var x4 = document.getElementById("answer4");

	if (answer4 == "yes" || answer4 == "y" || answer4 == "YES" || answer4 == "Y" || answer4 == "Yes") {
	console.log("yes");
	x4.innerHTML = ("Nah, it was the Kansas City Royals this year.");
	} 

	else if (answer4 == "no" || answer4 == "n" || answer4 == "NO" || answer4 == "N" || answer4 == "No") {
	console.log("no");
	x4.innerHTML = ("Sad, isn't it? Next year, for sure!");
	}

	else {
	alert("Please phrase your answer as yes or no.");
	var Question4alt=prompt("Did the Toronto Blue Jays win the 2015 World Series?");
	console.log(Question4alt);
		if (Question4alt == "yes" || Question4alt == "y" || Question4alt == "YES" || Question4alt == "Y" || Question4alt == "Yes") {
		x4.innerHTML = ("Nah, it was the Kansas City Royals this year.");
		} 
		else if (Question4alt == "no" || Question4alt == "n" || Question4alt == "NO" || Question4alt == "N" || Question4alt == "No") {
		x4.innerHTML = ("Sad, isn't it? Next year, for sure!");
		}
	}
}
console.log(Question4);
Question4();


function Question5(){
	var answer5 = prompt("Is it fair to say that Sandra Cisneros and Virginia Woolf share the same prized possession?");
	var x5 = document.getElementById("answer5");

if (answer5 == "yes" || answer5 == "y" || answer5 == "YES" || answer5 == "Y" || answer5 == "Yes") {
	console.log("yes");
	x5.innerHTML = ("I agree. A room (or a house) of one's own.");
} 

else if (answer5 == "no" || answer5 == "n" || answer5 == "NO" || answer5 == "N" || answer5 == "No") {
	console.log("no");
	x5.innerHTML = ("Eh, I'd argue that the difference between a room and a house is not the point.");
}

else {
	alert("Please phrase your answer as yes or no.");
	var Question5alt=prompt("Is it fair to say that Sandra Cisneros and Virginia Woolf share the same prized possession?");
	console.log(Question5alt);
		if (Question5alt == "yes" || Question5alt == "y" || Question5alt == "YES" || Question5alt == "Y" || Question5alt == "Yes") {
		x5.innerHTML =("I agree. A room (or a house) of one's own.");
		} 
		else if (Question5alt == "no" || Question5alt == "n" || Question5alt == "NO" || Question5alt == "N" || Question5alt == "No") {
		x5.innerHTML = ("Eh, I'd argue that the difference between a room and a house is not the point.");
		}
	}
}
console.log(Question5);
Question5();


function Question6(){
	var answer6 = prompt("On which day of October 2015 was the Canadian federal election held?");
	var x6 = document.getElementById("answer6");

if (answer6 == 19) {
	console.log("yes");
	x6.innerHTML = ("That's right! What an exciting day for Justin Trudeau.");
	} 

else {
	console.log("no");
	x6.innerHTML = ("It was on the 19th of October that Justin Trudeau was elected.");
	}
}
console.log(Question6);
Question6();
