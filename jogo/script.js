const andando = document.querySelector('.andando');
const estacionado = document.querySelector('.estacinado');

const jump = () => {
    andando.classList.add('jump');

    setTimeout(() => {
        andando.classList.remove('jump');

    }, 500);

}

const loop = setInterval(() => {
    
    const estacionadoPosition = estacionado.offsetLeft;
    const andandoPosition = +window.getComputedStyle(andando).bottom.replace('px','');

    if (estacionadoPosition <= 130 && estacionadoPosition > -2  && andandoPosition < 150) {

        estacionado.style.animation = 'none';
        estacionado.style.left =`${estacionadoPosition}px`;
        andando.style.animation = 'none';
        andando.style.bottom = `${andandoPosition}px`;
        andando.src = '';
        

    }

}, 10);

document.addEventListener('keydown', jump);