let oWinScreen = document.getElementById('o');
let xWinScreen = document.getElementById('x');
let drawScreen = document.getElementById('draw');
const resetButtonsHTML = document.getElementsByClassName('btn');
const resetButtons = Array.from(resetButtonsHTML);

resetButtons.forEach((e, id) => {
	e.addEventListener('click', () => location.reload());
});

window.onload = function() {
	oWinScreen.style.display = 'none';
	xWinScreen.style.display = 'none';
	drawScreen.style.display = 'none';
};
