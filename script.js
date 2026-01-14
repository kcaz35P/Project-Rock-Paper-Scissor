let humanScore = 0;
let computerScore = 0;
const gameChoice = ["rock", "paper", "scissor"];

function getComputerChoice(){

    return gameChoice[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
  return window.prompt("Rock Paper Scissor");
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()

    if(humanChoice === 'scissor' && computerChoice === 'rock'){
        
    }

}

console.log(getHumanChoice());