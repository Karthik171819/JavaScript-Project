let userscore = 0;
let botscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "Game Draw Try Again";
    msg.style.backgroundColor = "orange";
    msg.style.color = "blue";
}

const showWinner = (userWin) => {
    if (userWin){
        console.log("you win! ");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    } else {
        console.log("you lost");
        msg.innerText = "You Lost";
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
        showWinner(userWin);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});