
/*function verificarEdad() {
  const edad = prompt("Por favor, ingresa tu edad:");

  if (edad < 18) {
    alert("Lo siento, eres menor de edad. No puedes ingresar.");
    document.getElementById("paginavinos").style.display = "none";
  } else {
    console.log("Mostrar la página aquí.");
    // Mostrar la página
    document.getElementById("paginavinos").style.display = "block";
  }
}
verificarEdad();*/




function verificarEdad() {
  const edad = prompt("Por favor, ingresa tu edad:");

  if (edad < 18) {
    alert("Lo siento, eres menor de edad. No puedes ingresar.");
    document.getElementById("paginavinos").style.display = "none";
  } else {
    console.log("Mostrar la página aquí.");
    // Mostrar la página
    document.getElementById("paginavinos").style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  verificarEdad();
});



// Obtener referencia al botón
const boton = document.getElementById("btn-vermas");

// Agregar evento de clic al botón
boton.addEventListener("click", function () {
  // Redireccionar a la página deseada
  window.location.href = "https://trapiche.com.ar/comin/linea/iscay/";
});

const botonComprar = document.getElementById("btn-comprar");
const selectPaises = document.getElementById("selectPaises");

botonComprar.addEventListener("click", function () {
  selectPaises.style.display = "block";
});




// Obtener elementos del DOM
const btnComprar = document.getElementById("btn-comprar");
const selecPaises = document.getElementById("selectPaises");
const costoEnvio = document.getElementById("costoEnvio");
const precio = document.getElementById("precio");
const totalPagar = document.getElementById("totalPagar");

// Asociar evento de click al botón Comprar
btnComprar.addEventListener("click", mostrarSeleccionPais);

// Función para mostrar la selección del país
function mostrarSeleccionPais() {
  selectPaises.style.display = "block";
}

// Asociar evento de cambio al campo de selección de países
selectPaises.addEventListener("change", calcularTotalPagar);

// Función para calcular el total a pagar
function calcularTotalPagar() {
  const opcionSeleccionada = selectPaises.value;
  const costoProducto = 2300;
  let costoEnvioSeleccionado = 0;

  if (opcionSeleccionada === "sanjuan") {
    costoEnvioSeleccionado = 1000;
  } else if (opcionSeleccionada === "mendoza") {
    costoEnvioSeleccionado = 1000;
  } else if (opcionSeleccionada === "sanluis") {
    costoEnvioSeleccionado = 1200;
  } else if (opcionSeleccionada === "buenosaires") {
    costoEnvioSeleccionado = 2000;
  } else if (opcionSeleccionada === "rosario") {
    costoEnvioSeleccionado = 2000;
  } else if (opcionSeleccionada === "tucuman") {
    costoEnvioSeleccionado = 2000;
  } else if (opcionSeleccionada === "larioja") {
    costoEnvioSeleccionado = 2000;
  } else if (opcionSeleccionada === "cordoba") {
    costoEnvioSeleccionado = 2000;
  }

  costoEnvio.textContent = "Costo de envío: $" + costoEnvioSeleccionado;
  const total = costoProducto + costoEnvioSeleccionado;
  totalPagar.textContent = "Total a pagar: $" + total;
}
