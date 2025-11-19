/*
JavaScript Continue
The Continue Statement
The continue statement skips the current iteration in a loop.

The remaining code in the iteration is skipped and processing moves to the next iteration.

.
Example
Skip the value of 3:

for (let i = 1; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
JavaScript Labels
A label provides a name for a statement, or a block of statements, allowing statements to be referenced to, for program flow control, particularly in loops.

Syntax
A label is an identifier followed by a colon (:).

labelname: statement;
A label precedes a statement or a block of code.

labelname: {
  statements
}


Continue to Labelname
Syntax
continue labelname;
Example
Continue to loop1:

let text = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop1; }
    text += i;
   }
}
Example
Continue to loop2:

let text = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop2; }
    text += i;
   }
}
Note
break and continue are the only JavaScript statements that can "jump out of" a code block.
*/