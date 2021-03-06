const btnLogin = document.getElementById('btnLogin');
const txtUser = document.getElementById('txtUser');
const txtPass = document.getElementById('txtPass');
var errorMensaje = document.getElementById("field-error");


function asignarVista(pTipo) {
   switch (pTipo) {
      case "administrador":
         location.href = "admin-inicio.html";
         break;
      case "Profesor":
         location.href = "profesor-inicio.html";
         break;
      case "Estudiante":
         location.href = "estudiante-inicio.html";
         break;
   }
}

btnLogin.addEventListener('click', function() {
   const usuarioValue = txtUser.value.trim();
   const passwordValue = txtPass.value.trim();
   let userAcceso = false;
   let passAcceso = false;
   let bandera = false;

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
      for (let i = 0; i < usuarios.length; i++) {
         if (usuarios[i].user === usuarioValue && usuarios[i].password === passwordValue) {
            asignarVista(usuarios[i].tipo);
            sesiones = addToArrayToSessionStorage(sesiones, usuarios[i], 'sesiones');
            bandera = true;
            consultarMisAsignaturas();
         }
      }
      if (!bandera) {
         errorMensaje.style.display = 'block';
         errorMensaje.innerHTML = 'Usuario o contraseña incorrecta';
      }
   }
});
