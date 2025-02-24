const open = document.getElementById('open');
const open1 = document.getElementById('open1');
const open2 = document.getElementById('open2');
const modal_container = document.getElementById('modal_container');
const modal_container1 = document.getElementById('modal_container1');
const modal_container2 = document.getElementById('modal_container2');
const close = document.getElementById('close');

/*Blog 1*/
open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});


/*Blog 2*/ 
open1.addEventListener('click', () => {
  modal_container1.classList.add('show');  
});

close1.addEventListener('click', () => {
  modal_container1.classList.remove('show');
});


/*Blog 3*/
open2.addEventListener('click', () => {
  modal_container2.classList.add('show');  
});

close2.addEventListener('click', () => {
  modal_container2.classList.remove('show');
});

