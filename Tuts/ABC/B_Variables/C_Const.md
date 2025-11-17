## JavaScript const — Complete Explanation and Examples

The `const` keyword was introduced in ES6 (2015).

✔ Variables defined with `const` cannot be Redeclared  
✔ Variables defined with `const` cannot be Reassigned  
✔ Variables defined with `const` have Block Scope
*/

// ---------------------------------------------------
// 🚫 Cannot be Reassigned
// ---------------------------------------------------

/*
A variable defined with the `const` keyword cannot be reassigned.
*/

const PI = 3.141592653589793;

// PI = 3.14;        // ❌ TypeError: Assignment to constant variable
// PI = PI + 10;     // ❌ TypeError: Assignment to constant variable


// ---------------------------------------------------
// 🧩 Must be Assigned
// ---------------------------------------------------

/*
`const` variables must be assigned a value when declared.
*/

const CORRECT_PI = 3.14159265359; // ✅ Correct

// const WRONG_PI;   // ❌ SyntaxError: Missing initializer in const declaration
// WRONG_PI = 3.14159265359;


// ---------------------------------------------------
// 💡 When to Use const
// ---------------------------------------------------

/*
Always declare a variable with `const` when you know its value should not change.

Use `const` when declaring:
 - A new Array
 - A new Object
 - A new Function
 - A new RegExp
*/


// ---------------------------------------------------
// 🧱 Constant Objects and Arrays
// ---------------------------------------------------

/*
The keyword `const` does not make a value immutable.
It defines a **constant reference** to a value.

Because of this, you cannot:
 - Reassign a constant value
 - Reassign a constant array
 - Reassign a constant object
But you can:
 - Change elements of a constant array
 - Change properties of a constant object
*/


// ---------------------------------------------------
// 🚗 Constant Arrays
// ---------------------------------------------------

/*
You can change the elements of a constant array.
*/

const cars = ["Saab", "Volvo", "BMW"];

// Change an element
cars[0] = "Toyota";

// Add a new element
cars.push("Audi");

console.log(cars); // ✅ ["Toyota", "Volvo", "BMW", "Audi"]

/*
But you CANNOT reassign the array itself.
*/

// const cars = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"]; // ❌ TypeError: Assignment to constant variable


// ---------------------------------------------------
// 🚙 Constant Objects
// ---------------------------------------------------

/*
You can change the properties of a constant object.
*/

const car = { type: "Fiat", model: "500", color: "white" };

// Change a property
car.color = "red";

// Add a property
car.owner = "Johnson";

console.log(car); // ✅ { type: "Fiat", model: "500", color: "red", owner: "Johnson" }

/*
But you CANNOT reassign the object itself.
*/

// car = { type: "Volvo", model: "EX60", color: "red" }; // ❌ TypeError: Assignment to constant variable


// ---------------------------------------------------
// ⚖️ Difference Between var, let, and const
// ---------------------------------------------------

/*
✅ What is Good?
- `let` and `const` have block scope.
- `let` and `const` cannot be redeclared.
- `let` and `const` must be declared before use.
- `let` and `const` do not bind to `this`.
- `let` and `const` are not hoisted.

⚠️ What is Not Good?
- `var` does not have to be declared.
- `var` is hoisted.
- `var` binds to `this`.
*/


// ---------------------------------------------------
// 🌍 Browser Support
// ---------------------------------------------------

/*
The `let` and `const` keywords are not supported in Internet Explorer 11 or earlier.

| Browser | Version Supporting `const` |
|----------|----------------------------|
| Chrome   | 49+                        |
| Edge     | 12+                        |
| Firefox  | 44+                        |
| Safari   | 11+                        |
| Opera    | 36+                        |
*/


// ---------------------------------------------------
// 🧱 Block Scope
// ---------------------------------------------------

/*
Declaring a variable with `const` is similar to `let` in terms of block scope.

The `x` declared inside the block is not the same as the `x` declared outside.
*/

const x = 10; // Here x is 10

{
 const x = 2; // Here x is 2
 console.log("Inside block:", x);
}

console.log("Outside block:", x);
// Output:
// Inside block: 2
// Outside block: 10


// ---------------------------------------------------
// 🔁 Redeclaring
// ---------------------------------------------------

/*
Redeclaring a `var` variable is allowed anywhere in a program.
*/

var a = 2; // Allowed
var a = 3; // Allowed
a = 4;     // Allowed
console.log(a); // Output: 4

/*
Redeclaring an existing `var` or `let` variable to `const` in the same scope is NOT allowed.
*/

var y = 2;   // Allowed
// const y = 2; // ❌ Not allowed

{
 let z = 2;   // Allowed
 // const z = 2; // ❌ Not allowed
}

{
 const t = 2;   // Allowed
 // const t = 2; // ❌ Not allowed
}

/*
Reassigning an existing const variable in the same scope is also NOT allowed.
*/

const num = 2; // Allowed

// num = 2;    // ❌ Not allowed
// var num = 2; // ❌ Not allowed
// let num = 2; // ❌ Not allowed
// const num = 2; // ❌ Not allowed

{
 const num = 2; // Allowed inside new block
 // num = 2;     // ❌ Not allowed
 // var num = 2; // ❌ Not allowed
 // let num = 2; // ❌ Not allowed
 // const num = 2; // ❌ Not allowed
}

/*
Redeclaring a variable with const in another scope (or block) is allowed.
*/

const score = 2; // Allowed

{
 const score = 3; // Allowed
}

{
 const score = 4; // Allowed
}


// ---------------------------------------------------
// 🚀 Hoisting
// ---------------------------------------------------

/*
Variables defined with `var` are hoisted to the top and initialized as undefined.
You can use them before they are declared.
*/

carName1 = "Volvo";
var carName1; // Works fine
console.log(carName1); // Output: Volvo

/*
Variables defined with `const` are hoisted but NOT initialized.
Using them before declaration results in ReferenceError.
*/

// alert(carName2);       // ❌ ReferenceError: Cannot access 'carName2' before initialization
// const carName2 = "Volvo";


// ---------------------------------------------------
// ✅ Summary
// ---------------------------------------------------

/*
- `const` variables must be initialized at declaration.
- `const` creates a block-scoped, read-only reference.
- You can modify the contents of arrays/objects declared with `const`.
- You cannot reassign `const` variables.
- Prefer `const` by default, and use `let` when reassignment is required.
*/