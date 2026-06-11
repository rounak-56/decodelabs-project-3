const incrementBtn = document.getElementById('js-increment')
const decrementBtn = document.getElementById('js-decrement')
const resetBtn = document.getElementById('js-reset')
const counter = document.getElementById('counter')

let count = 0
let darkMode = true

incrementBtn.addEventListener('click', () => {
    count++
    counterDisplay()
})

decrementBtn.addEventListener('click', () => {
    count--
    counterDisplay()
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