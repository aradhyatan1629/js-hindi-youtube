// for each loop

const coding = ["js","ruby","java","python","cpp"];

// coding.forEach( function(item){
//     console.log(item);
// } )


coding.forEach( (item)=>{
    console.log(item);  
})

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

// this is an array of objects
const codeing = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
]

// we can iterate over the array of objects as follows - 
codeing.forEach((item)=>{
    console.log(item.languageName);
})




