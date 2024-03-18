
// object literals

const mySym = new Symbol("Key1")

const jsUser = 
{
    name : "Hitesh",
    "full name" : "hitesh chaudhary",
    age : 18,
    [mySym] : "key1",  // only way we can use symbol in an object
    location : "jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","saturday"]
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);



jsUser.email = "hitesh@chatgpt.com";
// console.log(jsUser.email);

// Object.freeze(jsUser);
jsUser.email = "hitesh@microsoft";
// console.log(jsUser.email);

jsUser.greeting = function()
{
    console.log("hello js user");
}

console.log(jsUser.greeting());

jsUser.greetingTwo = function()
{
    console.log(`Hello js user,${this.name}`);
}
console.log(jsUser.greetingTwo());






