const btnLogin = document.getElementById('btnLogin');


btnLogin.addEventListener('click', function() {
  let txtUser = document.getElementById('txtUser').value;
  let txtPass = document.getElementById('txtPass').value;

  for(let i=0; i < cuentas.length; i++) {
    if(cuentas[i].user === txtUser && cuentas[i].password === txtPass) {
      asignarVista(cuentas[i].tipo);
    }
  }
});

function setSuccessFor(input) {
   const formControl = input.parentElement;
   formControl.className = 'field success';
}

function setErrorFor(input, message) {
   const formControl = input.parentElement;
   const small = formControl.querySelector('small');
   formControl.className = 'field error';
   small.innerText = message;
}
