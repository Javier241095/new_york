'use stryc'
let d = document;

let MenuButton = d.querySelector('nav > button');
let navUl = d.querySelector('header div nav div');

MenuButton.addEventListener('click', ()=>{
    //Esta clase se aplica para animar el icono del menu cambiando al icono de cerra (X) y viseversa.
    MenuButton.classList.toggle('activoX')
    //Esta clase se aplica para mostra y ocultar el menu de navegacion.
    navUl.classList.toggle('menuVisible')
})

//Este evento se utiliza para que una ves echo CLICK en cualquier etiqueta dentro del UL se cierre el menu.
navUl.addEventListener('click', (e)=>{
    if(e.target && e.target.tagName === 'A' || e.target && e.target.tagName === 'BUTTON'){
        navUl.classList.remove('menuVisible');
        MenuButton.classList.remove('activoX')
    }
})

//La class "activo" esta en la linea 125.
//La class "menuVisible" esta en la linea 93 hasta la 103.


let menu = d.querySelectorAll('header > div nav > div')[0]

let button =  d.querySelector('header > div nav > div button')

let subMenu = d.querySelectorAll('header > div nav ul .subMenu')
let liUl = d.querySelectorAll('header > div nav ul li span')

for (let i = 0; i < subMenu.length; i++) {
    subMenu[i].addEventListener('click', (e)=>{
        subMenu[i].classList.toggle('marginTop')
        subMenu[i].classList.toggle('subMenu')
        liUl[i].classList.toggle('arrow')
    })
}