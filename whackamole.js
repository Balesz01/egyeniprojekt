function randomgen() {
    return Math.floor(Math.random() * (9)) + 1;
}
const score = document.getElementById("score") 
document.getElementById('inditoGomb').addEventListener('click', () => {
    let db = 0
    let btn
    let jt
    let img
    let idoLejarat = Date.now() + 30000;

    for (let i = 1; i <= 9; i++) {
        document.getElementById(`btn${i}`).addEventListener('click', () => {
            let img = document.getElementById(`jt${i}`);
            if (img.src.endsWith("mole.png")) { 
                img.src = `img/lyuk.png`;
                db++;
                score.innerHTML = `Pont: ${db}`;
            }
        });
    }

    function jatekKör() {
        let randomszam = randomgen();
        if (Date.now() >= idoLejarat) {
            alert("Lejárt az idő!");
            return;
        }

        for (let i = 1; i <= 9; i++) {
            if (i == randomszam) {
                img = document.getElementById(`jt${i}`);
                btn = `btn${i}`
                jt = `jt${i}`
                img.src = `img/mole.png`;
            }
        }

        setTimeout(() => {  
            img.src = `img/lyuk.png`;
            setTimeout(() => {
                jatekKör()
            }, 500);
        }, 1000);
    
    }
    setTimeout(() => {
        jatekKör()
    }, 500);
});

