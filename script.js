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

    if(
        (humanChoice === 'scissor' && computerChoice === 'rock') ||
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissor')
    ){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++; 
    }
    else if(humanChoice === computerChoice){
        console.log(`It's a Draw! You both chose ${humanChoice}`);
    }
    
    else{
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
}


function playGame(){

    for(let i = 1; i <= 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    const result = humanScore > computerScore ? "Congratulations You Won!!! :>" : "You Lost :< ";  
    console.log(result);
}

playGame();