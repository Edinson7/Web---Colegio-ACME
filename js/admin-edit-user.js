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
const btnEditUser = document.getElementById('btnEditUser');
var consultarValidacion = false;
validacion = false;
var fotoCargada = '';
var tipoInicial = '';
var posEdit;

/*-------------------- Carga de datos --------------------*/

txtId.disabled = true;
if ( sessionStorage.getItem('idUserEdit') ) {
  let idForEdit = JSON.parse( sessionStorage.getItem('idUserEdit') );
  for (let i = 1; i < usuarios.length; i++) {
    if (usuarios[i].id == idForEdit) {
      txtName.value = usuarios[i].nombre;
      txtLastName.value = usuarios[i].apellido;
      txtId.value = usuarios[i].id;

      for (var j = 0; j < slcTypeUser.length; j++) {
        if ( usuarios[i].tipo === slcTypeUser.options[j].text ) {
          slcTypeUser.selectedIndex = j;
          tipoInicial = usuarios[i].tipo;
          break;
        }
      }
      txtUser.value = usuarios[i].user;
      txtEmail.value = usuarios[i].email;
      txtPass.value = usuarios[i].password;

      let newImgTag = document.createElement('img');
      newImgTag.className = 'img-photo';
      fotoCargada = usuarios[i].foto;
      newImgTag.src = fotoCargada;
      padre = btnPhoto.parentNode;
      padre.appendChild(newImgTag);

      posEdit = i;
      break;
    }
  }
}
else {
  window.location = 'admin-user-list.html';
}

/*-------------------- Edicion de usuario --------------------*/

function cambioTipoUsuario (newTipo, id) {
  if (newTipo === 'Estudiante') {
    for (var i = 0; i < asignaturas.length; i++) {
      if (asignaturas[i].profesor === id) {
        asignaturas[i].profesor = null;
      }
    }
    localStorage.setItem( 'asignaturas', JSON.stringify(asignaturas) );
  } else {
    estudianteAsignatura = deleteForId (id, estudianteAsignatura);
    localStorage.setItem( 'estudianteAsignatura', JSON.stringify(estudianteAsignatura) );
  }
}

function EditarUsuario() {
  let name = txtName.value.trim();
  let lastName = txtLastName.value.trim();
  let id = txtId.value.trim();
  let tipo = slcTypeUser.value.trim();
  let user = txtUser.value.trim();
  let email = txtEmail.value.trim();
  let password = txtPass.value.trim();

  usuarios[posEdit].nombre = name;
  usuarios[posEdit].apellido = lastName;
  usuarios[posEdit].id = id;
  usuarios[posEdit].tipo = tipo;
  usuarios[posEdit].user = user;
  usuarios[posEdit].email = email;
  usuarios[posEdit].password = password;
  usuarios[posEdit].foto = fotoCargada;

  if (usuarios[posEdit].tipo !== tipoInicial) {
    cambioTipoUsuario (usuarios[posEdit].tipo, usuarios[posEdit].id);
  }

  localStorage.setItem( 'usuarios', JSON.stringify(usuarios) );

  alert("¡El usuario ha sido editado con exito!\nNombre: " + usuarios[posEdit].nombre + " --- Apellido: " + usuarios[posEdit].apellido
  + " --- Identificacion: " + usuarios[posEdit].id + " --- Tipo: " + usuarios[posEdit].tipo + " --- Usuario: " + usuarios[posEdit].user
  + " --- Correo: " + usuarios[posEdit].email);

  sessionStorage.clear();
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
  let txtUserValue = txtUser.value.trim();
  let txtEmailValue = txtEmail.value.trim();
  let txtPassValue = txtPass.value.trim();
  let txtConfirmPassValue = txtConfirmPass.value.trim();
  validacion = true;

  firstValidateTextField ( txtNameValue === '', txtName, 'No se puede dejar el(los) Nombre(s) en blanco.');
  firstValidateTextField ( txtLastNameValue === '', txtLastName, 'No se puede dejar el(los) Apellido(s) en blanco.');
  firstValidateTextField ( txtUserValue === '', txtUser, 'No se puede dejar el Usuario en blanco.');
  firstValidateTextField ( !( isEmail(txtEmailValue) ), txtEmail, 'El Correo debe tener un formato valido.');
  firstValidateTextField ( txtPassValue === '', txtPass, 'No se puede dejar la Contraseña en blanco.');
  secondValidateTextField ( txtConfirmPassValue === '', txtConfirmPass, 'No se puede dejar esta Confirmacion en blanco.', txtConfirmPassValue !== txtPassValue, 'Las Contraseñas deben conincidir.');
  //firstValidateTextField ( fotoCargada === '', msgLoad, 'Es necesario Subir una foto del usuario.');
  if (fotoCargada === '') {
    msgLoad.textContent = 'Es necesario Subir una foto del usuario.';
    msgLoad.className = 'msgLoadVisible';
  }

  return validacion;
}

/*-------------------- Eventos --------------------*/

form.addEventListener('input', e => {
  e.preventDefault();
  if (consultarValidacion) { checkInputs(); }
});

btnEditUser.addEventListener('click', e => {
  e.preventDefault();
  consultarValidacion = true;
  if (checkInputs() && fotoCargada != '')
  {
    EditarUsuario();
    window.location = 'admin-user-list.html';
  }
});

btnPhoto.addEventListener('click', e => {
  e.preventDefault();
  if (fotoCargada === '') {
    let newImgTag = document.createElement('img');
    newImgTag.className = 'img-photo';
    fotoCargada = 'images/photo-perfil.png';
    newImgTag.src = fotoCargada;
    padre = btnPhoto.parentNode;
    padre.appendChild(newImgTag);
  }
  //padre.removeChild(btnPhoto);
  //setSuccessFor(msgLoad);
  msgLoad.className = 'msgLoad';
});
