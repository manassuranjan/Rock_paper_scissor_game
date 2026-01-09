let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const genComputerChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game Draw");
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor ="#081b31";
    
}


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++
        userScorePara.innerText = userScore
        console.log("you win")
        msg.innerText = `you win ( ${userChoice} beats ${compChoice})`;
        msg.style.backgroundColor = "green"
        
    }
    else{
        compScore++
        compScorePara.innerText = compScore
        console.log("you lose");
        msg.innerText = "you lose"
        msg.style.backgroundColor = "red"
        msg.innerText = `you lose ( ${compChoice} beats ${userChoice})`;
    }
}

const playGame = (userChoice) =>{
    console.log("User choice = ", userChoice);
    //Generate computer choice -> modular
    const compChoice = genComputerChoice() 
    
    console.log("computer choice = ", compChoice)

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor, paper
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper" ){
            //rock,scissor
            userWin= compChoice === "scissors" ? false: true;
        }
        else{
           //rock,paper 
           userWin = compChoice === "rock"? false: true;
        }

        showWinner(userWin, userChoice, compChoice)
    }
}


choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        })
})