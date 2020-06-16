var usuarios = localStorage.getItem('usuarios') ? JSON.parse(localStorage.getItem('usuarios')) : addToArrayToLocalStorage([], { user: 'admin', password: '123', tipo: 'administrador' }, 'usuarios');
var asignaturas = localStorage.getItem('asignaturas') ? JSON.parse(localStorage.getItem('asignaturas')) : [];
var estudianteAsignatura = localStorage.getItem('estudianteAsignatura') ? JSON.parse(localStorage.getItem('estudianteAsignatura')) : [];

function addToArrayToLocalStorage (array, item, keyName) {
  array.push(item);
  localStorage.setItem(keyName, JSON.stringify(array));
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
