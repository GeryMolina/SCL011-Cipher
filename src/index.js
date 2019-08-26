function load() {
    inicio();
    choise();
    addDream();
    desencripted('', '');
    final();
}

//pantalla 1 
function inicio() {
    const startButton = document.getElementById('start');
    startButton.addEventListener('click', () => {
        document.getElementById('pantalla2').style.display = 'block';
        document.getElementById('pantalla1').style.display = 'none';

    })
}

//pantalla2
function choise() {
    const newDreamButton = document.getElementById('newDream');
    newDreamButton.addEventListener('click', () => {
        document.getElementById('pantalla3').style.display = 'block';
    })
}

//pantalla 3
function addDream() {
    const saveDreamButton = document.getElementById('saveDream');
    saveDreamButton.addEventListener('click', () => {
        document.getElementById('pantalla4').style.display = 'block';
        document.getElementById('pantalla2').style.display = 'none';
        document.getElementById('pantalla3').style.display = 'none';
        const encriptdream = document.getElementById('dreamcode');
        const newDream = document.getElementById('addDream').value.toUpperCase();
        const emotion = document.getElementById('emotionsSelect');
        const offset = Number(emotion.options[emotion.selectedIndex].value);
        encriptdream.value = window.cipher.encode(offset, newDream);
        desencripted(offset, encriptdream.value);
    })
}

//pantalla 4
const decodedDream = document.getElementById('decodedDream');
function desencripted(b, n) {
    const backButton = document.getElementById('show');
    backButton.addEventListener('click', () => {
        document.getElementById('pantalla5').style.display = 'block';
        document.getElementById('pantalla4').style.display = 'none';
        decodedDream.value = window.cipher.decode(b, n);
    })
}

function final() {
    const exitButton = document.getElementById('exit');
    exitButton.addEventListener('click', () => {
        document.getElementById('pantalla1').style.display = 'block';
        document.getElementById('pantalla5').style.display = 'none';
    })
}



document.addEventListener("DOMContentLoaded", load, false)