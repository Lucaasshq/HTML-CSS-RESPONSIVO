var alternador = document.querySelector('.js-botao-hook')

alternador.onclick = function() {
  var menu = document.querySelector('.js-menu')
  menu.classList.toggle('menu--ativo')
}