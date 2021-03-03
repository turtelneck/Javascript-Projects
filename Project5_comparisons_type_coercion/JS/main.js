// typeof
let varibul = 'I am a variable';

document.write(typeof varibul);

// isNaN
document.write("<br>");
document.write(isNaN('hello world'));
document.write("<br>");
document.write(isNaN(200151094));

// infinity
document.write("<br>");
document.write(2E310);
document.write("<br>");
document.write(-2E310);

// boolean logic
document.write("<br>");
document.write(10 < 20);
document.write("<br>");
document.write(10 < 2);

// equation in console
console.log(150 + 150);

// type coercion
document.write("<br>");
document.write("10" + 5);

// comparison in console
console.log(10 < 2);

// equals comparisons
document.write("<br>");
document.write(10 + 10 == 5 + 15);
document.write("<br>");
document.write(1 == 5);

// triple equals
document.write("<br>");
document.write("this is false" === "and so are the next two");
document.write("<br>");
document.write("10" === 10);
document.write("<br>");
document.write(1 === 301);
document.write("<br>");
document.write("this is true" === "this is true");

// && and ||
document.write("<br>");
document.write(10 == 10 && 11 == 11); // true
document.write("<br>");
document.write(10 == 10 && 1111111 == 11); // false
document.write("<br>");
document.write(10 == 10 || 10 == 11); // true
document.write("<br>");
document.write(10 == 1111111 || 1111111 == 11); // false

// not operator
function notOp() {
	document.getElementById("notopop").innerHTML = !(20 < 10);
}
function notOpOp() {
	document.getElementById("notopopop").innerHTML = !(20 < 30);
}


// click here NaN
function func() {
	document.getElementById("Test").innerHTML = "Oops, " + (0/0) + "!";
}