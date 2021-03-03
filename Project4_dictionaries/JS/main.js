function dictionary() { // defines function
	let dict = { // defines dictionary
		key: "value",
		imma_key: "imma value",
		imma_key: "yo I really do be dat value do",
		immanotha_key: "immanotha' value",
	};
	delete dict.immanotha_key; // deletes kvp
	document.getElementById("undefined").innerHTML = dict.immanotha_key; // calls for deleted kvp, output: "undefined"
	document.getElementById("dictionary").innerHTML = dict.imma_key; // calls kvp, output successful
}