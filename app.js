let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector("#user-score");
const botScorePara = document.querySelector('#bot-score');

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    //console.log("game was draw.");
    msg.innerText = "Game Draw Try Again";
    msg.style.backgroundColor = "orange";
    msg.style.color = "blue";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        botScore++;
        botScorePara.innerText = botScore;
        msg.innerText = `You Lost ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //Computer choice
    const compChoice = genCompChoice();
    console.log("Bot Choice =", compChoice);

    if (userChoice === compChoice){
        //Draw Game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor, paper
            userWin = compChoice === "paper" ? false : true ;
        } else if (userChoice === "paper") {
            //rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});