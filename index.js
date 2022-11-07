// Computer will pick one of those value in the answer variable. 
let answer = ["rock", "paper", "scissors"];

let getComputerChoice = answer[Math.floor(Math.random() * answer.length)];

// We will find the winner and the looser with this playRound function.
function playRound(playerSelection, computerSelection) {

    //let playerSelection = prompt("What do you pick?");
    // Rock wins against Scissors.
    // Scissors wins against Paper.
    // Paper wins against Rock.

    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {

        return "Player Won";
    }

    else if (playerSelection === "scissors" && computerSelection === "rock" ||
        playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors") {

        return "Player Lost"

    }
    else {

        return "Try Again. You both picked the same answer!";
    }

}


/*console.log(playRound(getComputerChoice,getComputerChoice));


playRound("",getComputerChoice);



function game(){

for (let playRound = 0; playRound<5; playRound++)

console.log(playRound)


} 




function game(){
for(let i=0; i<155; i++){


 console.log(playRound("rock", getComputerChoice));

}

}

game();  */
