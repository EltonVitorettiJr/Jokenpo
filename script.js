let imgHumanChoose = document.querySelector(`.img-human-choose`)
let imgComputerChoose = document.querySelector(`.img-computer-choose`)
const subtitleWinner = document.querySelector(`.subtitle-winner`)
let humanScore = document.querySelector(`.human-score`)
let computerScore = document.querySelector(`.computer-score`)
let humanCounter = 0
let computerCounter = 0


function computerChoose() {
    const chooses = [`rock`, `paper`, `scissors`]
    return chooses[Math.floor(Math.random() * 3)]
}

function jokenpo(humanChoose, computerChoose) {


    function changeImages() {

        if (humanChoose === `rock`) {
    
            imgHumanChoose.src = `assets/Rock.png`
    
        } else if (humanChoose === `paper`) {
    
            imgHumanChoose.src = `assets/paper.png`
            
        } else {
    
            imgHumanChoose.src = `assets/scissors.png`
    
        }

        if (computerChoose === `rock`) {
    
            imgComputerChoose.src = `assets/Rock.png`
    
        } else if (computerChoose === `paper`) {
    
            imgComputerChoose.src = `assets/paper.png`
            
        } else {
    
            imgComputerChoose.src = `assets/scissors.png`
    
        }
    }

    if (humanChoose === computerChoose) {

        subtitleWinner.innerHTML = (`draw, play again!`)
        changeImages()

    } else if (humanChoose === `rock` && computerChoose === `scissors` || humanChoose === `scissors` && computerChoose === `paper` || humanChoose === `paper` && computerChoose === `rock`) {

        subtitleWinner.innerHTML = (`you won, congratulations!`)
        humanScore.innerHTML = ++humanCounter
        changeImages()

    } else {

        subtitleWinner.innerHTML = (`computer won, try again!`)
        computerScore.innerHTML = ++computerCounter
        changeImages()
        
    }
}

function resetScore() {

    humanScore.innerHTML = 0
    humanCounter = 0

    computerScore.innerHTML = 0
    computerCounter = 0
}