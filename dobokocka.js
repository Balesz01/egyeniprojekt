//random generálás
function randomgen() {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}


const container = document.getElementById('kockadiv');

const ujDiv = document.createElement('div');
ujDiv.textContent = 'Szia! Én egy új elem vagyok.';
ujDiv.style.color = 'blue';


container.appendChild(ujDiv);