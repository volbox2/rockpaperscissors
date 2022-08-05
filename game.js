const plays=["Rock","Paper","Scissors"];


function getComputerChoice(){
    let index=getRandomNumber(0,2)
    return plays[index];

}

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function playRound(playerSelection,computerSelection){

    playerSelection = playerSelection.toLowerCase()
    if (computerSelection==="Rock"){
        if (playerSelection==="rock")  {console.log("It's a draw")}
        else if(playerSelection==="scissors") {console.log("You Lose! Rock beats Scissors!")}
        else {console.log("You Win! Paper beats Rock!")}
    }

    else if(computerSelection==="Scissors"){
        if (playerSelection==="rock")  {console.log("You Win! Rock beats Scissors!")}
        else if(playerSelection==="scissors") {console.log("It's a draw")}
        else {console.log("You Lose! Scissors beat Paper!")}
    }

    else{
        if (playerSelection==="rock")  {console.log("You Lose! Paper beats Rock!")}
        else if(playerSelection==="scissors") {console.log("You Win! Scissors beat Paper!")}
        else {console.log("It's a draw")}
    }
}


function game(){
    for (let i=0;i<5;++i){
        let player= prompt("Let's play a game of Rock,Paper,Scissors! What do you want to play?")
        playRound(player,getComputerChoice())
    }
}

game()