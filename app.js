// Variables globales
let primerNumero = null;
let operador = null;
let segundoNumero = null;
let resultado = null;

// Función para actualizar la pantalla de la calculadora
function actualizarPantalla(valor) {
    document.getElementById("resultado").value = valor;
}

// Función para manejar los clics en los botones de números
function agregarNumero(numero) {
    const pantalla = document.getElementById("resultado");
    if (pantalla.value.length < 13) { //maximo meter 13 numeros en pantalla (lo que ocupa)
        pantalla.value = pantalla.value === "0" || pantalla.value === "" ? numero : pantalla.value + numero;
    }
}

// Función para manejar los clics en los botones de operaciones
function agregarOperador(op) {
    primerNumero = parseFloat(document.getElementById("resultado").value);
    operador = op;
    actualizarPantalla(""); // Limpiar pantalla para el segundo número
}

// Función para realizar el cálculo
function calcular() {
    segundoNumero = parseFloat(document.getElementById("resultado").value);
    if (primerNumero === null || operador === null || isNaN(segundoNumero)) return;

    switch (operador) {
        case "+": resultado = primerNumero + segundoNumero; break;
        case "-": resultado = primerNumero - segundoNumero; break;
        case "X": resultado = primerNumero * segundoNumero; break;
        case "/": 
            resultado = segundoNumero !== 0 ? primerNumero / segundoNumero : "Error"; 
            break;
    }

    // Si el resultado es un número, redondearlo a 5 decimales
    if (typeof resultado === "number") {
        resultado = parseFloat(resultado.toFixed(5));
    }

    actualizarPantalla(resultado);
    primerNumero = null;
    operador = null;
    segundoNumero = null;
}


// Función para limpiar la pantalla
function limpiar() {
    actualizarPantalla("");
    primerNumero = null;
    operador = null;
    segundoNumero = null;
}

// **Generación dinámica de los botones**
const botones = [
    { texto: "C", clase: "btn btn-clear btn-clear-full-width", accion: limpiar },
    { texto: "/", clase: "btn operacion", accion: () => agregarOperador("/") },
    { texto: "7", clase: "btn", accion: () => agregarNumero("7") },
    { texto: "8", clase: "btn", accion: () => agregarNumero("8") },
    { texto: "9", clase: "btn", accion: () => agregarNumero("9") },
    { texto: "X", clase: "btn operacion", accion: () => agregarOperador("X") },
    { texto: "4", clase: "btn", accion: () => agregarNumero("4") },
    { texto: "5", clase: "btn", accion: () => agregarNumero("5") },
    { texto: "6", clase: "btn", accion: () => agregarNumero("6") },
    { texto: "-", clase: "btn operacion", accion: () => agregarOperador("-") },
    { texto: "3", clase: "btn", accion: () => agregarNumero("3") },
    { texto: "2", clase: "btn", accion: () => agregarNumero("2") },
    { texto: "1", clase: "btn", accion: () => agregarNumero("1") },
    { texto: "+", clase: "btn operacion", accion: () => agregarOperador("+") },
    { texto: "0", clase: "btn", accion: () => agregarNumero("0") },
    { texto: ".", clase: "btn", accion: () => agregarNumero(".") },
    { texto: "=", clase: "btn btn-equal", accion: calcular }
];

// Seleccionar el contenedor de botones
const contenedorBotones = document.getElementById("botones");

// Crear y agregar los botones dinámicamente
botones.forEach(({ texto, clase, accion }) => {
    const boton = document.createElement("button");
    boton.innerHTML = texto;
    boton.className = clase;
    boton.addEventListener("click", accion);
    contenedorBotones.appendChild(boton);
});



