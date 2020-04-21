const game = document.getElementById('game');
const columnsHTML = game.getElementsByClassName('column');
const columns = Array.from(columnsHTML);
let isXTurn = false;
const grid = [ [ '', '', '' ], [ '', '', '' ], [ '', '', '' ] ];
let columnsArray = [];
columnsArray.push(columns.slice(0, 3));
columnsArray.push(columns.slice(3, 6));
columnsArray.push(columns.slice(6, 9));

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
	if (grid[0][0] === textContent && grid[0][1] === textContent && grid[0][2] === textContent) {
		console.log('Win');
	}
	if (grid[1][0] === textContent && grid[1][1] === textContent && grid[1][2] === textContent) {
		console.log('Win');
	}
	if (grid[2][0] === textContent && grid[2][1] === textContent && grid[2][2] === textContent) {
		console.log('Win');
	}

	if (grid[0][0] === textContent && grid[1][0] === textContent && grid[2][0] === textContent) {
		console.log('Win');
	}
	if (grid[0][1] === textContent && grid[1][1] === textContent && grid[2][1] === textContent) {
		console.log('Win');
	}
	if (grid[0][2] === textContent && grid[1][2] === textContent && grid[2][2] === textContent) {
		console.log('Win');
	}

	if (grid[0][0] === textContent && grid[1][1] === textContent && grid[2][2] === textContent) {
		console.log('Win');
	}
	if (grid[0][2] === textContent && grid[1][1] === textContent && grid[2][0] === textContent) {
		console.log('Win');
	}

	for (let k = 0; k < 3; k++) {
		for (let l = 0; l < 3; l++) {
			if (grid[k][l]) {
				count++;
			}
		}
	}

	if (count === 9) {
		draw();
	}
};

const win = (winner) => {
	if (winner === x) {
	}
	else {
	}
};

const draw = () => {
	location.reload();
};
