let navegador = navigator.userAgent;
let header = d.querySelector('header');
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    header.classList.add('movil');
   
} else {
    header.classList.remove('movil');
}
//Este Js es para dectectar si se esta usando el nevegador en el movil o la pc, esto nos sirve para poder adaptar la imagen del background restandole 17px de la barra de scroll en pc para evitar el scroll horizontal y quitandolo en movil para no cortar la imagen.