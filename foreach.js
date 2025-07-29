let arr = [ 'a', 'b', 'c', 'd' , 'e'];

arr.forEach(element => {
    console.log(element);
});

console.log('--- function---')
arr.forEach(function(num, ind){ console.log(`${ind} --> ${num}`)});
console.log('---arrow function---')
arr.forEach((num, ind)=>{ console.log(`${ind} --> ${num}`)})