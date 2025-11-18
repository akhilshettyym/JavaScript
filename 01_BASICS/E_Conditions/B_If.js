/*
JavaScript if

* The JavaScript if Statement :
- Use the JavaScript if statement to execute a block of code when a condition is true.
Syntax
if (condition) {
  //  block of code to be executed if the condition is true
}

- Note that if is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.

- Example :
- Make a "Good day" greeting if the hour is less than 18:00:
if (hour < 18) {
  greeting = "Good day";
}

- The result of greeting will be:
- Examples :
let age = 18;
let text = "You can Not drive";
if (age >= 18) {
  text = "You can drive");
}

let age = 16;
let text = "You can Not drive";
if (age >= 18) {
  text = "You can drive");
}

* Nested if :
- You can use an if statement inside another if statement:
- Example :
let age = 16;
let country = "USA";
let text = "You can Not drive!";
if (country == "USA") {
  if (age >= 16) {
    text = "You can drive!";
  }
}

- Nested if statements can make your code more complex.
- A better solution is to use the logical AND operator:
- Example
let age = 16;
let country = "USA";
let text = "You can Not drive!";
if (country == "USA" && age >= 16) {
  text = "You can drive!";
}
  
*/