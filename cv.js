
alert("Bienvenido, estas por ingresar a mi Curriculum Vitae")

const saludar = function (){
    console.log("Hola, me llamo Cristal")
}
saludar()
function Datos(Nombre, Apellido, Cargo, Teléfono){
  console.log(""+ Nombre + "" + Apellido + "" + Cargo + "" + Teléfono);
  var pDatos = document.getElementById("demo");
  pDatos.innerText = (""+ Nombre + "" + Apellido + "" + Cargo + "" + Teléfono)
}


