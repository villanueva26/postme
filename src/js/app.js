//Declaracion de variables globales
let MAIN; //Ayudarnos a controlar lo que se encuentra dentro del Id="main"
let MODAL_POST; //Apoyarnos con la parte donde se trabaja el posteo (modal post)
let BTN_SHOW_POST; //Va a ayudar a controlar internamente los botones, botón de más
let BTN_CANCEL_POST; //Va a ayudar a controlar internamente los botones, botón de cancelar

//Poner funciones

const showPostModal = () => {
    MAIN.style.display = 'none';
    MODAL_POST.style.display = 'block';
    setTimeout(() => {
      MODAL_POST.style.transform = 'translateY(0)'; //Ayuda a hacer un efecto, sale de la posiciój de abajo hacia arriba
    }, 1);
};
  const closePostModal = () => {
    MAIN.style.display = 'block';
    MODAL_POST.style.transform = 'translateY(100vh)';
};

// Cuando se cargue todo nuestro DOM
window.addEventListener('load', () => {
    MAIN = document.querySelector('#main');
    MODAL_POST = document.querySelector('#modal-post-section');
    BTN_SHOW_POST = document.querySelector('#btn-upload-post');
    BTN_SHOW_POST.addEventListener('click', showPostModal);
    BTN_CANCEL_POST = document.querySelector('#btn-post-cancel');
    BTN_CANCEL_POST.addEventListener('click', closePostModal)
});