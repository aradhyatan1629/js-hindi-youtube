/*
JavaScript Function Syntax
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

eg - 
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

*/

// function myFunc(x)
// {
//     console.log(`Hi this is a function and my name is ${x}`);
// }
// myFunc("Aradhya"); //calling (invoking) the function

/*
Parameters are essentially passed to functions by value — so if the code within the body of a 
function assigns a completely new value to a parameter that was passed to the function, 
the change is not reflected globally or in the code which called that function.

but When you pass an object as a parameter, if the function 
changes the object's properties, that change is visible outside the function, as shown in the following example:
*/

// function myFunc(theObj)
// {
//     theObj.age = 20;
// }

// const myObj = 
// {
//     first_name : "aradhya",
//     last_name : "taneja",
//     age : 10
// };

// console.log(myObj.age);
// myFunc(myObj);
// console.log(myObj.age);

/*
When you pass an array as a parameter, if the function changes any of the array's values, 
that change is visible outside the function, as shown in the following example:
*/

// function myFunc(theArr) {
//     theArr[0] = 30;
//   }
  
//   const arr = [45];
  
//   console.log(arr[0]); // 45
//   myFunc(arr);
//   console.log(arr[0]); // 30


/*
Rest parameter functions in js - 
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
*/ 

// function myFunction(val1,val2,...arr)
// {
//     return arr;
// }
// console.log(myFunction(10,20,30,40,50,60)); // val1=10,val2=20 and rest all the arguments will go to arr array

// A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.








