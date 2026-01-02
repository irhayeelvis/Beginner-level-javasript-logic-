let question = prompt("Enter number");
let userinput = parseInt(question);

let dynamicNumber = Math.random();
let number = Math.floor(dynamicNumber * 10);
let message;

if (userinput > number) {
    message = `your number is greater than ${number}`;
} else if (userinput === number) {
    message = `your number is the same thing as ${number}. which is very rare`
} else {
    message = `your number is less than ${number}`
};

alert(message);