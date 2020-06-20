const keys = document.querySelectorAll('.key');
const keyboard = document.getElementById('keys');

keys.forEach(key => key.addEventListener('transitionend', removePlaying));

window.addEventListener('keydown', keyboardPlaySound);

keyboard.addEventListener('click', mousePlaySound);


function mousePlaySound(e) {
    const keyClicked = e.target;
    const keyID = keyClicked.id;
    const audio = document.getElementById(`audio-${keyID}`);
    playSound(audio, keyClicked);
}

function keyboardPlaySound(e) {
    const audio = document.getElementById(`audio-${e.keyCode}`);
    const key = document.getElementById(e.keyCode);
    playSound(audio, key);
}

function playSound(audio, key) {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removePlaying(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


