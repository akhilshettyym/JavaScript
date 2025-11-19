/*
JavaScript Break
The Break Statement
The break statement "jumps out" of loops and switches.

The break statement terminates the execution of a loop or a switch statement.

Break in Loops
When break is encountered in a loop, the loop terminates immediately.

The program control is transfered to the statements following the loop.

No more loop iterations are executed.

Example
Terminate the loop (break the loop) when the loop counter (i) is 3:

for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
Note
You have already seen the break statement used in an earlier chapter of this tutorial.

It was used to "jump out" of a switch statement.

Break in a Switch
In a switch statement, a break statement will exit the switch block after a matching case is executed. Without break, execution would "fall through" to subsequent case blocks.

Example
Use the weekday number to calculate the weekday name:

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
Note
The break keyword is crucial for preventing a switch "fall-through."

Without break, the code will continue to execute the next case blocks (and the default block if present) even if their values do not match the expression.

ADVERTISEMENT

REMOVE ADS

JavaScript Labels
A label provides a name for a statement, or a block of statements, allowing statements to be referenced to, for program flow control, particularly in loops.

Syntax
A label is an identifier followed by a colon (:).

labelname: statement;
A label precedes a statement or a block of code.

labelname: {
  statements
}
Labeled Break
Syntax
break labelname;
The break statement exits a loop or block and transfers the control to the labeled statement.

The break statement is particularly useful for breaking out of inner or outer loops from nested loops.

Example
Break to loop1:

let text = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { break loop1; }
    text += i;
   }
}
Example
Break to loop2:

let text = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { break loop2; }
    text += i;
   }
}
Note
break and continue are the only JavaScript statements that can "jump out of" a code block.

A code block is a block of code between { and }.

Without a label reference, break can only jump out of a loop or a switch.

With a label reference, break can jump out of any code block:

Example
Break out of the block after the second car:

const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}
*/