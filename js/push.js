function definirEstructura(){
  arreglo = new Array();
  arreglo.push({
    "nombre":"Pedro",
    "apellido":"Perez",
    "cedula":"12345678",
    "correo":"pedroperez@hotmail.com"
  });

  arreglo.push({
    "nombre":"Maria",
    "apellido":"Romero",
    "cedula":"22017942",
    "correo":"mariiromero17@gmail.com"
  });

  arreglo.push({
    "nombre":"Andrea",
    "apellido":"Marin",
    "cedula":"9876543",
    "correo":"andream@hotmail.com"
  });
    
  return arreglo;
}
a = definirEstructura();{
console.log(a);

  function = genera_tabla(){
  var body = document.getElementsByTagName("body")[0];

  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");
    
    //creo las columnas y filas 
  for (var i = 0; i < 2; i++) {
    var hilera = document.createElement("tr");
    for (var j = 0; j < 2; j++) { 
      var celda = document.createElement("td"); //td son lso componentes de la tabla 
      var textoCelda = document.createTextNode("celda en la hilera "+i+" columna "+j);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
    tblBody.appendChild(hilera); //posiciona el tbody debajo de la tabla 
  }
  tabla.appendChild(tblBody);
  body.appendChild(tabla);
  tabla.setAttribute("border", "2");
}





