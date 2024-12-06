const mynumber = document.getElementById('my-number');
const checkbtn = document.getElementById('number-btn');
const message = document.getElementById('message');
const restartbtn = document.getElementById('restart-btn');
const myform = document.getElementById("my-form")

let tasodofiyraqam = Math.floor(Math.random() * 50) + 1;
let urinishlar = 0;

myform.addEventListener('submit', (e) => {
    e.preventDefault()
    const kraqam = parseInt(mynumber.value);
    urinishlar++;

    if (isNaN(kraqam) || kraqam < 1 || kraqam > 50) {
        message.textContent = "Iltimos, 1 dan 50 gacha bo'lgan sonni kiriting!";
        message.style.color = 'red';
        mynumber.classList.add('error');
        return;
    }

    if (kraqam === tasodofiyraqam) {
        message.textContent = `Tabriklaymiz! Siz ${urinishlar} ta urinishda topdingiz!`;
        message.style.color = 'green';
    } else if (kraqam < tasodofiyraqam) {
        message.textContent = "kattaroq!";
        message.style.color = 'brown';
    } else {
        message.textContent = "pastroq!";
        message.style.color = 'red';


    }

    clearButton.addEventListener('click', () => {
            tasodofiyraqam = Math.floor(Math.random() * 50) + 1;
            urinishlar = 0;
            mynumber.value = '';
            message.textContent = ''; });
});

const clearButton = document.getElementById('play-again')
const myinput = document.getElementById('my-number')


clearButton.addEventListener('click', function() {
    myinput.value = ''; 
    kraqam.value = '';
    tasodofiyraqam.value = '';
    myinput.focus();
});
