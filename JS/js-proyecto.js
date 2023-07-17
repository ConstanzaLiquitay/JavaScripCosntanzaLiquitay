 // Función para obtener la edad del usuario
 function obtenerEdad() {
  const edad = prompt("Por favor, introduce tu edad:");
  return parseInt(edad); // Convierte la cadena de texto a un número entero
};

// Función para mostrar u ocultar la página según la edad del usuario
function mostrarPagina() {
  const edad = obtenerEdad();

  if (edad >= 18) {
      // El usuario tiene 18 años o más, se muestra la página normalmente
      document.body.style.display = "block";
  } else {
      // El usuario es menor de 18 años, se oculta la página
      document.body.style.display = "none";
      alert("Lo siento, debes ser mayor de 18 años para ver esta página.");
  }
}

// Llamamos a la función para mostrar u ocultar la página al cargar el sitio
mostrarPagina();


//Función para mostrar el modal
function showModal() {
  document.getElementById("modal").style.display = "block";
}
debugger
// Función para guardar datos en el Storage
function saveDataToStorage() {
  // Aquí puedes guardar los datos que quieras en el Local Storage
  const numeroDeSocio = document.getElementById("numerodesocio").value;
  const bodegaSeleccionada = document.getElementById("bodega").value;
  const tiposDeVino = document.querySelectorAll('input[name="tipodevino"]:checked');
  const comentarios = document.querySelector('input[type="text"]').value;

  const data = {
    numeroDeSocio: numeroDeSocio,
    bodegaSeleccionada: bodegaSeleccionada,
    tiposDeVino: Array.from(tiposDeVino).map(input => input.value),
    comentarios: comentarios
  };

  localStorage.setItem("wineBoxData", JSON.stringify(data));
}

// Función para manejar el evento de envío del formulario
function handleSubmit(event) {
  event.preventDefault(); // Evitar que se envíe el formulario
  saveDataToStorage();
  showModal();
}

// Función para cerrar el modal y limpiar el Local Storage
function closeModal() {
  document.getElementById("modal").style.display = "none";
  localStorage.removeItem("wineBoxData");
}

// Manejadores de eventos
document.getElementById("wineForm").addEventListener("submit", handleSubmit);
document.getElementById("btn-enviar").addEventListener("click", handleSubmit);
document.getElementById("modal").addEventListener("click", closeModal);


  // Función para mostrar el SweetAlert cuando se presione el botón Enviar
  function mostrarSweetAlert() {
    Swal.fire({
        title: "Estamos enviando tu box del mes",
        icon: "info",
        timer: 2000, // Duración del SweetAlert en milisegundos (en este caso, 2 segundos)
        timerProgressBar: true,
        showConfirmButton: false
    });
}

// Función para guardar datos en el Storage (igual a la función anterior)
function saveDataToStorage() {
    // ...
}

// Función para manejar el evento de envío del formulario
function handleSubmit(event) {
    event.preventDefault();
    saveDataToStorage();
    mostrarSweetAlert(); // Llama a la función para mostrar el SweetAlert
}

// Manejador de evento para el envío del formulario
document.getElementById("wineForm").addEventListener("submit", handleSubmit);

 // Función para mostrar el SweetAlert cuando se presione el botón Enviar
 function mostrarSweetAlert() {
  Swal.fire({
      title: "Estamos enviando tu box del mes",
      icon: "info",
      timer: 2000, // Duración del SweetAlert en milisegundos (en este caso, 2 segundos)
      timerProgressBar: true,
      showConfirmButton: false
  });
}

// Función para guardar datos en el Storage (igual a la función anterior)
function saveDataToStorage() {
  // ...
}

// Función para manejar el evento de envío del formulario
function handleSubmit(event) {
  event.preventDefault();
  saveDataToStorage();
  mostrarSweetAlert(); // Llama a la función para mostrar el SweetAlert
}

// Manejador de evento para el envío del formulario
document.getElementById("wineForm").addEventListener("submit", handleSubmit);