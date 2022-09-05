console.log(`Total score 85
Вёрстка соответствует макету. Ширина экрана 390px +48
блок <header> +6
секция preview +9
секция steps +9
секция destinations +9
секция stories +9
блок <footer> +6
Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15
нет полосы прокрутки при ширине страницы от 1440рх до 390px +7
нет полосы прокрутки при ширине страницы от 390px до 320рх +8
На ширине экрана 390рх и меньше реализовано адаптивное меню +22
при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2
при нажатии на бургер-иконку плавно появляется адаптивное меню +4
адаптивное меню соответствует макету +4
при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4
ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню)
при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4
`)

window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.header__links'),
		 hamburger = document.querySelector('.hamburger'),
		 overlay = document.querySelector('.overlay'),
		 modalTrigger = document.querySelectorAll('.login'),
		 modal = document.querySelectorAll('.modal'),
		 modalOverlay = document.querySelector('.modal-overlay'),
		 form = document.querySelector('.modal-form'),
		 toggler = () => {
			  menu.classList.toggle('header__links-active');
			  overlay.classList.toggle('overlay-active');
			  menu.classList.contains('header__links-active') ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
		 },
		 toggleModal = () => {
			  modal.forEach(item => item.classList.toggle('modal-active'));
			  modalOverlay.classList.toggle('modal-overlay-active');
			  modal.forEach(item => item.classList.contains('modal-active') ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '');
		 };

	hamburger.addEventListener('click', toggler);
	menu.childNodes.forEach(item => item.addEventListener('click', toggler));
	overlay.addEventListener('click', toggler);

	modalTrigger.forEach(item => item.addEventListener('click', (event) => {
		 event.preventDefault();
		 toggleModal();
		 console.log(modal.clientWidth);
	}));
	modalOverlay.addEventListener('click', toggleModal);

	const changeBlock = document.querySelectorAll('.change-block'),
		 signUp = document.querySelector('.sign-up'),
		 signUpLink = document.querySelector('.modal__link-signup'),
		 modalTitle = document.querySelector('.modal__title'),
		 button = form.querySelector('#sumbit');


	function changeToSignUp() {
		 if (button.textContent === 'Sign in') {
			  changeBlock.forEach(item => item.style.display = 'none');
			  modalTitle.textContent = 'Create account';
			  signUp.textContent = ` Already have an account? `;
			  signUpLink.textContent = 'Log in';
			  button.textContent = 'Sign Up';
		 } else {
			  changeBlock.forEach(item => item.style.display = 'block');
			  modalTitle.textContent = 'Log in to your account';
			  signUp.textContent = `Don’t have an account?`;
			  signUpLink.textContent = 'Register';
			  button.textContent = 'Sign in';
		 }

	}
	//Change modal window
	signUpLink.addEventListener('click', (e) => {
		 e.preventDefault();
		 changeToSignUp();
	});

	//Вывод данных
	form.addEventListener('submit', (e) => {
		 alert(`Введенные данные:
			  email: ${form.querySelector('[name=email]').value}
			  password: ${form.querySelector('[name=password]').value}`);
	});

	//slider 
	const wrapper = document.querySelector('.destinations__wrapper'),
		 sliderItem = wrapper.querySelectorAll('.destinations__img picture img'),
		 controls = document.querySelectorAll('.destinations__controls-item');

	//desktop
	wrapper.addEventListener('click', (e) => {
		 let sliderMove = sliderItem[1].clientWidth + 60;
		 if (e.target == sliderItem[0]) {
			  wrapper.style.transform = `translateX(${sliderMove}px)`;
			  controls[0].classList.add('destinations__controls-item_active');
			  controls[1].classList.remove('destinations__controls-item_active');
		 } else if (e.target == sliderItem[1]) {
			  wrapper.style.transform = `translateX(0)`;
			  controls[0].classList.remove('destinations__controls-item_active');
			  controls[2].classList.remove('destinations__controls-item_active');
			  controls[1].classList.add('destinations__controls-item_active');
		 } else if (e.target == sliderItem[2]) {
			  wrapper.style.transform = `translateX(-${sliderMove}px)`;
			  controls[2].classList.add('destinations__controls-item_active');
			  controls[1].classList.remove('destinations__controls-item_active');
		 }
	});
	//mobile
	let sliderPos = 1;
	const prev = document.querySelector('.destinations__arrows__prev'),
		 next = document.querySelector('.destinations__arrows__next');

	prev.addEventListener('click', () => {
		 let sliderMove = sliderItem[1].clientWidth + 120;
		 switch (sliderPos) {
			  case 0:
					break;
			  case 1:
					sliderPos--;
					wrapper.style.transform = `translateX(${sliderMove}px)`;
					controls[0].classList.add('destinations__controls-item_active');
					controls[1].classList.remove('destinations__controls-item_active');
					prev.classList.add('destinations__arrows-inactive');
					break;
			  case 2: 
					sliderPos--;
					wrapper.style.transform = `translateX(0)`;
					controls[2].classList.remove('destinations__controls-item_active');
					controls[1].classList.add('destinations__controls-item_active');
					next.classList.remove('destinations__arrows-inactive');
					break;
		 }});
	next.addEventListener('click', () => {
		 let sliderMove = sliderItem[1].clientWidth + 120;
		 switch (sliderPos) {
			  case 0:
					prev.classList.remove('destinations__arrows-inactive');
					sliderPos++;
					wrapper.style.transform = `translateX(0)`;
					controls[0].classList.remove('destinations__controls-item_active');
					controls[1].classList.add('destinations__controls-item_active');
					break;
			  case 1:
					sliderPos++;
					wrapper.style.transform = `translateX(-${sliderMove}px)`;
					controls[2].classList.add('destinations__controls-item_active');
					controls[1].classList.remove('destinations__controls-item_active');
					next.classList.add('destinations__arrows-inactive');
					break;
			  case 2: 
					break;
		 }
	});
});
