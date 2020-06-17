const tableBodyAsignaturas = document.getElementById('tableBodyAsignaturas');
const numAsignaturas= document.getElementById("cantidadAsignaturas");


function AgregarDatosTablaAsignatura(){
   if (misAsignaturas.length === 0) {
      numAsignaturas.style.color= 'red';
      numAsignaturas.textContent = ('NO TIENE ASIGNATURAS MATRICULADAS');
   }
   else {
        numAsignaturas.textContent = ('Cantidad de asignaturas matriculadas : ' + misAsignaturas.length);
   }
   for (let i = 0; i < misAsignaturas.length; i++) {
      let asignatura = misAsignaturas[i].asignatura;
      let codigo = misAsignaturas[i].codigo;
      let profesor = misAsignaturas[i].profesor;
      let faltas = misAsignaturas[i].faltas;
      var nota1 = misAsignaturas[i].nota1;
      var nota2 = misAsignaturas[i].nota2;
      var nota3 = misAsignaturas[i].nota3;

      let padre = crearElemDoc ('tr', '', '', tableBodyAsignaturas);
      let newItem = crearElemDoc ('td', "columna-1", asignatura, padre);
      newItem.setAttribute('data-label', 'Materia');

      newItem = crearElemDoc ('td', '', codigo, padre);
      newItem.setAttribute('data-label', 'Codigo');

      newItem = crearElemDoc ('td', '', profesor, padre);
      newItem.setAttribute('data-label', 'Profesor');

      newItem = crearElemDoc ('td', '', faltas, padre);
      newItem.setAttribute('data-label', 'Faltas');
   }
}

 AgregarDatosTablaAsignatura();
