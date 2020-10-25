// DOM Elements
const time = document.getElementById('time');
const date = document.getElementById('date');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focusText = document.getElementById('focusText');
const btn = document.getElementById('btn');
const blockquote = document.getElementById('blockquote');
const btnCite = document.getElementById('btn-cite');
const geoLocation = document.getElementById('geo-location');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherData = document.querySelector('.weather-data');
const weatherDescription = document.querySelector('.weather-description');
const weatherWind = document.querySelector('.weatherWind');
const airHumidity = document.querySelector('.air-humadity');

// Options
const dateOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
}
const imageNames = [
    '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg',
    '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg',
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg',
    '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'
];

// State params
state = {
    previousNameValue: '[Enter Name]',
    previousFocusValue: '[Enter Focus]',
    previousLocationValue: '[Enter your location]',
    imagesForToday: generateImageSet(),
    currentImageForToday: 0
};

// util functions
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateImageSet() {
    const result = [];

    for (let i = 0; i < 4; i++) {
        let images = [...imageNames];
        for (let j = 0; j < 6; j++) {
            const randomImageNumber = getRandomInt(images.length);

            if (i === 0) {
                result.push(`./assets/images/night/${images[randomImageNumber]}`);
            } else if (i === 1) {
                result.push(`./assets/images/morning/${images[randomImageNumber]}`);
            } else if (i === 2) {
                result.push(`./assets/images/day/${images[randomImageNumber]}`);
            } else if (i === 3) {
                result.push(`./assets/images/evening/${images[randomImageNumber]}`);
            }

            images.splice(randomImageNumber, 1);
        }
    }

    return result;
}

function checkTimeThenSetBg(today) {
    const hours = today.getHours(),
        minutes = today.getMinutes(),
        seconds = today.getSeconds();

    if (hours === 0 && minutes === 0 && seconds === 0) {
        showDate(today);
        state.imagesForToday = generateImageSet();
        setBgGreet();
    } else if (minutes === 0 && seconds === 0) {
        setBgGreet();
    }
}

// Show Time
function showTime() {
    const today = new Date();
    checkTimeThenSetBg(today);
    time.innerHTML = `${today.toLocaleTimeString('ru')}`;
    setTimeout(showTime, 1000);
}

// Show Date
function showDate(today = new Date()) {
    date.innerHTML = `${today.toLocaleDateString('en', dateOptions)}`;
}

// Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    document.body.style.backgroundImage = `url('${state.imagesForToday[hour]}')`;
    state.currentImageForToday = hour;

    if (hour < 6) {
        // Nigth
        greeting.textContent = 'Good Night, ';
    } else if (hour < 12) {
        // Morning
        greeting.textContent = 'Good Morning, ';
    } else if (hour < 18) {
        // Afternoon
        greeting.textContent = 'Good Afternoon, ';
    } else {
        // Evening
        greeting.textContent = 'Good Evening, ';
    }
}

// nextImage
function nextImage() {
    btn.disabled = true;
    const img = document.createElement('img');
    state.currentImageForToday < (state.imagesForToday.length - 1)
        ? state.currentImageForToday++
        : state.currentImageForToday = 0;
    img.src = state.imagesForToday[state.currentImageForToday];
    img.onload = () => {
        document.body.style.backgroundImage = `url('${img.src}')`;
    }
    setTimeout(function () { btn.disabled = false }, 1500);
}

// Get Name
function getName() {
    const localName = localStorage.getItem('name');

    if (!localName) {
        name.textContent = state.previousNameValue;
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function checkName(e) {
    const input = e.target.innerText.trim();
    if (input !== '') {
        localStorage.setItem('name', input);
    } else {
        name.innerText = state.previousNameValue;
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which === 13 || e.keyCode === 13) {
            checkName(e);
            name.blur();
        }
    } else {
        checkName(e);
    }
}

// Get Focus
function getFocus() {
    const localFocus = localStorage.getItem('focusText');

    if (localFocus === null || localFocus === '') {
        focusText.textContent = state.previousFocusValue;
    } else {
        focusText.textContent = localStorage.getItem('focusText');
    }
}

function checkFocus(e) {
    const input = e.target.innerText.trim();
    if (input !== '') {
        localStorage.setItem('focusText', input);
    } else {
        focusText.innerText = state.previousFocusValue;
    }
}

// Set Focus
function setFocus(e) {
    if (!e.target.innerText) return;
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            checkFocus(e);
            focusText.blur();
        }
    } else {
        checkFocus(e);
    }
}

// Get Location
function getLocation() {
    const localLocation = localStorage.getItem('geoLocation');

    if (localLocation === null || localLocation === '') {
        geoLocation.textContent = state.previousLocationValue;
    } else {
        geoLocation.textContent = localStorage.getItem('geoLocation');
    }
}

function checkLocation(e) {
    const input = e.target.innerText.trim();
    if (input !== '') {
        localStorage.setItem('geoLocation', input);
    } else {
        geoLocation.innerText = state.previousLocationValue;
    }
}

// Set Location
function setLocation(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            checkLocation(e);
            geoLocation.blur();
        }
    } else {
        checkLocation(e);
    }
    getWeather();
}

async function getWeather() {
    const loc = await localStorage.getItem('geoLocation');
    if (loc) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&lang=en&units=metric&appid=bc3a69f0a7473cf055cee87c27b82be9`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.cod === '404') {
            data.message ? weatherDescription.textContent = data.message : null;
            weatherDescription.style.margin = 0;
            weatherIcon.className = '';
            temperature.textContent = '';
            weatherWind.textContent = '';
            airHumidity.textContent = '';
        } else {
            weatherIcon.className = 'weather-icon owf';
            data.weather[0] ? weatherIcon.classList.add(`owf-${data.weather[0].id}`) : null;
            data.main.temp ? temperature.textContent = `${data.main.temp}°C` : null;
            data.weather[0].description ? weatherDescription.textContent = data.weather[0].description : null;
            data.wind.speed ? weatherWind.innerHTML = '<i class="weather-icon owf owf-957 wind-icon"></i>' + data.wind.speed + ' m/s' : null;
            data.main.humidity ? airHumidity.innerHTML = '' + data.main.humidity + ' %' : null;
        }
    }
}

async function getQuote() {
    const url = `https://api.chucknorris.io/jokes/random`;
    const res = await fetch(url);
    const data = await res.json();
    blockquote.textContent = data.value;
}

function nextCite() {
    btnCite.classList.add('rotation');
    setTimeout(() => btnCite.classList.remove('rotation'), 2000);
    return getQuote();
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('focus', () => {
    state.previousNameValue = name.textContent;
    name.textContent = '';
})

focusText.addEventListener('keypress', setFocus);
focusText.addEventListener('blur', e => {
    e.target.innerText == '' ? focusText.innerText = state.previousFocusValue : setFocus(e);
});
focusText.addEventListener('focus', () => {
    state.previousFocusValue = focusText.textContent;
    focusText.textContent = '';
})

geoLocation.addEventListener('keypress', setLocation);
geoLocation.addEventListener('blur', e => {
    e.target.innerText == '' ? geoLocation.innerText = state.previousLocationValue : setLocation(e);
});
geoLocation.addEventListener('focus', () => {
    state.previousLocationValue = geoLocation.textContent;
    geoLocation.textContent = '';
})

btn.addEventListener('click', nextImage);
btnCite.addEventListener('click', nextCite);
document.addEventListener('DOMContentLoaded', getQuote);

// Run
showTime();
showDate();
setBgGreet();
getName();
getFocus();
getLocation();
getWeather();
