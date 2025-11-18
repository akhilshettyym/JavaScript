/*
* Data Types + Type System :

* Primitives and reference :
- Primitives ->  Built-in data types in programming lang that represent simple values.
- When a variable holding a primitive value is copied, the result is a new, separate instance of that value,
 ensuring that changes to the copy do not affect the original.
- Strings, number, boolean, null, undefined, symbol, bigint

- Reference -> Reference data types (also known as non-primitive types or objects) do not store the actual data 
directly within the variable. Instead, the variable holds a reference (an address) in memory to where the object's
data is stored.
- arrays, objects, functions


- Null is the value given by user or you knowingly.
- Undefined is something where a variable is created and value is nor initialized to it, The default value for it will be undefined.

- symbol - unique immutable value
let obj = {
    uid: 1,
    name: "Akhil",
    age: 12,
    email: "akhil@gmail.com"
}

let u1 = Symbol("uid");
onj[u1] = "001";

MAX_SAFE_INTEGER :
Number.MAX_SAFE_INTEGER

To obtain a bigger data type than this use bigInt.
let a = 9007199254740991n;
a + 3n

Dynamic Typing :
- There is no static typing in JS.
- We can change the data because we have dynamic data types

* Dynamic typing :
- How it works: Type checking occurs during program execution (runtime). Variables can change their data type during runtime. 
- Pros: More flexible and can allow for faster initial development since you don't need to declare variable types explicitly. 
- Cons: Type errors are only found when the code is executed, which can lead to unexpected crashes and bugs later in development. 
- Examples: Python, JavaScript, and Ruby. 

* Static typing :
- How it works: Type checking is performed before the program runs (compile time). Variable types are fixed and cannot change at runtime. 
- Pros: Catches many errors early in the development process, leading to more robust and reliable code. 
- Cons: Can be more verbose as it often requires explicit type declarations, and development can be slower initially. 
- Examples: Java, C++, C#, and Go.cc


* Type Coercion : 
- Type coercion in JavaScript refers to the automatic or implicit conversion of values from one data type to another during an operation.
- This happens when an operation involves different data types, and JavaScript attempts to make them compatible by converting one or more of the values. 

* Truthy vs Falsy values :
- In JavaScript, truthy and falsy values refer to how different data types are evaluated in a Boolean context, such as in if statements 
or logical operations (&&, ||). When a non-Boolean value is used in such a context, JavaScript implicitly converts it to a Boolean true or false.
- 0 false ""  null undefined NaN document.all
- Example : 
if(12) {

}

* Why typeof of NaN is number : 
- Failed number operation

* undefined vs null :
undefined is default and null is given.
- undefined is a primitive value automatically assigned by JavaScript in several scenarios.
It signifies that a variable has been declared but has not yet been assigned a value. 
- null is a primitive value that must be explicitly assigned by a developer.
Meaning : It signifies the intentional absence of any object value. It is often used to indicate that a variable or property is declared and initialized, 
but currently holds no meaningful value.
 */