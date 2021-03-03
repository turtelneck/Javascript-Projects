const globalVar = "I am a global variable"; // variable can be used anywhere

varContainer();
emptyContainer();

function varContainer() {
	const localVar = "I am a local variable"; // can only be used within this function
	return "I exist to hold localVar";
}

function emptyContainer() {
	console.log("this function is running but it sucks so you're gonna get an error")
	return localVar; // will throw uncaught reference error
}

// if statement with Date().getHours()
function howDoYouDo() {
	if (Date().getHours() < 18) {
		return "howdy partner";
	}
}

// custom if statement
function customIf() {
	let wellHeck = "well, heck";
	if (wellHeck === "well, heck") {
		return wellHeck;
	} else {
		return;
	}
}

// if/else statement
function ageFunction() {
	let age = document.getElementById("age").value;
	if (age > 0) {
		document.getElementById("howOld").innerHTML = "you are alive";
	} else if (age === "0") {
		document.getElementById("howOld").innerHTML = "you might be alive";
	} else {
		document.getElementById("howOld").innerHTML = "you are not alive";
	}
}