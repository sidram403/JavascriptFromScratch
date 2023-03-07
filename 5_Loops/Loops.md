# Loops

- Loops are a fundamental programming concept that allows you to repeat a block of code multiple times.
- JavaScript supports several types of loops, including the `for` loop, the `while` loop, and the `do...while` loop.

## Three ways of loops in JavaScript

1. for loop
2. while loop
3. do...while loop

## 1. for loop

- The `for` loop is used to loop through a block of code a fixed number of times.

It has the following syntax:

```javascript
for (initialization; condition; increment/decrement) {
  // code block to be executed
}
```

**Explanation :** The initialization statement is executed before the loop starts. The condition is checked before each iteration, and if it is true, the code block is executed. The increment/decrement statement is executed after each iteration.

## 2. while loop

- The `while` loop is used to loop through a block of code while a specified condition is true.

It has the following syntax:

```javascript
while (condition) {
  // code block to be executed
}
```

**Explanation :** The code block is executed as long as the condition is true. The condition is checked before each iteration.

## 3. do...while loop

- The `do-while` loop is similar to the `while` loop, but the code block is executed at least once, even if the condition is false.

It has the following syntax:

```javascript
do {
  // code block to be executed
}
while (condition);

```

**Explanation :** The code block is executed first, and then the condition is checked. If the condition is true, the code block is executed again.

**Example 1 :** Here is an example of a `for` loop that prints the numbers from 1 to 5:

```javascript
for (var i = 1; i <= 5; i++) {
  console.log(i);
}
```

**Output :**

```javascript
1
2
3
4
5
```

**Example 2 :** Here is an example of a `while` loop that prints the numbers from 1 to 5:

```javascript
var i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

**Output :**

```javascript
1
2
3
4
5
```

**Example 3 :** Here is an example of a `do...while` loop that prints the numbers from 1 to 5:

```javascript
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

**Output :** 

```javascript
1
2
3
4
5
```

