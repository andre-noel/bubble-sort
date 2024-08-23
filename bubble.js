const main = document.querySelector('main');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

for (let index = 0; index < 10; index += 1) {
    const el = document.createElement('div');
    el.innerHTML = Math.floor(Math.random() * 100);
    el.style.order = index;
    main.appendChild(el);
}

const seleciona = (el) => {
    document.querySelectorAll('.selected').forEach((it) => {
        it.classList.remove('selected');
    });
    el.classList.add('selected');
};

const bolhas = document.querySelectorAll('main div');

const goBubble = async () => {
    let ordenados = 0;
    seleciona(bolhas[0]);

    for (let i = 0; i < bolhas.length; i++) {
        for (let j = 0; j < bolhas.length - ordenados - 1; j++) {
            await sleep(1000);
            seleciona(bolhas[j+1]);
            if (parseInt(bolhas[j].innerHTML) > parseInt(bolhas[j+1].innerHTML)) {
                let temp = bolhas[j].innerHTML;
                bolhas[j].innerHTML = bolhas[j + 1].innerHTML;
                bolhas[j + 1].innerHTML = temp;
            }   
        }
        await sleep(1000);
        ordenados++;
        bolhas[bolhas.length - ordenados].classList.add('ordenado');
    }
    await sleep(1000);
    bolhas[0].classList.remove('selected');
    bolhas[0].classList.add('ordenado');
};

goBubble();