function login() {
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");

  if (email.value === "tryber@teste.com" && senha.value === "123456") {
    console.log("deu certo");
  }
}

const button = document.getElementById("entrar");
button.addEventListener("click", login);
