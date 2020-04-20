/* 
* What the code does and psudo code

* This script will loop through all the items in .gallery
* and store them into images. It sorts the items based
* on their width and starts a foreach loop through the 
* items array. Remove first element 

*/

window.addEventListener('load', () => {
	const gallery = document.getElementById('gallery');
	const MARGIN = gallery.offsetWidth / 10;
	const imagesHTML = gallery.getElementsByTagName('img');
	let images = [].slice.call(imagesHTML);
	images.sort((a, b) => a.width - b.width);
	let min;
	let max;
	let closest = [];

	const binarySearch = (value, arr, target, margin) => {
		let mid = Math.floor((min + max) / 2);

		if (max < min) {
			return -1;
		}
		else if (arr[mid].width + value < target - margin) {
			min = mid + 1;
			return binarySearch(value, arr, target, margin);
		}
		else if (arr[mid].width + value > target) {
			max = mid - 1;
			return binarySearch(value, arr, target, margin);
		}
		else {
			images.splice(mid, 1);
			return mid;
		}
	};

	images.forEach((value, id) => {
		images = images.slice(1);
		console.log(value.width);
		let target = gallery.offsetWidth - value.width;

		min = 0;
		max = images.length - 1;
		closest = [];
		let finalId = binarySearch(value.width, images, 582, MARGIN);

		if (finalId === -1) {
			images.forEach((value) => closest.push(value));
			console.log(closest);
		}
		else {
			console.log('finalId: ', finalId);
			console.log('Widths Added: ', value.width + images[finalId].width);
			console.log('target :', target);
			console.log('MARGIN :', MARGIN);
		}
	});
});

// ! THE PROGRAM FINALLY WOKS!!!!!! NOW YOU KNOW IF 2 IMGS WORK TOGETHER AND NEED TO GET IT WORKING FOR MORE THAN 2
