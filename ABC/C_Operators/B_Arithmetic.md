## JavaScript Arithmetic

JavaScript provides arithmetic operators to perform mathematical operations on numbers (either literals or variables).

Arithmetic operators include:  
`+`, `-`, `*`, `/`, `%`, `++`, `--`, `**`
*/


// ==============================
// ➕ Arithmetic Operations
// ==============================

// A typical arithmetic operation operates on two numbers.

// 1️⃣ Using literals:
let sumLiteral = 100 + 50;  // 150

// 2️⃣ Using variables:
let a = 10;
let b = 20;
let sumVariables = a + b;  // 30

// 3️⃣ Using expressions:
let result = (100 + 50) * a;  // (150) * 10 = 1500



/*
==============================
### Operators and Operands
==============================

In arithmetic:
- The numbers are called **operands**
- The symbol between them is the **operator**

Example:
5 + 2
|   |
|   └── operand
└────── operand
  ↑
  operator (+)
*/



// ==============================
// ➕ Addition
// ==============================
let x = 5;
let y = 2;
let z = x + y;  // 7

// Adds two numbers together



// ==============================
// ➖ Subtraction
// ==============================
let x1 = 5;
let y1 = 2;
let z1 = x1 - y1;  // 3

// Subtracts right operand from left



// ==============================
// ✖️ Multiplication
// ==============================
let x2 = 5;
let y2 = 2;
let z2 = x2 * y2;  // 10

// Multiplies operands



// ==============================
// ➗ Division
// ==============================
let x3 = 5;
let y3 = 2;
let z3 = x3 / y3;  // 2.5

// Divides left operand by right operand



// ==============================
// 🔁 Modulus (Remainder)
// ==============================
let x4 = 5;
let y4 = 2;
let z4 = x4 % y4;  // 1

/*
The modulus operator (%) returns the remainder of a division.

Example:
5 ÷ 2 = 2 remainder 1 → 5 % 2 = 1
*/



// ==============================
// ⬆️ Increment
// ==============================
let x5 = 5;
x5++;  // Same as: x5 = x5 + 1
let z5 = x5;  // 6



// ==============================
// ⬇️ Decrement
// ==============================
let x6 = 5;
x6--;  // Same as: x6 = x6 - 1
let z6 = x6;  // 4



// ==============================
// 🔼 Exponentiation
// ==============================
let x7 = 5;
let z7 = x7 ** 2;  // 25

/*
The exponentiation operator (**) raises the first operand to the power of the second.
It works the same as Math.pow(x, y)
*/
let z8 = Math.pow(x7, 2);  // 25



// ==============================
// 🧮 Operator Precedence
// ==============================

/*
Operator precedence determines the order in which operations are performed.

Multiplication (*) and Division (/) have higher precedence than Addition (+) and Subtraction (-).

Example:
*/

let p = 100 + 50 * 3;  // 100 + 150 = 250  (multiplication first)

/*
✅ Multiplication and division are performed before addition and subtraction.
*/



// ==============================
// 🔢 Changing Precedence with Parentheses
// ==============================

// You can change the order of execution using parentheses.

let q = (100 + 50) * 3;  // (150) * 3 = 450

/*
Parentheses have the highest precedence — operations inside parentheses run first.
*/



// ==============================
// ⏩ Left-to-Right Evaluation
// ==============================

// When operators share the same precedence, JavaScript evaluates from left to right.

let r1 = 100 + 50 - 3;  // (150 - 3) = 147
let r2 = 100 / 50 * 3;  // (2 * 3) = 6

/*
🧠 Note:
Addition/Subtraction and Multiplication/Division pairs are evaluated in left-to-right order.
*/


// ==============================
// ✅ Summary
// ==============================

/*
JavaScript Arithmetic Operators:

+   Addition
-   Subtraction
*   Multiplication
/   Division
%   Modulus (Remainder)
++  Increment
--  Decrement
**  Exponentiation

🧩 Precedence Order (High → Low):
1. Parentheses ()
2. Exponentiation **
3. Multiplication *, Division /, Modulus %
4. Addition +, Subtraction -

💡 Tip:
Always use parentheses when in doubt — it makes your code clearer and avoids confusion.
*/