function Factorial_forEach(numbers){
    let result;
    numbers.forEach(function(number){                       //per ogni elemento dell'array viene eseguito il fattoriale
            if (number == 0 || number == 1) {
              return 1;
            }
            let result = 1;
            for (let i = 2; i <= number; i++) {
              result *= i;
            }
            return result;
    })
    console.log(Factorial_forEach(result));

}

