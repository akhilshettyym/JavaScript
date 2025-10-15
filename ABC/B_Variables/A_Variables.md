## JavaScript Variables

### Variables = Data Containers

- JavaScript variables are containers for data.
- JavaScript variables can be declared in 4 ways:

#### Modern JavaScript

- Using let
- Using const

#### Older JavaScript

- Using var (Not Recommended)
- Automatically (Not Recommended)

##### Example using let

- let x = 5;
- let y = 6;
- let z = x + y;

##### Example using const

- const x = 5;
- const y = 6;
- const z = x + y;

##### From the examples you can guess:

- x contains (or stores) the value 5
- y contains (or stores) the value 6
- z contains (or stores) the value 11

- Variables are labels for data values. Variables are containers for storing data.

#### JavaScript Identifiers

- Variables are identified with unique names called identifiers.
- Names can be short like x, y, z.
- Names can be descriptive age, sum, carName.

#### The rules for constructing names (identifiers) are:

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter, a $ sign or an underscore (\_).
- Names are case sensitive (X is different from x).
- Reserved words (JavaScript keywords) cannot be used as names.

#### Note

- Numbers are not allowed as the first character in names.
- This way JavaScript can easily distinguish identifiers from numbers.

#### JavaScript Underscore (\_)

- JavaScript treats underscore as a letter.
- Identifiers containing \_ are valid variable names:

##### Example

- let \_lastName = "Johnson";
- let \_x = 2;
- let \_100 = 5;

###### A convention among professional programmers is to start a name with underscore for "private" variables.

#### JavaScript Dollar Sign $

- JavaScript also treats a dollar sign as a letter.
- Identifiers containing $ are valid variable names:

##### Example

- let $ = "Hello World";
- let $$$ = 2;
- let $myMoney = 5;

###### Using the $ is not very common in JavaScript, but professional programmers often use it as an alias for the main function in JavaScript libraries.

#### Declaring JavaScript Variables

- Creating a variable in JavaScript is called declaring a variable.
- You declare a JavaScript variable with the let keyword or the const keyword.

#### Declaring a Variable Using let

- let carName;
- After the declaration, the variable has no value (technically it is undefined).
- To assign a value to the variable, use the equal sign:

- carName = "Volvo";
- Most often you will assign a value to the variable when you declare it:

##### Example

- Create a variable called carName and assign the value "Volvo" to it:

- let carName = "Volvo";
- Declaring a Variable Using const
- Always use const if the value should not be changed

const carName = "Volvo";

##### A Mixed Example

- const price1 = 5;
- const price2 = 6;
- let total = price1 + price2;

###### The two variables price1 and price2 are declared with the const keyword.

- The values of price1 and price2 cannot be changed.
- The variable total is declared with the let keyword.
- The value of total can be changed.

##### Declaring a Variable Automatically

- Undeclared variables are automatically declared when first used:

##### Example (Not Recommended)

- x = 5;
- y = 6;
- z = x + y;

###### It's a good programming practice to declare all variables at the beginning of a script.

#### Declaring a Variable Using var

- The var keyword was used in all JavaScript code before 2015.
- The let and const keywords were new to JavaScript in 2015.

#### Using var (Not Recommended)

- var x = 5;
- var y = 6;
- var z = x + y;

###### When to Use var, let, or const?

1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you cannot use const
5. Never use var if you can use let or const.

### JavaScript Data Types

- JavaScript variables can hold 8 datatypes, but for now, just think of numbers and strings.
- Strings are text written inside quotes.
- Numbers are written without quotes.
- If you put a number in quotes, it will be treated as a text string.

##### Example

- const pi = 3.14;
- let person = "John Doe";
- let answer = 'Yes I am!';