function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }

    return true;
  }

  function filterPrimes() {
    const inputElement = document.getElementById('arrayInput');
    const resultElement = document.getElementById('result');

    const inputArray = inputElement.value
      .split(',')
      .map(item => parseInt(item.trim(), 10));

    const primeNumbers = inputArray.filter(isPrime);

    resultElement.textContent = `[${primeNumbers.join(', ')}]`;
  }
