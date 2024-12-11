// constantes usadas para pegarem os elementos html a serem aplicadas funcionalidades.
const menuHamburger = document.querySelector('.menu-hamburger');
const nav = document.querySelector('.nav');

// executa animação do menu hambútger
menuHamburger.addEventListener('click', () => {
    menuHamburger.classList.toggle('active'); 
    nav.classList.toggle('active'); 
});

// Limpa o formulário após clicar no botão de enviar
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); 
    document.getElementById('contact-form').reset();
    alert('Mensagem enviada com sucesso!');
});
