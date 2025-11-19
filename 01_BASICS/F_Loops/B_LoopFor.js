/*
JavaScript For Loop
For Loops can execute a block of code a number of times.

For Loops are fundamental for tasks like performing an action multiple times.

The For Loop
The for statement creates a loop with 3 optional expressions:

for (exp 1; exp 2; exp 3) {
  // code block to be executed
}
exp 1 is executed (one time) before the execution of the code block.

exp 2 defines the condition for executing the code block.

exp 3 is executed (every time) after the code block has been executed.

Example
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
From the example above, you can read:

exp 1 sets a variable before the loop starts (let i = 0).

exp 2 defines the condition for the loop to run (i must be less than 5).

exp 3 increases a value (i++) after the code block has been executed.

Example
Use a for loop to collect the car names from the cars array:

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;

let text = "";
for (let i = 0; i < len; i++) {
  text += cars[i];
}
How to use exp 1
exp 1 is used to initialize the variable(s) used in the loop (let i = 0).

exp 1 is optional.

You can omit exp 1 if the value is set before the loop starts:

Example
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;

let i = 2;

let text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}
How to use exp 2
exp 2 is used to evaluate the condition of the initial variable (i < len).

exp 2 is also optional.

If exp 2 returns false, the loop will end.

Note
If you omit exp 2, you must provide a break inside the loop.

Otherwise the loop will never end.

This will crash your browser.

How to use exp 3
exp 3 increments the value of the initial variable (i++).

exp 3 is optional.

exp 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.

exp 3 can be omitted (if you increment the value inside the loop):

Example
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;

let i = 0;

let text = "";
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}
Loop Scope
Using var in a loop:

Example
var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10
Using let in a loop:

Example
let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5
In the first example, using var, the variable declared in the loop redeclares the variable outside the loop.

In the second example, using let, the variable declared in the loop does not redeclare the variable outside the loop.

When let is used to declare the i variable in a loop, the i variable will only be visible within the loop.
*/