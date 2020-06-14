var cuentas = localStorage.getItem('cuentas') ? JSON.parse(localStorage.getItem('cuentas')) : addToArrayToLocalStorage([], crearCuenta("admin", "123", "administrador", "0"), 'cuentas');
var asignaturas = localStorage.getItem('asignaturas') ? JSON.parse(localStorage.getItem('asignaturas')) : [];

function addToArrayToLocalStorage (array, item, keyName) {
  array.push(item);
  localStorage.setItem(keyName, JSON.stringify(array));
  return array;
}

function crearCuenta (pUser, pPassword, pTipo, pId) {
  let cuenta = {
    user: pUser,
    password: pPassword,
    tipo: pTipo,
    id: pId
  }
  return cuenta;
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
