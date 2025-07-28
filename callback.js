//use this in browser console

function greeting(name){
    console.log(`Hello, ${name}!`) ; //hello, shrey!
}

function getUserInput(callback) {
    const userName = prompt("Please enter your name:"); //prompt is used to get input from the user (shrey)
    callback(userName);  //callback  greeting(shrey)
}

getUserInput(greeting); //passing function greeting as a callback to getUserInput