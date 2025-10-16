## JavaScript Statements

- Example
<ul>
<li>let x, y, z;    // Statement 1
<li>x = 5;          // Statement 2
<li>y = 6;          // Statement 3
<li>z = x + y;      // Statement 4

#### JavaScript Programs
- A computer program is a list of "instructions" to be "executed" by a computer.
- These programming instructions are called statements.
- Most JavaScript programs contain many statements.
- The statements are executed, one by one, in the same order as they are written.

#### Note :
- In HTML, JavaScript programs are executed by the web browser.

#### JavaScript Statements
- JavaScript statements are composed of:
- Values, Operators, Expressions, Keywords, and Comments.
- This statement tells the browser to write "Hello Dolly." inside an HTML element with id="demo":

- Example - document.getElementById("demo").innerHTML = "Hello Dolly.";

#### Note :
- JavaScript programs (and JavaScript statements) are often called JavaScript code.

#### Semicolons ;
- Semicolons separate JavaScript statements.
- Add a semicolon at the end of each executable statement:

##### Examples
- let a, b, c;  // Declare 3 variables
- a = 5;        // Assign the value 5 to a
- b = 6;        // Assign the value 6 to b
- c = a + b;    // Assign the sum of a and b to c
- When separated by semicolons, multiple statements on one line are allowed:
- a = 5; b = 6; c = a + b;
- On the web, you might see examples without semicolons.
- Ending statements with semicolon is not required, but highly recommended.

#### JavaScript White Space
- JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.

- The following lines are equivalent:
<ol>
<li>let person = "Hege";
<li>let person="Hege";
- A good practice is to put spaces around operators ( = + - * / ):
- let x = y + z;

#### JavaScript Line Length and Line Breaks
- For best readability, programmers often like to avoid code lines longer than 80 characters.

- If a JavaScript statement does not fit on one line, the best place to break it is after an operator:

- Example :
document.getElementById("demo").innerHTML =
"Hello Dolly!";

#### JavaScript Code Blocks
- JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.
- The purpose of code blocks is to define statements to be executed together.
- One place you will find statements grouped together in blocks, is in JavaScript functions:
- Example
function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}

#### JavaScript Keywords
- JavaScript statements often start with a keyword to identify the JavaScript action to be performed.
- Our Reserved Words Reference lists all JavaScript keywords.

#### Keyword Description
<ol>
<li>var	Declares a variable
<li>let	Declares a block variable
<li>const	Declares a block constant

- if	Marks a block of statements to be executed on a condition
- switch	Marks a block of statements to be executed in different cases
- for	Marks a block of statements to be executed in a loop
- function	Declares a function
- return	Exits a function
- try	Implements error handling to a block of statements

##### Note :
- JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.