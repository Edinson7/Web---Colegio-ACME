const form = document.getElementById('form');
const name = document.getElementById('txtName');
const codigo = document.getElementById('txtCodigo');
const grado = document.getElementById('slcGrado');
const btnEditarAsignatura = document.getElementById('btnEditarAsignatura');
var bandera = false;
var posEdit;

/*-------------------- Carga de datos --------------------*/

codigo.disabled = true;
if ( sessionStorage.getItem('codeAsignaturaEdit') ) {
  let codAEdit = JSON.parse( sessionStorage.getItem('codeAsignaturaEdit') );
  for (var i = 0; i < asignaturas.length; i++) {
    if (asignaturas[i].codigo == codAEdit) {
      name.value = asignaturas[i].nombre;
      codigo.value = asignaturas[i].codigo;
      for (var j = 0; j < grado.length; j++) {
        if ( asignaturas[i].grado === grado.options[j].text ) {
          grado.selectedIndex = j;
          break;
        }
      }
      posEdit = i;
      break;
    }
  }
}
else {
  window.location = 'admin-subject-list.html';
}

/*-------------------- Edicion de asignatura --------------------*/

function EditarAsignatura() {
  let txtName = name.value.trim();
  let txtCodigo = codigo.value.trim();
  let slcGrado = grado.value.trim();

  asignaturas[posEdit].nombre = txtName;
  asignaturas[posEdit].codigo = txtCodigo;
  asignaturas[posEdit].grado = slcGrado;

  localStorage.setItem( 'asignaturas', JSON.stringify(asignaturas) );

  alert("¡Tu asignatura ha sido editada con exito!\nNombre: " + txtName + "     Codigo: " + txtCodigo + "     Grado: " + slcGrado);

  sessionStorage.clear();
}

/*-------------------- Validacion de campos --------------------*/

function checkInputs() {
  let nameValue = name.value.trim();
  let validacion = true;

  if (nameValue === '') {
    setErrorFor(name, 'No se puede dejar el nombre en blanco.');
    validacion = false;
  } else {
    setGreenSuccessFor(name);
  }
  return validacion;
}

/*-------------------- Eventos --------------------*/

btnEditarAsignatura.addEventListener('click', e => {
  e.preventDefault();
  bandera = true;
  if ( checkInputs() )
  {
    EditarAsignatura();
    window.location = 'admin-subject-list.html';
  }
});

form.addEventListener('input', e => {
  e.preventDefault();
  if (bandera) { checkInputs(); }
});
