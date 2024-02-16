const users = []; // empty array
const grades = [10, 8, 13, 15]; // array of numbers
const attendees = ["Sam", "Alex"]; // array of strings
const values = [10, false, "John"]; // mixed

[].length; // 0

const grades = [10, 8, 13, 15];
grades.length; // 4

const users = ["Sam", "Alex", "Charley"];
users[1]; //"Alex"

const users = ["Sam", "Alex", "Charley"];
users.at(1); //"Alex"
users.at(-2); //"Alex"

const numbers = [10, 8, 13, 15];
numbers.push(20); // returns 5 (the new length of the array)
console.log(numbers); // [10, 8, 13, 15, 20];

const numbers = []; // start with empty array
numbers.push(10); // returns 1 (new length of array)
console.log(numbers); // [10] (still an array but content changed)
numbers.push(20); // returns 2 (new length of array)
console.log(numbers); // [10, 20] (still an array but content changed)
