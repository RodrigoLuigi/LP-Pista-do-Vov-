const form = document.querySelector('form');
const modal = document.getElementById('modal');
const btnClosed = document.getElementById('btnClosed');

let timeout;


function modalClose(){
  btnClosed.addEventListener("click", event =>{
    event.preventDefault();
    form.classList.add("form-topout");
    timeout = setTimeout(closed, 400)
  
  });
}

function closeAnimate(){
  form.classList.add("form-topout");
}

function closed(){
  modal.style.display = 'none';
}


function openForm(){
  document.getElementById('modal').style.display = 'block'
}