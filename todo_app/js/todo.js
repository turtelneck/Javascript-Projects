// stores each new todo task in an array in the active app's localStorage
function get_todos() {
	let todos = new Array;
	let todos_str = localStorage.getItem('todo');

	if (todos_str !== null) {
		todos = JSON.parse(todos_str);
	}
	return todos;
}

// takes value from the input and converts it to a task
function add() {
	let task = document.getElementById('task').value;
	let todos = get_todos();
	if (task == "") {
		return;
	} else {
		todos.push(task);

		localStorage.setItem('todo', JSON.stringify(todos));
		document.getElementById('task').value = "";
		show();
	}
}

// displays tasks as an unordered list
function show() {
	let todos = get_todos();

	//the following 6 lines build the html elements that contain the to-do items
	let html = '<ul>';
	for (let i = 0; i < todos.length; i++) {
		html += '<li><span>' + todos[i] + '</span><button class="remove" id="' + i + '">-</button></li>';
	}
	html += '</ul>';
	document.getElementById('todos').innerHTML = html;

	let buttons = document.getElementsByClassName('remove');
	for (var i = 0; i < buttons.length; i++) {
		// event listeners need to be added here so that each button's id corresponds to the to-do item's array index
		buttons[i].addEventListener('click', remove);
	}
}

function remove() {
	let id = this.getAttribute('id');
	let todos = get_todos();
	todos.splice(id, 1);
	// places edited array back in storage
	localStorage.setItem('todo', JSON.stringify(todos));

	show();

	return false;
}

document.getElementById('add').addEventListener('click', add);

show();