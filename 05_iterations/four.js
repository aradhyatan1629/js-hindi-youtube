// we can iterate over objects using for in loop

const myObj = 
{
    js : "javadcript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
};

for (const key in myObj) {
    console.log(`${key} : ${myObj[key]}`);
}

const programming = ["js","rb","py","java","cpp"];
for(const key in programming)
{
    console.log(programming[key]);
}







