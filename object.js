let student = {
    rollNo : 7,
    name : 'Shrey',
    course : 'computer science'
}
/* Dot notation is preferred when the property name is a valid identifier and known ahead of time (e.g., student.name).
Bracket notation is required for dynamic or unusual property names. */
// Dot Notation (.)
console.log(student);
console.log(student.name);
console.log(student.rollNo);
console.log(student.course);

//Bracket Notation. 
/* The property name is stored in a variable.
The property name contains spaces, special characters, or starts with a number.
You want to dynamically access properties. */

console.log(student);
console.log(student["name"]);
console.log(student["rollNo"]);
console.log(student["course"]);

console.log(typeof student); //object
console.log(typeof student.rollNo); //Number

delete student.course; //Delete the course
console.log(student);
student.year = 'second';
console.log(student);