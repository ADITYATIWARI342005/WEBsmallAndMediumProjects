let resultDisplay = document.getElementById("result");

function appendToDisplay(value) {
  resultDisplay.value += value;
}

function clearDisplay() {
  resultDisplay.value = "";
}

function calculate() {
  try {
    resultDisplay.value = eval(resultDisplay.value);
  } catch (error) {
    resultDisplay.value = "Error";
  }
}
