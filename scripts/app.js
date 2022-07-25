let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.header__icon');
let menuBtnIcon = document.querySelector('.header__icon i');

menuBtn.addEventListener('click', function (e) {
	if (menuBtnIcon.classList.contains('fa-bars')) {
		menuBtnIcon.classList = 'fa fa-times';
		menu.style.left = '0';
	} else {
		menuBtnIcon.classList = 'fa fa-bars';
		menu.style.left = '-256px';
	}
});
