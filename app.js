let userscore = 0;
let botscore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //Computer choice
    const compChoice = genCompChoice();
    console.log("Bot Choice =", compChoice);

    if (userChoice === comCHoice){
        //Draw Game
        
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});