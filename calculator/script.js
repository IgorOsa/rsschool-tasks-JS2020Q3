const numberButtons = document.querySelectorAll('[data-number]');
const dataOutputCurrent = document.querySelector('[data-output-current]');

const delButton = document.querySelector('[data-delete]');

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // console.log('click', btn.innerHTML);
        dataOutputCurrent.innerHTML += btn.innerHTML;
    })
});

delButton.addEventListener('click', () => {
    console.log('del');
    dataOutputCurrent.innerHTML = dataOutputCurrent.innerHTML.slice(0, -1);
})