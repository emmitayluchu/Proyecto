let respuesta1 = "";
let respuesta2 = "";
let respuesta3 = "";
let respuesta4 = "";
let respuesta5 = "";

function seleccionarRespuesta1(respuesta) {
  respuesta1 = respuesta;
}

function seleccionarRespuesta2(respuesta) {
  respuesta2 = respuesta;
}

function seleccionarRespuesta3(respuesta) {
  respuesta3 = respuesta;
}

function seleccionarRespuesta4(respuesta) {
  respuesta4 = respuesta;
}

function seleccionarRespuesta5(respuesta) {
  respuesta5 = respuesta;
}

function verResultado() {
  let puntaje = 0;

  if (respuesta1 == "Escolapios") {
    puntaje++;
  }
  if (respuesta2 == "1899") {
    puntaje++;
  }
  if (respuesta3 == "Maestro de novicios") {
    puntaje++;
  }
  if (respuesta4 == "Rescató las hostias consagradas del oratorio del Noviciado") {
    puntaje++;
  }
  if (respuesta5 == "Juan Pablo II") {
    puntaje++;
  }

  alert("Tu puntaje es: " + puntaje + " de 5");

  document.getElementById("resultado").textContent = "Tu puntaje es: " + puntaje + " de 5";

  respuesta1 = "";
  respuesta2 = "";
  respuesta3 = "";
  respuesta4 = "";
  respuesta5 = "";

  let radios = document.querySelectorAll('input[type="radio"]');
  for (let i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
}
