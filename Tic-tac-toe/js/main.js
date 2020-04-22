const game = document.getElementById('game');
const columnsHTML = game.getElementsByClassName('column');
const columns = Array.from(columnsHTML);
let isXTurn = false;
const grid = [ [ '', '', '' ], [ '', '', '' ], [ '', '', '' ] ];
let columnsArray = [];
columnsArray.push(columns.slice(0, 3));
columnsArray.push(columns.slice(3, 6));
columnsArray.push(columns.slice(6, 9));
xWins = parseInt(localStorage.getItem('xWins'));
oWins = parseInt(localStorage.getItem('oWins'));
draws = parseInt(localStorage.getItem('draws'));

for (let i = 0; i < 3; i++) {
	for (let j = 0; j < 3; j++) {
		let id = columnsArray[i][j].getAttribute('id');

		columnsArray[i][j].addEventListener('click', (e) => {
			let text = document.createElement('span');
			if (!grid[i][j]) {
				let textContent = isXTurn ? 'X' : 'O';
				text.classList.add(textContent);
				text.innerText = textContent;
				grid[i][j] = textContent;
				gameLogic(textContent);
				isXTurn = !isXTurn;
			}
			columnsArray[i][j].appendChild(text);
		});
	}
}

const gameLogic = (textContent) => {
	let count = 0;
	for (let k = 0; k < 3; k++) {
		for (let l = 0; l < 3; l++) {
			if (grid[k][l]) {
				count++;
			}
		}
	}
	if (grid[0][0] === textContent && grid[0][1] === textContent && grid[0][2] === textContent) {
		win(textContent);
	}
	else if (grid[1][0] === textContent && grid[1][1] === textContent && grid[1][2] === textContent) {
		win(textContent);
	}
	else if (grid[2][0] === textContent && grid[2][1] === textContent && grid[2][2] === textContent) {
		win(textContent);
	}
	else if (grid[0][0] === textContent && grid[1][0] === textContent && grid[2][0] === textContent) {
		win(textContent);
	}
	else if (grid[0][1] === textContent && grid[1][1] === textContent && grid[2][1] === textContent) {
		win(textContent);
	}
	else if (grid[0][2] === textContent && grid[1][2] === textContent && grid[2][2] === textContent) {
		win(textContent);
	}
	else if (grid[0][0] === textContent && grid[1][1] === textContent && grid[2][2] === textContent) {
		win(textContent);
	}
	else if (grid[0][2] === textContent && grid[1][1] === textContent && grid[2][0] === textContent) {
		win(textContent);
	}
	else if (count === 9) {
		draw();
	}
};

const win = (winner) => {
	if (winner === 'X') {
		xWinScreen.style.display = 'flex';
		xWins++;
		addToStorage('xWins', xWins);
	}
	else {
		oWinScreen.style.display = 'flex';
		oWins++;
		addToStorage('oWins', oWins);
	}
};

const draw = () => {
	drawScreen.style.display = 'flex';
	addToStorage('draws', draws);
};

const addToStorage = (name, item) => localStorage.setItem(name, item.toString());
