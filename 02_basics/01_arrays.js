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




