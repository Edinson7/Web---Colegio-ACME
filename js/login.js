const btnLogin = document.getElementById('btnLogin');
const txtUser = document.getElementById('txtUser');
const txtPass = document.getElementById('txtPass');

function asignarVista(pTipo) {
   switch (pTipo) {
      case "administrador":
         location.href = "admin-inicio.html";
         break;
      case "profesor":
         location.href = "profesor-inicio.html";
         break;
      case "estudiante":
         location.href = "estudiante-inicio.html";
         break;
   }
}

btnLogin.addEventListener('click', function() {
   const usuarioValue = txtUser.value.trim();
   const passwordValue = txtPass.value.trim();

   if (usuarioValue === '') {
      setErrorFor(txtUser, 'No se puede dejar el usuario en blanco.');
   } else {
      setSuccessFor(txtUser);
   }
   if (passwordValue === '') {
      setErrorFor(txtPass, 'No se puede dejar la contraseña en blanco.');
   } else {
      setSuccessFor(txtPass);
   }

   for (let i = 0; i < cuentas.length; i++) {
      if (cuentas[i].user === usuarioValue && cuentas[i].password === passwordValue) {
         asignarVista(cuentas[i].tipo);
      }
      else {
         console.log("usuario o contraseña incorrecta");
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