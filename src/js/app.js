//Declaracion de variables globales
let MAIN; //Ayudarnos a controlar lo que se encuentra dentro del Id="main"
let MODAL_POST; //Apoyarnos con la parte donde se trabaja el posteo (modal post)
let BTN_SHOW_POST; //Va a ayudar a controlar internamente los botones, botón de más
let BTN_CANCEL_POST; //Va a ayudar a controlar internamente los botones, botón de cancelar
let deferredPrompt;

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

  //Anular el efecto del mensaje de instalación de la app
  window.addEventListener('beforeinstallprompt', (e) => {
    console.log('anulando mensaje');
  e.preventDefault();
  deferredPrompt = e;
});

// Cuando se cargue todo nuestro DOM
window.addEventListener('load',async() => {
    MAIN = document.querySelector('#main');
    MODAL_POST = document.querySelector('#modal-post-section');
    BTN_SHOW_POST = document.querySelector('#btn-upload-post');
    BTN_SHOW_POST.addEventListener('click', showPostModal);
    BTN_CANCEL_POST = document.querySelector('#btn-post-cancel');
    BTN_CANCEL_POST.addEventListener('click', closePostModal)

    //Mandar a llamar al service worker
if('serviceWorker' in navigator)
 {
    const response=await navigator.serviceWorker.register('sw.js');
    if(response)
    {
      console.log('Service worker registrado');
    }
 }

 //añadir el evento a la instalación

const bannerInstall = document.querySelector('#banner-install');
bannerInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const response = await deferredPrompt.userChoice;
    if (response.outcome === 'dismissed') {
      console.error('El usuario canceló la instalación');
    }
  }
});

});