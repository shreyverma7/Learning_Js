//syntax
(function () {
  // This is an anonymous function
  //functiion body
  console.log("Hello, World!");
})();

//Example of an anonymous function
setTimeout(function () {
  console.log("This is an anonymous function executed after 2 seconds.");
}, 1000); // This will execute the anonymous function after 2 seconds

//Assigned to a variable
const add = function (a, b) { //not this add can be used only who have access to this variable
  return a + b;
};
console.log(add(5, 3)); // Output: 8

//--------Exection--------
function greeting() {
  console.log("Outer function executed");
}
// setTimeout runs once; setInterval runs repeatedly.

console.log("Before setTimeout 1");
setTimeout(greeting, 4000); // This will execute the greeting function after 4 seconds
console.log("After setTimeout 1");

//--------or--------
//Here rather than passing the function name , we pass an anonymous function directly to setTimeout as a parameter.

console.log("Before setTimeout 2");
setTimeout(function () {
  console.log("Using an anonymous function with setTimeout");
}, 8000); // This will execute the greeting function after 8 miliseconds
console.log("After setTimeout 2");
