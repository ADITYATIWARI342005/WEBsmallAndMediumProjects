function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    height = height / 100; // convert height from cm to meters

    var bmi = weight / (height * height); // BMI formula
    bmi = bmi.toFixed(2); // round off to 2 decimal places

    document.getElementById('result').innerHTML = `${bmi}`;
}
