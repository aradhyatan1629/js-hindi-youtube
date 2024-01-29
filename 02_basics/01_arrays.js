// Array - 

const myArr = [0,1,2,3,4,5];
const myHeroes = ["thor","batman","superman"];
const myArr2 = new Array(1,2,3,4,5); // another way of declaring an array

// Array methods - 

// myArr.push(6);
// myArr.push(7);
// myArr.pop();    
// console.log(myArr);

myArr.unshift(-1);   // adds an element to the beginning of the array
console.log(myArr);
myArr.shift();      // removes the first element of the array
console.log(myArr);

console.log(myArr.includes(11));
console.log(myArr.indexOf(3));


const newArr = myArr.join();
console.log(myArr);
console.log(newArr);

// slice and splice methods - 
console.log("A ",myArr);
 
const myn1 = myArr.slice(1,3);      // slice does not manipulate the original array
console.log("B ",myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3);     //splice manipulates the original array
console.log("C ",myArr);
console.log(myn2);





/* Self Notes - 


Javascript arrays are resizeable and can contain a mix of different datatypes (number,boolean,string,objects)

*** Declaration of array ***
1)using square[] brackets - const arrayName = [value1, value2, ...];
eg - const marks = [5,10,2,4,7]

2) using the Array constructor 
eg - const marks = new Array(5,10,2,4,7)

*** Adding elements to array ***

1) using push() method, push adds element to the end of array
const marks = [5,10,2,4,7]
marks.push(100); //now array becomes [5,10,2,4,7,100]

2)using unshift() method, unshift adds element to the beggining of array
const marks = [5,10,2,4,7]
marks.unshift(0) // now array becomes [0,5,10,2,4,7]

*** removing elements from array ***
using pop(), shift() and also slice() 
const marks = [5,10,2,4,7]
marks.pop(); // removes last element 
const marks = [5,10,2,4,7]
marks.shift() // removes the first element 

*** to print the whole array use ***
console.log(marks);


*** Note *** 
push and unshift return the new length of the array
pop and shift return the element removed and if array is empty, undefined is returned

*** join method ***


*** slice and splice



*/



















