let maxRounds = 5;
let roundsPlayed = 0;
let tieScore = 0;
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";

document.getElementById("rockButton").addEventListener("click", e => {
    game("rock")
});
document.getElementById("paperButton").addEventListener("click", e => {
    game("paper")
});
document.getElementById("scissorButton").addEventListener("click", e => {
    game("scissor")
});
document.getElementById("restartButton").addEventListener("click", e =>{
    restart()
});
// document.getElementById("rockButton").onclick = game("rock");
// document.getElementById("paperButton").onclick = game("paper");
// document.getElementById("scissorButton").onclick = game("scissor");
// document.getElementById("restartButton").onclick = restart();


function computerPlay()
{
    randNum = Math.floor(Math.random() * 3);
    switch(randNum)
    {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        default:
            return "scissor";
    }
}

function playRound(playerSelection, computerSelection)
{
    // returns 0 if player wins
    // returns 1 if computer wins
    // returns 2 if tie
    if(playerSelection === computerSelection)
    {
        return 2;
    }
    else if(playerSelection == "rock" && computerSelection == "paper")
    {
        return 1;
    }
    else if(playerSelection == "rock" && computerSelection == "scissor")
    {
        return 0;
    }
    else if(playerSelection == "paper" && computerSelection == "rock")
    {
        return 0;
    }
    else if(playerSelection == "paper" && computerSelection == "scissor")
    {
        return 1;
    }
    else if(playerSelection == "scissor" && computerSelection == "rock")
    {
        return 1;
    }
    else if(playerSelection == "scissor" && computerSelection == "paper")
    {
        return 0;
    }
}


function game(choice)
{
    playerSelection = choice;
    if(roundsPlayed < maxRounds)
    {
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection)

        // display result
        if(result == 0)
        {
            document.getElementById("winLose").innerHTML = playerSelection + " beats " + computerSelection;
            console.log("P: " + playerScore + " | C: " + computerScore);
            playerScore++;
        }
        else if(result == 1)
        {
            document.getElementById("winLose").innerHTML = computerSelection + " beats " + playerSelection;
            console.log("P: " + playerScore + " | C: " + computerScore);
            computerScore++;
        }
        else
        {
            document.getElementById("winLose").innerHTML = computerSelection + " = " + playerSelection;
            console.log("P: " + playerScore + " | C: " + computerScore);
            tieScore++;
        }
        roundsPlayed++;

    }
    if (roundsPlayed >= maxRounds)
    {
        if(playerScore > computerScore)
        {
            document.getElementById("winLose").innerHTML = "You WIN!🥳🧠";
            document.getElementById("winLose").style.color = "#32CD32";
        }
        else if(playerScore < computerScore)
        {
            document.getElementById("winLose").innerHTML = "You LOSE!😒🤖";
            document.getElementById("winLose").style.color = "red";
        }
        else if(playerScore == computerScore)
            document.getElementById("winLose").innerHTML = "You TIED!🫥🤖";
            
        else
            document.getElementById("winLose").innerHTML = "ERROR! P: " +  + playerScore + " | C: " + computerScore;

        document.getElementById("rockButton").disabled = true;
        document.getElementById("paperButton").disabled = true;
        document.getElementById("scissorButton").disabled = true;

    }
    const stats = "Round: " + roundsPlayed + "<br> Your score: " + playerScore + " <br> Bot's score: " + computerScore + "<br> Ties: " + tieScore;
    document.getElementById("statsDiv").innerHTML = stats;
}

function restart()
{
    console.log("RESTART");
    window.location.reload();
}

// function playerInput(playerScore, computerScore, roundNum)
// {
//     // let playerSelection = "";
//     do
//     {
//         // playerSelection = prompt("Rock, paper or scissors? P: " + playerScore + " C: " + computerScore + " : " + roundNum);
//         if(playerSelection != null)
//             playerSelection = playerSelection.toLocaleLowerCase();
//         if(playerSelection === "scissors")
//             playerSelection = "scissor";
//     }
//     while(playerSelection === null || !(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissor"))
//     return playerSelection;
// }

// function restart()
// {
//     playerSelection = "";
//     maxRounds = 5;
//     roundsPlayed = 1;
//     playerScore = 0;
//     computerScore = 0;
//     computerSelection = "";
//     const stats = "P: " + playerScore + " C: " + computerScore + " Round: " + roundsPlayed;
//     document.getElementById("statsDiv").innerHTML = stats;
// }


