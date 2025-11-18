/*
* JavaScript Assignment :

* JavaScript Assignment Operators :
- Assignment operators assign values to JavaScript variables.
- Given that x = 10 and y = 5, the table below explains the assignment operators:

Operator	    Example	        Same As	        Result
=	            x = y	        x = y	        x = 5
+=	            x += y	        x = x + y	    x = 15
-=	            x -= y	        x = x - y	    x = 5
*=	            x *= y	        x = x * y	    x = 50
**=	            x **= y	        x = x ** y	    x = 100000
/=	            x /= y	        x = x / y	    x = 2
%=	            x %= y	        x = x % y	    x = 0
:	            x: 45	        size.x = 45	    x = 45

* Logical Assignment Operators :
Operator	    Example	        Result
&&=	            true &&= 10	    x = 10
||=	            false ||= 10	x = 10
??=	            null ??= 10	    x = 10

* The = Operator :
- The Simple Assignment Operator assigns a simple value to a variable.
- Simple Assignment Examples
let x = 10;
let x = 10 + y;

- The += Operator :
- The Addition Assignment Operator adds a value to a variable.
let x = 10;
x += 5;

- The -= Operator :
- The Subtraction Assignment Operator subtracts a value from a variable.
let x = 10;
x -= 5;

- The *= Operator :
- The Multiplication Assignment Operator multiplies a variable.
let x = 10;
x *= 5;

- The **= Operator :
- The Exponentiation Assignment Operator raises a variable to the power of the operand.
let x = 10;
x **= 5;

- The /= Operator :
- The Division Assignment Operator divides a variable.
let x = 10;
x /= 5;

- The %= Operator :
- The Remainder Assignment Operator assigns a remainder to a variable.
let x = 10;
x %= 5;

* String Assignment :
- Two assignment operators can assign values to strings:
- The Simple Assignment Operator assigns a simple value to a string.
- The Addition Assignment Operator adds a value to a string.

- The = Operator :
- The Simple Assignment Operator assigns a value to a variable.
String Assignment
let text = "Hello";

- The += Operator :
- The Addition Assignment Operator Can also be used to add strings.
let text = "Hello"; text += " World";

- The &&= Operator :
- The Logical AND assignment operator is used between two values.
If the first value is true, the second value is assigned.

Logical AND Assignment Examples
let x = true;
let y = x &&= 10;

let x = false;
let y = x &&= 10;

let x = 1;
let y = x &&= 10;

let x = 0;
let y = x &&= 10;

let x = undefined;
let y = x &&= 10;

let x = null;
let y = x &&= 10;

- Note : The &&= operator is an ES2020 feature.

- The ||= Operator :
- The Logical OR assignment operator is used between two values.
- If the first value is false, the second value is assigned.

Logical OR Assignment Examples
let x = false;
let y = x ||= 10;

let x = true;
let y = x ||= 10;

let x = null;
let y = x ||= 10;

let x = undefined;
let y = x ||= 10;

- Note : The ||= operator is an ES2020 feature.

- The ??= Operator :
- The Nullish coalescing assignment operator is used between two values.
- If the first value is undefined or null, the second value is assigned.
let x;
x ??= 10;

let x = 0;
x ??= 10;

let x = null;
x ??= 10;

let x = undefined;
x ??= 10;

let x = 10;
let y = 5;
x ??= y;

- Note : The ??= operator is an ES2020 feature.

* The Spread (...) Operator :
- The ... operator splits iterables into individual elements.

- Example :
let text = "12345";

let min = Math.min(...text);
let max = Math.max(...text);
*/