const listContainer = document.getElementById('list-container');
const numUserList = document.getElementById('second-container');

/*-------------------- Listar usuarios --------------------*/

function crearFicha (pName, pEmail, pId, pFoto) {
  let itemContainer = crearElemDoc ('div', 'item-container', '', listContainer);
  let dataContainer = crearElemDoc ('div', 'data-container', '', itemContainer);
  let auxContainer = crearElemDoc ('div', 'item-padding', '', itemContainer);
  auxContainer = crearElemDoc ('div', 'image-container', '', dataContainer);
  auxContainer = crearElemDoc ('img', '', '', auxContainer);
  auxContainer.src = pFoto;
  auxContainer.title = 'Imagen de perfil';
  auxContainer = crearElemDoc ('div', 'info-container', '', dataContainer);
  crearElemDoc ('div', 'name', pName, auxContainer);
  crearElemDoc ('div', 'email', pEmail, auxContainer);
  crearElemDoc ('div', 'id', pId, auxContainer);
  let optionsContainer = crearElemDoc ('div', 'options', '', dataContainer);

  auxContainer = crearElemDoc ('button', 'btn-edit', '', optionsContainer);
  auxContainer.type = 'button';
  auxContainer = crearElemDoc ('img', '', '', auxContainer);
  auxContainer.src = 'images/icon-edit.png';
  auxContainer.title = 'Editar datos de usuario';

  auxContainer = crearElemDoc ('button', 'btn-delete', '', optionsContainer);
  auxContainer.type = 'button';
  auxContainer = crearElemDoc ('img', '', '', auxContainer);
  auxContainer.src = 'images/icon-delete.png';
  auxContainer.title = 'Eliminar usuario';
}

function listarUsuarios () {
  let cantidad;
  for (cantidad = 1; cantidad < usuarios.length; cantidad++) {
    crearFicha(usuarios[cantidad].nombre, 'Correo: ' + usuarios[cantidad].email, 'Identificacion: ' + usuarios[cantidad].id, usuarios[cantidad].foto);
  }
  cantidad--;
  numUserList.textContent = ('Cantidad de usuarios listadas: ' + cantidad );
}

listarUsuarios();

  /*-------------------- Asignacion de eventos a los botones --------------------*/

let btnsEdit = document.getElementsByClassName('btn-edit');
let btnsDelete = document.getElementsByClassName('btn-delete');

function sacarIdentificacion (dataContainer) {
  let id = dataContainer.getElementsByClassName('id');
  id = id[0];
  id = id.textContent;
  id = id.split(': ');
  id = id[1];
  return id;
}

for (let i = 0; i < btnsEdit.length; i++) {
  btnsEdit[i].addEventListener('click', e => {
    e.preventDefault();
    let id = sacarIdentificacion(e.path[3]);
    sessionStorage.setItem('idUserEdit', id); //No se esta parceando
    window.location = 'admin-edit-user.html';
  });
}

function eliminarProfesor (pId, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].profesor === pId) {
      array[i].profesor = null;
    }
  }
  return array;
}

for (let i = 0; i < btnsDelete.length; i++) {
  btnsDelete[i].addEventListener('click', e => {
    e.preventDefault();
    let id = sacarIdentificacion(e.path[3]);
    let confirmacion = confirm("¿Estas seguro que deseas eliminar el usuario, correspondiente al numero de identificado " + id + "?");
    if (confirmacion) {
      estudianteAsignatura = deleteForId(id, estudianteAsignatura);
      localStorage.setItem( 'estudianteAsignatura', JSON.stringify(estudianteAsignatura) );

      asignaturas = eliminarProfesor (id, asignaturas);
      localStorage.setItem( 'asignaturas', JSON.stringify(asignaturas) );

      usuarios = deleteForId(id, usuarios);
      localStorage.setItem( 'usuarios', JSON.stringify(usuarios) );

      location.reload();
    }
  });
}
