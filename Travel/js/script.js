


window.addEventListener('DOMContentLoaded',() =>{
	const menu = document.querySelector('.menu__list'),
			burger = document.querySelector('.burger'),
			overlay = document.querySelector('.overlay'),
			modalTrigger = document.querySelectorAll('.login'),
			modal = document.querySelectorAll('.modal'),
			modalOverlay = document.querySelector('.modal-overlay'),
			form = document.querySelector('.modal-form'),
			toggler=()=>{
			  menu.classList.toggle('menu__list-active');
			  overlay.classList.toggle('overlay-active');
			  menu.classList.contains('menu__list-active') ? document.body.style.overflow = 'hidden' : document.body.style.overflow ='';
		 };
		 toggleModal = () => {
			modal.forEach(item => item.classList.toggle('modal-active'));
			modalOverlay.classList.toggle('modal-overlay-active');
			modal.forEach(item => item.classList.contains('modal-active') ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '');
	  };
			  
	burger.addEventListener('click',toggler);
	menu.childNodes.forEach(item=>item.addEventListener('click', toggler));   
	overlay.addEventListener('click',toggler);





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

signUpLink.addEventListener('click', (e) => {
	e.preventDefault();
	changeToSignUp();
});


form.addEventListener('submit', (e) => {
	alert(`Введенные данные:
		 email: ${form.querySelector('[name=email]').value}
		 password: ${form.querySelector('[name=password]').value}`);
});


    const slider = document.querySelector('.swiper-slide'),
        sliderItem = slider.querySelectorAll('.destinations__image picture img'),
        controls = document.querySelectorAll('.destinations__controls-item');

 


    slider.addEventListener('click', (e) => {
        let sliderMove = sliderItem[1].clientWidth + 60;
        if (e.target == sliderItem[0]) {
			slider.style.transform = `translateX(${sliderMove}px)`;
            controls[0].classList.add('destinations__controls-item_active');
            controls[1].classList.remove('destinations__controls-item_active');
        } else if (e.target == sliderItem[1]) {
			slider.style.transform = `translateX(0)`;
            controls[0].classList.remove('destinations__controls-item_active');
            controls[2].classList.remove('destinations__controls-item_active');
            controls[1].classList.add('destinations__controls-item_active');
        } else if (e.target == sliderItem[2]) {
			slider.style.transform = `translateX(-${sliderMove}px)`;
            controls[2].classList.add('destinations__controls-item_active');
            controls[1].classList.remove('destinations__controls-item_active');
        }
    });


	 
		  let sliderPos = 1;
		  const prev = document.querySelector('.destinations__arrows__prev'),
				next = document.querySelector('.destinations__arrows__next');
	 
		  prev.addEventListener('click', () => {
				let sliderMove = sliderItem[1].clientWidth + 60;
				switch (sliderPos) {
					 case 0:
						  break;
					 case 1:
						  sliderPos--;
						  slider.style.transform = `translateX(${sliderMove}px)`;
						  controls[0].classList.add('destinations__controls-item_active');
						  controls[1].classList.remove('destinations__controls-item_active');
						  prev.classList.add('destinations__arrows-inactive');
						  break;
					 case 2: 
						  sliderPos--;
						  slider.style.transform = `translateX(0)`;
						  controls[2].classList.remove('destinations__controls-item_active');
						  controls[1].classList.add('destinations__controls-item_active');
						  next.classList.remove('destinations__arrows-inactive');
						  break;
				}});
		  next.addEventListener('click', () => {
				let sliderMove = sliderItem[1].clientWidth + 60;
				switch (sliderPos) {
					 case 0:
						  prev.classList.remove('destinations__arrows-inactive');
						  sliderPos++;
						  slider.style.transform = `translateX(0)`;
						  controls[0].classList.remove('destinations__controls-item_active');
						  controls[1].classList.add('destinations__controls-item_active');
						  break;
					 case 1:
						  sliderPos++;
						  slider.style.transform = `translateX(-${sliderMove}px)`;
						  controls[2].classList.add('destinations__controls-item_active');
						  controls[1].classList.remove('destinations__controls-item_active');
						  next.classList.add('destinations__arrows-inactive');
						  break;
					 case 2: 
						  break;
				}
		  });
		});
	 

