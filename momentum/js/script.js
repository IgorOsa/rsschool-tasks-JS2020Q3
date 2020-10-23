// DOM Elements
const time = document.getElementById('time');
const date = document.getElementById('date');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focusText = document.getElementById('focusText');
const btn = document.getElementById('btn');
const blockquote = document.getElementById('blockquote');
const figcaption = document.getElementById('figcaption');
const btnCite = document.getElementById('btn-cite');

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
    date.innerHTML = `${today.toLocaleDateString('ru', dateOptions)}`;
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
    state.currentImageForToday < (state.imagesForToday.length - 1)
        ? state.currentImageForToday++
        : state.currentImageForToday = 0;
    document.body.style.backgroundImage = `url('${state.imagesForToday[state.currentImageForToday]}')`;
    btn.disabled = true;
    setTimeout(function () { btn.disabled = false }, 1000);
}

// Get Name
function getName() {
    const localName = localStorage.getItem('name');

    if (localName === null || localName === '') {
        name.textContent = stet.previousNameValue;
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
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

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focusText', e.target.innerText);
            focusText.blur();
        }
    } else {
        localStorage.setItem('focusText', e.target.innerText);
    }
}

async function getQuote() {
    const url = `https://api.chucknorris.io/jokes/random`;
    const res = await fetch(url);
    const data = await res.json();
    blockquote.textContent = data.value;
}

function nextCite() {
    return getQuote();
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', e => {
    e.target.innerText == '' ? name.innerText = state.previousNameValue : setName(e);
});
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

btn.addEventListener('click', nextImage);

btnCite.addEventListener('click', nextCite);

document.addEventListener('DOMContentLoaded', getQuote);

// Run
showTime();
showDate();
setBgGreet();
getName();
getFocus();
