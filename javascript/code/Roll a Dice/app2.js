const gameStatsList = JSON.parse(localStorage.getItem('gameStatsList')) || []

const myUl = document.querySelector('ul')

const myList = gameStatsList.map(function (statList) {
    return `<li>${statList}</li>`
})

myUl.innerHTML = myList