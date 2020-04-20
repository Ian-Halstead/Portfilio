const nav = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', (e) => {
	if (nav.classList.contains('nav-anim')) {
		nav.classList.remove('nav-anim');
		//I don't know why this line is required but without it the animation only plays once then never again. go to https://css-tricks.com/restart-css-animation/ for a little more info
		void nav.offsetWidth;
		nav.classList.add('nav-anim-hide');
	}
	else {
		nav.classList.remove('nav-anim-hide');
		//I don't know why this line is required but without it the animation only plays once then never again. go to https://css-tricks.com/restart-css-animation/ for a little more info
		void nav.offsetWidth;
		nav.classList.add('nav-anim');
	}

	document.body.style.overflowY = 'hidden';
});
