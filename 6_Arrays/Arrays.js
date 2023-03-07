
// array declaration
let myArray = [1, 2, 3];

// to access the second element in an array, you would use the index 1, like this:
console.log(myArray[1]); // outputs 2

// We can Modify the array element
myArray[1] = 4;

console.log(myArray);  // outputs [1, 4, 3]

// you can add more elements to an array using 'push'
myArray.push(4);

console.log(myArray); // outputs [1,2,3,4]

// We can delete the element from the array using 'pop' , it delete last element in the array
myArray.pop();

console.log(myArray); // outputs [1,2]

// We can print the size or length of the array using 'length'
let myArray = [1, 2, 3];

console.log(myArray.length); // outputs 3
