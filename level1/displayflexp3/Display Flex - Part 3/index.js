document.getElementById('change-display').addEventListener('click', function () {
    // Get the container element
    var container = document.querySelector('.container');

    // Toggle the flex direction between row and column
    if (container.style.flexDirection === 'column') {
        container.style.flexDirection = 'row';
    } else {
        container.style.flexDirection = 'column';
    }
});