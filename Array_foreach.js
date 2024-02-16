const grades = [10, 8, 13];  //plural

grades.forEach(function(grade) {      //singolar 
    // do something with individual grade       //The .forEach(callback) method allows you to run the callback function for every item in that array.
    console.log(grade);                
});
//another example
const grades = [10, 14, 15]; // array (plural)
grades.forEach(function(grade) { // array item (singular)
    console.log(grade);
});


const people = ["Sam", "Alex"]; // array (plural)
people.forEach(function(person) { // array item (singular)
    console.log(person);
});
