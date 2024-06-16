'use stryc'
let d = document;

/**
 Desde la linea de codigo 8 hasta la 24 se encarga de ACTIVAR(mostrar) y DESACTIVAR(ocultar) el menu hamburguesa.
**/

let MenuButton = d.querySelector('nav > button');
let navUl = d.querySelector('header div nav div');

MenuButton.addEventListener('click', ()=>{
    //Esta clase se aplica para animar el icono del menu cambiando al icono de cerra (X) y viseversa.
    MenuButton.classList.toggle('activoX')
    //Esta clase se aplica para mostra y ocultar el menu HAMBURGUESA.
    navUl.classList.toggle('menuVisible')
})

//Este evento se utiliza para que una ves echo CLICK en cualquier etiqueta dentro del UL se cierre el menu.
navUl.addEventListener('click', (e)=>{
    if(e.target && e.target.tagName === 'A' || e.target && e.target.tagName === 'BUTTON'){
        navUl.classList.remove('menuVisible');
        MenuButton.classList.remove('activoX')
    }
})

//La class "activo" esta en la linea 125 en CSS.
//La class "menuVisible" esta en la linea 93 hasta la 103 en CSS.

/**
 Desde la linea de codigo 33 hasta la 24 se encarga
**/

let SubMenus = d.querySelectorAll('header > div nav ul .subMenus')
let spanFlecha = d.querySelectorAll('header > div nav ul li span')

SubMenuActivo(spanFlecha[0], 0, 1);

SubMenuActivo(spanFlecha[1], 1, 0);

function SubMenuActivo( spanFlecha = [''], flechaActiva = 0, flechaDesactiva = 1){
  for (let i = 0; i < SubMenus.length; i++) {
      SubMenus[i].addEventListener('click', (e)=>{
        //Esta variable se utiliza para buscar el hermano siguiente del SPAN que seria el UL donde se encuentra la lista del SUBMENU.
        let listaSubMenu = spanFlecha.nextElementSibling;
  
        if(i == flechaActiva){
          //esta clase se aplica para rotar la flecha hacia abajo para indicar que esta desplegado el SUBMENU.
          spanFlecha.classList.toggle('flecha_abajo')
          //Esta variable guarda el alto obtenido del "scrollHeight" espacio necesario para mostrar el listado del SUBMENU.
          let altoSubMenu = `${listaSubMenu.scrollHeight}px`;
          //Esta propiedad se encarga de aplicar el valor del "height" para mostra el SUBMENU o volver el valor del "height" a 0px para ocultarlo.
          listaSubMenu.style.height = listaSubMenu.style.height == altoSubMenu ?  '0px': altoSubMenu;
          //Esta propiedad se encarga de aplicar la CLASS "altoSubMenu" atravez de css. Linea del codigo 188.
          listaSubMenu.classList.toggle('altoSubMenu')
        } else if(i == flechaDesactiva ){
          //Estas propiedades se utiliza para ocultar el SUBMENU que no este ACTIVO evitando tener los dos SUBMENU abiertos al mismo tiempo que generaria que el contenido de las listas sea mayor al alto del MENU HAMBURGUESA.
          listaSubMenu.style.height = '0px'
          listaSubMenu.classList.remove('altoSubMenu')
          spanFlecha.classList.remove('flecha_abajo')
        }
      })
      
  }
}

/*
for (let i = 0; i < SubMenus.length; i++) {
    SubMenus[i].addEventListener('click', (e)=>{
        //esta clase se aplica para rotar la flecha hacia abajo para indicar que esta desplegado el sub menu
        let listaSubMenu = spanFlecha[1].nextElementSibling;

        console.log(i)

      if(i == 1){
        spanFlecha[0].classList.toggle('flecha_abajo')

        let altoSubMenu = `${listaSubMenu.scrollHeight}px`;
    
        listaSubMenu.style.height = listaSubMenu.style.height == altoSubMenu ?  '0px': altoSubMenu;
        listaSubMenu.classList.toggle('altoSubMenu')
      } else if(i == 0){
        listaSubMenu.style.height = '0px'
        listaSubMenu.classList.remove('altoSubMenu')
        spanFlecha[1].classList.remove('flecha_abajo')
      }
   
    })
    
}*/