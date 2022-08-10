const plays=["Rock","Paper","Scissors"];
const display = document.getElementById("display");
let playerScore=0;
let computerScore=0;
const displayPlayerScore=document.querySelector("#playerscore");
const displayComputerScore=document.querySelector("#computerscore");

function getComputerChoice(){
    let index=getRandomNumber(0,2)
    return plays[index];

}

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function playRound(playerSelection,computerSelection){

    playerSelection = playerSelection.toLowerCase()
    console.log(computerSelection);
    if (computerSelection==="Rock"){
        if (playerSelection==="rock")  {return ("It's a draw")}
        else if(playerSelection==="scissors") {computerScore+=1;return ("You Lose! Rock beats Scissors!")}
        else {playerScore+=1;return ("You Win! Paper beats Rock!")}
    }

    else if(computerSelection==="Scissors"){
        if (playerSelection==="rock")  {playerScore+=1;return ("You Win! Rock beats Scissors!")}
        else if(playerSelection==="scissors") {return ("It's a draw")}
        else {computerScore+=1;return ("You Lose! Scissors beat Paper!")}
    }

    else{
        if (playerSelection==="rock")  {computerScore+=1;return ("You Lose! Paper beats Rock!")}
        else if(playerSelection==="scissors") {playerScore+=1;return ("You Win! Scissors beat Paper!")}
        else {return ("It's a draw")}
    }
}


function game(){
    playerScore=0;
    computerScore=0;
    displayPlayerScore.textContent= playerScore;
    displayComputerScore.textContent =computerScore;
    display.textContent= "The game has started !";
    setTimeout(()=>display.textContent= "",1000);
    const playbuttons= document.querySelectorAll(".play");
    playbuttons.forEach(button=>button.disabled=false);
   
}

function getPlayerChoice(){
    let text;
    if (this.id==="rock"){text= playRound("rock",getComputerChoice());}
    else if(this.id==="paper"){text = playRound("paper",getComputerChoice());}    
    else{text = playRound("scissors",getComputerChoice());} 
    display.textContent = text;
    checkWinner(playerScore,computerScore);
}

function checkWinner(pScore,cScore){
    displayPlayerScore.textContent= playerScore;
    displayComputerScore.textContent =computerScore;
    if(pScore===5||cScore===5){
        if(pScore===5) { alert("Congratulations you won the game!");}
        else{alert("Unfortunately you lost the game!");}
        playbuttons.forEach(button=>button.disabled=true);
    }
}

//Starting game logic
const start = document.querySelector("#start");
start.addEventListener("click",game);

const playbuttons= document.querySelectorAll(".play");
playbuttons.forEach(button=>button.disabled=true);
playbuttons.forEach((button)=>button.addEventListener("click",getPlayerChoice));

