const button = document.getElementById("entrar");

function login(e) {
  e.preventDefault();

  const email = document.getElementById("email");
  const senha = document.getElementById("senha");

  if (email.value === "tryber@teste.com" && senha.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}


// 18

function checkSend(e) {
  const agreement = document.getElementById("agreement");
  const send = document.getElementById("submit-btn");
  if (agreement.checked === false) {
    e.preventDefault();
  }
}

button.addEventListener("click", login);
send.addEventListener("click", checkSend);
