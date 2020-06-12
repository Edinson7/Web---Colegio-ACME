var cuentas = localStorage.getItem('cuentas') ? JSON.parse(localStorage.getItem('cuentas')) : agregarCuenta([], crearCuenta("admin", "123", "administrador"));
var asignaturas = localStorage.getItem('asignaturas') ? JSON.parse(localStorage.getItem('asignaturas')) : [];

function agregarCuenta (array, cuenta) {
  array.push(cuenta);
  localStorage.setItem('cuentas', JSON.stringify(array));
  return array;
}

function crearCuenta (pUser, pPassword, pTipo) {
  let cuenta = {
    user: pUser,
    password: pPassword,
    tipo: pTipo
  }
  return cuenta;
}
