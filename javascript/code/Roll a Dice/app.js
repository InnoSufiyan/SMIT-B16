var player1Name = prompt("What is your player 1 name??")
var player2Name = prompt("What is your player 2 name??")

var player1NameUI = document.querySelector('#player1Name')
var player2NameUI = document.querySelector('#player2Name')

player1NameUI.textContent = player1Name
player2NameUI.textContent = player2Name

var gameStatsList = JSON.parse(localStorage.getItem('gameStatsList')) || []


var playerTurn = true

var rollDice = document.querySelector('#rollDice')
var holdDice = document.querySelector('#holdDice')
var resetGame = document.querySelector('#resetGame')

var winningScore = 20

var diceImg = document.querySelector('img')

var player1CurrentScore = 0
var player2CurrentScore = 0

var player1TotalScore = 0
var player2TotalScore = 0

var player1CurrentScoreUI = document.querySelector('#player1CurrentScoreUI')
var player2CurrentScoreUI = document.querySelector('#player2CurrentScoreUI')

var player1TotalScoreUI = document.querySelector('#player1TotalScoreUI')
var player2TotalScoreUI = document.querySelector('#player2TotalScoreUI')

var player1 = document.querySelector('#player1')
var player2 = document.querySelector('#player2')

player1.classList.toggle('active')


rollDice.addEventListener('click', function () {
    console.log("==>> click horaha")
    var diceNumber = Math.ceil(Math.random() * 6)
    console.log(diceNumber, "==>> diceNumber")
    diceImg.src = `./assets/${diceNumber}.png`

    if (diceNumber == 1) {
        player1.classList.toggle('active')
        player2.classList.toggle('active')
        if (playerTurn) {
            player1CurrentScore = 0
            player1CurrentScoreUI.textContent = 0
        } else {
            player2CurrentScore = 0
            player2CurrentScoreUI.textContent = 0
        }
        playerTurn = !playerTurn
        return
    }


    if (playerTurn) {
        player1CurrentScore += diceNumber
        player1CurrentScoreUI.textContent = player1CurrentScore
    } else {
        player2CurrentScore += diceNumber
        player2CurrentScoreUI.textContent = player2CurrentScore
    }

})

holdDice.addEventListener('click', function () {
    console.log("==>> hold dice per click huwa")
    if (playerTurn) {
        player1TotalScore += player1CurrentScore
        player1CurrentScore = 0
        player1CurrentScoreUI.textContent = 0
        player1TotalScoreUI.innerHTML = player1TotalScore

        if (player1TotalScore >= winningScore) {
            alert(`${player1Name} won the match`)
            gameStatsList.push(`${player1Name} won the match against ${player2Name}`)

            localStorage.setItem('gameStatsList', JSON.stringify(gameStatsList))
        }

    } else {
        player2TotalScore += player2CurrentScore
        player2CurrentScore = 0
        player2CurrentScoreUI.textContent = 0
        player2TotalScoreUI.innerHTML = player2TotalScore
        if (player2TotalScore >= winningScore) {
            alert(`${player2Name} won the match`)
            gameStatsList.push(`${player2Name} won the match against ${player1Name}`)

            localStorage.setItem('gameStatsList', JSON.stringify(gameStatsList))
        }


    }



    playerTurn = !playerTurn
    player1.classList.toggle('active')
    player2.classList.toggle('active')
})

resetGame.addEventListener('click', function () {
    player1CurrentScore = 0
    player2CurrentScore = 0
    player1TotalScore = 0
    player2TotalScore = 0
    player1CurrentScoreUI.innerHTML = 0
    player2CurrentScoreUI.innerHTML = 0
    player1TotalScoreUI.innerHTML = 0
    player2TotalScoreUI.innerHTML = 0

    player1.classList.add('active')
    player2.classList.remove('active')

    var player1Name = prompt("What is your player 1 name??")
    var player2Name = prompt("What is your player 2 name??")
    player1NameUI.textContent = player1Name
    player2NameUI.textContent = player2Name

})