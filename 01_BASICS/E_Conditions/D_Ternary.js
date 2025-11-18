/*
* The Conditional (Ternary) Operator :
- Example :
- If the value of age is < 18, set the value of text to "Minor", otherwise to "Adult":

let text = (age < 18) ? "Minor" : "Adult";
- Example :
let isMember = true;
let discount = isMember ? 0.2 : 0;

- Example :
let isMember = false;
let discount = isMember ? 0.2 : 0;

* Description :
- The conditional operator is a shorthand for writing conditional if...else statements.
- It is called a ternary operator because it takes three operands.
- yntax :
(condition) ? expression1 : expression2

* Parameters :
Parameter	        Description
condition	        Required.
                    The condition to be tested.
                    An expression that evaluates to true or false.

?	                Required.
                    The operator separating the condition from the expressions.

expression1	        Required.
                    The value to return if the condition is true.

:	                Required.
                    The operator separating the expressions.

expression2	        Required.
                    The value to return if the condition is false.

- Note : The conditional (ternary) operator is the only JavaScript operator that takes three operands.
*/