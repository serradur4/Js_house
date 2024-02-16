function sumPositiveNumbers(){
    let sum = 0;
    numbers.forEach(function(number){
        if (number > 0){
            sum += number;
        }
        else if(number < 0){
            return 0;
        }
    })
    return sum;
}
//console.log(sumPositiveNumbers([15, -5, 10]));  = 25
//console.log(sumPositiveNumbers([-3, 4, -2, 1]));  = 5
