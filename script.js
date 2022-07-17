/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-len */
const textarea = document.getElementById('textarea');
const button = document.getElementById('entrar');
const agreement = document.getElementById('agreement');
const send = document.getElementById('submit-btn');
send.disabled = true;
const formData = document.querySelector('#form-data');

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

function excluiElementos() {
  const form = document.getElementById('evaluation-form');
  form.style.display = 'none';
}

function criaElemento(elemento, id) {
  const element = document.createElement(elemento);
  element.id = id;
  return element;
}

function getNome() {
  const divNome = criaElemento('div', 'divNome');
  const nome = criaElemento('p', 'titulo');
  formData.appendChild(divNome);
  nome.innerText = `Nome: ${document.querySelector('#input-name').value} ${document.querySelector('#input-lastname').value}`;
  divNome.appendChild(nome);
}

function getAvaliacao() {
  const divAvaliacao = criaElemento('div', 'divAvaliacao');
  const avaliacao = criaElemento('p', 'titulo');
  formData.appendChild(divAvaliacao);
  avaliacao.innerText = `Avaliação: ${document.querySelector('#eval-btns input[name="rate"]:checked').value}`;
  divAvaliacao.appendChild(avaliacao);
}

function getEmail() {
  const divEmail = criaElemento('div', 'divEmail');
  const email = criaElemento('p', 'titulo');
  formData.appendChild(divEmail);
  email.innerText = `Email: ${document.querySelector('#input-email').value} `;
  divEmail.appendChild(email);
}

function getHouse() {
  const divHouse = criaElemento('div', 'divHouse');
  const house = criaElemento('p', 'titulo');
  formData.appendChild(divHouse);
  house.innerText = `Casa: ${document.querySelector('#house').value} `;
  divHouse.appendChild(house);
}

function getfamilia() {
  const divFamilia = criaElemento('div', 'divFamilia');
  const familia = criaElemento('p', 'titulo');
  formData.appendChild(divFamilia);
  familia.innerText = `Família: ${document.querySelector('#end-family div input[name="family"]:checked').value} `;
  divFamilia.appendChild(familia);
}

function getObs() {
  const divObs = criaElemento('div', 'divObs');
  const obs = criaElemento('p', 'titulo');
  formData.appendChild(divObs);
  obs.innerText = `Observações: ${document.querySelector('#textarea').value} `;
  divObs.appendChild(obs);
}

function setConteudo() {
  const materias = document.getElementsByName('materias');
  let controle = 0;
  let array = '';
  for (let i = 0; i < materias.length; i += 1) {
    if (materias[i].checked) {
      controle += 1;
      if (controle === 1) {
        array += `${materias[i].value}`;
        console.log('fui acionado');
      } else if (materias.length === 1) {
        array += `${materias[i].value}`;
      } else { array += `, ${materias[i].value}`; }
    }
  }
  return array;
}

function getConteudo() {
  const divConteudo = criaElemento('div', 'divConteudo');
  const conteudo = criaElemento('p', 'titulo');
  const conteudos = setConteudo();
  formData.appendChild(divConteudo);
  conteudo.innerText = `Matérias: ${conteudos}`;
  divConteudo.appendChild(conteudo);
}

function novaPagina(e) {
  e.preventDefault();
  formData.classList = 'form-data';
  getNome();
  getEmail();
  getHouse();
  getfamilia();
  getConteudo();
  getAvaliacao();
  getObs();
  excluiElementos();
}

send.addEventListener('click', novaPagina);
