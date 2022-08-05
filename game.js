const plays=["Rock","Paper","Scissors"];


function getComputerChoice(){
    let index=getRandomNumber(0,2)
    return plays[index];

}

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}