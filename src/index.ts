// on the default it will use var. because by default it will compile down to ES5 (before let and const being introduced in ES6)
// this can be changed to whatever version you want in rsconfig.json

// let id = 5 // explicit set, this will also give an error if try to attribute a string to it
let id: number = 5
console.log('ID -->', id);

// Basic Types
let company: string = 'Traversy Media'
let isPublised: boolean = true
let x: any = 'Hello World'
x = true // no errors cause its any
console.log(x);


let x2: number | undefined
console.log(x2);
x2 = 55
console.log(x2);


let age: number
age = 30 // initialize
// age = 'String' // this gives and error
console.log(age);


// Arrays of numbers
let ids: number[] = [1,2,3,4,5]
// ids.push('Hello') // this would give and error cause trying to push a string to an array of numbers

let arr: any[] = [1, true, 'Hello']
console.log(arr);
arr.push(2, false, "hi")
console.log(arr);

//--------------------------------------------------------

// Tuple // Arra Tipado
// A tuple is a typed array with a pre-defined length and types for each index.

let person: [number, string, boolean]
// let person2: [number, string, boolean] = [1, 'Brad', 'test'] //this would give and error last 'spot' is expecting a boolean not a string
person = [1, 'Brad', true]

console.log(person);
console.log(person.length);
console.log(person[1]);

// Tuple Array // Array of Tuples

// and array of arrays
let employee: [number, string] []

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
]

console.log(employee);
employee.push([4, "Caique"])
console.log(employee);

//reduce
let concatenatedNames: string = employee.reduce((accumulator: string, current: [number, string]) => {
    console.log(current);
    console.log(accumulator);
    
    return accumulator === '' ? current[1] : `${accumulator}, ${current[1]}`;
    
}, "");

console.log(concatenatedNames);



//set 
console.log(employee, employee.length, employee.toString(), employee[1][0]);

employee.forEach(employ => {
    console.log(employ);
})


for(const [index, element] of employee?.entries()){
    console.log(index, element);
}

// UNION
let pid: string | number | boolean
pid = '22'
pid = 22
pid = false

// ENUM
enum Direction0{ 
    Up, //0 // default setup positions
    Down, //1
    Left, //2
    Right //3
}

enum Direction2{ // settign the first one and the rest will continue the order and auto take the sequence number
    Up = 1, //1
    Down , //2
    Left, //3
    Right //4
}

enum Direction2{ // if one is initiated as a string then all of them must have // Enum member must have initializer.
    Up2 = 'Up', //1
    Down2 = 'Down', //2
    Left2 = 'Left', //3
    Right2 = 'Right' //4
}

console.log(Direction0.Up, Direction0.Down, Direction0.Left, Direction0.Right);
console.log(Direction2.Up, Direction2.Down, Direction2.Left, Direction2.Right);
console.log(Direction2.Up2, Direction2.Down2, Direction2.Left2, Direction2.Right2);

// OBJECTS

// const user:{
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'John'
// }
// instead of doing the above we can first define the user its attributes and types (interface)
// then we can create an object with that interface type created

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// TYPE ASSERTION // <> as
let cid: any = 1
let cid2: any = 'Sssstring'

// there are two ways of using type assertions // using <> and as
let customerID = <number>cid
let customeID = cid as number
customerID = 'teste'
customeID = 'teste'

let customerID2 = <number>cid2
let customeID2 = cid2 as number
customerID2 = 'teste1234'
customeID2 = 'teste1234'

console.log("CustomerID + w/e --> " + customerID2, customeID2);


let customerID3 = cid as number // were grabbing the cid here but at the same time affirmando that its a number and not any
customerID3 = 'teste'

// FUNCTIONS
// in typescript variables must be defined when passing paremeters // unless the option noImplicitAny is changed
function addNum(x: number, y: number): number{
    return x + y
}
console.log(addNum(1, 2));

// Function + union // void is set as the return type, meaning it dosent have any
function log(message: string | number): void{
    console.log(message);
}
log('teste')
log(5)

function log2(message: string | number): string | number{
    console.log(message);
    return message
}

log2(false) // cause the expected paremeter is string or number
const teste = log2("teste123")
console.log(teste);


























