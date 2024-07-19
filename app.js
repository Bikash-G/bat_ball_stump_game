let userScore = 0;
let compScore = 0;

const options = document.querySelectorAll(".option");

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

genCompChoice = () => {
    const choices = ["bat", "ball", "stump"];
    let ranIdx = Math.floor(Math.random() * 3);
    return choices[ranIdx];
}

const drawCase = () => {
    console.log("Draw");
    msg.innerText = "Game was draw. Play Again:";
    msg.style.backgroundColor = "rgb(238, 176, 176);";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("You Win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        userScore++;
        userScorePara.innerText = userScore;
    }else{
        console.log("You Lose");
        msg.innerText = `You Lost! ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        compScore++;
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    let compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    let userWin = true;
    if(userChoice === compChoice){
        drawCase();
    }else {
        if(userChoice === "bat"){
            //ball, stump
            if(compChoice === "ball"){
                userWin = true;
            }else{
                userWin = false;
            }
        }else if(userChoice === "ball"){
            //bat, stump
            if(compChoice === "bat"){
                userWin = false;
            }else {
                userWin = true;
            }
        }else {
            //bat, ball
            if(compChoice === "bat"){
                userWin = true;
            }else {
                userWin = false;
            }
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

options.forEach((option) => {
    option.addEventListener("click", () => {
        const optionId = option.getAttribute("id");
        playGame(optionId);
    });
})