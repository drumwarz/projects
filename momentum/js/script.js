const time = document.querySelector('.time');
const dateDay = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherWind = document.querySelector('.wind');
const weatherHumidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');
const city = document.querySelector('.city');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuoteButton = document.querySelector('.change-quote');
const playButton = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
const playListContainer = document.querySelector('.play-list');



const timeOfDay = getTimeOfDay();
const greetingText = `Good ${timeOfDay}`;





function showTime() {
	const date = new Date();
	const currentTime = date.toLocaleTimeString([], { hour12: false });
	time.textContent = currentTime;
	setTimeout(showTime, 1000);
	showDay();
	showGreeting();
 };
 showTime();

 
 function showDay() {
	const date = new Date();
	const options = {weekday: 'long', month: 'long', day: 'numeric'};
	const currentDate = date.toLocaleDateString('en-US', options);
	dateDay.textContent = currentDate;
};



function getTimeOfDay() {
	const date = new Date();
	const hours = date.getHours();
	if (hours > 5 && hours < 12) {
		 return 'Morning';
	} else if (hours > 11 && hours < 18) {
		 return 'Afternoon';
	} else if (hours > 17 && hours < 24) {
		 return 'Evening';
	} else if (hours > 24 || hours < 6) {
		 return 'Night';
	}
};

function showGreeting() {
	const timeOfDay = getTimeOfDay();
	greeting.textContent = `Good ${timeOfDay},`;
};




function setLocalStorage() {
	const name = document.querySelector('.name');
	localStorage.setItem('name', name.value);
 }
 window.addEventListener('beforeunload', setLocalStorage);

 function getLocalStorage() {
	const name = document.querySelector('.name');
	if(localStorage.getItem('name')) {
	  name.value = localStorage.getItem('name');
	}
 }
 window.addEventListener('load', getLocalStorage);





 
 function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

let randomNum = getRandomNum(1, 20);

function setBg() {
	let timeOfDay = getTimeOfDay().toLowerCase();
	randomNum = randomNum.toString().padStart(2, '0');
	const img = new Image();
	img.src = `https://raw.githubusercontent.com/drumwarz/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`; 
	img.onload = () => {      
	body.style.backgroundImage = `url(${img.src})`;
 };
};

setBg();

function getSlideNext() {
	if (randomNum < 20) {
	randomNum++;
	} else randomNum = 1;
	setBg();
};

function getSlidePrev() {
	if (randomNum > 1) {
	randomNum--;
	} else 
	randomNum = 20;
	setBg();
};

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);





async function getWeather() {
	try {
	if (city.value.length === 0) {
	city.value = 'Minsk'; 
};
	if (city.value.match(/\s/)) {
		 city.value.replace(/\s/g, '');
	}
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=dcffe112a69e468b9166c8c867a72c02&units=metric`;
	const res = await fetch(url);
	const data = await res.json(); 
	weatherIcon.className = 'weather-icon owf';
	weatherIcon.classList.add(`owf-${data.weather[0].id}`);
	weatherError.textContent = '';
	temperature.textContent = `${Math.round(data.main.temp)}°C`;
	weatherDescription.textContent = data.weather[0].description;
	weatherWind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
	weatherHumidity.textContent = `Humidity: ${Math.round(data.main.humidity)} %`;
 } catch {
	alert (`Sorry! ${city.value} not found`);
	weatherError.textContent = 'City not found';
	temperature.textContent = '';
	weatherDescription.textContent = '';
	weatherWind.textContent = '';
	weatherHumidity.textContent = '';
 }
};
 getWeather();

 city.addEventListener('change', getWeather);

 function setLocalStorageCityWeather() {
	localStorage.setItem('city', city.value);
 };

window.addEventListener('beforeunload', setLocalStorageCityWeather);

 function getLocalStorageCityWeather() {
	if(localStorage.getItem('city')) {
	  city.value = localStorage.getItem('city');
	}
 };

window.addEventListener('load', getLocalStorageCityWeather);


let randomNumQuote = getRandomNum(0, 1643);

async function getQuotes() {  
    const url = 'https://type.fit/api/quotes';
    const res = await fetch(url);
    const data = await res.json();
    let randomNumQuote = getRandomNum(0, data.length);
    quote.textContent = data[randomNumQuote].text;
    author.textContent = data[randomNumQuote].author;
  }
  getQuotes();

changeQuoteButton.addEventListener('click', getQuotes);


