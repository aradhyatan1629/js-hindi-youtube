/*
In JavaScript, the this keyword always refers to an object. 
The thing about it is that the object it refers to will vary depending on how and where this is being called.
JavaScript this keyword always holds the reference to a single object, 
which defines the current line of code’s execution context which means 
this keyword refers to the object that is currently executing the code.

1) In an object method, this refers to the object.
2) Alone, this refers to the global object.
3) In a function, this refers to the global object.
4) In a function, in strict mode, this is undefined.
5) In an event, this refers to the element that received the event.
6) Methods like call(), apply(), and bind() can refer this to any object.

Note-
this is not a variable. It is a keyword. You cannot change the value of this.
*/

// Different ways to call this - 

// Calling this alone - 
//If we call this by itself, meaning not within a function, object, or whatever, it will refer to the global window object.

//console.log(this); // op - empty object 


/*
this in a Method
When used in an object method, this refers to the object.

In the example on top of this page, this refers to the person object.

Because the fullName method is a method of the person object.

*/

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person.fullName());







// Arrow functions - 




















