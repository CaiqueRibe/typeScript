// INTERFACES ---------------------------------------------------------------------------
interface UserInterface  { 
    readonly id: number,
    name: string,
    age?: number,

    register?: () => void , // optional function that has no paremeters, returns nothing
    register2:(a: number, b: number) => null | number // required function that has two paremeters(numbers) and returns either null or a number
}
const user2: UserInterface = {
    id: 1,
    name: 'John',
    register: () => console.log("teste"),
    register2: (a: number, b: number) : number => a + b
}


if(user2.register){
    user2.register()
}

console.log(user2.register2(4, 5));
console.log(user2.register2(3, 3));
// he mentions he prefares using interfaces of types (especially for objects)
// but they cant be used with unions or primitives

type point = number | string
const p1: point = 'one'
console.log(p1);
// the above works but this dosent
// interface point = number | string // number not defined and its expecting a {} since its using interfaces
// meaning interfaces are more used for objects

interface MathFunc{
    (x: number, y: number): number
}

type MathFunc2 = {
    (x: number, y: number): number
}

// const add: MathFunc = (x: number, y: string): number => x + y // interface being used is number, number and returns number (cant use string)
const add: MathFunc2 = (x: number, y: number): number => x + y
const sub: MathFunc2 = (x: number, y: number): number => x - y 
console.log(add(3, 3));
console.log(sub(3, 5));

const div: MathFunc = (x: number, y: number): number => {
    if (y === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return x / y;
  }
console.log(div(5, 2));
// console.log(div(5, 0)); //Division by zero is not allowed

//INTERFACES ---------------------------------------------------------------------------
interface PersonInterface  { 
    id: number,
    name: string,
    register(): string
}

//CLASSES ---------------------------------------------------------------------------
class Person implements PersonInterface{ // the class that implementes the interface must have all the attributes and function defined on the interface
    id: number
    name: string

    register(){
        // return 1 // this will get an error cause definition of the interface // register(): string
        return `${this.name} is now registered`
    }

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
}

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Mike Jordan')

// public(default) vs private vs protected
// brad.id = 5
// private id: number

console.log(brad, mike)
console.log(brad.register())

// SUB CLASSES ---------------------------------------------------------------------------
class Employee extends Person{
    position: string

    constructor(id: number, name:string, position: string){
        super(id, name) // intialied using the super() since its defined in the person extended class
        this.position = position
    }

    // re-using the register above but adding its position as a developer
    register() {
        return `${this.name} is now registered as a ${this.position}`;
      }
}

const emp = new Employee(3, 'Sean', 'Developer')
console.log(emp);
console.log(emp.register()); // were calling a function thats defined in the Person Class which is extended by the Employee


// ------------------------------------------------------------------------------------------------------------
// GENERICS
// function getArray(items: any[]): any[]{
//     return new Array().concat(items)
// }

function getArray<T>(items: T[]): T[]{ //<T> PlaceHolder of the type
    return new Array().concat(items) // funcao generica do JS
}

let numArray = getArray<number>([1,2,3,4,5])
let strArray = getArray<string>(['1','2','3','4','5'])
let boolArray = getArray<boolean>([true, false, true])
let anyArray = getArray<any>([1,2,'3','4','5',true,false])
console.log(numArray, strArray, boolArray);
console.log(anyArray);

let objectArray = getArray<object>([{id: 1, name: "caique"}, {id: 2, name: "ribeiro"}])
console.log(objectArray);

let ObjectArray = getArray<Object>([{id: 1, name: "caique"}, {id: 2, name: "ribeiro"}])
console.log(objectArray);


// after adding the placeHolder or the generics <T>
// numArray.push('hello') // this wont generate and error since the getArray function is taking any
