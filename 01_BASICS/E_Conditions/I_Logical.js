/*
JavaScript Logical Operators

* Logical Operators :
- Logical operators are used to combine boolean expressions.
- Logical operators can be used to modify the results of comparisons.
- Typically, you will use a comparison operator to check a condition, and a logical operator to combine conditions into more complex logic.

* JavaScript Logical Operators :
- Logical operators are used to determine the logic between variables or values.
- Given that x = 6 and y = 3, the table below explains the logical operators:

Oper	        Name	        Example
&&	            AND	            (x < 10 && y > 1) is true	
||	            OR	            (x === 5 || y === 5) is false	
!	            NOT	            !(x === y) is true

* JavaScript Logical AND :
- The && operator returns true if both expressions are true, otherwise false:
- Example :
let x = 6;
let y = 3;
let z = (x < 10 && y > 1)

* JavaScript Logical OR :
- The || operator returns true if one or both expressions are true, otherwise false:
- Example
let x = 6;
let y = -3;
let z = (x > 0 || y > 0)

* JavaScript Logical NOT :
- The NOT operator (!) returns true for false expressions and false for true expressions.
- Example
let x = (5 == 8);
let y = !(5 == 8)

* The Nullish Coalescing Operator (??) :
- The ?? operator returns the right operand when the left operand is nullish (null or undefined), otherwise it returns the left operand.
- Example
let name = null;
let text = "missing";
let result = name ?? text;

- When programming, a lot of values can be falsey (like 0, empty strings, false, undefined, null, NaN).
- However, sometimes you want to check if a variable is nullish (either undefined or null), like when it is okay for a 
variable to be an empty string, or a false value. Then you can use the nullish coalescing operator.
 */