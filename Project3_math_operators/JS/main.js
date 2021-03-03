let count = 0;
let j = 1;

function doMath(el) {
	let pickedNum = document.getElementById("numberzzz");
	let i = pickedNum.value;

	if (isNaN(i) === false) { // if a number is selected
		document.getElementById('math1').innerHTML = i * j;
		// multiplies the user's selected number by whatever the last result was

		j = j * i; // makes j equal to the last result

		if (count === 0) { // determines what message appears
			document.getElementById(el).innerHTML = "whooooaaaaa, you like, toooootally did math";
			count++;
		} else if (count === 1) {
			document.getElementById(el).innerHTML = "whooooaaaaa, you did math two times!";
			count++;
		} else if (count === 2) {
			document.getElementById(el).innerHTML = "ayooooooo! you're like, the god of numbers. these numbers do whatever you want!";
			count++;
		} else if (count === 3) {
			document.getElementById(el).innerHTML = "whoahoho, MAN. you are doing sooooo much math.";
			count++;
		} else if (count === 4) {
			document.getElementById(el).innerHTML = "ok tbh I've gotta get going, but like, have a good one partner. rock on.";
			count++;
		} else {
			document.getElementById(el).innerHTML = "";
		}

	} else { // if it's NaN
		if (count < 4) {
			document.getElementById(el).innerHTML = "whoa, sorry bud. I don't make the rules, but like, rules are you gotta pick a number, so...";
		} else {
			document.getElementById(el).innerHTML = "ok, ok, I know I said I was busy, but I'm still here, and like, rules are rules, this only works when you pick a number.";
		}
	}
}

function addition(a, b) {
	let math2 = document.getElementById('math2').innerHTML;
	document.getElementById('math2').innerHTML = math2 + " = " + (a + b);
	document.getElementById('hello2').innerHTML = "boom";
}

function subtraction(a, b) {
	let math3 = document.getElementById('math3').innerHTML;
	document.getElementById('math3').innerHTML = math3 + " = " + (a - b);
	document.getElementById('hello3').innerHTML = "boom";
}

function division(a, b) {
	let math4 = document.getElementById('math4').innerHTML;
	document.getElementById('math4').innerHTML = math4 + " = " + (a / b);
	document.getElementById('hello4').innerHTML = "boom";
}

function modulus(a, b) {
	let math5 = document.getElementById('math5').innerHTML;
	document.getElementById('math5').innerHTML = math5 + " = " + (a % b);
	document.getElementById('hello5').innerHTML = "cool, right?";
}

function unary(a) {
	document.getElementById('math6').innerHTML = -a;
	document.getElementById('hello6').innerHTML = "kinda meh, I know";
}

function rand() {
	let math7 = "your number is... ";
	document.getElementById('math7').innerHTML = math7 + (Math.ceil(Math.random() * Math.floor(100000000))) + "!";
	// picks between 1 and 100,000,000
	document.getElementById('hello7').innerHTML = "it's always between 1 and 100,000,000 for our purposes here. sick, right?";
}