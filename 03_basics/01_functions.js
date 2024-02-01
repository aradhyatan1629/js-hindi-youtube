// console.log("H")
// console.log("I")
// console.log("T")
// console.log("E")
// console.log("S")
// console.log("H")

function sayMyName() {
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}

// sayMyName();

// function addTwoNumber(number1,number2)
// {
//     console.log(number1+number2);
// }

function addTwoNumber(number1,number2)
{
    let r = number1+number2;    
    return r;   
}

const result = addTwoNumber(3,4);
// console.log(result);

function loginUserMessage(username = "sam")   //default value is sam
{
    if(username === undefined)
    {
        console.log(`please enter a username`);
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage());


// function with objects and array in javascript - 

function calculateCartPrice(val1,val2,...num1)  // rest operator
{
    return num1;
}
console.log(calculateCartPrice(200,400,500,2000));

const user = 
{
    userName : "hitesh",
    price : 199
};

function handleObject(anyobj)
{
    console.log(`Username is ${anyobj.userName} and price is ${anyobj.price}`);
}
// handleObject(user);
handleObject(
    {
        username:"hitesh",
        price:199
    }
);

const myNewArray = [200,400,100,600];
function returnSecondValue(getArray)
{
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));






