const display = document.getElementById('display');
let result = '';
let resultReadable = '';

const addToResult = (item, itemReadable) => {
	checkReset();
	result += item;
	resultReadable += itemReadable;
	display.value = resultReadable;
};

const solve = () => {
	checkReset();
	try {
		result = eval(result);
		resultReadable = result;
		display.value = resultReadable;
	} catch (err) {
		result = '';
		resultReadable = result;
		display.value = 'Not a valid equation. Please clear and try again';
	}
};

const resetResult = () => {
	checkReset();
	result = '';
	resultReadable = '';
	display.value = resultReadable;
};

const deleteOne = () => {
	checkReset();
	result = result.slice(0, -1);
	resultReadable = resultReadable.slice(0, -1);
	display.value = resultReadable;
};

const checkReset = () => {
	if (display.value === 'Not a valid equation. Please clear and try again' || display.value === 'undefined') {
		result = '';
		resultReadable = result;
		display.value = resultReadable;
	}
};

document.addEventListener('keypress', (e) => {
	if (e.keyCode === 13) {
		solve();
		console.log('test');
	}
});
