# Conditional Statements
There are three types of condtional statements in Javascript:
1. If statement
2. If-else statement
3. Switch statement

## 1. If Statement
- The `if` statement is used to execute a block of code if a certain condition is true.
- The syntax for an `if` statement is as follows:

```javascript
if (condition) {
  // code to be executed if the condition is true
}
```

**Explanation** : Here, `condition` is any JavaScript expression that returns a Boolean value (`true` or `false`). If `condition` is `true`, the code inside the curly braces will be executed. If `condition` is `false`, the code inside the curly braces will be skipped over.

## 2. If-else Statement

- The `if-else` statement is used to execute one block of code if a condition is true, and a different block of code if the condition is false.
- he syntax for an `if-else` statement is as follows:

```javascript
if(condition){
  // code to be executed if the condition is true
}else{
 // code to be executed if the condition is false
}
```

**Explanation** : Here, `condition` is any JavaScript expression that returns a Boolean value. If `condition` is `true`, the code inside the first set of curly braces will be executed. If `condition` is `false`, the code inside the second set of curly braces will be executed.

## 3. Switch Statement
- The `switch` statement is used to execute different blocks of code based on the value of an expression.
- The syntax for a `switch` statement is as follows:

```javascript
switch (expression) {
  case value1:
    // code to be executed if expression is equal to value1
    break;
  case value2:
    // code to be executed if expression is equal to value2
    break;
  default:
    // code to be executed if expression doesn't match any of the cases
}
```

**Explanation** : Here, `expression` is any JavaScript expression, and `value1` and `value2` are the possible values of `expression`. If `expression` is equal to `value1`, the code inside the first set of curly braces will be executed. If `expression` is equal to `value2`, the code inside the second set of curly braces will be executed. If `expression` doesn't match any of the cases, the code inside the `default` block will be executed.
