const userNames = ["Mike", "Elvis", "Demy"];
const userInput = prompt("What's your name?");
let htmlOutput = "";
if (userNames.indexOf(userInput) > -1) {
 htmlOutput = "Welcome, that is a user";
} else {
 htmlOutput = "Denied, not a user ";
}
alert(htmlOutput + ": " + userInput);