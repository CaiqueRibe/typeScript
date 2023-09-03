"use strict";
// Generic Functions:
// Use generics to create functions that can work with various data types. // This allows you to write more generic and reusable code. For example:
// Example 1: A generic function that returns an array of a given type
function createArray(value, length) {
    console.log({ length }, value);
    return Array.from({ length }, () => value);
}
const stringArray = createArray('hello', 5);
const numberArray = createArray(42, 5);
console.log(stringArray);
console.log(numberArray);
console.log(numberArray, stringArray);
let varlet; // let = red variable
const varconst = undefined; // const = yellow variable
console.log(varlet, varconst);
const pair1 = { key: 1, value: 'Hello' };
const pair2 = { key: 'isTrue', value: true };
console.log(pair1, pair2);
let pair3;
pair3 = { key: 2, value: 'Hello There' };
console.log(pair3);
// -------------------------------------------------------------------------------
// Generic Classes:
// Use generics in classes to create reusable components that can work with various types. 
// This is particularly useful when building data structures like linked lists, stacks, or queues. For example:
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
}
const numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack);
numberStack.pop();
console.log(numberStack);
const poppedNumber = numberStack.pop(); // Pops 1 from the stack
console.log(poppedNumber);
