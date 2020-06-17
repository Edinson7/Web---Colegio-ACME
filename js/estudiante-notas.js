const tableBodyNotas = document.getElementById('tableBodyNotas');
const numNotas= document.getElementById('cantidadNotas');

function AgregarDatosTablaNotas(){
   if (misAsignaturas.length === 0) {
      numNotas.style.color= 'red';
      numNotas.textContent = ('NO TIENE ASIGNATURAS MATRICULADAS');
   }
   else {
        numNotas.textContent = ('Cantidad de asignaturas matriculadas : ' + misAsignaturas.length);
   }

   for (let i = 0; i < misAsignaturas.length; i++) {
      let asignatura = misAsignaturas[i].asignatura;
      let codigo = misAsignaturas[i].codigo;
      let profesor = misAsignaturas[i].profesor;
      let faltas = misAsignaturas[i].faltas;
      var nota1 = misAsignaturas[i].nota1;
      var nota2 = misAsignaturas[i].nota2;
      var nota3 = misAsignaturas[i].nota3;
      console.log(nota1);

      if (nota1 === "" ||  nota2 === "" || nota3 === "") {
        nota1 = 'Sin Nota';
        nota2 = 'Sin Nota';
        nota3 = 'Sin Nota';
     }

      let padre = crearElemDoc ('tr', '', '', tableBodyNotas);
      let newItem = crearElemDoc ('td', "columna-1", asignatura, padre);
      newItem.setAttribute('data-label', 'Materia');

      newItem = crearElemDoc ('td', '', codigo, padre);
      newItem.setAttribute('data-label', 'Codigo');

      newItem = crearElemDoc ('td', '', nota1, padre);
      newItem.setAttribute('data-label', 'Nota 1');

      newItem = crearElemDoc ('td', '', nota2, padre);
      newItem.setAttribute('data-label', 'Nota 2 ');

      newItem = crearElemDoc ('td', '', nota2, padre);
      newItem.setAttribute('data-label', 'Nota 3 ');
   }
}

AgregarDatosTablaNotas();
