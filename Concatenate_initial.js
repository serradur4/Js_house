function concatInitials(firstNameInitial, lastNameInitial) {
    
    return firstNameInitial + lastNameInitial;

}

// Sample usage - do not modify
console.log(concatInitials("J", "D")); // "JD"
console.log(concatInitials("S", "B")); // "SB"

//1 example

let name = "Sam";
name += " Blue";
console.log(name); // "Sam Blue"
//2 example
let prefix = "Mrs.";
let name = "Sam";
let string = prefix + " " + name; // "Mrs. Sam"
