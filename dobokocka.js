//random generálás
function randomgen() {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}


const container = document.getElementById('kockadiv');

const Div1 = document.createElement('div');
Div1.innerHTML("")

const Div2 = document.createElement('div');
Div2.textContent = 'Szia! Én egy új elem vagyok.';
Div2.style.color = 'blue';


container.appendChild(Div1,Div2);