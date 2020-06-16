const form = document.getElementById('form');
const txtName = document.getElementById('txtName');
const txtLastName = document.getElementById('txtLastname');
const txtId = document.getElementById('txtId');
const slcTypeUser = document.getElementById('slcTypeUser');
const txtUser = document.getElementById('txtUser');
const txtEmail = document.getElementById('txtEmail');
const txtPass = document.getElementById('txtPass');
const txtConfirmPass = document.getElementById('txtConfirmPass');
const btnPhoto = document.getElementById('btnPhoto');
const msgLoad = document.getElementById('msgLoad');
const btnRegUser = document.getElementById('btnRegUser');
var consultarValidacion = false;
validacion = false;
var fotoCargada = '';

/*-------------------- Registro del nuevo usuario --------------------*/

function crearUsuario (pName, pLastName, pId, pTipo, pUser, pEmail, pPassword) {
  let usuario = {
    nombre: pName,
    apellido: pLastName,
    id: pId,
    tipo: pTipo,
    user: pUser,
    email: pEmail,
    password: pPassword,
    foto: fotoCargada
    //asignaturas: []
  }
  return usuario;
}

function RegistrarUsuario() {
  let name = txtName.value.trim();
  let lastName = txtLastName.value.trim();
  let id = txtId.value.trim();
  let tipo = slcTypeUser.value.trim();
  let user = txtUser.value.trim();
  let email = txtEmail.value.trim();
  let password = txtPass.value.trim();

  let nuevoUsuario = crearUsuario (name, lastName, id, tipo, user, email, password);
  addToArrayToLocalStorage(usuarios, nuevoUsuario, 'usuarios');

  alert("¡El " + tipo + ": " + name + " " + lastName + ", con el Nº identificacion: " + id + ", usuario: " + user + " y email: " + email + ", ha sido registrado con exito!");
  location.reload();
}

/*-------------------- Validacion de campos --------------------*/
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function firstValidateTextField (condicion, campo, mensaje) {
  if (condicion) {
     setErrorFor(campo, mensaje);
     validacion = false;
  } else {
     setGreenSuccessFor(campo);
  }
}

function secondValidateTextField (condicion1, campo, mensaje1, condicion2, mensaje2) {
  if (condicion1) {
     setErrorFor(campo, mensaje1);
     validacion = false;
  }
  else {
    if (condicion2) {
      setErrorFor(campo, mensaje2);
      validacion = false;
    }
    else {
      setGreenSuccessFor(campo);
    }
  }
}

function checkInputs () {
  let txtNameValue = txtName.value.trim();
  let txtLastNameValue = txtLastName.value.trim();
  let txtIdValue = txtId.value.trim();
  let txtUserValue = txtUser.value.trim();
  let txtEmailValue = txtEmail.value.trim();
  let txtPassValue = txtPass.value.trim();
  let txtConfirmPassValue = txtConfirmPass.value.trim();
  validacion = true;

  firstValidateTextField ( txtNameValue === '', txtName, 'No se puede dejar el(los) Nombre(s) en blanco.');
  firstValidateTextField ( txtLastNameValue === '', txtLastName, 'No se puede dejar el(los) Apellido(s) en blanco.');
  secondValidateTextField ( txtIdValue === '', txtId, 'No se puede dejar la Identificacion en blanco.', isNaN(txtIdValue), 'La Identificacion debe ser numerica.');
  firstValidateTextField ( txtUserValue === '', txtUser, 'No se puede dejar el Usuario en blanco.');
  firstValidateTextField ( !( isEmail(txtEmailValue) ), txtEmail, 'El Correo debe tener un formato valido.');
  firstValidateTextField ( txtPassValue === '', txtPass, 'No se puede dejar la Contraseña en blanco.');
  secondValidateTextField ( txtConfirmPassValue === '', txtConfirmPass, 'No se puede dejar esta Confirmacion en blanco.', txtConfirmPassValue !== txtPassValue, 'Las Contraseñas deben conincidir.');
  firstValidateTextField ( fotoCargada === '', msgLoad, 'Es necesario Subir una foto del usuario.');

  return validacion;
}

/*-------------------- Eventos --------------------*/

form.addEventListener('input', e => {
  e.preventDefault();
  if (consultarValidacion) { checkInputs(); }
});

btnRegUser.addEventListener('click', e => {
  e.preventDefault();
  consultarValidacion = true;
  if (checkInputs() && fotoCargada != '') { RegistrarUsuario(); }
});

btnPhoto.addEventListener('click', e => {
  e.preventDefault();
  newImgTag = document.createElement('img');
  newImgTag.className = 'img-photo';
  fotoCargada = 'images/photo-perfil.png';
  newImgTag.src = fotoCargada;
  padre = btnPhoto.parentNode;
  padre.appendChild(newImgTag);
  padre.removeChild(btnPhoto);
  setSuccessFor(msgLoad);
});
