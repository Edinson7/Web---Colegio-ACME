const form = document.getElementById('form');
const name = document.getElementById('txtName');
const codigo = document.getElementById('txtCodigo');
const grado = document.getElementById('slcGrado');
const btnRegistrarAsignatura = document.getElementById('btnRegistrarAsignatura');
var bandera = false;

/*-------------------- Registro de asignaturas --------------------*/

function crearAsignatura (pNombre, pCodigo, pGrado) {
  let asignatura = {
    nombre: pNombre,
    codigo: pCodigo,
    grado: pGrado,
    profesor: null
    //estudiantes: pEstudiantes
  }
  return asignatura;
}

function RegistrarAsignatura() {
  let txtName = name.value.trim();
  let txtCodigo = codigo.value.trim();
  let slcGrado = grado.value.trim();

  let nuevaAsignatura = crearAsignatura (txtName, txtCodigo, slcGrado);

  asignaturas = addToArrayToLocalStorage(asignaturas, nuevaAsignatura, 'asignaturas');

  alert("¡Tu asignatura ha sido registrada con exito!\nNombre: " + txtName + "     Codigo: " + txtCodigo + "     Grado: " + slcGrado);

  location.reload();
}

/*-------------------- Validacion de campos --------------------*/

function checkInputs() {
  let nameValue = name.value.trim();
  let codeValue = codigo.value.trim();
  let validacion = true;

  if (nameValue === '') {
    setErrorFor(name, 'No se puede dejar el nombre en blanco.');
    validacion = false;
  } else {
    setGreenSuccessFor(name);
  }
  if (codeValue === '') {
    setErrorFor(codigo, 'No se puede dejar el codigo en blanco.');
    validacion = false;
  } else if( isNaN(codeValue) ) {
    setErrorFor(codigo, 'El codigo debe ser numerico.');
    validacion = false;
  } else {
    setGreenSuccessFor(codigo);
  }
  return validacion;
}

/*-------------------- Eventos --------------------*/

btnRegistrarAsignatura.addEventListener('click', e => {
  e.preventDefault();
  bandera = true;
  if ( checkInputs() ) { RegistrarAsignatura(); }
});

form.addEventListener('input', e => {
  e.preventDefault();
  if (bandera) { checkInputs(); }
});
