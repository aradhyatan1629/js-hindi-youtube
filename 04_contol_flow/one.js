// if

const isUserLoggedIn = true;
if(isUserLoggedIn)
{
    // execution
}


/*

== vs === in js
== is also called loose equality because == performs type conversion before checking for equality
for eg - 2 == "2" will evaluate to true because int 2 is converted to string
whereas
=== is called strict equality, it does not perform type conversion so 2 === "2" will evaulate to false.
While comparing the variables, it first checks if the types differ. If they do, it returns false. If the types match, then it checks for the value. 
If the values are same and are not numbers, it returns true.

*/

// if(2 == "2")
// {
//     console.log(`executed`);
// }
// if(2 === "2")
// {
//     console.log(`yes executed`);
// }

const temp = 47;
if(temp<50)
{
    console.log(`temperature is less than 50`);
}
else
{
    console.log(`temperature is greater than 50`);   
}

const score = 200;
if(score > 100)
{
    const power = "fly";
    console.log(`user power: ${power}`);
}

const balance = 1000;
// if(balance>500)console.log("test");

// if(balance<500)
// {
//     console.log(`less than 500`);
// }
// else if(balance < 750)
// {
//     console.log(`less than 750`);
// }
// else
// {
//     console.log(`balance greater equal to 1000`);
// }


const userLoggedIn = true;
const debitCard = true;
if(userLoggedIn && debitCard)
{
    console.log("allow to buy course");
}

const loggedInfromGoogle = true; 
const loggedInfromMail = false; 
if(loggedInfromGoogle || loggedInfromMail)
{
    console.log("user is logged in");
}



















