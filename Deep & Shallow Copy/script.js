/**
 Shallow Copy:- Shallow copy creates a new array or object and it copies the reference to the original elements.

 Deep Copy:- Deep copy creates a new array or object and it have their own copies of the original elements/objects. 

 lodash:- _.cloneDeep generates a completely new array or object that is a deep copy of the original. 
 This means that the new array or object is entirely independent of the original.
 */

// lodash
let arr = [1, 2, [3, 4]];

let deepcopy = _.cloneDeep(arr);

deepCopy[2][0] = 100;

console.log(arr);
console.log(deepcopy);

// Shallow Copy
//let originalArray = [1, 2, 3, 4];
//let originalArray = [1, 2, [3, 4],[5,6]];
let originalArray = [1, 2, [3, 4]];
let shallowCopy = [...originalArray];

shallowCopy[2][0] = 500;

console.log(originalArray);

// Deep Copy

//let AnotherOriginalArray = [1, 2, [3, 4]];
let AnotherOriginalArray = [1, 2, 3, 4];
let deepCopy = JSON.parse(JSON.stringify(AnotherOriginalArray));

deepCopy[2][0] = 100;

console.log(AnotherOriginalArray);
console.log(deepCopy);

// using loadash

//let array = _.cloneDeep(AnotherOriginalArray)
