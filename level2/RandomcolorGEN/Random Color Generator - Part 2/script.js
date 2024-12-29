function generateRandomColorCode() {
    const randomNumber = Math.floor(Math.random() * 16777215);
    return "#" + randomNumber.toString(16);
}

function changeColor() {
    document.addEventListener("DOMContentLoaded", function() {
        const button = document.getElementById('btn');

        button.addEventListener('click', ()=>{
            const randomColorCode = generateRandomColorCode();
            document.body.style.backgroundColor = randomColorCode;
            const randomColor = document.getElementById("color");
            randomColor.innerText = randomColorCode;
        });
    });
}

changeColor();
