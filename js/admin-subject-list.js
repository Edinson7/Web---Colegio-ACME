const listContainer = document.getElementById('list-container');
const numAsignaturasList = document.getElementById('second-container');

/*-------------------- Listar asignaturas --------------------*/

function crearFicha (pName, pCodigo, pGrado) {
  let itemContainer = crearElemDoc ('div', 'item-container', '', listContainer);
  let dataContainer = crearElemDoc ('div', 'data-container', '', itemContainer);
  let auxContainer = crearElemDoc ('div', 'item-padding', '', itemContainer);
  auxContainer = crearElemDoc ('div', 'image-container', '', dataContainer);
  auxContainer = crearElemDoc ('img', '', '', auxContainer);
  auxContainer.src = 'images/img-subject.png';
  auxContainer.title = 'Imagen de asignatura';
  auxContainer = crearElemDoc ('div', 'info-container', '', dataContainer);
  crearElemDoc ('div', 'name', pName, auxContainer);
  crearElemDoc ('div', 'codigo', pCodigo, auxContainer);
  crearElemDoc ('div', 'grado', pGrado, auxContainer);
  let optionsContainer = crearElemDoc ('div', 'options', '', dataContainer);

  auxContainer = crearElemDoc ('button', 'btn-edit', '', optionsContainer);
  auxContainer.type = 'button';
  auxContainer = crearElemDoc ('img', '', '', auxContainer);
  auxContainer.src = 'images/icon-edit.png';
  auxContainer.title = 'Editar datos de asignatura';

  auxContainer = crearElemDoc ('button', 'btn-delete', '', optionsContainer);
  auxContainer.type = 'button';
  auxContainer = crearElemDoc ('img', '', '', auxContainer);
  auxContainer.src = 'images/icon-delete.png';
  auxContainer.title = 'Eliminar asignatura';
}

function listarAsignaturas () {
  let cantidad;
  for (cantidad = 0; cantidad < asignaturas.length; cantidad++) {
    crearFicha(asignaturas[cantidad].nombre, 'Codigo: ' + asignaturas[cantidad].codigo, 'Grado: ' + asignaturas[cantidad].grado);
  }
  numAsignaturasList.textContent = ('Cantidad de asignaturas listadas: ' + cantidad);
}

listarAsignaturas();

  /*-------------------- Asignacion de eventos a los botones --------------------*/

let btnsEdit = document.getElementsByClassName('btn-edit');
let btnsDelete = document.getElementsByClassName('btn-delete');

function sacarCodigo (dataContainer) {
  let codigo = dataContainer.getElementsByClassName('codigo');
  codigo = codigo[0];
  codigo = codigo.textContent;
  codigo = codigo.split(': ');
  codigo = codigo[1];
  return codigo;
}

for (var i = 0; i < btnsEdit.length; i++) {
  btnsEdit[i].addEventListener('click', e => {
    e.preventDefault();
    let codigo = sacarCodigo(e.path[3]);
    sessionStorage.setItem('codeAsignaturaEdit', codigo); //No se esta parceando
    window.location = 'admin-edit-subject.html';
  });
}

function eliminar (pCodigo , array) {
  let i = 0;
  while (i < array.length) {
    if (array[i].codigo === pCodigo) {
      array.splice(i, 1);
    } else {
      i++;
    }
  }
}

for (var i = 0; i < btnsDelete.length; i++) {
  btnsDelete[i].addEventListener('click', e => {
    e.preventDefault();
    let codigo = sacarCodigo(e.path[3]);
    let confirmacion = confirm("¿Estas seguro que deseas eliminar la materia identificada con codigo " + codigo + "?");
    if (confirmacion) {
      eliminar(codigo, estudianteAsignatura);
      localStorage.setItem( 'estudianteAsignatura', JSON.stringify(estudianteAsignatura) );
      eliminar(codigo, asignaturas);
      localStorage.setItem( 'asignaturas', JSON.stringify(asignaturas) );
      location.reload();
    }
  });
}
