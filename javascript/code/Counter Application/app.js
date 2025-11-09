const number = document.querySelector('h1')

console.log(number)
console.log(number.textContent)

function decreaseHandler() {
    // if (+number.textContent > 0) {

    //     // number.textContent = number.textContent - 1
    //     // number.textContent -= 1
    //     --number.textContent
    // }
    // condition ? execution1 : execution2

    // &&
    +number.textContent > 0 && --number.textContent
}
function resetHandler() {
    number.textContent = 0
}
function increaseHandler() {
    // if (+number.textContent < 10) {
    //     // number.textContent = number.textContent + 1
    //     // number.textContent += 1
    //     ++number.textContent
    // }

    // && -->> true && execution2
    +number.textContent < 10 && ++number.textContent
}