const andando = document.querySelector('.andando');
const estacionado = document.querySelector('.estacinado');

const jump = () => {
    andando.classList.add('jump');/*sapo*/

    setTimeout(() => {
        andando.classList.remove('jump');/*sapo*/

    }, 700);

}

const loop = setInterval(() => {
    
    const estacionadoPosition = estacionado.offsetLeft;/*jacare*/
    const andandoPosition = +window.getComputedStyle(andando).bottom.replace('px','');/* sapo*/

    if (estacionadoPosition <= 40 && estacionadoPosition > -2  && andandoPosition < 150) { /*jacare*/

        estacionado.style.animation = 'none';/*jacare*/
        estacionado.style.left =`${estacionadoPosition}px`;/*jacare*/
        andando.style.animation = 'none';
        andando.style.bottom = `${andandoPosition}px`;/*sapo*/
        andando.src = '';/*sapo*/
        

    }

}, 10);

document.addEventListener('keydown', jump);