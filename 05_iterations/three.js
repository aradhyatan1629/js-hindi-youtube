// for of loop - 

const arr = [1,2,3,4,5];
for (const num of arr) 
{
    console.log(num);
}

const greetings = "Hello world";
for(const greet of greetings)
{
    console.log(greet);
}

//maps - 
const map = new Map();
map.set("In","India");
map.set("USA","United state of america");   
map.set("Fr","france");

// console.log(map);

for(const [key,value] of map)
{
    console.log(key, " ",value);
}

const myObj = 
{
    "game1" : "nfs",
    "game2" : "spiderman"
};

// for (const [key,value] of myObj) {
//     console.log(key, " ",value);
// }
// objects are not iterable using for of loop






