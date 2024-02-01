const user = 
{
    userName : "hitesh",
    price : 999,

    welcomeMessage : function()
    {
        console.log(`${this.userName}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.userName = "sam";
// user.welcomeMessage();
// console.log(this);

// function chai()
// {
//     console.log(this);
// }
// chai();

// const chai = function()
// {
//     console.log(this);
// }
// chai();

// arrow function - 

const chai = () =>
{
    console.log(this);
}
chai();

// basic arrow function - 
// const addTwo = (num1,num2) =>
// {
//     return num1+num2;
// }
// console.log(addTwo(3,4));

//implicit return - 
const addTwo = (num1,num2) => num1+num2;   
// const addTwo = (num1,num2) => (num1+num2);
//const addTwo = (num1,num2) => ({username : "hitesh"});

console.log(addTwo(3,4));



