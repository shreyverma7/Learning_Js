/* 12 Arithmetic Operators 🧮
13 Variables 📲
14 Ways to Create Variables ⏰
15 Primitive Types 📊
16 typeof Operator 👥
17 Comparison Operators 🏦
18 if-else 🎲
19 Logical Operators 🧮
20 Functions 📲
21 Loops ⏰
22 For Loop 📊
23 Callbacks and Async Code 👥
)24 Anonymous Functions as Values 🏦 */

// 13 Variables 📲
let firstVariable = "Hello World"; // String
let secondVariable = 42; // Number
let thirdVariable = true; // Boolean
let fourthVariable = null; // Null
let fifthVariable = undefined; // Undefined
let sixthVariable = Symbol("unique"); // Symbol
let seventhVariable = { name: "John", age: 30 }; // Object
let eighthVariable = [1, 2, 3]; // Array    
console.log(fourthVariable); // Output: Hello World

nameingConvention = "camelCase"; // Common naming convention in JavaScript
/* can't use Keywords as variable names
can't start with a number
No Special character other than underscore (_) or dollar sign ($)
= is used for assignment, not equality
; means end of statement */

// += , -= , *= , /= , %= , **= are compound assignment operators
firstVariable++ , firstVariable-- ; // Increment and Decrement
console.log(firstVariable); // Output: 43

 /*                       data type in js
                             |
                -------------------------------
                |                               |
            Primitive Types                     Non-Primitive Types
                |                               |
    ---------------------------               -------------------------
    |       |       |      |                  |           |            |     
  String  Number  Boolean   Undefined      Object       Array       Function
     null                                                                  */


let str1 = "Hello";
let str2 = 'World';
let str3 = `Hello World`; // Template literal
let str4 = `Hello World ${1+1}`; // Template literal
console.log(str1, str2, str3, str4); // Output: Hello World
console.log(str1 + " " + str2); // Concatenation
console.log(`${str1} ${str2}`); // Template literal concatenation


//? NULL VS UNDEFINED
// thought both are NUllish & falsy values, they are used in different contexts.
// Thought both `null` and `undefined` represent the absence of a value, but they are used in different contexts. `null` is an intentional absence of any object value, while `undefined` indicates that a variable has been declared but not assigned a value.
// null !== undefined; // true
// console.log(typeof null); // Output: object
// console.log(typeof undefined); // Output: undefined

//? console.log(typeof null); // Output: object
//? console.log(typeof undefined); // Output: undefined
console.log("---------------------------------"); // Output: string
//? Comparison Operators
// <, >, <=, >= , == (check value equal), !=, === (check value and type equal), !== (check value and type not equal)

console.log(4 == 4 ); // true
console.log(4 ==4.0 ); // true
console.log(4 === 4 ); // true
console.log(4 === 4.0 ); // true. In js everything is a number, so 4 and 4.0 are the same.
console.log(4 == "4" ); // true. Type coercion happens, so string "4" is converted to number 4.
console.log(4 === "4" ); // false. Strict equality check, so type is also checked.
console.log(4 != "4" ); // false. Type coercion happens, so string "4" is converted to number 4.
console.log(4 !== "4" ); // true. Strict inequality check, so type is
console.log("Hello" == 'HellO'); // true


console.log("------------18---IF & ELSE------------------");
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}
else {
    console.log("You are a minor.");
}
// Use Else if to check multiple conditions
// nested if for more complex conditions
if (age >= 18) 
  console.log("You are an adult.");

console.log("----------19-----LOGICAL OPERATOR------------------");
// Logical Operators: && (AND), || (OR), ! (NOT)
let isAdult = true;
let hasPermission = false;
if (isAdult && hasPermission) {
    console.log("You can enter.");
}
if (isAdult || hasPermission) {
    console.log("You can enter with permission.");
}
if (!isAdult) {
    console.log("You are not an adult.");
}
console.log("-----------20----FUNCTIONS------------------");
// Don't repeat yourself (DRY) principlee
// refer function.js

console.log("-----------21----Loop------------------");
// Loops: for, while, do-while
//iterates are - number of times
// refer loop.js


console.log("-----------23----CallBack------------------");
// Callbacks: Functions passed as arguments to other functions
/* A callback is a fucntion passed as an arguments to another function, which is then invoked inside the outer function to complete some kind of routine or action. This allows for asynchronous programming and event handling in JavaScript.

Usage : 
    * callbacks are commonly used in event handling, asynchronous operations, and functional programming patterns.
    * callbacks are commonly used in asynchronous programming to execute code after an asynchronous operation has completes */
   
//refere callbacks.js


console.log("-----------24----Anonymous Function as value------------------");
    /** Anonymous functionsa are fucntions that do not have a name and are often used as values or arguments in other functions. They are useful for creating quick, one-time-use functions without the need to define them separately.
    *They are oftern used as. argumenst to other function or assigned to a fifthVariable.Anonymous
    * Used ful for creating function scopes and avoiding globel varible.
    */


    //refer anonymousFunction.js


