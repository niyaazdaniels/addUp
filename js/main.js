function calculateSum(...numbers) {
    if (numbers.length === 0) {
      return 'Provide only numbers';
    }
    let sum = numbers.reduce((acc, num) => {
      return acc + (typeof num === 'number' ? num : 0);
    }, 0);

    return sum;
  }
  document.getElementById('calculateButton').addEventListener('click', function() {
    displaySum(calculateSum(41, 65, 23, 48, 'five'));
  });

  function displaySum(sum) {
    let resultElement = document.getElementById('result');
    resultElement.innerHTML = typeof sum === 'number' ? 'Sum: ' + sum : sum;
  }