function comprobarPass() {
  var nota_primera_ev = document.getElementById("nota_primera_ev").value;
  var nota_segunda_ev = document.getElementById("nota_segunda_ev").value;
  var nota_final = (nota_primera_ev + nota_segunda_ev) /2; 
  return nota_final;
}
function enviarFormulario() {
  console.log("enviando formulario");
  var div = document.getElementById("mensajes");
  if (comprobarPass()) {
    var nombre = document.getElementById("nombre").value; 
    div.innerHTML = "<h1> Aprobado </h1>"; 
    div.style.backgroundColor = "green";
  }
  else {
        div.innerHTML = "<h1> Suspenso </h1>";
        div.style.backgroundColor = "red";
  }
} 
function cambiacolor(color) {
    var div = document.getElementById("resultado");
    div.style.backgroundColor = color;
}