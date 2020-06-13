const form = document.getElementById('form');
const name = document.getElementById('txtName');
const codigo = document.getElementById('txtCodigo');
const grado = document.getElementById('slcGrado');
const btnRegistrarAsignatura = document.getElementById('btnRegistrarAsignatura');
var bandera = false;

function LimpiarCampos () {
  name.value = "";
  setSuccessFor(name);
  codigo.value = "";
  setSuccessFor(codigo);
  //grado.selectedIndex = 0;
  bandera = false;
}

function agregarAsignatura (array, asignatura) {
  array.push(asignatura);
  localStorage.setItem('asignaturas', JSON.stringify(array));
  return array;
}

function crearAsignatura (pNombre, pCodigo, pGrado) {
  let asignatura = {
    nombre: pNombre,
    codigo: pCodigo,
    grado: pGrado,
    profesor: null,
    estudiantes: []
  }
  return asignatura;
}

function RegistrarAsignatura() {
  let txtName = name.value.trim();
  let txtCodigo = codigo.value.trim();
  let slcGrado = grado.value.trim();

  let nuevaAsignatura = crearAsignatura (txtName, txtCodigo, slcGrado)

  asignaturas = agregarAsignatura(asignaturas, nuevaAsignatura);

  alert("¡Tu asignatura ha sido registrada con exito!\nNombre: " + txtName + "     Codigo: " + txtCodigo + "     Grado: " + slcGrado);

  LimpiarCampos();
}

btnRegistrarAsignatura.addEventListener('click', e => {
  e.preventDefault();
  bandera = true;
  if ( checkInputs() ) { RegistrarAsignatura(); }
});

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

form.addEventListener('input', e => {
  e.preventDefault();
  if (bandera) { checkInputs(); }
});
