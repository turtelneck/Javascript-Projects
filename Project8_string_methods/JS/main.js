// string.concat()
let a = "I ";
let b = "am ";
let c = "a ";
let d ="sentence.";

document.getElementById("concat").innerHTML = a.concat(b, c, d);

// string.slice()
let newGuy = "I am a completely new string! I remain in existence afer being sliced."

document.getElementById("slice").innerHTML = newGuy.slice(0, 29);

// number.toString()
let x = 12354678

console.log(x.toString()) // the transition to a string is a little clearer in the console
document.getElementById("tostring").innerHTML = x.toString();

// number.toPrecision()
let xx = 12345678.12345678

document.getElementById("toprecision").innerHTML = xx.toPrecision(9); // output will be 12354678.1