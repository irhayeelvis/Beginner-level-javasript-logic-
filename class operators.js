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