# Arrays In JavaScript

- In JavaScript, an array is a data structure used to store a collection of elements, which can be of any type such as numbers, strings, or objects.
- Arrays are useful for grouping similar items together and accessing them through a single variable.
- To create an array in JavaScript, you can use the array literal notation `[]`, like this:

  ```javascript
  let myArray = [];
  ```

-  You can also create an array with pre-defined elements by placing them inside the array literal, like this:

   ```javascript
   let myArray = [1, 2, 3, "four", true];
   ```

- You can access an element in an array by using its index, which is a zero-based integer representing the position of the element in the array. For example, to access the second element in an array, you would use the index `1`, like this:

  ```javascript
  let myArray = [1, 2, 3];
  console.log(myArray[1]); // outputs 2
  ```

- You can also modify elements in an array by assigning a new value to its index, like this:

  ```javascript
  let myArray = [1, 2, 3];
  myArray[1] = 4;
  console.log(myArray); // outputs [1, 4, 3]
  ```

- You can add new elements to the end of an array using the `push()` method, like this:

  ```javascript
  let myArray = [1, 2, 3];
  myArray.push(4);
  console.log(myArray); // outputs [1, 2, 3, 4]
  ```

- You can remove the last element of an array using the `pop()` method, like this:

  ```javascript
  let myArray = [1, 2, 3];
  myArray.pop();
  console.log(myArray); // outputs [1, 2]
  ```

- You can get the length of an array using the `length` property, like this:

  ```javascript
  let myArray = [1, 2, 3];
  console.log(myArray.length); // outputs 3
  ```

## Four Different Methods Of Arrays In Javascript

## 1. shift()

- The `shift()` method removes the first element of an array and returns it.
- This method also changes the length of the array.

Here's an example:

```javascript
let myArray = ["apple", "banana", "cherry"];
let removedItem = myArray.shift();
console.log(myArray); // outputs ["banana", "cherry"]
console.log(removedItem); // outputs "apple"
```

## 2. unshift()

- The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

Here's an example:

```javascript
let myArray = ["apple", "banana", "cherry"];
let newLength = myArray.unshift("orange", "peach");
console.log(myArray); // outputs ["orange", "peach", "apple", "banana", "cherry"]
console.log(newLength); // outputs 5
```

## 3. splice()

- The `splice()` method can be used to add or remove elements from an array.
- It takes three arguments: the index at which to start changing the array, the number of elements to remove, and (optionally) the elements to add.

Here's an example:

Removing elements:

```javascript
let myArray = ["apple", "banana", "cherry", "date"];
let removedItems = myArray.splice(1, 2);
console.log(myArray); // outputs ["apple", "date"]
console.log(removedItems); // outputs ["banana", "cherry"]
```

Adding elements:

```javascript
let myArray = ["apple", "banana", "cherry", "date"];
myArray.splice(1, 2, "orange", "peach");
console.log(myArray); // outputs ["apple", "orange", "peach", "date"]
```

## 4. slice()

- The `slice()` method creates a new array from a portion of an existing array.
- It takes two arguments: the index at which to start extracting elements (inclusive) and the index at which to stop (exclusive).

Here's an example:

```javascript
let myArray = ["apple", "banana", "cherry", "date"];
let newArray = myArray.slice(1, 3);
console.log(newArray); // outputs ["banana", "cherry"]
```

