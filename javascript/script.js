const menuHamburger = document.querySelector('.menu-hamburger');
const nav = document.querySelector('.nav');

menuHamburger.addEventListener('click', () => {
    menuHamburger.classList.toggle('active'); // Adiciona a classe de animação ao hambúrguer
    nav.classList.toggle('active'); // Mostra ou esconde o menu de navegação
});
