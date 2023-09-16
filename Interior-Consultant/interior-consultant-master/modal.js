document.querySelector('.header-menu').addEventListener('click',(event)=>{
    event.preventDefault();
    document.querySelector('.hamburguer-menu').classList.add('modal-show');
//     document.querySelector('.hamburguer-menu').setAttribute('style', 'display: flex');

})
document.querySelector('.modal-close').addEventListener('click', (event)=>{
    event.preventDefault();
    document.querySelector('.hamburguer-menu').classList.remove('modal-show');

})