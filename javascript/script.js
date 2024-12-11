const menuHamburger = document.querySelector('.menu-hamburger');
const nav = document.querySelector('.nav');

menuHamburger.addEventListener('click', () => {
    menuHamburger.classList.toggle('active'); 
    nav.classList.toggle('active'); 
});

document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); 
    document.getElementById('contact-form').reset();
    alert('Mensagem enviada com sucesso!');
});
