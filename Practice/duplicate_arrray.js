let arr = [1, 2, 3, 3, 6, 8, 6, 7, 8, 9, 10];


let multiplyByTwo = arr.filter((item) => item % 2 == 0 );
console.log("even. Number",multiplyByTwo); 


findduplicateArray(arr); 
function findduplicateArray(arr) {
  const set = new Set();
    const duplicates = [];
    for (const item of arr) {
        if (set.has(item)) {
            duplicates.push(item);
        } else {
            set.add(item);
        }
    }
    console.log(duplicates); // Output: [3, 6, 8]
    console.log(set); // Output: Set { 1, 2, 3, 6, 8, 7, 9, 10 }
    return duplicates;
}


