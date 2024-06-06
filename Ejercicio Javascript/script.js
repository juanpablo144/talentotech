function persona(nom, eda, pro) {
  this.nombre = nom;
  this.edad = eda;
  this.profesion = pro;
}

function ejVar() {}

  var p1 = new persona("Laura", 33, "Inge");
  var p2 = new persona("Francisco", 25, "Arquitecto")

 /*  let persona = new Object();
  persona.nombre = "Sofia";
  persona.edad = 24;
  persona.profesion = "inge";
  persona.saludar = function () {
    return "Saludos";
  };
  persona.rh = "B+";

  console.log("Nombre: " + persona.nombre);
  console.log("Edad: " + persona["edad"]);
  console.log("Profesion: " + persona.profesion);
  console.log("saludo: " + persona.saludar());
  console.log("RH: " + persona.rh);

  console.log("antes: " + JSON.stringify(persona));
  delete persona.profesion;
  console.log("despues: " + JSON.stringify(persona));

  console.log("Ver todas las propiedades del objeto");

  for (const c in persona) {
    console.log(c + ":" + persona[c]);
  }
 */
}
