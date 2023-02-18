# Variables

There are three ways to declare a variable in JavaScript:
 1. Using 'var'
 2. Using 'let'
 3. Using 'const'
 
 Let's see one-by-one
 
 ## 1. Using 'var'
 
- The `var` keyword is used to declare a variable in JavaScript.
- Variables declared with `var` have function scope, meaning they are accessible within the function in which they are defined, or if they are defined outside of a function, they have global scope, meaning they are accessible anywhere in the code.

Here's an example:

```javascript
function myFunction() {
  var x = 10;
  if (true) {
    var y = 20;
  }
  console.log(x); // Output: 10
  console.log(y); // Output: 20
}
myFunction();
console.log(x); // Error: x is not defined
console.log(y); // Output: 20
```
**Explanation** :  When we call the myFunction() function, we can see that 'x' and 'y' are both accessible within the function. However, when we try to access 'x' and 'y' outside of the function, we get an error for 'x' because it has function scope and is not accessible outside of the function. We are able to access 'y', however, because it has global scope.

- One thing to note is that `var` variables are hoisted in JavaScript.
- This means that even if a variable is declared at the bottom of a function, it is accessible from the beginning of the function.

Here's an example:

```javascript
unction myFunction() {
  console.log(x); // Output: undefined
  var x = 10;
  console.log(x); // Output: 10
}
myFunction();
```
**Explanation** : In the above example, we have declared a variable 'x' inside the myFunction() function. We then try to log the value of 'x' to the console before we have assigned a value to it. We can see that the value is 'undefined'. This is because var variables are hoisted to the top of their scope, which means that the variable is declared at the beginning of the function, even though we didn't explicitly write it there.


## 2. Using 'let'

- The `let` keyword is also used to declare a variable in JavaScript.
- Unlike the `var` keyword, variables declared with `let` have block scope, meaning they are accessible only within the block in which they are defined.

Here's an example:

```javascript
function myFunction() {
  let x = 10;
  if (true) {
    let y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
  }
  console.log(x); // Output: 10
  console.log(y); // Error: y is not defined
}
myFunction();
console.log(x); // Error: x is not defined
```

**Explanation** : When we call the `myFunction()` function, we can see that `x` is accessible both inside and outside the block, while `y` is only accessible inside the block. When we try to access `x` and `y` outside of the function, we get an error for both, because they have function scope.

- One thing to note is that `let` variables are not hoisted in JavaScript.
- This means that if you try to access a `let` variable before it is declared, you will get a ReferenceError.

Here's an example:

```javascript
function myFunction() {
  console.log(x); // Error: x is not defined
  let x = 10;
  console.log(x); // Output: 10
}
myFunction();
```

**Explanation** : In the above example, we have declared a variable `x` using the `let` keyword inside the `myFunction()` function. We then try to log the value of `x` to the console before we have assigned a value to it. We can see that we get a ReferenceError, because `let` variables are not hoisted.

## 3. Using 'const'

- The `const` keyword is used to declare a constant variable in JavaScript.
- Variables declared with `const` cannot be reassigned, meaning they are read-only.

Here's an example:

```javascript
function myFunction() {
  const x = 10;
  if (true) {
    const y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
  }
  console.log(x); // Output: 10
  console.log(y); // Error: y is not defined
}
myFunction();
console.log(x); // Error: x is not defined
```

**Explanation** : When we call the `myFunction()` function, we can see that `x` is accessible both inside and outside the block, while `y` is only accessible inside the block. When we try to access `x` and `y` outside of the function, we get an error for both, because they have function scope.

- One thing to note is that when you declare a `const` variable, you must assign a value to it immediately, and you cannot reassign it later.

Here's an example:

```javascript
function myFunction() {
  const x = 10;
  x = 20; // Error: Assignment to constant variable
}
myFunction();
```

**Explanation** :  In the above example, we have declared a `const` variable `x` and assigned it the value `10`. We then try to reassign it to the value `20`. We can see that we get an error, because `const` variables cannot be reassigned.

- Additionally, when you declare an object or an array with `const`, you can still modify the properties or elements of the object or array.
- However, you cannot reassign the entire object or array. 

Here's an example:

```javascript
function myFunction() {
  const person = { name: "John", age: 30 };
  person.age = 40; // This is allowed
  person = { name: "Jane", age: 25 }; // Error: Assignment to constant variable
}
myFunction();
```

**Explanation** :  In the above example, we have declared a `const` variable `person` and assigned it an object with two properties: `name` and `age`. We then modify the value of the `age` property. This is allowed, because we are not reassigning the entire object. However, when we try to reassign the entire object, we get an error, because `const` variables cannot be reassigned.
