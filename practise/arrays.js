/*
js arrays have the same role as in any other language i.e. it is a data structure that is used to store values.
But in js arrays elements can be of different data types and they are resizeable
eg - const myArr = [1,2,3,"hello",true] , this is a valid array
*/

// creating arrays - 

// 1) array literal form
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);
// const random = ["tree", 795, [0, 1, 2]];
// console.log(random);

// 2) using new keyword
const shopping1 = new Array("bread", "milk", "cheese", "hummus", "noodles");
console.log(shopping1);

/*
there is actually no difference in declaring arrays using array literal form or with new keyword
but there is one difference - if onely one argument is passed in the new keyword then it will create
an array of that size
*/
const myArr1 = [4];
console.log(myArr1);
console.log(`length of myArr1 is ${myArr1.length}`);

const myArr2 = new Array(4);
console.log(myArr2);
console.log(`length of myArr2 is ${myArr2.length}`);

// array methods - 
// 1) push - adds new element to end of array, and returns new length of array
// 2) unshift - adds new element to beginning of array and returns new length of array
// 3) pop - removes element from end of array and return the element removed or undefined if array is empty
// 4) shift - removes element from beginning of array and return the element removed or undefined if array is empty
// 5) includes - tells if an element is there in the array
// 6) indexof - return index of first occurence of an element or -1 if element is not present in array

const p = [1];
let len1 = p.push(2);
console.log(len1);
len1 = p.unshift(3);
console.log(len1);
let e = p.pop();
console.log(e);
e = p.shift();
console.log(e);
e = p.includes(1);
console.log(e);

// join method - 
// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join();
console.log(text);  

// slice and splice methods - 
// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.

const sl = fruits.slice(1,3);
console.log(sl);
console.log(fruits);

// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

const sp = fruits.splice(1,3);
console.log(sp);
console.log(fruits);


const marvel_heroes = ["thor","ironman","spiderman"];
const dc_heroes = ["superman","flash","batman"];

marvel_heroes.push(dc_heroes);  // this will create an array of arrays
console.log(marvel_heroes);
console.log(marvel_heroes[3][1]); // o/p - flash

// concat - The concat() method of Array instances is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.

const allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes);

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numbers = num1.concat(num2, num3);
console.log(numbers);

// merging 2 or more arrays using spread operator - 
//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

const nums1 = [1,2,3];
const nums2 = [4,5,6];
const nums3 = [...num1,...num2];
console.log(num3);

// flat - 
// The flat() method of Array instances creates a new array with all sub-array elements concatenated 
// into it recursively up to the specified depth.

const arr1 = [1,2,3,[4,5]];
const arr2 = [6,[7,[8,9]]];
console.log(arr1.flat());
console.log(arr2.flat(1));

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));

console.log(Array.from({name: "hitesh"})); // interesting case

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));




