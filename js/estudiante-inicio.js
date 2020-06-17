
function consultarMisAsignaturas() {
  for (let i = 0; i < sesiones.length; i++) {
     for (let j = 0; j < estudianteAsignatura.length; j++) {
        if (sesiones[i].id === estudianteAsignatura[j].id) {
           let faltas = estudianteAsignatura[j].faltas;
           let nota1 = estudianteAsignatura[j].nota1;
           let nota2 = estudianteAsignatura[j].nota2;
           let nota3 = estudianteAsignatura[j].nota3;
           for (let k = 0; k < asignaturas.length; k++) {
              if (asignaturas[k].codigo === estudianteAsignatura[j].codigo) {
                 let asignatura = asignaturas[k].nombre;
                 let codigo = estudianteAsignatura[j].codigo;
                 for (let m = 0; m < usuarios.length; m++) {
                    if (asignaturas[k].profesor == usuarios[m].id) {
                       let profesor = usuarios[m].nombre
                       let nuevoUsuarioAsignatura = CrearUsuarioAsignatura(asignatura, codigo, profesor, faltas, nota1, nota2, nota3);
                       misAsignaturas = addToArrayToSessionStorage(misAsignaturas, nuevoUsuarioAsignatura, 'misAsignaturas');
                    }
                 }
              }
           }
        }
     }
  }
}

function CrearUsuarioAsignatura(pAsignatura, pCodigo, pProfesor, pfaltas, pNota1, pNota2, pNota3) {
   let usuarioAsignatura;
   usuarioAsignatura = {
      asignatura: pAsignatura,
      codigo: pCodigo,
      profesor: pProfesor,
      faltas: pfaltas,
      nota1: pNota1,
      nota2: pNota2,
      nota3: pNota3
   }
   return usuarioAsignatura;
}
