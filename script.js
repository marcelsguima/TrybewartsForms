const button = document.getElementById('entrar');

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

// 18

const agreement = document.getElementById('agreement');
const send = document.getElementById('submit-btn');
send.disabled = true;

function validador() {
  if (agreement.checked === true) {
    send.disabled = false;
  } else if (agreement.checked === false) {
    send.disabled = true;
  }
}

button.addEventListener('click', login);

agreement.addEventListener('click', validador);

// 19

// function countChar() {
//   const val = document.getElementById('textarea');
//   const len = val.value.length;
//   if (len >= 500) {
//     val.value = val.value.substring(0, 500);
//   } else {
//     ('#charNum').text(500 - len);
//   }
// }
