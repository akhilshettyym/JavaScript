## JavaScript Operators

Operators are used for **mathematical** and **logical computations** in JavaScript.

🧩 Basic Operator Examples:

- The Assignment Operator `=` assigns values
- The Addition Operator `+` adds values
- The Multiplication Operator `*` multiplies values
- The Comparison Operator `>` compares values
  \*/

// ==============================
// 🧮 JavaScript Assignment
// ==============================

// The assignment operator (=) assigns a value to a variable.

let x = 10; // Assigns 10 to x
let y = 5; // Assigns 5 to y
let z = x + y; // Assigns x + y (15) to z

// Example breakdown:
let a = 5; // a = 5
let b = 2; // b = 2
let c = a + b; // c = 7

// ==============================
// ➕ JavaScript Addition
// ==============================

// The addition operator (+) adds numbers.
let num1 = 5;
let num2 = 2;
let sum = num1 + num2; // 7

// ==============================
// ✖️ JavaScript Multiplication
// ==============================

// The multiplication operator (_) multiplies numbers.
let m1 = 5;
let m2 = 2;
let product = m1 _ m2; // 10

// ==============================
// 🧠 Types of JavaScript Operators
// ==============================

/\*
There are different types of JavaScript operators:

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. String Operators
6. Bitwise Operators
7. Ternary Operator (Conditional)
8. Type Operators
   \*/

// ==============================
// ➗ JavaScript Arithmetic Operators
// ==============================

// Arithmetic operators perform math operations on numbers.
let a1 = 3;
let result = (100 + 50) _ a1; // (150) _ 3 = 450

/\*
Common Arithmetic Operators:

- Addition

* Subtraction

- Multiplication \*_ Exponentiation
  / Division
  % Modulus (Remainder)
  ++ Increment
  -- Decrement
  _/

// ==============================
// 🔤 JavaScript String Addition
// ==============================

// The + operator can also concatenate (combine) strings.
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2; // "John Doe"

// The += operator can also be used for string concatenation.
let message = "What a very ";
message += "nice day"; // "What a very nice day"

/_
📝 Note:
When used on strings, the + operator is called the concatenation operator.
_/

// ==============================
// 🔢 Adding Strings and Numbers
// ==============================

// Adding numbers → returns numeric sum.
let sum1 = 5 + 5; // 10

// Adding number + string → returns a string.
let sum2 = "5" + 5; // "55"
let sum3 = "Hello" + 5; // "Hello5"

/\*
📘 Result:
sum1 → 10
sum2 → "55"
sum3 → "Hello5"

🧠 Note:
If you add a number and a string, JavaScript converts the number to a string.
\*/

// ==============================
// 🧾 JavaScript Assignment Operators
// ==============================

// Assignment operators assign values to variables.
let p = 10;
p += 5; // Same as: p = p + 5 → 15

/_
Common Assignment Operators:
= Assign
+= Add and assign
-= Subtract and assign
_= Multiply and assign
/= Divide and assign
%= Modulus and assign \*_= Exponentiation and assign
_/

// ==============================
// ⚖️ JavaScript Comparison Operators
// ==============================

// Comparison operators compare values and return true or false.

let val = 5;
let result1 = val > 8; // false
let result2 = val < 8; // true
let result3 = val == 5; // true
let result4 = val === "5"; // false (strict equality checks type too)

/\*
Comparison Operators:
== equal to
=== equal value and equal type
!= not equal
!== not equal value or not equal type

> greater than
> < less than
> = greater than or equal to
> <= less than or equal to
> ? ternary operator
> \*/

// ==============================
// 🔠 Comparison on Strings
// ==============================

// Strings are compared alphabetically (lexicographically).
let s1 = "A";
let s2 = "B";
let compareResult = s1 < s2; // true, because "A" comes before "B"

// "apple" < "banana" → true
// "dog" > "cat" → true

// ==============================
// 🧩 JavaScript Logical Operators
// ==============================

// Logical operators are used to combine conditions.

let x1 = 6;
let y1 = 3;

// && (AND)
console.log(x1 < 10 && y1 > 1); // true

// || (OR)
console.log(x1 == 5 || y1 == 5); // false

// ! (NOT)
console.log(!(x1 === y1)); // true

/_
Logical Operators:
&& → AND → true if both conditions are true
|| → OR → true if one condition is true
! → NOT → reverses boolean value
_/

// ==============================
// 📘 Summary
// ==============================

/\*
JavaScript Operators Summary:

1️⃣ Arithmetic Operators → + - _ / % ++ --
2️⃣ Assignment Operators → = += -= _= /= %= \*\*=
3️⃣ Comparison Operators → == === != !== > < >= <=
4️⃣ Logical Operators → && || !
5️⃣ String Operators → + and +=
6️⃣ Type Operators → typeof, instanceof

✅ Operators allow JavaScript to perform computations, comparisons, and logic flow.
\*/
