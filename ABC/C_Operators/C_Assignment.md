## JavaScript Assignment Operators

Assignment operators are used to assign values to JavaScript variables.  
They include simple assignment, arithmetic assignment, string assignment, and logical assignment operators.

Given: x = 10, y = 5
\*/

// ==============================
// = Simple Assignment Operator
// ==============================

let x1 = 10; // Assigns 10 to x1
let x2 = 10 + 5; // Assigns 15 to x2

// ==============================
// += Addition Assignment
// ==============================

let x3 = 10;
x3 += 5; // Same as x3 = x3 + 5 → 15

// ==============================
// -= Subtraction Assignment
// ==============================

let x4 = 10;
x4 -= 5; // Same as x4 = x4 - 5 → 5

// ==============================
// \*= Multiplication Assignment
// ==============================

let x5 = 10;
x5 _= 5; // Same as x5 = x5 _ 5 → 50

// ==============================
// /= Division Assignment
// ==============================

let x6 = 10;
x6 /= 5; // Same as x6 = x6 / 5 → 2

// ==============================
// %= Remainder Assignment
// ==============================

let x7 = 10;
x7 %= 5; // Same as x7 = x7 % 5 → 0

// ==============================
// \*\*= Exponentiation Assignment
// ==============================

let x8 = 10;
x8 **= 5; // Same as x8 = x8 ** 5 → 100000

// ==============================
// 🔤 String Assignment
// ==============================

// Simple assignment:
let text1 = "Hello"; // Assign "Hello" to text1

// Addition assignment:
let text2 = "Hello";
text2 += " World"; // Concatenates → "Hello World"

// ==============================
// 🧠 Logical Assignment Operators (ES2020)
// ==============================

// 1️⃣ &&= Logical AND assignment
// If the variable is truthy, assign new value; otherwise keep original.
let a1 = true;
a1 &&= 10; // 10
let a2 = false;
a2 &&= 10; // false

let a3 = 1; // truthy
a3 &&= 10; // 10
let a4 = 0; // falsy
a4 &&= 10; // 0
let a5; // undefined
a5 &&= 10; // undefined
let a6 = null;
a6 &&= 10; // null

// 2️⃣ ||= Logical OR assignment
// If the variable is falsy, assign new value; otherwise keep original.
let b1 = false;
b1 ||= 10; // 10
let b2 = true;
b2 ||= 10; // true
let b3 = null;
b3 ||= 10; // 10
let b4; // undefined
b4 ||= 10; // 10

// 3️⃣ ??= Nullish coalescing assignment
// Assigns a value if the variable is null or undefined.
let c1;
c1 ??= 10; // 10
let c2 = 0;
c2 ??= 10; // 0
let c3 = null;
c3 ??= 10; // 10
let c4;  
c4 ??= 10; // 10
let c5 = 10;
let c6 = 5;
c5 ??= c6; // 10

// ==============================
// ... Spread Operator
// ==============================

// The spread operator splits iterables (arrays or strings) into individual elements.
let str = "12345";
let min = Math.min(...str); // 1
let max = Math.max(...str); // 5

/_
✅ Summary:
Assignment operators allow you to assign, add, subtract, multiply, divide, exponentiate, and manipulate strings and logical values.
Logical assignment operators (&&=, ||=, ??=) are ES2020 features.
The spread operator (...) is used to expand iterables into individual elements.
_/