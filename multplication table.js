let finalTable = [];
let value = 12;

for (let row = 1; row <= value; row++) {
    temp = [];
    for (let column = 1; column <= value; column++) {
        temp.push(row * column);
    };
    finalTable.push(temp);
};

console.table(finalTable);