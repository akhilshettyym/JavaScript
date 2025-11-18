/*
* JavaScript Operators :
Operators are for Mathematical and Logical Computations
- The Assignment Operator = assigns values
- The Addition Operator + adds values
- The Multiplication Operator * multiplies values
- The Comparison Operator > compares values
*/

// * JavaScript Assignment :
// The Assignment Operator (=) assigns a value to a variable:
// Assignment Examples
let x = 10;
// Assign the value 5 to x
// let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z:
let z = x + y;

// JavaScript Addition
// The Addition Operator (+) adds numbers:
let a = 5;
let b = 2;
let c = a + b;

// JavaScript Multiplication
// The Multiplication Operator (*) multiplies numbers:
let d = 5;
let e = 2;
let f = d * e;

/*
* Types of JavaScript Operators :
There are different types of JavaScript operators:
- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- And more ...

* JavaScript Arithmetic Operators :
- Arithmetic Operators are used to perform arithmetic on numbers:

- Arithmetic Operators Example :
let a = 3;
let x = (100 + 50) * a;

Operator	    Description
+	            Addition
-	            Subtraction
*	            Multiplication
**	            Exponentiation
/	            Division
%	            Modulus (Division Remainder)
++	            Increment
--	            Decrement

* JavaScript String Addition :
- The + can also be used to add (concatenate) strings:
- Example :
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
- The += assignment operator can also be used to add (concatenate) strings:

- Example :
let text1 = "What a very ";
text1 += "nice day";
- The result of text1 will be:
    What a very nice day

- Note : When used on strings, the + operator is called the concatenation operator.

* Adding Strings and Numbers :
- Adding two numbers, will return the sum as a number like 5 + 5 = 10.
- Adding a number and a string, will return the sum as a concatenated string like 5 + "5" = "55".
- Example :
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
- The result of x, y, and z will be:
    10
    55
    Hello5

- Note : If you add a number and a string, the result will be a string!

* JavaScript Assignment Operators :
- Assignment operators assign values to JavaScript variables.
- The Addition Assignment Operator (+=) adds a value to a variable.
- Assignment :
let x = 10;
x += 5;

Operator	    Example	        Same As
=	            x = y	        x = y
+=	            x += y	        x = x + y
-=	            x -= y	        x = x - y
*=	            x *= y	        x = x * y
/=	            x /= y	        x = x / y
%=	            x %= y	        x = x % y
**=	            x **= y     	x = x ** y

* JavaScript Comparison Operators :
- Comparison operators are used to compare two values.
- Comparison operators always return true or false.
- Example :
let x = 5;
let result = x > 8;

Operator	    Description	                        Example
==	            equal to	                        x == 5
===	            equal value and equal type	        x === 5
!=	            not equal	                        x != 5
!==	            not equal value or not equal type	x !== 5
>	            greater than	                    x > 5
<	            less than	                        x < 5
>=	            greater than or equal to	        x >= 5
<=	            less than or equal to	            x <= 5
All the comparison operators above can also be used on strings:

- Example :
let text1 = "A";
let text2 = "B";
let result = text1 < text2;

* JavaScript Logical Operators :
Operator	    Description
&&	            logical and
||	            logical or
!	            logical not
*/