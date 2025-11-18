/* 
Temporal Dead Zone (TDZ) :
- A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value. 

- The area where js kno that there is a variable but value cannot be accessed
*/

console.log(a);  // Calling a before it is declared or initialized.
// This gives an error - ReferenceError: Cannot access 'a' before initialization.
let a = 20;

/*
Hoisting : impact per type
- When a varible is created by js, It gets divided into two where declare part will MOVE UPWARDS and its initialization part remains there itself.
*/

var b = 12;         // This is how we declare and initialize a variable

var b = undefined;  // This is declaration part which moves upwards.
a = 12;             // This is initialization part which stays here itself.

/*
var     ->  hoist   -> undefined
let     ->  hoist   -> X
const   ->  hoist   -> X
*/