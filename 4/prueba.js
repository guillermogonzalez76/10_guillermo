//soy un comentario de una linea
/* soy un comentario con varias lineas
*/
/* var mensaje = "Hola mundo que tal";
console.log(mensaje);
console.log(document);
alert('prueba de codigo');
var esviernes = true;
console.log("Es viernes y queremos irnos:" + esviernes);
//debuger
if (esviernes == true) {
  console.log("Por fin es viernes vete a la meir Xulei");
}
var alert = "Hola"
console.log(alert);
var nombreusuario = prompt("introduzca su nombre"); //es un input
console.log("hola" + nombreusuario);
debugger;
var hola = console.log("hola");
function mostrarnombre() {
  console.log(hola);
}
document.write("<h1>" + nombreusuario + "</h1>"); */
function comprobarPass() {
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;
  return pass1 == pass2;
}
function enviarFormulario() {
  console.log("enviando formulario");
  var div = document.getElementById("mensajes");
  //si las passwords coinciden
  if (comprobarPass()) {
    var nombre = document.getElementById("nombre").value; 
    div.innerHTML = "<h1> Password OK </h1>"; // en vez de escribir en el documento escribo en el div
    div.style.backgroundColor = "green";
    //document.writeln("<h1>Hola " + nombre + "</h1>");
    //document.writeln("<h1>Password OK</h1>");
  }
  else {
        div.innerHTML = "<h1> Password NO OK </h1>";
        div.style.backgroundColor = "red";
    //document.writeln("<h1>Las contraseñas no coinciden</h1>");
  }
} 
function cambiacolor(color) {
    var div = document.getElementById("mensajes");
    div.style.backgroundColor = color;
}