let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let btnEntrar = document.querySelector('#btn-entrar');

function olharSenha() {
  if (senha.type === 'password') {
    senha.type = 'text';
  } else if (senha.type === 'text') {
    senha.type = 'password';
  }
}

function verificarEntrada() {
  const emailTeste = 'teste@teste.com.br';
  const senhaTeste = 'teste';

  if (email.value == emailTeste && senha.value == senhaTeste) {
    window.location.href = '../painel/index.html';
  } else {
    alert('Usuário e/ou senha inválidos');
    email.value = '';
    senha.value = '';
  }
}

btnEntrar.addEventListener('click', verificarEntrada);
