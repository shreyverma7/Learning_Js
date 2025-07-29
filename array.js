 let arr = [2,3,5, 'pop', null , {channel : 'shrey'},['a', 'b', 'c']];

 console.log(arr)
 console.log(arr[0]);
 console.log(arr[1]);
 console.log(arr[2]);
 console.log(arr[3]);
 console.log(arr[4]);
 console.log(arr[5].channel);
 console.log(arr[6][1]);

 for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
 }

console.log("------for of  syntax");
for (let item of arr) {
  console.log('Value:', item);
}
console.log("------for in  syntax");
for (let x in arr){
    console.log(arr[x]);
}
console.log("------for looping all");
for (let item of arr) {
  if (Array.isArray(item)) {
    console.log('Nested array found:');
    for (let val of item) {
      console.log(' →', val);
    }
  } else {
    console.log('Value:', item);
  }
}