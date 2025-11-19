/*
JavaScript Objects
An Object is a variable that can hold many variables.

Objects are collections of key-value pairs, where each key (known as property names) has a value.

Objects can describe anything like houses, cars, people, animals, or any other subjects.

Car Object

Car Properties	Car Methods
car.name = Fiat

car.model = 500

car.weight = 850kg

car.color = white	car.start()

car.drive()

car.brake()

car.stop()
Different cars have the same properties, but the property values can differ from car to car.

Different cars have the same methods, but the methods can be performed at different times.

JavaScript Objects
This code assigns many values (Fiat, 500, white) to an object named car:

Example
const car = {type:"Fiat", model:"500", color:"white"};
Note:
You should declare objects with the const keyword.

When an object is declared with const, you cannot later reassign it to point to a different variable.

It does not make the object unchangeable. You can still modify its properties and values.

How to Create a JavaScript Object
An object literal is a concise way to create an object.

An object literal is a list of key : value pairs inside curly braces { }:

{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
In object terms, the key : value pairs are the object properties.

Examples
All the examples below, create a JavaScript object with 4 properties.

// Create an Object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
Spaces and line breaks are not important. An object literal can span multiple lines:

// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
You can also create an empty object, and add the properties later:

// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
Using the new Keyword
Example
Create a new JavaScript object using new Object():

// Create an Object
const person = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
});
Note:
All the examples above do exactly the same.

There is no need to use new Object().

For readability, simplicity and speed, use an object literal instead.

ADVERTISEMENT

REMOVE ADS

Object Properties
You can access object properties in two ways:

objectName.propertyName
objectName["propertyName"]
Examples
person.lastName;
person["lastName"];
JavaScript Object Methods
Object methods are actions that can be performed on objects.

Object methods are function definitions stored as property values:

Property	Property Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}
Example
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
In the example above, this refers to the person object:

this.firstName means the firstName property of person.

this.lastName means the lastName property of person.

How to Display JavaScript Objects?
Displaying a JavaScript object will output [object Object].

Example
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let text = person;
Displaying Object Properties
The properties of an object can be added in a string:

Example
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Add Properties
let text = person.name + "," + person.age + "," + person.city;
Object Constructor Functions
Sometimes we need to create many objects of the same type.

To create an object type we use an object constructor function.

It is considered good practice to name constructor functions with an upper-case first letter.

Object Type Person
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
Note:
In the constructor function, this has no value.

The value of this will become the new object when a new object is created.

Now we can use new Person() to create many new Person objects:

Example
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");
Summary
Objects are containers for Properties and Methods.

Properties are named Values.

Methods are Functions stored as Properties.

Properties can be primitive values, functions, or even other objects.

Constructors are Object Prototypes.

In JavaScript, Objects are King.
If you Understand Objects, you Understand JavaScript.
In JavaScript, almost "everything" is an object.

Objects are objects
Maths are objects
Functions are objects
Dates are objects
Arrays are objects
Maps are objects
Sets are objects
All JavaScript values, except primitives, are objects.

JavaScript Primitives
A primitive data type is data type that can only store a single primitive value.

JavaScript defines 7 types of primitive data types:

Type	Example value
string	"Hello"
number	3.14
boolean	true
bigint	12345678901234
null	null
undefined	undefined
symbol	symbol
*/