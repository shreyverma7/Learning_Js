/*
24 Object Oriented Language 🧮
#(2:47:15) 25 Working with Objects 📲
#(2:54:13) 26 Reference Types ⏰
#(2:59:13) 27 Arrays 📊
#(3:06:06) 28 for-each Loop 👥
#(3:10:02) 29 Array Methods 🏦
#(3:11:41) 30 Arrow Functions 🎲
#(3:16:37) 31 De-structuring 🧮
#(3:18:57) 32 Spread & Rest Operator 📲
#(3:24:50) 33 Promises ⏰
#(3:32:56) 34 Fetch API 📊
#(3:37:20) 35 Async / Await 👥
#(3:43:00) Revision 👋
 */

console.log("---24---OBJECT ORIENTED LANGUAGES---------------");
   /*  * objects are define using {}
    * Group multiple values together in key-value pairs.
    * Dot Notation : (.) operator to access values.
    * Key Benefit : Organizes related data under a single name.
    *  EXAMPLE : 
     let product(object name) = {
        company (key) : 'Monago' (value),
        item_name : 'Cotton striped t-shirt',
        price : 861
     }

     Uses {} to enclose data, (:) to separate property and value,  (,) for different property-value pairs, 
   */

     //? Object.js

    console.log("---26 Reference Types ⏰---------------");
   /*  (primitiv(Number, String, Boolean, undefined, null) Vs Refernce Type(objects, Array, funcation))
    Refer reference.js
      * Objects work based on references, not actual Data .
      * Copying an objects copies the references, not the actual objects.
      * When comparing with ==, you're comparing references, not content.
      * Changes to one references affects all copies */


    console.log("---27---ARRAYS---------------");
    //? array.js
     /*  * An array is just a list of values
      * Index : start with 0
      * Arrays are used for storing multiple values in a single variables
      
      let myArray = [1, 'KG coding',null, true, likes: '1 Million'];

      * use [] creates a new array, [ ] brackets encloses list of values,
      * Arrays can be saved to a variables
      * Accessing values : Use [] with index
            + brackets start and end the array
            + Values seprated by Commas
            + can span multiple Lines.
      * array can hold any values, including arrray.
      * types of operator on array Return Objects */

    console.log("---28---FOR-each-loop---------------");
   /*    * A method for arrary iteration, oftern preferd for readablilty.
      * Prameters : One for ClipboardItem, optional second for index.
      *  Using return is simialar to continue in trational loops.
      * Not striaghtforward to break out of a forEach loop.
      *  When you need to perform an action on each array elements and don't need to break early. */

   let food = ['bread', 'rice', 'meat' , 'pizza'];
   food.forEach( function(food){
      console.log(food);
   });

   //? foreach.js


   
   
    




