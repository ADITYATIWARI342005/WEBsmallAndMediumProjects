function convertTemperature() {
    const celsiusInput = document.getElementById('celsius');
    const celsiusValue = parseFloat(celsiusInput.value);

    if (isNaN(celsiusValue)) {
      alert('Please enter a valid number for Celsius temperature.');
      return;
    }

    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Fahrenheit: ${fahrenheitValue.toFixed(2)}`;
  }