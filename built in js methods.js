let arr = ["macbook", 30, false, "zephyrus", "razer", new Date()];

function checkString(element, index) {
    return typeof element === "string";
};

// filter method
let filteredString = arr.filter(checkString);

console.log(filteredString);

// every method
console.log(arr.every(checkString));

// copy within
arr = ["Razer", "Zephyrus", "Macbook", "Alienware", "Python", "Rust", "JavaScript", "C++"];
console.log(arr);
arr.copyWithin(2, 5, 8);
console.log(arr);
// Zephyrus >>>> Macbook Pro :) XD

// Map method
arr = ["Razer", "Zephyrus", "Macbook", "Alienware", "Python", "Rust", "JavaScript", "C++", "Zephyrus"];
let mappedArr = arr.map(x => x + 1);
console.log(mappedArr);