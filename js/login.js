const btnLogin = document.getElementById('btnLogin');
const txtUser = document.getElementById('txtUser');
const txtPass = document.getElementById('txtPass');
var errorMensaje = document.getElementById("field-error");


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
   let userAcceso = false;
   let passAcceso = false;

   if (usuarioValue === '') {
      setErrorFor(txtUser, 'No se puede dejar el usuario en blanco.');
   } else {
      setSuccessFor(txtUser);
      userAcceso = true;
   }
   if (passwordValue === '') {
      setErrorFor(txtPass, 'No se puede dejar la contraseña en blanco.');
   } else {
      setSuccessFor(txtPass);
      passAcceso = true;
   }
   if (userAcceso == true && passAcceso === true) {
      for (let i = 0; i < cuentas.length; i++) {
         if (cuentas[i].user === usuarioValue && cuentas[i].password === passwordValue) {
            asignarVista(cuentas[i].tipo);
         } else {
            errorMensaje.style.display = 'block';
            errorMensaje.innerHTML = 'Usuario o contraseña incorrecta'
         }
      }
   }
});

