## JavaScript let — Complete Explanation and Examples

The `let` keyword was introduced in ES6 (2015).

✔ Variables declared with `let` have Block Scope  
✔ Variables declared with `let` must be Declared before use  
✔ Variables declared with `let` cannot be Redeclared in the same scope
*/

// ---------------------------------------------------
// 🧩 Block Scope
// ---------------------------------------------------

// Before ES6, JavaScript only had Global Scope and Function Scope.
// ES6 introduced `let` and `const` which provide Block Scope.

// Example: Variables declared inside { } cannot be accessed outside.

{
 let x = 2;
 // x exists only inside this block
}

// console.log(x); // ❌ ReferenceError: x is not defined


// ---------------------------------------------------
// 🌍 Global Scope
// ---------------------------------------------------

// Variables declared with `var` always have Global (or function) scope.
// They do NOT have block scope.

{
 var y = 2;
 // y is accessible outside the block
}

console.log(y); // ✅ Output: 2


// ---------------------------------------------------
// 🚫 Cannot be Redeclared
// ---------------------------------------------------

// Variables defined with `let` cannot be redeclared in the same scope.

let a = "John Doe";
// let a = 0; // ❌ SyntaxError: Identifier 'a' has already been declared

// Variables defined with `var` can be redeclared.
var b = "John Doe";
var b = 0; // ✅ Works fine


// ---------------------------------------------------
// 🔁 Redeclaring Variables
// ---------------------------------------------------

// Redeclaring a variable with `var` can cause unexpected results.

var c = 10;
// Here c is 10

{
 var c = 2;
 // Here c is 2
}

// Here c is still 2 (overwritten due to lack of block scope)
console.log(c); // Output: 2


// Redeclaring with `let` solves this problem:
let d = 10;
// Here d is 10

{
 let d = 2;
 // Here d is 2
}

console.log(d); // Output: 10


// ---------------------------------------------------
// ⚖️ Difference Between var, let, and const
// ---------------------------------------------------

/*
✅ What is Good?
- `let` and `const` have block scope
- `let` and `const` cannot be redeclared
- `let` and `const` must be declared before use
- `let` and `const` do not bind to `this`
- `let` and `const` are not hoisted

⚠️ What is Not Good?
- `var` does not have to be declared
- `var` is hoisted
- `var` binds to `this`
*/


// ---------------------------------------------------
// 🧭 Browser Support
// ---------------------------------------------------

// `let` and `const` are NOT supported in Internet Explorer 11 or earlier.

/*
| Browser | Version Supporting `let` |
|----------|--------------------------|
| Chrome   | 49+                      |
| Edge     | 12+                      |
| Firefox  | 44+                      |
| Safari   | 11+                      |
| Opera    | 36+                      |
*/


// ---------------------------------------------------
// 🔄 Redeclaring
// ---------------------------------------------------

// Redeclaring with `var` is allowed anywhere in the program:
var x = 2;
var x = 3; // ✅ Works fine
console.log(x); // Output: 3

// Redeclaring with `let` in the same block is NOT allowed:
var p = 2;   // ✅ Allowed
// let p = 3;   // ❌ Not allowed

{
 let q = 2; // ✅ Allowed
 // let q = 3; // ❌ Not allowed
}

{
 let r = 2; // ✅ Allowed
 // var r = 3; // ❌ Not allowed
}

// Redeclaring a variable with let in another block IS allowed:
let s = 2;   // ✅ Allowed

{
 let s = 3; // ✅ Allowed
}

{
 let s = 4; // ✅ Allowed
}


// ---------------------------------------------------
//  Let Hoisting
// ---------------------------------------------------

// Variables declared with `var` are hoisted to the top and initialized as `undefined`.
// You can use them before declaration.

carName1 = "Volvo"; // Works fine
var carName1;
console.log(carName1); // Output: Volvo

// Variables declared with `let` are hoisted but NOT initialized.
// Accessing them before declaration results in ReferenceError.

// carName2 = "Saab"; //  ReferenceError
// let carName2 = "Volvo";


// ---------------------------------------------------
//  Summary
// ---------------------------------------------------
/*
- `var` has function or global scope
- `let` has block scope
- `var` can be redeclared and hoisted (initialized as undefined)
- `let` cannot be redeclared in same scope and is not initialized until declared
- Prefer `let` (or `const`) over `var` in modern JavaScript
*/