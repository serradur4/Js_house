const numbers = [1, 7, 8, 19, 73];
  const sum = sumPrimalNumber(numbers);
  console.log(sum);
  function sumPrimalNumber(arr) {
    let sum = 0;
    let count = 0;
    arr.forEach(function(number) {
      let j = 0;
      for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
          j++;
        }
      }
      if (j === 2) {
        sum += number;
        count++;
      }
    })
    if (count == 0) {
      console.log("non ci sono numeri primi");
      return 0;
    }
    let average = sum / count;
    return average;
  }
  
  const numbers = [1, 7, 8, 19];
  const sum = sumPrimalNumber(numbers);
  console.log(sum);`
