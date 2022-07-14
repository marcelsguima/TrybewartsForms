const textarea = document.getElementById('textarea');
const button = document.getElementById('entrar');
const agreement = document.getElementById('agreement');
const send = document.getElementById('submit-btn');
send.disabled = true;

function login(e) {
  e.preventDefault();
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');

  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function validador() {
  if (agreement.checked === true) {
    send.disabled = false;
  } else if (agreement.checked === false) {
    send.disabled = true;
  }
}

function contaCaracter() {
  const text = document.getElementById('textarea').value;
  const contador = document.getElementById('counter');
  const numMax = 500;
  const numMin = 0;
  if (text.length <= numMax && text.length >= numMin) {
    contador.innerText = numMax - text.length;
  }
}

agreement.addEventListener('click', validador);
button.addEventListener('click', login);
textarea.addEventListener('keyup', contaCaracter);
