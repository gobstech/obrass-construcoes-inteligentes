let senha = document.querySelector('#senha');
let novaSenha = document.querySelector('#novaSenha');
let btnEntrar = document.querySelector('#btn-entrar');

let olho1 = document.querySelector('.olhar1');
let olho2 = document.querySelector('.olhar2');

function olharSenha1() {
  if (senha.type === 'password') {
    senha.type = 'text';
  } else if (senha.type === 'text') {
    senha.type = 'password';
  }
}

function olharSenha2() {
  if (novaSenha.type === 'password') {
    novaSenha.type = 'text';
  } else if (novaSenha.type === 'text') {
    novaSenha.type = 'password';
  }
}

olho1.addEventListener('click', olharSenha1);
olho2.addEventListener('click', olharSenha2);
