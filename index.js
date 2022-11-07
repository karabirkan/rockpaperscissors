
let answer = ["rock","paper","scissors"];

let getComputerChoice = answer[Math.floor(Math.random()* answer.length)];


function playRound(playerSelection, computerSelection){

        if (playerSelection === "rock" && computerSelection === "scissors"){

            return "what??";
        }
        else {
    
            return "You Lose! Paper beats Rock";
        }
        
        }
        
    
         
playRound("rock",getComputerChoice);



function game(){

for (let playRound = 0; playRound<5; playRound++)

console.log(playRound)


} 




function game(){
for(let i=0; i<5; i++){


  //  alert(playRound("rock", getComputerChoice));

}

}

game(); 
