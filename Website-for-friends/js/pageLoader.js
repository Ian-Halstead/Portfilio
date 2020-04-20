const load = document.getElementById('load');
const page = document.getElementById('page');

window.addEventListener('load', () => {
	load.style.display = 'none';
	page.style.display = 'block';
	localStorage.setItem('loaded', 1);
});
