const btnRegistrarAsignatura = document.getElementById('btnRegistrarAsignatura');

function agregarAsignatura (array, asignatura) {
  array.push(asignatura);
  localStorage.setItem('asignaturas', JSON.stringify(array));
  return array;
}

function crearAsignatura (pNombre, pCodigo, pGrado) {
  let asignatura = {
    nombre: pNombre,
    codigo: pCodigo,
    grado: pGrado,
    profesor: null,
    estudiantes: []
  }
  return asignatura;
}

btnRegistrarAsignatura.addEventListener('click', function() {
  let txtName = document.getElementById('txtName').value;
  let txtCodigo = document.getElementById('txtCodigo').value;
  let slcGrado = document.getElementById('slcGrado').value;

  let nuevaAsignatura = crearAsignatura (txtName, txtCodigo, slcGrado)

  asignaturas = agregarAsignatura(asignaturas, nuevaAsignatura);
});
