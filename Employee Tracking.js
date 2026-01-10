class Employee {
    constructor(firstName, lastName, yearsWork, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearsWork = yearsWork;
        this.gender = gender;
    };
};
let elvis = new Employee("Elvis", "Irhaye", 5, "male");
let mukhtar = new Employee("Mukhtar", "Abullhamid", 5, "male");
let tegha = new Employee("Tegha", "Ebah", 1, "female");

let employees = [elvis, mukhtar, tegha];
Employee.prototype.details = function () {
    if (this.gender === "male") {
        console.log("Welcome Back " + this.firstName + " " + this.lastName + ". He's been working for the company for " + this.yearsWork + " year(s)");
    } else {
        console.log("Welcome Back " + this.firstName + " " + this.lastName + " She's been working for the company for " + this.yearsWork + " year(s)");
    };
};

for(let i = 0; i < employees.length; i++) {
    employees[i].details();
};