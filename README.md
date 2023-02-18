# JavaScript From Zero to Hero

Before diving into the code, it's helpful to understand what JavaScript is and what it can be used for.

## Definition 

JavaScript is a programming language that is primarily used for creating dynamic and interactive web pages.

## Where JavaScript we use

* It is often used in conjunction with HTML and CSS to make websites more engaging and interactive. 
 
     Example : Some examples of JavaScript-powered features on websites include dropdown menus, pop-up windows, and form validation.

#### Now, let's move on to actually writing some JavaScript code. 

# Here are some basic concepts you should learn when starting out:

## 1. Variables 

* Variables are used to store data in JavaScript. 
* You can declare a variable using the `var`, `let`, or `const` keywords, depending on whether you want to allow the variable to be reassigned later or not. 
* For example:

```javascript
var myVariable = "Hello, world!";
let myOtherVariable = 42;
const myConstant = true;
```
## 2. Data Types

- JavaScript has several different data types, including strings, numbers, booleans, and objects.
- You can use the `typeof` operator to check the type of a variable. 
- For example:

```javascript
var myString = "Hello, world!";
var myNumber = 42;
var myBoolean = true;
var myObject = {name: "John", age: 30};

console.log(typeof myString); // Output: string
console.log(typeof myNumber); // Output: number
console.log(typeof myBoolean); // Output: boolean
console.log(typeof myObject); // Output: object
```

## 3. Functions

- Functions are used to perform a specific task in JavaScript.
- They can take parameters as input and return a value.
- Here's an example:

```javascript
function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addNumbers(2, 3)); // Output: 5
```

## 4. Conditional Statements

- Conditional statements allow you to execute different code depending on whether a condition is true or false.
- The `if` statement is the most basic conditional statement in JavaScript.
- Here's an example:

```javascript
var age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult yet.");
}
```

## 5. Loops

- Loops are used to repeat a block of code multiple times.
- The `for` loop is a common type of loop in JavaScript.
- Here's an example:

```javascript
for (var i = 0; i < 5; i++) {
  console.log("The value of i is " + i); // Output: 0,1,2,3,4
}
```

#### This should give you a good starting point for learning JavaScript. There are many other concepts and features to explore, but mastering these basics will give you a strong foundation.










