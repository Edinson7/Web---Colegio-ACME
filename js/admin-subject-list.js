const listContainer = document.getElementById('list-container');
const numAsignaturasList = document.getElementById('second-container');

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
  crearElemDoc ('div', 'email', pEmail, auxContainer);
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
