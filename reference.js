let student = {
    rollNo : 7,
    name : 'Shrey',
    course : 'computer science'
}

let num1 = 10;  
let num2 = num1; //Primitive type ---This carry copy of data, so changes here won't change the real data (num2 = Changed values & num1 = 10)

let student2 = student; //object are reference type. ---> This carry only the reference of data, so changes in student2 will also change the student values.

console.log(num2);
console.log(student2);

console.log("-----Changing value----");
num1 = 12;
delete student.name;
console.log(num2);
console.log(student2);