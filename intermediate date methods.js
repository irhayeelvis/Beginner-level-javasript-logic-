let currentDateTiime = new Date();
console.log(currentDateTiime);
let now2 = Date.now();
console.log(now2);
let miliDate = new Date(1000);
console.log(miliDate);
let stringDate = new Date("Sat Jan 24 2026 07:46:29 GMT+0100");
console.log(stringDate);
let specificDate = new Date(2022, 0, 26, 7, 55, 15, 100);
console.log(specificDate);

let d = new Date();
console.log("Day of week:", d.getDay());
console.log("Day of month:", d.getDate());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
console.log("Seconds:", d.getSeconds());
console.log("Milliseconds:", d.getMilliseconds());
console.log("Time:", d.getTime());

d.setDate(19);
console.log(d.getDay());
// There is no setDay method, days can't be changed
// Replace "get" with "set" to modify the dates; just like in classes with private constructors.

let d1 = Date.parse("January 26, 2026");
let d2 = Date.parse("1/26/2026");
console.log(d1);
console.log(d2);

//Converting the date to stringDate.
console.log(d.toDateString());

// getting date
let d3 = new Date("January 27, 2026");
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = d3.getDate();
let year = d3.getFullYear();
let month = d3.getMonth();

let fullDate = `${months[month]}, ${date}, ${year}`;
console.log(fullDate);