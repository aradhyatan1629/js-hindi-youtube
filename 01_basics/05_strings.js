const name = "hitesh";
const repoCount = 50;
console.log(name + repoCount);


//using string concatenation - 
console.log("my name is " + name);
// using template literals - 
console.log(`my name is ${name}`);


/* 
Template literals is basically a way to create strings in a more flexible and readable manner.
In template literals we use the backtick characters (``), the content between these backticks 
is treated as a string. For eg - 
console.log("my name is aradhya");
console.log('my name is aradhya');
both the above stmts have the same output that is - my name is aradhya

Templeate literals is useful as-
1) it helps in multi line strings
2) helps in string interpolation
*/

// let string = "hi 
// this is a
// string";   this is not allowed we cannot do this 


let string = `hi 
this is a 
string`; // but using template literal we can have multi line string
console.log(string);

// string interpolation -  allows you to embed expressions directly within the string using ${}.
/* 
The ${} syntax within template literals in JavaScript is often referred to as a placeholder. 
It acts as a placeholder for expressions or variables, allowing you to interpolate(insert) their values directly into the string. 
When the template literal is evaluated, the expressions within ${} are replaced with the actual values.
*/

// without template literal if we had to combine value of some variables in a string we would have to do it this way - 
let ageRam = 15;
let ageAman = 20;
// console.log("Age of ram is : " + ageRam + "\nAge of aman is " + ageAman);

// but using template literals we can easily do it like this - 
console.log(`Age of ram is ${ageRam} \nAge of aman is ${ageAman}`); 


const gameName = new String("hitesh-hc"); // this is another method to declare a string (here gamename is an object remember that)
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));   

const newString = gameName.substring(0,4);
console.log(newString);

const anotheString = gameName.slice(-8,4);
console.log(anotheString);

const newStringOne = "  hitesh  ";
console.log(newString);
console.log(newString.trim());

const url = "https://hitesh.com/hitesh%20choudary"; 
console.log(url.replace('%20','-'));









