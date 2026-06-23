const themeBtn = document.getElementById('theme-btn')
const darkSvg = document.getElementById('dark-svg')
const lightSvg = document.getElementById('light-svg')
const incrementBtn = document.getElementById('js-increment')
const decrementBtn = document.getElementById('js-decrement')
const resetBtn = document.getElementById('js-reset')
const counter = document.getElementById('counter')

let count = 0
let darkMode = true

themeBtn.addEventListener('click', () => {
    darkMode = !darkMode
    document.body.classList.toggle('light-mode')

    if(!darkMode) {
        darkSvg.style.display = 'block'
        lightSvg.style.display = 'none'
    } else {
        darkSvg.style.display = 'none'
        lightSvg.style.display = 'block'
    }
})

incrementBtn.addEventListener('click', () => {
    count++
    counterDisplay()
})

decrementBtn.addEventListener('click', () => {
    if(count > 0) {
        count--
        counterDisplay()
    }
})

resetBtn.addEventListener('click', () => {
    count = 0
    counter.textContent = `Click '+' to start counting`
    counter.style.fontSize = '1.75rem'
})

function counterDisplay() {
    counter.textContent = count
    counter.style.fontSize = '5rem'
}