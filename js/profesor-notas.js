const tblBodyNotas = document.getElementById('tblBodyNotas');
const titulo =document.getElementById('titulo');
const cantidad = document.getElementById('cantidad');

var profesorEstudiante = [];
var  codigoMaterias ;


VerificarEstudiantesMateria() ;

function VerificarEstudiantesMateria() {
    codigoMaterias = JSON.parse( sessionStorage.getItem('codigoMaterias'));
    let contador = 0;
      for (let j = 0; j < estudianteAsignatura.length; j++) {
         if (estudianteAsignatura[j].codigo === codigoMaterias) {
            contador ++;
            let nuevoUsuarioAsignatura = estudianteAsignatura[j];
            profesorEstudiante.push(nuevoUsuarioAsignatura);
         }
      }
      cantidad.textContent = 'Cantidad de estudiantes matriculados: ' + contador;
   }


   for (let i = 0; i < asignaturas.length; i++) {
      if (asignaturas[i].codigo === codigoMaterias) {
         titulo.textContent = asignaturas[i].nombre ;
      }
   }

CargarEstudiantesTabla();

function CargarEstudiantesTabla(){
   for (let i = 0; i < profesorEstudiante.length; i++) {
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
   newItemTd.setAttribute('value', faltas);
   newItemTd.setAttribute("type", 'text');
   newItemTd.setAttribute('id', 'faltas' + posicion);

   padreTd = crearElemDoc('td', '', '', padre);
   padreTd.setAttribute('data-label', 'Nota 1');
   newItemTd = crearElemDoc('input', 'nota-1', '', padreTd);
   newItemTd.setAttribute('value', nota1);
   newItemTd.setAttribute("type", 'text');
   newItemTd.setAttribute('id', 'nota1' + posicion);

   padreTd = crearElemDoc('td', '', '', padre);
   padreTd.setAttribute('data-label', 'Nota 2');
   newItemTd = crearElemDoc('input', 'nota-2','', padreTd);
   newItemTd.setAttribute('value', nota2);
   newItemTd.setAttribute("type", 'text');
   newItemTd.setAttribute('id', 'nota2' + posicion);

   padreTd = crearElemDoc('td', '', '', padre);
   padreTd.setAttribute('data-label', 'Nota 3');
   newItemTd = crearElemDoc('input', 'nota-3', '', padreTd);
   newItemTd.setAttribute('value', nota3);
   newItemTd.setAttribute("type", 'text');
   newItemTd.setAttribute('id', 'nota3' + posicion);

   padreTd = crearElemDoc('td', '', '', padre);
   padreTd.setAttribute('data-label', 'Opciones');
   newItemTd = crearElemDoc('button', 'btn-abrir', 'Editar', padreTd);
   newItemTd.setAttribute("type", 'button');
   newItemTd.setAttribute('id', 'btnEditar' + posicion);
}

var btnsEdit = document.getElementsByClassName('btn-abrir');

for (var i = 0; i < btnsEdit.length; i++) {
  btnsEdit[i].addEventListener('click', e => {
    e.preventDefault();
   let newEstAsig = sacarDatos(e.path[2]);
   let estudianteAsignatura  = editEstAsig (newEstAsig);
    localStorage.setItem('estudianteAsignatura', JSON.stringify(estudianteAsignatura));
    alert( ' Se registaron los nuevos cambios  ');
  });
}
function editEstAsig (nuevoEstAsignatura){
   for (let i = 0; i < estudianteAsignatura.length; i++) {
      if (estudianteAsignatura[i].codigo === codigoMaterias && estudianteAsignatura[i].id === nuevoEstAsignatura.id ) {
         estudianteAsignatura[i] = nuevoEstAsignatura;
         break;
      }
   }
   return estudianteAsignatura;
}

function sacarDatos (dataContainer) {
  let codigo = codigoMaterias;
  let identificacion = dataContainer.getElementsByClassName('identificacion');
  identificacion = identificacion[0];
  identificacion = identificacion.textContent;

  let faltas = textDatos(dataContainer , 'faltas');
  let nota1 = textDatos(dataContainer , 'nota-1');
  let nota2 = textDatos(dataContainer , 'nota-2');
  let nota3 = textDatos(dataContainer , 'nota-3');
  let newEstAsig = {
    codigo: codigo,
    id: identificacion,
    faltas: faltas,
    nota1: nota1,
    nota2: nota2,
    nota3: nota3
  }

  return newEstAsig;
}
function textDatos(dataContainer, campo){
   let atributo = dataContainer.getElementsByClassName(campo);
   atributo = atributo[0];
   atributo = atributo.value;

   return atributo;
}
