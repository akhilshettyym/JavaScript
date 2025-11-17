/*

Hoisting - Hoisting refers to the mechanism whereby the interpreter appears to move the declarations of functions, variables, and classes to the top of their scope before the code is executed. This is not a literal physical movement of code but rather a result of JavaScript's two-pass compilation phase where memory is allocated for declarations before the execution phase begins.

* JavaScript Variables :
- Variables = Data Containers
- JavaScript variables are containers for data.

- JavaScript variables can be declared in 4 ways:
Modern JavaScript :
- Using let
- Using const
Older JavaScript :
- Using var (Not Recommended)
- Automatically (Not Recommended)

* JavaScript Identifiers :
- Variables are identified with unique names called identifiers.
- Names can be short like x, y, z.
- Names can be descriptive age, sum, carName.
- The rules for constructing names (identifiers) are:
  - Names can contain letters, digits, underscores, and dollar signs.
  - Names must begin with a letter, a $ sign or an underscore (_).
  - Names are case sensitive (X is different from x).
  - Reserved words (JavaScript keywords) cannot be used as names.

Note :
- Numbers are not allowed as the first character in names.
- This way JavaScript can easily distinguish identifiers from numbers.

* JavaScript Underscore (_) :
- JavaScript treats underscore as a letter.
- Identifiers containing _ are valid variable names:
Example :
- let _lastName = "Johnson";
- let _x = 2;
- let _100 = 5;

- A convention among professional programmers is to start a name with underscore for "private" variables.

* JavaScript Dollar Sign $ :
- JavaScript also treats a dollar sign as a letter.
- Identifiers containing $ are valid variable names:
Example :
- let $ = "Hello World";
- let $$$ = 2;
- let $myMoney = 5;

- Using the $ is not very common in JavaScript, but professional programmers often use it as an alias for the main function in JavaScript libraries.

* Declaring JavaScript Variables :
- Creating a variable in JavaScript is called declaring a variable.

You declare a JavaScript variable with the let keyword or the const keyword.

* Declaring a Variable Using let :
- let carName;

* When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you cannot use const
5. Never use var if you can use let or const.
*/