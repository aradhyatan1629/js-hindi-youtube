// objects in javascript - 
// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.
//Note: If you are familiar with other programming languages, JavaScript objects are a bit different. 
// You do not need to create classes in order to create objects.

// eg of js object is - 
const student = 
{
    firstName : "ram",
    class : 10
};
console.log(student);
// Here, student is an object that stores values such as strings and numbers.

//The syntax to declare an object is:
// const object_name = {
//     key1: value1,
//     key2: value2
//  }

// Here, an object object_name is defined. Each member of an object is a key: value pair separated by commas and enclosed in curly braces {}.
// this key can be any variable or a function.

const person = 
{
    name : "ram",
    age : 20
};
console.log(typeof person);

// using function inside an object - 

const person1 = 
{
    name : "ram",
    age : 20,
    school : "dps",
    marks : "90%",
    displayInfo : function()
    {
        console.log(`Name of student is : ${person1.name}, age is : ${person1.age}, school : ${person1.school}, marks ${person1.marks}`);
    }
} 
person1.displayInfo();


// creating objects in js - 
// 1) singelton
// 2) object create
// 3) object literals

// object literals - 

const mySym = Symbol("key1");

const jsUser = 
{
    name : "Hitesh",
    "full name" : "hitesh chaudhary",
    [mySym] : "mykey1",                  //syntax to create symbol inside an object
    age : 18,
    location : "jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","saturday"]
};

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);

console.log(jsUser[mySym]); // accessing a symbol property of our jsUser object

jsUser.email = "hitesh@chatgpt.com";     //changing object values

// Object.freeze(jsUser); freeze prevents making any changes to an object

// adding function to our jsUser object - 

jsUser.greeting = function()
{
    console.log("hello js user");
}
jsUser.greetingTwo = function()
{
    console.log(`hello js user, ${this.name} `);
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting()); 
console.log(jsUser.greetingTwo()); 


// new keyword - 

// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;  
// console.log(tinderUser);

// we can create objects within an object (nesting of objects) - 
const regularuser = 
{
    email : "some@gmail.com",
    fullname :
    {
        userfullname :
        {
            firstName : "hitesh",
            lastName : "chaudhary"
        }
    }
};

console.log(regularuser.fullname);
console.log(regularuser.fullname.userfullname);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};

// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);

const obj3 = {...obj1,...obj2};
console.log(obj3);

console.log(Object.keys(tinderUser));  // gives all the keys of object tinderUser in an array
console.log(Object.values(tinderUser)); // gives all the values of object tinderUser in an array
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));


// Object destructure and API - 

const course = 
{
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
};

// course.courseInstructor;
// const {courseInstructor} = course;
const {courseInstructor : instructor} = course;
console.log(instructor);











