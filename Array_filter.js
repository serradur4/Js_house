
const numbers = [9, 5, 14, 3, 11];                                                        
const numbersAboveTen = numbers.filter(function(number) {  // When you call this method on an array, you will get back another array that
                                                          //contains some of the items from the original array, based on the condition you specify
    return number > 10;
});
console.log(numbersAboveTen); // [14, 11]



numbers.filter(function(number) {  //This will return every item in the array. So you will end up getting a copy of the original array.
    return true;
});



const years = [2000, 2008, 2020, 2023];

years.filter(function(year) {     //return the years > 2010
    return year >= 2010;
});
