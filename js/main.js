// Función para calcular el IMC
function calcularIMC(peso, altura) {
    let result = peso / ((altura/100) ** 2);
    return result.toFixed(1);
  }
  
// Función para interpretar el IMC
function interpretarIMC(imc) {
  if (imc < 18.5) {
    return {
      diagnostico: "Delgadez",
      //color: "red"
      //color: "rgb(255, 0, 0)",
      color: "#e84139",
      //fontWeight: "bolder"
    };
  } else if (imc >= 18.5 && imc < 25) {
    return {
      diagnostico: "Peso correcto",
      //color: "green"
      color: "#4d975b"
    };
  } else if (imc >= 25 && imc < 30) {
    return {
      diagnostico: "Sobrepeso",
      //color: "orange"
      color: "#ff9500"
    };
  } else if (imc >= 30){
    return {
      diagnostico: "Obesidad",
      //color: "red"
      color: "#e84139"
    };
  }
}
  
// Función para validar y obtener los valores de peso y altura
function obtenerValoresYCalcular() {
  let pesoElement = document.getElementById("peso");
  let alturaElement = document.getElementById("altura");
  let imcElement = document.getElementById("imc");
  let diagnosticoElement = document.getElementById("diagnostico");

  let peso = parseFloat(pesoElement.value);
  let altura = parseFloat(alturaElement.value);

  if (isNaN(peso) || isNaN(altura)) {
    diagnosticoElement.innerText = "Por favor, ingresa valores válidos para peso y altura";
    return;
  }

  let imc = calcularIMC(peso, altura);
  let diagnostico = interpretarIMC(imc);
  // Asignar color de fondo a los bloques IMC y Diagnostico
  imcElement.style.backgroundColor = diagnostico.color;
  diagnosticoElement.style.backgroundColor = diagnostico.color;

  imcElement.innerText = "Tu IMC es: " + imc;
  diagnosticoElement.innerText = "Diagnóstico: " + diagnostico.diagnostico;
}

// Asignar la función obtenerValoresYCalcular al evento "click" del botón
document.getElementById("calcular").addEventListener("click", obtenerValoresYCalcular);

// funcion para resetear bloques IMC y Diagnostico
document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("imc").innerText = "";
  document.getElementById("imc").style.backgroundColor = ""
  document.getElementById("diagnostico").innerText = "";
  document.getElementById("diagnostico").style.backgroundColor = ""
});
  