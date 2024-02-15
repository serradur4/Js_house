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
