// for of loop -

/*
The JavaScript for of statement loops through the values of an iterable object.
It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

for (variable of iterable) {
  // code block to be executed
}
variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
iterable - An object that has iterable properties.

*/

//Looping over an Array - 
// const cars = ["bmw","maruti","tata","porche"];
// for(const val of cars)
// {
//     console.log(val);
// }

//Looping over a string - 
// let s = "Javascript";
// for(const c of s)
// {
//     console.log(c);
// }


/*
maps in js - 
The Map object holds key-value pairs and remembers the original insertion order of the keys.
The keys in map can be of any datatype unlike objects where the keys have to be string.

How to Create a Map - 
You can create a JavaScript Map by:

1) Passing an Array to new Map()
2) Create a Map and use Map.set()



// creating a map by passing array to  new Map()

const mp = new Map([
    ["apples",500],
    ["bananas",300],
    ["orange",200],
])
console.log(mp);

// creating a map using set()

const mp = new Map();
mp.set("apples",500);
mp.set("bananes",300);
mp.set("orange",200);
console.log(mp);

// Map.get()
// The get() method gets the value of a key in a Map:
// fruits.get("apples");    // Returns 500
*/


/* Iterating over a map using forof loop - 

const myMap = new Map();
myMap.set("a",1);
myMap.set("b",2);
myMap.set("c",3);

for(const entry of myMap)
{
    console.log(entry);
}

// by destructuring the array [key,val] - 
for(const [key,value] of myMap)
{
    console.log(`The key is : ${key} and value is ${value}`);
}
*/

// Note that objects are not iterable using forof loop

// we can iterate over an object using a forin loop 
// the forin loop iterates over the key/properties of the object

const myObj = 
{
    "a" : 1,
    "b" : 2,
    "c" : 3
}
// for(const key in myObj)
// {
//     console.log(`Key is ${key}`);
// }
// we can access the values from the key as - 
// for(const key in myObj)
// {
//     console.log(`Key is ${key} and value is ${myObj[key]}`);
// }

// forin over arrays - 
// const programming = ["js","rb","py","java","cpp"];
// for(const key in programming)
// {
//     console.log(programming[key]);
// }



// foreach 
// The forEach() method of Array executes a provided function once for each array element.

const myArr = ['a','b','c',1,'jack'];
// myArr.forEach(function(val){
//     console.log(val);
// })

// foreach() using arrow function - 
// myArr.forEach( (val)=>{
//     console.log(val);
// })

// function printArray(val)
// {
//     console.log(val);
// }
// myArr.forEach(printArray);  // prinatArray function is called for each element of the array

myArr.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})












