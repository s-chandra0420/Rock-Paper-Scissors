let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-score");

const compChoice = () =>{
    // rock, paper, scissors
    const options = ["Rock", "Paper", "Scissors"];
    const choicebycomp = Math.floor(Math.random()*3);
    return options[choicebycomp];
}

const drawGame = () =>{
    console.log("Game is drawn");
    drawScore++;
    drawScorePara.innerText = drawScore;
    msg.innerText = "Game is drawn, try again.";
    msg.style.backgroundColor = "orange";
}

const showWinner = (userWin, choiceID, compID) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win :)");
        msg.innerText = `You win! You beat ${compID}! :)`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lost :(");
        msg.innerText = `You lost to ${compID} :(`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (choiceID) =>{
    console.log(`user choice = ${choiceID}`)
    // generate computer choice
    const compID = compChoice();
    console.log(`computer choice = ${compID}`);

    if(choiceID === compID){
        drawGame()
    } else{
        let userWin = true;
        if(choiceID === "Rock"){
            userWin = compID === "Paper" ? false : true;
        } else if(choiceID === "Paper"){
            userWin = compID === "Scissors" ? false : true;
        } else{
            userWin = compID === "Rock" ? false : true;
        }
        showWinner(userWin, choiceID, compID);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const choiceID = choice.getAttribute("id")
        // console.log(`choice ${choiceID} was clicked`);
        playGame(choiceID)
    });
});