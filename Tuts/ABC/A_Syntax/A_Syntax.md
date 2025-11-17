## JavaScript Syntax

#### Syntax Rules

- Syntax are the rules how programs must be constructed:
- // How to Declare variables:
  let x = 5;
  let y = 6;

- // How to Compute values:
  let z = x + y;

- // I am a Comment. I do Nothing

#### JavaScript Values

The JavaScript syntax defines two types of values:

- Literals (Fixed values)
- Variables (Variable values)

#### JavaScript Literals

- The most important syntax rules for literals (fixed values) are:
- Numbers are written with or without decimals:
- Example - 10.50
- 1001 Strings are text, written within double or single quotes:
- Example - "John Doe" 'John Doe'

#### JavaScript Keywords

- JavaScript keywords are used to defines actions to be performed.
- The let and const keywords create variables:
- Example - let x = 5;
- const fname = "John";

##### NOTE

- JavaScript keywords are case-sensitive.
- JavaScript does not interpret LET or Let as the keyword let.

#### JavaScript Variables

- Variables are containers for storing data values.
- Variables must be identified with unique names.

Example
// Define x as a variable
let x;

// Assign the value 6 to x
x = 6;
JavaScript Identifiers
An identifier is the name you give to a variable.

#### Rules for identifiers:

<ol>
<li>Must start with a letter, _, or $
<li>Can contain digits after the first character
<li>Cannot be a reserved keyword (let, const, if, etc.)
<li>Are case-sensitive

#### JavaScript Operators

- JavaScript assignment operators (=) assign values to variables:
- Example
  let x = 5;
  let y = 6;
  let sum = x + y;
  JavaScript uses arithmetic operators ( + - \* / ) to compute values:

- Example
  5 \* 10
  JavaScript Expressions
  An expression is a combination of values, variables, and operators, which computes to a value.

- Examples
  (5 + 6) \* 10 evaluates to 110:

(5 + 6) \* 10
Expressions can also contain variable:

x \* 10
"John" + " " + "Doe", evaluates to "John Doe":

"John" + " " + "Doe"

#### JavaScript is Case Sensitive

- JavaScript identifiers are case sensitive.
- The variables lastName and lastname, are different variables:

- Example :
<ol>
<li>let lastName = "Doe";
<li>let lastname = "Peterson";

##### JavaScript and Camel Case

Historically, programmers have used different ways of joining multiple words into one variable name:

##### Hyphens:

- first-name, last-name, master-card, inter-city.
- Hyphens are not allowed in JavaScript. They are reserved for subtractions.

##### Underscore:

- first_name, last_name, master_card, inter_city.

##### Upper Camel Case (Pascal Case):

- FirstName, LastName, MasterCard, InterCity.

##### Lower Camel Case:

- firstName, lastName, masterCard, interCity.
- JavaScript programmers tend to use lower camel case.