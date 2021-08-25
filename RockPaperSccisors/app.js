const userScore = document.getElementById('user')
const pcScore = document.getElementById('pc')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const scoreDisplay = document.getElementById('display')
const btn = document.getElementById('btn')
const score = document.getElementById('score')

let uScore = 0
let pScore = 0

btn.addEventListener('click', () => {
    return addEvents(), game(userChoice)
})

function getComputerChoices() {
    const pcElements = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * 3)
    return pcElements[random]
}

function game(userChoice) {
    const computerChoice = getComputerChoices()
    if ((computerChoice == 'rock' & userChoice == 'rock' )  ||
        (computerChoice == 'paper' & userChoice == 'paper') || 
        (computerChoice == 'scissors' & userChoice == 'scissors')) {
        score.innerHTML = `Win Win`
    } else if ((computerChoice == 'rock' & userChoice == 'paper') ||
               (computerChoice == 'paper' & userChoice == 'scissors')  || 
               (computerChoice == 'scissors' & userChoice == 'rock') ) {
        uScore++
        userScore.innerHTML = uScore
        score.innerHTML = 'You win'
    } else  {
        pScore++
        pcScore.innerHTML = pScore
        score.innerHTML = "Computer wins"
    }
}

function addEvents() {
    rock.addEventListener('click', () => {
        game("rock")
    })
    paper.addEventListener('click', () => {
        game("paper")
    })
    scissors.addEventListener('click', () => {
        game("scissors")
    })


}
