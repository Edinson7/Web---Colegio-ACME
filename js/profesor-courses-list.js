const listContainer = document.getElementById('list-container');
const numAsignaturasList = document.getElementById('second-container');

/*-------------------- Listar asignaturas --------------------*/

function crearFicha (pName, pCodigo, pGrado) {
  let itemContainer = crearElemDoc ('a', 'item-container', '', listContainer);
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
}

function listarAsignaturas () {
  let cantidad = 0;
  if ( sessionStorage.getItem('sesiones') ) {
    let user = JSON.parse( sessionStorage.getItem('sesiones') );
    let id = user[0].id;
    for (let i = 0; i < asignaturas.length; i++) {
      if (asignaturas[i].profesor === id) {
        crearFicha(asignaturas[i].nombre, 'Codigo: ' + asignaturas[i].codigo, 'Grado: ' + asignaturas[i].grado);
        cantidad++;
      }
    }
  }
  numAsignaturasList.textContent = ('Cantidad de asignaturas listadas: ' + cantidad);
}

listarAsignaturas();

  /*-------------------- Asignacion de eventos a los botones --------------------*/

let itemContainer = document.getElementsByClassName('item-container');

function sacarCodigo (dataContainer) {
  let codigo = dataContainer.getElementsByClassName('codigo');
  codigo = codigo[0];
  codigo = codigo.textContent;
  codigo = codigo.split(': ');
  codigo = codigo[1];
  return codigo;
}

for (var i = 0; i < itemContainer.length; i++) {
  itemContainer[i].addEventListener('click', e => {
    e.preventDefault();
    let container = e.path[e.path.length-10];
    let codigo = sacarCodigo(container);
    sessionStorage.setItem( 'codigoMaterias', JSON.stringify(codigo) );
    window.location = 'profesor-notas.html';
  });
}
