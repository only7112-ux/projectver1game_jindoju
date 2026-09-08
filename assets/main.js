const menu=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');
if(menu&&links){menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});}
