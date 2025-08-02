//using asysnc
async function myFunction() {
  return "Hello";
}

//using await.  it can only used on fucntion which are async not in normal function
async function fetchData() {
  let response = await "https://api.example.com/data";
  let data = await response.json();
  return data;
}

async function fetchData() {
  let res = await fetch("https: www.google.com");
  let data = await res.json();
  console.log(data);
}

//use exection handling
async function fetchData() {
  try {
    let res = await fetch("https: www.google.com");
    let data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error:', error)
  }
}

//api calling 
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if(!response.ok){
        throw new Error ('Network response was not ok' + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error)
  }
}

fetchData('https://jsonplacehodler.typicode.com/posts');

