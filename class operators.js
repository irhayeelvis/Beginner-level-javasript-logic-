class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    };
    get firstName() {
        return this.#firstName;
    };
    set firstName(firstName) {
        return this.#firstName = firstName;
    };
    get lastName() {
        return this.#lastName;
    };
    set lastName(lastName) {
        return this.#lastName = lastName;
    };
    fullName(firstName, lastName) {
        return firstName + " " + lastName;
    };
};

let elon = new Person("Elon", "Musk");
let ceoOfTesla = elon.fullName("Elon", "Musk");

console.log(elon);
console.log(ceoOfTesla);

// Objects with child and prototype parameters
class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    };
    move() {
        console.log("moving at", this.currentSpeed);
    };
    accelerate(amount) {
        this.currentSpeed += amount;
    };
};

class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);
        this.fuel = fuel;
    };
    doWheelie() {
        console.log("Driving on one wheel!");
    };
};

let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
console.log(motor);
motor.accelerate(50);
console.log(motor.currentSpeed);
motor.move();
console.log(motor);

// Updated 'Person' class with prototype
Person.prototype.introduce = function () {
    console.log("Hi, I'm", this.firstName);
};

elon.introduce();
