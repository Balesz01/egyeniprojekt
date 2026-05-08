function randomgen() {
    return Math.floor(Math.random() * (9)) + 1;
}

document.getElementById('inditoGomb').addEventListener('click', () => {
    let btn
    let jt
    let img
    let idoLejarat = Date.now() + 30000;
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

        document.getElementById(btn).addEventListener('click', () => {
            const img = document.getElementById(jt);
            img.src = `img/lyuk.png`;
        });

        setTimeout(() => {  
            img.src = `img/lyuk.png`;
            jatekKör()
        }, 1000);
    
    }
    jatekKör()
});

