fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => console.log(data));

fetch('https:www.google.com')
  .then((res) => res.text())
  .then((data) => console.log(data)); 


  //we are creating a chain for .then and .then if you want to more effectivaly use then u can use async / await
