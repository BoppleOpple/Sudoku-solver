let socket, numRows;

function load() {
	socket = io.connect('http://localhost:3000');
	numRows = document.getElementById('rows');
	numRows.addEventListener('change', ()=>console.log(numRows.value));
	console.log(numRows)
}

window.addEventListener('load', load);