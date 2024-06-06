function ejVar() {
  let persona = new Object();
  persona.nombre = "Sofia";
  persona.edad = 24;
  persona.profesion = "inge";
  persona.saludar = function () {
    return "Saludos";
  };

  console.log("Nombre: " + persona.nombre);
  console.log("Edad: " + persona["edad"]);
  console.log("Profesion: " + persona.profesion);
  console.log("saludo: " + persona.saludar());
}
