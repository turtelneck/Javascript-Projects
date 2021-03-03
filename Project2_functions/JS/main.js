var aa = "Hello";
aa += ", universe!";
var bb = "...Hello again!";

let counter = 0;

function sayHello(element, a, b) {
	if (counter === 0) {
		document.getElementById(element).innerHTML = a;
		counter++; // first time you hit the button, output is `Hello, Universe!`
	} else {
		document.getElementById(element).innerHTML = b;
		counter--; // second time you hit the button, output is `...Hello again!`
		
		// pattern goes on as many times as you press the button
	}
}