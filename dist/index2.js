"use strict";
const user2 = {
    id: 1,
    name: 'John',
    register: () => console.log("teste"),
    register2: (a, b) => a + b
};
if (user2.register) {
    user2.register();
}
console.log(user2.register2(4, 5));
console.log(user2.register2(3, 3));
const p1 = 'one';
console.log(p1);
// const add: MathFunc = (x: number, y: string): number => x + y // interface being used is number, number and returns number (cant use string)
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(3, 3));
console.log(sub(3, 5));
const div = (x, y) => {
    if (y === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return x / y;
};
console.log(div(5, 2));
//CLASSES ---------------------------------------------------------------------------
class Person {
    register() {
        // return 1 // this will get an error cause definition of the interface // register(): string
        return `${this.name} is now registered`;
    }
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const brad = new Person(1, 'Brad Traversy');
const mike = new Person(2, 'Mike Jordan');
// public(default) vs private vs protected
// brad.id = 5
// private id: number
console.log(brad, mike);
console.log(brad.register());
// SUB CLASSES ---------------------------------------------------------------------------
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); // intialied using the super() since its defined in the person extended class
        this.position = position;
    }
    // re-using the register above but adding its position as a developer
    register() {
        return `${this.name} is now registered as a ${this.position}`;
    }
}
const emp = new Employee(3, 'Sean', 'Developer');
console.log(emp);
console.log(emp.register()); // were calling a function thats defined in the Person Class which is extended by the Employee
// ------------------------------------------------------------------------------------------------------------
// GENERICS
// function getArray(items: any[]): any[]{
//     return new Array().concat(items)
// }
function getArray(items) {
    return new Array().concat(items); // funcao generica do JS
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['1', '2', '3', '4', '5']);
let boolArray = getArray([true, false, true]);
let anyArray = getArray([1, 2, '3', '4', '5', true, false]);
console.log(numArray, strArray, boolArray);
console.log(anyArray);
let objectArray = getArray([{ id: 1, name: "caique" }, { id: 2, name: "ribeiro" }]);
console.log(objectArray);
let ObjectArray = getArray([{ id: 1, name: "caique" }, { id: 2, name: "ribeiro" }]);
console.log(objectArray);
// after adding the placeHolder or the generics <T>
// numArray.push('hello') // this wont generate and error since the getArray function is taking any
