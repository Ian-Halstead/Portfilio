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
				isXTurn = !isXTurn;
			}
			columnsArray[i][j].appendChild(text);
		});
	}
}

const gameLogic = () => {
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (grid[i][j] === textContent) {
			}
		}
	}
};
