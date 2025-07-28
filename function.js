function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Alice"); // Output: Hello, Alice!

console.log("-- Function without argument --");
function getPrimeNumber(){
    return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    console.log("This will not be executed");
}
let prime = getPrimeNumber();
console.log(prime); // Output: [2, 3, 5, 7
console.log(getPrimeNumber()); // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

console.log("-- Function with argument --");
function add(a, b) {
    return a + b;
}