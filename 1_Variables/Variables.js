// In Javascript Variables are declared in 3 ways 
//----------------------------------------------------------------

// 1. Using var 
// ---------------------------------------------------------------

var x = 10;  // here we using 'var' to declare variable

var y = 20;

var sum = x + y;

console.log(sum); // Output: 30

// 2 . Using let
// ---------------------------------------------------------------

function myFunction() {
  var x = 10; // x is accessible within the function because we using 'var' variable
  if (true) {
    let y = 20; // y is accessible within the if block because we using 'let' variable
  }
  console.log(x); // Output: 10
  console.log(y); // Error: y is not defined
}

// 3. Using const
// ---------------------------------------------------------------

function myFunction() {
  var x = 10; //x is accessible within the function because we using 'var' variable
  if (true) {
    let y = 20; // y is accessible within the if block because we using 'let' variable
    const z = 30; // z is also accessible within the if block we using 'const' variable
  }
  console.log(x); // Output: 10
  console.log(y); // Error: y is not defined
  console.log(z); // Error: z is not defined
}
