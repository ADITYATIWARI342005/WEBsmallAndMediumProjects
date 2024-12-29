
const countDisplay = document.getElementById('count');
let count = 0;

document.getElementById('increase').addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

document.getElementById('decrease').addEventListener('click', () => {
 
        count--;
        countDisplay.textContent = count;
    
});

