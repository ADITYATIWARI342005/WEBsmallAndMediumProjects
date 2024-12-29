function calculateArea() {
    // Fetching the values of the sides from the input fields
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);

    // Checking if the entered values form a valid triangle
    if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
        // Calculating the semi-perimeter of the triangle
        var s = (sideA + sideB + sideC) / 2;

        // Calculating the area using Heron's formula
        var area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

        // Displaying the result
        document.getElementById('result').innerHTML =area.toFixed(2);
    } else {
        // Displaying an error message for invalid triangle
        document.getElementById('result').innerHTML = "Invalid triangle. Please enter valid side lengths.";
    }
}