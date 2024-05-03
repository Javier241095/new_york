/*let activePage = window.location.pathname;*/
let activePage = window.location;
//console.log(activePage)
const navLinks = document.querySelectorAll('nav ul li a').forEach(link =>{
    //console.log(link.href)
   if(link.href == activePage) {
    link.classList.add('linkActive');
   } else if(`${link.href}/` == activePage) {
    link.classList.add('linkActive');
   };
});