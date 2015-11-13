alert("We are going to play a guessing game!");

var Question1=prompt("Is the sky blue?");
console.log(Question1);
if (Question1 == "yes" || Question1 == "y" || Question1 == "YES" || Question1 == "Y" || Question1 == "Yes") {
	alert("That's right! (Should be, anyways.)");
} 
else if (Question1 == "no" || Question1 == "n" || Question1 == "NO" || Question1 == "N" || Question1 == "No") {
	alert("Underneath all that grey is a bit of blue.");
}
else {
	alert("Please phrase your answer as yes or no.");
	var Question2=prompt("Is the sky blue?");
	console.log(Question2);
	if (Question2 == "yes" || Question2 == "y" || Question2 == "YES" || Question2 == "Y" || Question2 == "Yes") {
	alert("That's right! (Should be, anyways.)");
} 
else if (Question2 == "no" || Question2 == "n" || Question2 == "NO" || Question2 == "N" || Question2 == "No") {
	alert("Underneath all that grey is a bit of blue.");
}
}

var Question3=prompt("Is Andorra in the Andes?");
console.log(Question3);
if (Question3 == "yes" || Question3 == "y" || Question3 == "YES" || Question3 == "Y" || Question3 == "Yes") {
	alert("No, silly, the Andes are in South America and Andorra is in Europe!");
} 
else if (Question3 == "no" || Question3 == "n" || Question3 == "NO" || Question3 == "N" || Question3 == "No") {
	alert("Can't fool you. The Andes are in South America and Andorra is in Europe.");
}
else {
	alert("Please phrase your answer as yes or no.");
	var Question4=prompt("Is Andorra in the Andes?");
	console.log(Question4);
	if (Question4 == "yes" || Question4 == "y" || Question4 == "YES" || Question4 == "Y" || Question4 == "Yes") {
	alert("No, silly, the Andes are in South America and Andorra is in Europe!");
} 
else if (Question4 == "no" || Question4 == "n" || Question4 == "NO" || Question4 == "N" || Question4 == "No") {
	alert("Can't fool you. The Andes are in South America and Andorra is in Europe.");
}
}

var Question5=prompt("Aren't Christmas lights the best?");
console.log(Question5);
if (Question5 == "yes" || Question5 == "y" || Question5 == "YES" || Question5 == "Y" || Question5 == "Yes") {
	alert("I couldn't agree more!");
} 
else if (Question5 == "no" || Question5 == "n" || Question5 == "NO" || Question5 == "N" || Question5 == "No") {
	alert("What could possibly be better than Christmas lights?");
}
else {
	alert("Please phrase your answer as yes or no.");
	var Question6=prompt("Aren't Christmas lights the best?");
	console.log(Question6);
	if (Question6 == "yes" || Question6 == "y" || Question6 == "YES" || Question6 == "Y" || Question6 == "Yes") {
	alert("I couldn't agree more!");
} 
else if (Question6 == "no" || Question6 == "n" || Question6 == "NO" || Question6 == "N" || Question6 == "No") {
	alert("What could possibly be better than Christmas lights?");
}
}