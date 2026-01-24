console.log(Math.PI);
let x = 5.7;
console.log(Math.ceil(x));
console.log(Math.floor(x));
console.log(Math.round(x));

let rand = Math.floor(Math.random() * 10);
let rand2 = Math.floor(Math.random() * 0 + 1);
let rand3 = Math.floor(Math.random() * 101);

console.log(rand);
console.log(rand2);
console.log(rand3);

function randNum() {
    for(let i = 0; i < 100; i++) {
        console.log(Math.min(Math.random() * 100));
        console.log(Math.max(Math.random() * 100));
    };
};

randNum();