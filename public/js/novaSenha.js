let senha = document.querySelector('#senhaAtual');
let novaSenha1 = document.querySelector('#novaSenha1');
let novaSenha2 = document.querySelector('#novaSenha2');
let btnEntrar = document.querySelector('#btn-entrar');

let olho1 = document.querySelector('.olhar1');
let olho2 = document.querySelector('.olhar2');
let olho3 = document.querySelector('.olhar3');

function olharSenha1() {
  if (senha.type === 'password') {
    senha.type = 'text';
  } else if (senha.type === 'text') {
    senha.type = 'password';
  }
}

function olharSenha2() {
  if (novaSenha1.type === 'password') {
    novaSenha1.type = 'text';
  } else if (novaSenha.type === 'text') {
    novaSenha1.type = 'password';
  }
}

function olharSenha3() {
  if (novaSenha2.type === 'password') {
    novaSenha2.type = 'text';
  } else if (novaSenha2.type === 'text') {
    novaSenha2.type = 'password';
  }
}

olho1.addEventListener('click', olharSenha1);
olho2.addEventListener('click', olharSenha2);
olho3.addEventListener('click', olharSenha3);
