## JavaScript Datatypes

JavaScript has 8 Datatypes.

A JavaScript variable can hold 8 types of data:
1. String  
2. Number  
3. BigInt  
4. Boolean  
5. Undefined  
6. Null  
7. Symbol  
8. Object (which includes Arrays and Dates)
*/


// ==============================
// 🧩 Examples of Each Datatype
// ==============================

// 1️⃣ String
// Strings are sequences of characters enclosed in single or double quotes.
let color = "Yellow";
let lastName = "Johnson";

// 2️⃣ Number
// Numbers can be integers or floating point (decimals).
let length = 16;
let weight = 7.5;

// 3️⃣ BigInt
// BigInt is used for very large integers beyond the safe limit of Number.
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345);

// 4️⃣ Boolean
// Booleans can only have two values: true or false.
let isActive = true;
let isComplete = false;

// 5️⃣ Object
// Objects store multiple values in key:value pairs.
const person = { firstName: "John", lastName: "Doe" };

// 6️⃣ Array Object
// Arrays store multiple values in an ordered list.
const cars = ["Saab", "Volvo", "BMW"];

// 7️⃣ Date Object
// Date objects represent dates and times.
const date = new Date("2022-03-25");

// 8️⃣ Undefined
// A variable declared but not assigned has the value `undefined`.
let a;
console.log(a); // undefined

// 9️⃣ Null
// Null represents an empty or "nothing" value.
let b = null;
console.log(b); // null

// 🔟 Symbol
// Symbols are unique and immutable identifiers.
const s1 = Symbol();
const s2 = Symbol();



// ==============================
// 🧮 The typeof Operator
// ==============================

// typeof returns the type of a variable or expression.
typeof "";           // "string"
typeof "John";       // "string"
typeof "John Doe";   // "string"

typeof 0;            // "number"
typeof 314;          // "number"
typeof 3.14;         // "number"
typeof (3);          // "number"
typeof (3 + 4);      // "number"



// ==============================
// 🔤 JavaScript Strings
// ==============================

// A string (text) is a sequence of characters. Use single or double quotes.

// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';

// You can use quotes inside strings if they don't match the surrounding ones:
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';



// ==============================
// 🔢 JavaScript Numbers
// ==============================

// All JavaScript numbers are stored as floating point values.
let x1 = 34.00;  // with decimals
let x2 = 34;     // without decimals

// Exponential Notation (scientific)
let y1 = 123e5;   // 12300000
let z1 = 123e-5;  // 0.00123



// ==============================
// ✅ JavaScript Booleans
// ==============================

// Booleans can only be true or false.
// They are often used in conditional statements.
let isJavaScriptFun = true;
let isRaining = false;



// ==============================
// ❓