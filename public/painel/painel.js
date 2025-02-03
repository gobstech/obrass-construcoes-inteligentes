const btnMenu = document.querySelector('.traco');
let frases = document.querySelectorAll('.frase');

function expandirFrase() {
  frases.forEach(function (frase) {
    frase.classList.toggle('ativo');
  });
}

btnMenu.addEventListener('mouseover', expandirFrase);
btnMenu.addEventListener('click', expandirFrase);

let descer = document.querySelector('.descer');
let menuDropdown = document.querySelector('.menu-dropdown');

descer.addEventListener('click', function () {
  menuDropdown.classList.toggle('ativo');
});
descer.addEventListener('mouseover', function () {
  menuDropdown.classList.toggle('ativo');
});
