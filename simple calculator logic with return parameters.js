let operator1 = Number(prompt(`Number One`));
console.log(operator1);
let operator = prompt(`Equation`)
let operator2 = Number(prompt(`Number Two`));
console.log(operator2);
let total;
function calculator(x = 2, o = "+", y = 3) {
    if (o === "+") {
        total = x + y;
    } else if (o === "-") {
        total = x - y;
    } else if (o === "*") {
        total = x * y;
    } else if (o === "/") {
        total = x / y;
    } else {
        total = x + y;
    };  
    return(total);
};

let answer = calculator(operator1, operator, operator2);

alert(`${operator1} ${operator} ${operator2} = ${answer}`);