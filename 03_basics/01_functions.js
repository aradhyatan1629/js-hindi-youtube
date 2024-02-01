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


