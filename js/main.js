var usuarios = localStorage.getItem('usuarios') ? JSON.parse(localStorage.getItem('usuarios')) : addToArrayToLocalStorage([], { user: 'admin', password: '123', tipo: 'administrador' }, 'usuarios');
var asignaturas = localStorage.getItem('asignaturas') ? JSON.parse(localStorage.getItem('asignaturas')) : [];
var estudianteAsignatura = localStorage.getItem('estudianteAsignatura') ? JSON.parse(localStorage.getItem('estudianteAsignatura')) : [];

var sesiones = sessionStorage.getItem('sesiones') ? JSON.parse(sessionStorage.getItem('sesiones')) : [];
var misAsignaturas = sessionStorage.getItem('misAsignaturas') ? JSON.parse(sessionStorage.getItem('misAsignaturas')) : [];
var profesorEstudiante = sessionStorage.getItem('profesorEstudiante') ? JSON.parse(sessionStorage.getItem('profesorEstudiante')) : [];

function addToArrayToLocalStorage (array, item, keyName) {
  array.push(item);
  localStorage.setItem(keyName, JSON.stringify(array));
  return array;
}

function addToArrayToSessionStorage(array, item, keyName) {
   array.push(item);
   sessionStorage.setItem(keyName, JSON.stringify(array));
   return array;
}

function borrarSesion() {
   sessionStorage.clear();
}

function deleteForId (pId, array) {
  let i = 0;
  while (i < array.length) {
    if (array[i].id === pId) {
      array.splice(i, 1);
    } else {
      i++;
    }
  }
  return array;
}

function crearElemDoc (tipo, className, text, padre) {
  newElem = document.createElement(tipo);
  newElem.className = className;
  newElem.textContent = text;
  padre.appendChild(newElem);
  return newElem;
}

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

function setGreenSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'field green';
}
