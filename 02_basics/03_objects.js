
// object literals

const jsUser = 
{
    name : "Hitesh",
    "full name" : "hitesh chaudhary",
    age : 18,
    location : "jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","saturday"]
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);



jsUser.email = "hitesh@chatgpt.com";
// console.log(jsUser.email);

// Object.freeze(jsUser);
jsUser.email = "hitesh@microsoft";
// console.log(jsUser.email);

jsUser.greeting = function()
{
    console.log("hello js user");
}

// console.log(jsUser.greeting());
console.log(jsUser.greeting());

jsUser.greetingTwo = function()
{
    console.log(`Hello js user,${this.name}`);
}
console.log(jsUser.greetingTwo());






