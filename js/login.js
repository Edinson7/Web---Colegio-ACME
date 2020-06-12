const btnLogin = document.getElementById('btnLogin');

function asignarVista (pTipo) {
  switch (pTipo) {
    case "administrador":
      location.href = "admin-inicio.html";
      break;
    case "profesor":
      location.href = "profesor-inicio.html";
      break;
    case "estudiante":
      location.href = "estudiante-inicio.html";
      break;
  }
}

btnLogin.addEventListener('click', function() {
  let txtUser = document.getElementById('txtUser').value;
  let txtPass = document.getElementById('txtPass').value;

  for(let i=0; i < cuentas.length; i++) {
    if(cuentas[i].user === txtUser && cuentas[i].password === txtPass) {
      asignarVista(cuentas[i].tipo);
    }
  }
});
