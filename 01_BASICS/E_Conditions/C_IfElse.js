/*
JavaScript else

* The else Statement :
- Use the else statement to specify a block of code to be executed if a condition is false.
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}

- Example
- If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

* The else if Statement :
- Use the else if statement to specify a new condition if the first is false.
- Syntax :
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
- Example :
- If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
*/