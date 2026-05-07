function randomgen() {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

const container = document.getElementById('kockadiv');
const nyertestext = document.getElementById('nyertes');
const tortenet = document.getElementById('tortenetdiv');

document.getElementById('dobasGomb').addEventListener('click', () => {
    container.innerHTML = '';

    const img1 = document.createElement('img');
    let dobas1 = randomgen();
    img1.src = `img/dob${dobas1}.png`; 


    const img2 = document.createElement('img');
    let dobas2 = randomgen();
    img2.src = `img/dob${dobas2}.png`;

    let nagyobb = (dobas1 > dobas2) ? "Az első játékos nyert" : (dobas1 < dobas2) ? "A második játékos nyert" : "Döntetlen"
    nyertestext.innerHTML = nagyobb;

    const tort = document.createElement('p');
    tort.innerText = `🎲 ${dobas1} - ${dobas2} | ${nagyobb}`;

    container.append(img1, img2);
    tortenet.prepend(tort);
});
