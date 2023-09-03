// Generic Functions:
// Use generics to create functions that can work with various data types. // This allows you to write more generic and reusable code. For example:

// Example 1: A generic function that returns an array of a given type
function createArray<T>(value:T, length: number): T[]{
    console.log({length}, value);
    return Array.from({length}, ()=> value)
}

const stringArray: string[] = createArray<string>('hello', 5)
const numberArray: number[] = createArray<number>(42, 5)

console.log(stringArray);
console.log(numberArray);
console.log(numberArray, stringArray);

// -------------------------------------------------------------------------------
// Generic Interfaces:
// Use generics in interfaces to create flexible data structures or objects that can work with different types. For example:

interface KeyValuePair<Key, Value>{
    key: Key;
    value: Value;
}

type KeyValuePair2<Key, Value> = {
    key: Key;
    value: Value;
}


let varlet;                  // let = red variable
const varconst = undefined;  // const = yellow variable
console.log(varlet, varconst);

const pair1: KeyValuePair2<number, string> = {key: 1, value: 'Hello'}
const pair2: KeyValuePair2<string, boolean> = { key: 'isTrue', value: true };
console.log(pair1, pair2);

let pair3: KeyValuePair<number, string>
pair3 = {key: 2, value: 'Hello There'}
console.log(pair3);


// -------------------------------------------------------------------------------
// Generic Classes:
// Use generics in classes to create reusable components that can work with various types. 
// This is particularly useful when building data structures like linked lists, stacks, or queues. For example:



class Stack<T>{
    private items: T[] = []

    push(item: T){
        this.items.push(item)
    }

    pop(): T | undefined{
        return this.items.pop()
    }
    
}

const numberStack = new Stack<number>()
numberStack.push(1)
numberStack.push(2)
console.log(numberStack);
numberStack.pop()
console.log(numberStack);
const poppedNumber = numberStack.pop(); // Pops 1 from the stack
console.log(poppedNumber);

