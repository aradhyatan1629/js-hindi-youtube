// array filter() method - 

/*
The filter() method creates a new array filled with elements that pass a test provided by a function.
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array.
filter() method also takes a callback function as argument

Syntax
array.filter(function(currentValue, index, arr), thisValue)

Parameters
Parameter	Description
function()	Required, A function to run for each array element.
currentValue	Required,The value of the current element.
index	Optional,The index of the current element.
arr	Optional,The array of the current element.
thisValue	Optional. Default undefined ,A value passed to the function as its this value.

filter() method return value - 
An array of elements that pass the test.
An empty array if no elements pass the test.

*/



// const ages = [10,4,55,32,51]

// function findAge(age)
// {
//     return age>10;
// }
// const newArr = ages.filter(findAge);
// console.log(newArr);

// or we can also do it like - 
// const newArr = ages.filter((item)=>{
//     return item>10;
// })
// console.log(newArr);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter((bk)=>bk.genre==='History')
const userBooks = books.filter((bk)=>{return bk.publish>=2000});
console.log(userBooks);

// array map() method - 












