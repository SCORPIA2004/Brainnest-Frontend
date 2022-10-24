function playerInput(playerScore, computerScore, roundNum)
{
    let playerSelection = "";
    do
    {
        playerSelection = prompt("Rock, paper or scissors? P: " + playerScore + " C: " + computerScore + " #" + roundNum);
        if(playerSelection != null)
            playerSelection = playerSelection.toLocaleLowerCase();
        if(playerSelection === "scissors")
            playerSelection = "scissor";
    }
    while(playerSelection === null || !(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissor"))
    return playerSelection;
}

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
            break;
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

function game()
{
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = "";
    let computerSelection = "";
    let numOfRounds = 5;

    // play 5 rounds
    for(let i = 0; i < numOfRounds; i++)
    {
        // take inputs
        playerSelection = playerInput(playerScore, computerScore, i + 1);
        computerSelection = computerPlay();
      
        // get result of current round
        result = playRound(playerSelection, computerSelection)

        // display result
        if(result == 0)
        {
            console.log("You WIN! " + playerSelection + " beats " + computerSelection);
            playerScore++;
        }
        else if(result == 1)
        {
            console.log("You LOSE! " + computerSelection + " beats " + playerSelection);
            computerScore++;
        }
        else
        {
            console.log("TIE! " + computerSelection + " = " + playerSelection);
        }
        // display score
        console.log("Player score = " + playerScore);
        console.log("Computer score = " + computerScore);
    }

    // return result
    if(playerScore > computerScore)
        console.log("YOU WIN!");
    else if(playerScore < computerScore)
        console.log("YOU LOSE!")
    else
        console.log("TIE!")
    
}

console.log(game())
