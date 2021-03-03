// ternary operator
function iqTest() {
	let input = document.getElementById("iqtest").value;
	let results = (input > 2345) ? "nice, you're pretty smart" : "I dunno what to tell ya, but... well, that's not exactly a hard test. Maybe try again?";
	document.getElementById("testresults").innerHTML = results;
}

// object constructor function
function Vehicle(Make, Model, Year, Color) {
	this.Vehicle_Make = Make;
	this.Vehicle_Model = Model;
	this.Vehicle_Year = Year;
	this.Vehicle_Color = Color;
}

// defines cars belonging to a few people
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// outputs Erik's car when user presses button
function erickFunction() {
	document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

// outputs Emily's car when user presses button
function emilyFunction() {
	document.getElementById("New_and_This").innerHTML = "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model + " manufactured in " + Emily.Vehicle_Year;
}

// a nifty constructor I created a lil' bit ago with some help
class Name {
	constructor(first, last) {
		this.fname = first[0].toUpperCase() + first.slice(1).toLowerCase();
		this.lname = last[0].toUpperCase() + last.slice(1).toLowerCase();
		this.fullname = `${this.fname} ${this.lname}`;
		this.initials = `${this.fname[0]}.${this.lname[0]}.`;
	}
}

jw = new Name("jack", "worthing")
gf = new Name("gwendolyn", "fairfax")
am = new Name("algernon", "moncrieff")
cc = new Name("cecily", "cardew")
lb = new Name("lady", "bracknell")
mp = new Name("miss", "prism")
dc = new Name("doctor", "chasuble")

// nested function
// (we're going to pretend that Math.pow() and Math.sqrt() don't exist)
function pythagoreanTheorum(a, b) {
	
	function pow(x) { // replaces Math.pow()
		return x ** 2;
	}
	
	function sqrt(x) { // replaces Math.sqrt()
		
		function closeEnough(guess) { // checks to see if number works as a solution
			return Math.abs(guess * guess - x) / x < 0.001; // sqrt 
		}
		
		function improve(guess) { // improves number if it doesn't work as a solution
			return (guess + x / guess) / 2;
		}
		// if the current guess works, it's returned as a string rounded to the hundredth's place (fixed-point notation)
		// if the current guess doesn't work, recur
		function newTry(guess) {
			return (closeEnough(guess)) ? guess.toFixed(2) : newTry(improve(guess))
		}
		// the first guess is just the first number divided in half
		return newTry(x / 2);
	}
	// theorum is "a^2 + b^2 = c^2"
	// the magic piece of code that gets the solution is `sqrt(pow(a) + pow(b))`
	document.getElementById("nested").innerHTML = "the length of your triangle's hypotenuse is... " + sqrt(pow(a) + pow(b))
}