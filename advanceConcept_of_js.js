/*
24 Object Oriented Language 🧮
#(2:47:15) 25 Working with Objects 📲
#(2:54:13) 26 Reference Types ⏰
#(2:59:13) 27 Arrays 📊
#(3:06:06) 28 for-each Loop 👥
#(3:10:02) 29 Array Methods 🏦
#(3:11:41) 30 Arrow Functions 🎲
#(3:16:37) 31 De-structuring 🧮
#(3:18:57) 32 Spread & Rest Operator 📲
#(3:24:50) 33 Promises ⏰
#(3:32:56) 34 Fetch API 📊
#(3:37:20) 35 Async / Await 👥
#(3:43:00) Revision 👋
 */

console.log("---24---OBJECT ORIENTED LANGUAGES---------------");
/*  * objects are define using {}
    * Group multiple values together in key-value pairs.
    * Dot Notation : (.) operator to access values.
    * Key Benefit : Organizes related data under a single name.
    *  EXAMPLE : 
     let product(object name) = {
        company (key) : 'Monago' (value),
        item_name : 'Cotton striped t-shirt',
        price : 861
     }

     Uses {} to enclose data, (:) to separate property and value,  (,) for different property-value pairs, 
   */

//? Object.js

console.log("---26 Reference Types ⏰---------------");
/*  (primitiv(Number, String, Boolean, undefined, null) Vs Refernce Type(objects, Array, funcation))
    Refer reference.js
      * Objects work based on references, not actual Data .
      * Copying an objects copies the references, not the actual objects.
      * When comparing with ==, you're comparing references, not content.
      * Changes to one references affects all copies */

console.log("---27---ARRAYS---------------");
//? array.js
/*  * An array is just a list of values
      * Index : start with 0
      * Arrays are used for storing multiple values in a single variables
      
      let myArray = [1, 'KG coding',null, true, likes: '1 Million'];

      * use [] creates a new array, [ ] brackets encloses list of values,
      * Arrays can be saved to a variables
      * Accessing values : Use [] with index
            + brackets start and end the array
            + Values seprated by Commas
            + can span multiple Lines.
      * array can hold any values, including arrray.
      * types of operator on array Return Objects */

console.log("---28---FOR-each-loop---------------");
/*    * A method for arrary iteration, oftern preferd for readablilty.
 * Prameters : One for ClipboardItem, optional second for index.
 *  Using return is simialar to continue in trational loops.
 * Not striaghtforward to break out of a forEach loop.
 *  When you need to perform an action on each array elements and don't need to break early. */

let food = ["bread", "rice", "meat", "pizza"];
food.forEach(function (food) {
  console.log(food);
});

//? foreach.js

console.log("---29---Array Methods---------------");
food.isArray(); // check if a variable is an array
food.length; //check length
// common methods
/*
   push/pop : add or remove at end 
   shift/unshift : Add or remove from front 
   splice : Add or remove elements
   toString : convert to String
   sort : Sort element
   valueOf : Get array itself 
   Array also use reference like objects
   De-structuring also works for Arrays. 
   */

console.log("---30---Arrow Function--------------");
/*
 * A concise way to write anonymous function.
 * Often used when passing function as arguments.
 */
// Normal function
function sum(a, b) {
  return a + b;
}
// Anonymous function
let sumnormal = function (a, b) {
  return a + b;
};
//arrow function
let sum1 = (a, b) => {
  return a + b;
};
let sum2 = (a, b) => a + b; // For single Line : Curly brackets and return optional
let square = (a) => a * a; //For single Arguments : Round brackets optional

console.log("---31---De-structuring (thodana)--------------");
//? destructing.js

/*  De-structuring : Extact properties from objects easily.
    We can extaract more than one property at once  property at once.
    Shorthand Property: {message : message} simplifies to just  message;
    ShortHand Methods : Define methods directly inside the object without function keywords. */

console.log("---33---Spread & rest Operator--------------");
//? Spread
/* * Represent by three DOMStringList(...), the spread operator is used to expand elemnts of an iterable( like a array or string) into individual elements
 *Useful for comping array and objects without modifiying the original
 * Ensures immutablity in function where moficication of inputs is not decided. */

//  The spread operator is used to expand an iterable (like an array or string) into individual elements, or an object into its key-value pairs. It is typically used in:
// when ever you want to open and use array and object there Spread opertor are use ;

//Spread operator in array
let arr1 = [1, 2, 3]; //[1,2,3]
let arr2 = [arr1]; // [[1,2,3]]
let arr3 = [...arr1]; //[1,2,3] dulicpate a copy of arr1
let arr4 = [...arr1, 4, 5]; //[1,2,3,4,5]

console.log(arr1); //[1,2,3]
console.log(arr2); // [[1,2,3]]
console.log(arr2.length);

//Spread operator in Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3, d: 4 }; //{a:1,b:2, c:3,d:4}

//Spread operator in Function
function sum3(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum3(...numbers)); //6

//?rest opertor

//  The rest operator is used to collect multiple elements or arguments into a single array. It is typically used in:

//Used to colledt hte remaining elements of an array after extracting some elements
// Used to collect the remaining properties of an object after extracting some properties

//Fucntion parameter
function sumrest(...numers) {
  return numers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumrest(1, 2, 3, 4)); //10

//Function parameters of rest operator
function logArguments(firstArg, ...restArgs) {
  console.log("First argument:", firstArg);
  console.log("Rest arguments:", restArgs); // An array containing all subsequent arguments
}
logArguments(1, 2, 3, 4);
// Output:
// First argument: 1
// Rest arguments: [2, 3, 4]

//array Destructuring assignments of rest operator
const [a, b, ...remaining] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(remaining); // [3, 4, 5]

//Object desturtiuring
const { x, y, ...rester } = { a: 1, b: 2, c: 3, d: 4 };
console.log(rester); //{c:3,d:4}

//Where ever using  value is spread and where ever assign is called rest.

console.log("---34---Promises--------------");
/* 
  * CallBack Hell : When multiple asynchronours opertion need to be performend in sequence, callback can lead to deeply nested and hard to read code, often referred to as "callBack hell"

  * "I Promise a Result!"

"Producing code" is code that can take some time

"Consuming code" is code that must wait for the result

A Promise is an Object that links Producing code and Consuming code

  * Example
  */
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1");
    callback();
  }, 1000);
}
function step2(callback) {
  setTimeout(() => {
    console.log("Step 2");
    callback();
  }, 1000);
}
function step3(callback) {
  setTimeout(() => {
    console.log("Step 3");
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps are completed");
    });
  });
});

/*   *A Promise can be in one of three states:
Pending: The initial state; the asynchronous operation is still in progress.
Fulfilled (Resolved): The operation completed successfully, and the Promise has a resulting value.
Rejected: The operation failed, and the Promise has a reason for the failure (an error).

*States of promises
                       pending
                         |
       --------------------------------------
       |                                     |
  With a value                        with a reason 
       |                                     |
   resolved                              Rejected


   1. Definition :  A promise is an object represting the eventual completion or failure of an asynchronous operation.
   2. states of promises
    *Pending : Initial state, neither fullfilled nor rejected
    *fullFilled : Operation completed successfully
    * Rejection : Operation failed.
 */

//? creeating a promise
//Promises are created using the promise constructor which takes an executor fucntion with two aurguments: resolve and reject
let promise = new Promise((resolve, reject) => {
  //Asynchronous operation
  if (result()) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

//? Handling of promises
//Promises have then, catch and finally methods for handling the results of the asynchrounus operation.
/*  .then(): Usedd to handle fulfilments.
      .catch(): Used to handle rejection.
      .finally() : Ececutes a block of code regardless of the promise's outcome. */

//Handling a Promises : handle values
promise.then((value) => {
  console.log(value); //'Success'
});
//Handling a Promises : handle rejection
promise.catch((error) => {
  console.log(error); //'Error'
});

//Handling a Promises :Executes a block of code regardless of the promises's outcome
promise.finally(() => {
  console.log("Operation Completed");
});

//! Main example Solving callback hell
//In this version, each step returns a Promise that resolves after a timeout. The steps are chained together using .then(), making the code more readable and easier to maitain.

//ever step1 will return a promise and then (if it successfully then only goes to next step function) 

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1");
      resolve();
    }, 1000);
  });
}
function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2");
      resolve();
    }, 1000);
  });
}
function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3");
      resolve();
    }, 1000);
  });
}

step1()
  .then(() => step2())
  .then(() => step3())
  .then(() => {
    console.log('All steps completed');
  });


console.log("---35---Fetch API--------------");


fetch('https://jsonplaceholder.typicode.com/posts').then(response =>{
  if(!response.ok){
    throw new Error ('Network response was not ok ' + response.statusText);
  }
  return response.json();
}).then(data => console.log(data)).catch(error => console.log(error));

//The fetch APi provides a modern way to make HTTP request in Javascript
// It is a promise-based API, making it easier to handle asynchronous requsts.

//refer fetch.js


console.log("---36---ASYNC OR AWAIT--------------");
//more effective way for using promise and reduce .then process chain

/* *Syntax sugar for promises : async / await is built on top of promises, providing a cleaner and more readable way to work with asynchronous code.
* Defining Async function : As async function is declared using the async keyword before the function definition. This function always reaturn a promise.
* The await keyword is used to pause the execution of an async function until a promise is resolved. It can only be used inside an async function.

refer async&await.js
 */



//callbackHell --> promise---> async or await





