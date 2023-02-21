// the following code uses an if statement to check if a number is positive   -------  If statement
let num = 5;

if (num > 0) {
  console.log("The number is positive");
}

// the following code uses an if-else statement to check if a number is positive or negative -------  If-else statement
let num = -3;

if (num > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is negative");
}

// the following code uses a switch statement to determine the day of the week based on a number  ------------ Switch statement
let dayOfWeek = 3;

switch (dayOfWeek) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day of the week");
    break;
}
