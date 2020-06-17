const slcAsignaturas = document.getElementById('slcAsignaturas');
const slcProfesores = document.getElementById('slcProfesores');
const slcEstudiantes = document.getElementById('slcEstudiantes');
const btnOpcEst = document.getElementById('btnOpcEst');
const tableBody = document.getElementById('tableBody');
const msgAsignar = document.getElementById('msgAsignar');
const btnAsignar = document.getElementById('btnAsignar');

/*-------------------- Carga de datos a los selects --------------------*/

function fillSelectUsers (tagSelect, array, pTipo) {
  for (let i=0; i < array.length; i++) {
    if (array[i].tipo === pTipo) {
      crearElemDoc ('option', '', array[i].id + ': ' + array[i].nombre, tagSelect);
    }
  }
}

function fillSelect (tagSelect, array) {
  for (let i=0; i < array.length; i++) {
    crearElemDoc ('option', '', array[i].codigo + ': ' + array[i].nombre, tagSelect);
  }
}

if ( localStorage.getItem('asignaturas') ) {
  fillSelect( slcAsignaturas, JSON.parse(localStorage.getItem('asignaturas')));
}
if ( localStorage.getItem('usuarios') ) {
  fillSelectUsers(slcProfesores, JSON.parse(localStorage.getItem('usuarios')), 'Profesor');
  fillSelectUsers(slcEstudiantes, JSON.parse(localStorage.getItem('usuarios')), 'Estudiante');
}
/*-------------------- Matriculas --------------------*/

function sacarId (cadena) {
  let cadenas = cadena.split(': ');
  let id = cadenas[0];
  return id;
}

function addTable () {
  let id = sacarId(slcEstudiantes.value.trim());
  let estudiante;

  for (let i=0; i < usuarios.length; i++) {
    if ( usuarios[i].id === id) {
      estudiante = usuarios[i];
      break;
    }
  }
  let padre = crearElemDoc ('tr', '', '', tableBody);
  let newItem = crearElemDoc ('td', 'identificacion', estudiante.id, padre);
  newItem.setAttribute('data-label', 'Identificacion');
  newItem = crearElemDoc ('td', 'estudiante', estudiante.nombre, padre);
  newItem.setAttribute('data-label', 'Estudiante');
}

/*-------------------- Asignacion --------------------*/

function crearEstAsig (pCode, pId) {
  let asignacion = {
    codigo: pCode,
    id: pId,
    faltas: 0,
    nota1: '',
    nota2: '',
    nota3: ''
  }
  return asignacion;
}

function regAsignacion () {
  let asignatura = slcAsignaturas.value.trim();
  let profesor = slcProfesores.value.trim();
  let idEsts = document.getElementsByClassName('identificacion');
  let newAsig;

  let codAsig = sacarId(asignatura);
  let idUser = sacarId(profesor);
  for (let i = 0; i < asignaturas.length; i++) {
    if (asignaturas[i].codigo === codAsig) {
      asignaturas[i].profesor = idUser;
      break;
    }
  }
  localStorage.setItem('asignaturas', JSON.stringify(asignaturas));

  for (let i = 0; i < idEsts.length; i++) {
    idUser = idEsts[i].textContent;
    newAsig = crearEstAsig(codAsig, idUser);
    estudianteAsignatura.push(newAsig);
  }
  localStorage.setItem('estudianteAsignatura', JSON.stringify(estudianteAsignatura));

  alert("¡La Asignacion a sido registrada!");
  location.reload();
}

/*-------------------- Validaciones --------------------*/

function removerHijo (hijo) {
  padre = hijo.parentNode;
  padre.removeChild(hijo);
}

if (slcAsignaturas.value === '' || slcProfesores.value === '') {
  removerHijo(btnAsignar);
  removerHijo(btnOpcEst);
  msgAsignar.textContent = "Es necesario registrar almenos un profesor y una asignatura, para poder Asignar";
} else {
  if (slcEstudiantes.value === '') {
    removerHijo(btnOpcEst);
  }
}
/*-------------------- Eventos --------------------*/

btnOpcEst.addEventListener('click', e => {
  e.preventDefault();
  addTable();
});

btnAsignar.addEventListener('click', e => {
  e.preventDefault();
  regAsignacion();
});
