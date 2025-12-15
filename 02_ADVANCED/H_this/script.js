/*
The "this" keyword :
- this in global scope, function, method, event handler, class
- Arrow function lexical this.
- Manual binding : bind, call, apply
- Why arrow functions lose this for methods.
- this inside eventg listenrs.

- This keyword in JS is a reference to the object that is currently executing the code, and it's value is determined dynamically by how a function is called,
not where it is defined.

global                              : window
function                            : window
method with es5 fnc                 : object
method with es6 arrow fnc           : window
es5 function inside es5 method      : window
arrow function inside es5 method    : object
event handler                       : element
class                               : blank object
*/

// This in Global Scope :
console.log(this);          // value : window
// Window in JS - the window object is the global object that represents the browsers window or tab. It serves as the top-level container for all browser-specific functionality and global variables.


// Function
function shetty() {
    console.log(this);      // value : window
}
shetty();


// Method : Function that is stores as a property of an object.
// Function which is inside an object.
let obj = {
    name: "Akhil",
    sayName: function () {
        console.log(this);       // value : Object
        console.log(this.name);  // this denotes everything, names in the obj.
    }
}
obj.sayName();              // Inside method "this" will be an object


// Event handler
document.querySelector("h1").addEventListener("click", function () {
    console.log(this)           // The DOM
})


// Classes in JS - blank object when called with new
class Abcd {
    constructor() {
        console.log("Hehehe");
    }
}


/* CALL APPLY and BIND
The call(), apply(), and bind() methods in JavaScript are used to explicitly control the value of the this keyword inside a function and to pass arguments.
The primary differences lie in how they are invoked and how they handle function arguments. 
*/

let object = {
    name : "Akhil",
};

function abcde() {
    // console.log(this)  -   If this is done then the default will be window. 
}
// abcde();
abcde.call(object)