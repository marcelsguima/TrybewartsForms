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

button.addEventListener("click", login);

// 18

const agreement = document.getElementById("agreement");
let send = document.getElementById("submit-btn");

function checkSend(e) {}
