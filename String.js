function getNumberOfChars(name) {
    // number of characters in: name
    return name.length;
}
function getFirstChar(name) {
    // first character of: name
    return name[0];
}
function getLastChar(name) {
    // last character of: name
    return name.at(-1);
}
function getLower(name) {
    // name all in lower case (example: "ABC" becomes "abc")
    return name.toLowerCase();
}
function getUpper(name) {
    // name all in upper case (example: "abc" becomes "ABC")
    return name.toUpperCase();
}
function getCapitalized(name) {
    // capitalized version of name (example: "alEX" becomes "Alex")
    return name[0].toUpperCase(0) + name.substring(1).toLowerCase(1);
}


const language = "JavaScript";
language.substring(1, 4);     //"ava"
language.substring(4);       //"Script"


//templete string
`This is a template string`

//multiline string
let text = `This is a multiline
string !`

//interpolation
let language = "JavaScript";
`I am learning ${language}`; //"I am learning JavaScript";
//capitalize word
function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();        //andrea --> Andrea
