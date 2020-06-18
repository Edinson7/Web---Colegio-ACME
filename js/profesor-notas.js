const tblBodyNotas = document.getElementById('tblBodyNotas');
const codigoMaterias = sessionStorage.getItem('codigoMaterias');

sessionStorage.setItem('codigoMaterias', '8909');
VerificarEstudiantesMateria() ;

function VerificarEstudiantesMateria() {
   sessionStorage.removeItem('profesorEstudiante');
   //var estudiantesMateria = [];
   for (let i = 0; i < sesiones.length; i++) {
      //var numEstudiantes = -1;
      for (let j = 0; j < estudianteAsignatura.length; j++) {
         if (estudianteAsignatura[j].codigo === codigoMaterias) {
            //numEstudiantes++;
            let nuevoUsuarioAsignatura = estudianteAsignatura[j];
            profesorEstudiante = addToArrayToSessionStorage(profesorEstudiante, estudianteAsignatura[j], 'profesorEstudiante');
         }
      }
   }
}
CargarEstudiantesTabla();

function CargarEstudiantesTabla(){
   //estudiantesMateria[numEstudiantes] = nuevoUsuarioAsignatura
   for (let i = 0; i < profesorEstudiante.length; i++) {
      console.log(profesorEstudiante.length);
      let codigo = profesorEstudiante[i].codigo;
      let id = profesorEstudiante[i].id;
      let faltas = profesorEstudiante[i].faltas;
      let nota1 = profesorEstudiante[i].nota1;
      let nota2 = profesorEstudiante[i].nota2;
      let nota3 = profesorEstudiante[i].nota3;
      for (let k = 1; k < usuarios.length; k++) {
         if (usuarios[k].id === id) {
            var nombreEstudiante = usuarios[k].nombre;
            agregarDatosTablaProfesor(nombreEstudiante, id, faltas, nota1, nota2, nota3, i);
         }
      }
   }

}

function agregarDatosTablaProfesor(estudiante, identificacion, faltas, nota1, nota2, nota3, posicion) {
   let padre = crearElemDoc('tr', '', '', tblBodyNotas);
   let newItem = crearElemDoc('td', "estudiante", estudiante, padre);
   newItem.setAttribute('data-label', 'Estudiante');
   newItem.setAttribute('id', 'estudiante' + posicion);

   newItem = crearElemDoc('td', 'identificacion', identificacion, padre);
   newItem.setAttribute('data-label', 'Identificación');
   newItem.setAttribute('id', 'identificacion' + posicion);

   let padreTd = crearElemDoc('td', '', '', padre);
   padreTd.setAttribute('data-label', 'Faltas');
   let newItemTd = crearElemDoc('input', 'faltas', '', padreTd);
   newItemTd.setAttribute("type", 'text');
   newItemTd.setAttribute('id', 'faltas' + posicion);

   padreTd = crearElemDoc('td', '', '', padre);
   padreTd.setAttribute('data-label', 'Nota 1');
   newItemTd = crearElemDoc('input', 'nota-1', '', padreTd);
   newItemTd.setAttribute("type", 'text');
   newItemTd.setAttribute('id', 'nota1' + posicion);

   padreTd = crearElemDoc('td', '', '', padre);
   padreTd.setAttribute('data-label', 'Nota 2');
   newItemTd = crearElemDoc('input', 'nota-2', '', padreTd);
   newItemTd.setAttribute("type", 'text');
   newItemTd.setAttribute('id', 'nota2' + posicion);

   padreTd = crearElemDoc('td', '', '', padre);
   padreTd.setAttribute('data-label', 'Nota 3');
   newItemTd = crearElemDoc('input', 'nota-3', '', padreTd);
   newItemTd.setAttribute("type", 'text');
   newItemTd.setAttribute('id', 'nota3' + posicion);

   padreTd = crearElemDoc('td', '', '', padre);
   padreTd.setAttribute('data-label', 'Opciones');
   newItemTd = crearElemDoc('button', 'btn-abrir-popup', 'Editar', padreTd);
   newItemTd.setAttribute("type", 'button');
   //newItemTd.setAttribute("onclick" , 'abrirPopup()');
   newItemTd.setAttribute('id', 'btnEditar' + posicion);
}

/*-------------------- Abrir Popup ----------------------*/
function abrirPopup() {
   overlay.classList.add('active');
   popup.classList.add('active');
}

overlay = document.getElementById('overlay'),
   popup = document.getElementById('popup'),
   btnCerrarPopup = document.getElementById('btn-cerrar-popup');



btnCerrarPopup.addEventListener('click', function(e) {
   e.preventDefault();
   overlay.classList.remove('active');
   popup.classList.remove('active');
});
/*---------------------------------------------------------*/
