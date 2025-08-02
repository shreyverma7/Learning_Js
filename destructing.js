/* Array destructuring in JavaScript is a powerful feature introduced in ES6 (ECMAScript 2015) that allows you to extract values from arrays and assign them to distinct variables in a concise and readable way. It simplifies the process of accessing and manipulating array elements.  */

let product = {
    company : 'Mango',
    itemName : 'cotton tshirt',
    price : 560
}

//Destructing
let company = product. company; //asume we are asigin company name in company varible of company property
// let {company} = product; Both are same
// let {company,itemName , price} = product; Both are same it will create company, itemName & price as varible from product of company, itemName & price

//? Property Shorthand

let price = 22;
let product1 = {
    company : 'Mango',
    itemName : 'cotton tshirt',
    price : price
}
//is same as 
// let product1 = {
//     company : 'Mango',
//     itemName : 'cotton tshirt',
//     price 
// };


//? Method Shorthand

let product3= {
    company : 'Mango',
    itemName : 'cotton tshirt',
    displayPrice : function(){
        return `$${this.price.toFixed(2)}`;
    }
}
//are same as
// let product3= {
//     company : 'Mango',
//     itemName : 'cotton tshirt',
//     displayPrice(){
//         return `$${this.price.toFixed(2)}`;
//     }
// }


// Basic Array Destructuring:
const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);  // Output: red
console.log(secondColor); // Output: green
console.log(thirdColor);  // Output: blue


// Skipping Elements:
const data = [10, 20, 30, 40];
const [a, , c] = data; // Skips the second element (20)
console.log(a); // Output: 10
console.log(c); // Output: 30

// Default Values:
const fruits = ["apple"];
const [fruit1, fruit2 = "orange"] = fruits;
console.log(fruit1); // Output: apple
console.log(fruit2); // Output: orange (default value used as no second element in 'fruits')


// Rest Parameter:
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...restOfNumbers] = numbers;
console.log(first);          // Output: 1
console.log(second);         // Output: 2
console.log(restOfNumbers);  // Output: [3, 4, 5]

// Swapping Variables:
let x = 10;
let y = 20;

[x, y] = [y, x]; // Swap x and y

console.log(x); // Output: 20
console.log(y); // Output: 10

// Destructuring with Functions:
function getCoordinates() {
  return [100, 200];
}
const [latitude, longitude] = getCoordinates();
console.log(latitude);  // Output: 100
console.log(longitude); // Output: 200