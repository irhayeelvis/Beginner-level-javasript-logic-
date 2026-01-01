let computer = ["rock", "paper", "scissors"];
let randNum = Math.random();
let logicNum = Math.floor(randNum * 2);
let userOutput;
let message;
let userInput = prompt("Rock, Paper, or Scissors");

if (userInput === computer[0]) {
    userOutput = computer[0];
} else if (userInput === computer[1]) {
    userOutput = computer[1];
} else if (userInput === computer[2]) {
    userOutput = computer[2];
} else {
    alert(`${userInput} isn't among the options`);
};

let playerOpt = computer.indexOf(userOutput);
let computerOutput = computer[logicNum];
let computerOpt = computer.indexOf(computerOutput);
let win = `You won. "${userOutput}" beat ${computerOutput}`
let loose = `Sorry, you lost. ${computerOutput} beat "${userInput}"`
let tie = `It's a tie. "${userOutput}" is the same as ${computerOutput}`;

if (playerOpt === computer[0] && playerOpt < computer[1]) {
    message = win;
} else if (playerOpt > computerOpt) {
    message = win;
} else if (playerOpt === computerOpt) {
    message = tie;
} else {
    message = loose;
}

alert(message);