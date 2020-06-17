const listContainer = document.getElementById('list-container');
const numAsignaturasList = document.getElementById('second-container');

/*-------------------- Listar asignaturas --------------------*/

function crearFicha (pName, pEmail, pGrado) {
  let itemContainer = crearElemDoc ('div', 'item-container', '', listContainer);
  let dataContainer = crearElemDoc ('div', 'data-container', '', itemContainer);
  let auxContainer = crearElemDoc ('div', 'item-padding', '', itemContainer);
  auxContainer = crearElemDoc ('div', 'image-container', '', dataContainer);
  auxContainer = crearElemDoc ('img', '', '', auxContainer);
  auxContainer.src = 'images/img-subject.png';
  auxContainer.title = 'Imagen de asignatura';
  auxContainer = crearElemDoc ('div', 'info-container', '', dataContainer);
  crearElemDoc ('div', 'name', pName, auxContainer);
  let aux = crearElemDoc ('div', 'codigo', pEmail, auxContainer);
  aux.id = 'code';
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

function sacarCodigoAEditar(dataContainer) {
  let codigo = dataContainer.getElementsByClassName('codigo');
  codigo = codigo[0];
  codigo = codigo.textContent;
  codigo = codigo.split(': ');
  codigo = codigo[1];
  sessionStorage.setItem('codeAsignaturaEdit', codigo);
}

for (var i = 0; i < btnsEdit.length; i++) {
  btnsEdit[i].addEventListener('click', e => {
    e.preventDefault();
    sacarCodigoAEditar(e.path[3]);
    window.location = 'admin-edit-subject.html';
  });
}
