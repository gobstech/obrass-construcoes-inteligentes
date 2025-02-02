let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let novaSenha = document.querySelector('#novaSenha');
let btnEntrar = document.querySelector('#btn-entrar');

const verSenha = document.querySelector('.olhar');

function olharSenha() {
  if (senha.type === 'password' && novaSenha.type === 'password') {
    senha.type = 'text';
  } else if (senha.type === 'text' && novaSenha.type === 'text') {
    senha.type = 'password';
  }
}

verSenha.addEventListener('click', olharSenha);

function verificarEntrada() {
  const emailTeste = 'teste@teste.com.br';
  const senhaTeste = 'teste';

  if (email.value == emailTeste && senha.value == senhaTeste) {
    window.location.href = '/painel/';
  } else {
    alert('Usuário e/ou senha inválidos');
    email.value = '';
    senha.value = '';
  }
}

btnEntrar.addEventListener('click', verificarEntrada);
