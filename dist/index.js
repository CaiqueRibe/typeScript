"use strict";
// on the default it will use var. because by default it will compile down to ES5 (before let and const being introduced in ES6)
// this can be changed to whatever version you want in rsconfig.json
// let id = 5 // explicit set, this will also give an error if try to attribute a string to it
let id = 5;
console.log('ID -->', id);
// Basic Types
let company = 'Traversy Media';
let isPublised = true;
let x = 'Hello World';
x = true; // no errors cause its any
console.log(x);
let x2;
console.log(x2);
x2 = 55;
console.log(x2);
let age;
age = 30; // initialize
// age = 'String' // this gives and error
console.log(age);
// Arrays of numbers
let ids = [1, 2, 3, 4, 5];
// ids.push('Hello') // this would give and error cause trying to push a string to an array of numbers
let arr = [1, true, 'Hello'];
console.log(arr);
arr.push(2, false, "hi");
console.log(arr);
//--------------------------------------------------------
// Tuple // Arra Tipado
// A tuple is a typed array with a pre-defined length and types for each index.
let person;
// let person2: [number, string, boolean] = [1, 'Brad', 'test'] //this would give and error last 'spot' is expecting a boolean not a string
person = [1, 'Brad', true];
console.log(person);
console.log(person.length);
console.log(person[1]);
// Tuple Array // Array of Tuples
// and array of arrays
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
console.log(employee);
employee.push([4, "Caique"]);
console.log(employee);
//reduce
let concatenatedNames = employee.reduce((accumulator, current) => {
    console.log(current);
    console.log(accumulator);
    return accumulator === '' ? current[1] : `${accumulator}, ${current[1]}`;
}, "");
console.log(concatenatedNames);
//set 
console.log(employee, employee.length, employee.toString(), employee[1][0]);
employee.forEach(employ => {
    console.log(employ);
});
for (const [index, element] of employee === null || employee === void 0 ? void 0 : employee.entries()) {
    console.log(index, element);
}
// UNION
let pid;
pid = '22';
pid = 22;
pid = false;
// ENUM
var Direction0;
(function (Direction0) {
    Direction0[Direction0["Up"] = 0] = "Up";
    Direction0[Direction0["Down"] = 1] = "Down";
    Direction0[Direction0["Left"] = 2] = "Left";
    Direction0[Direction0["Right"] = 3] = "Right"; //3
})(Direction0 || (Direction0 = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right"; //4
})(Direction2 || (Direction2 = {}));
(function (Direction2) {
    Direction2["Up2"] = "Up";
    Direction2["Down2"] = "Down";
    Direction2["Left2"] = "Left";
    Direction2["Right2"] = "Right"; //4
})(Direction2 || (Direction2 = {}));
console.log(Direction0.Up, Direction0.Down, Direction0.Left, Direction0.Right);
console.log(Direction2.Up, Direction2.Down, Direction2.Left, Direction2.Right);
console.log(Direction2.Up2, Direction2.Down2, Direction2.Left2, Direction2.Right2);
const user = {
    id: 1,
    name: 'John'
};
// TYPE ASSERTION // <> as
let cid = 1;
let cid2 = 'Sssstring';
// there are two ways of using type assertions // using <> and as
let customerID = cid;
let customeID = cid;
customerID = 'teste';
customeID = 'teste';
let customerID2 = cid2;
let customeID2 = cid2;
customerID2 = 'teste1234';
customeID2 = 'teste1234';
console.log("CustomerID + w/e --> " + customerID2, customeID2);
let customerID3 = cid; // were grabbing the cid here but at the same time affirmando that its a number and not any
customerID3 = 'teste';
// FUNCTIONS
// in typescript variables must be defined when passing paremeters // unless the option noImplicitAny is changed
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// Function + union // void is set as the return type, meaning it dosent have any
function log(message) {
    console.log(message);
}
log('teste');
log(5);
function log2(message) {
    console.log(message);
    return message;
}
log2(false); // cause the expected paremeter is string or number
const teste = log2("teste123");
console.log(teste);
