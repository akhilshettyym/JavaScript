/*
JavaScript Switch Statement

* Switch Control Flow :
- Based on a condition, switch selects one or more code blocks to be executed.
- switch executes the code blocks that matches an expression.
- switch is often used as a more readable alternative to many if...else if...else statements, especially when dealing with multiple possible values.
- Syntax :
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

This is how it works:
- The switch expression is evaluated once.
- The value of the expression is compared with the values of each case.
- If there is a match, the associated block of code is executed.
- If there is no match, no code is executed.

- Example :
- This example uses the weekday number to calculate the weekday name:
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

- Note : The getDay() method returns the weekday as a number between 0 and 6.
(Sunday=0, Monday=1, Tuesday=2 ..)

* The break Keyword :
- When JavaScript reaches a break keyword, it breaks out of the switch block.
- This will stop the execution inside the switch block.
- No more statements in the switch block will be executed.
- It is not necessary to break the last case. The switch ends (breaks) there anyway.

- Note : The break keyword is crucial for preventing a "fall-through."
- Without break, the code will continue to execute the next case blocks (and the default block if present) even if their values do not match the expression.

* The default Keyword :
- The default keyword specifies a block of code to run if there is no case match.
- The default keyword is optional.
- The default can act as a fallback:
- Example :
- The getDay() method returns the weekday as a number between 0 and 6.
- If today is neither Saturday (6) nor Sunday (0), write a default message:
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}

The result of text will be:
Looking forward to the Weekend.

- The default case does not have to be the last case in a switch block:
- Example :
switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}
- If default is not the last case in the switch block, remember to end the default case with a break.

* Common Code Blocks :
- Sometimes you will want different switch cases to use the same code.
- In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:
- Example
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}

* Switching Details :
- If multiple cases matches a case value, the first case is selected.
- If no matching cases are found, the program continues to the default label.
- If no default label is found, the program continues to the statement(s) after the switch.

* Strict Comparison :
- Switch uses strict comparison (===).
- The values must be of the same type to match.
- A strict comparison can only be true if both operands are of the same type.
- Example :
In this example there is no match for x:
let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
    
 */