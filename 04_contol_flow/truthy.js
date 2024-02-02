// const userEmail = "h@hitesh.ai"
// if(userEmail)
// {
//     console.log("got user email");
// }
// else
// {
//     console.log("dont have user email");
// }

const userEmail = ""
if(userEmail)
{
    console.log("got user email");
}
else
{
    console.log("dont have user email");
}

// falsy values - 
// false, 0, -0 , BignInt, "" , null , undefined , NaN
// truthy values - 
// "0" , 'false' , " " , [] , {} , function(){}

// Nullish coalescing operator (??)
const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

//terniary operator - 
// condition ? true : false
const icePrice = 10;
icePrice>=20 ? console.log("greater 20") : console.log("less");




