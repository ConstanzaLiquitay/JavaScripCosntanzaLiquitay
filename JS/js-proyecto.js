function preguntarEdad() {
  let edad = prompt("Ingresa tu edad");
  return edad;
}

function validarEdad(edad) {
  if (edad >= 18) {
    alert("Puedes entrar a la página.");
  } else {
    alert("No puedes entrar a la página.");
  }
}

let edadUsuario = 0; // Asigna un valor inicial a la variable

// Llama a la función preguntarEdad() y pasa el valor devuelto a validarEdad()
edadUsuario = preguntarEdad();

validarEdad(edadUsuario);


function Producto(precio, envio) {
  this.precio = precio;
  this.envio = envio;
}

Producto.prototype.calcularTotal = function() {
  return this.precio + this.envio;
}

function calcularTotal(index) {
  if (index === 1) {
    let precioProducto = parseFloat(document.getElementById('precioProducto').value);
    let costoEnvio = parseFloat(document.getElementById('costoEnvio').value);

    let precioHTML = parseFloat(document.querySelector('.precio').innerHTML.replace('$', ''));

    if (precioProducto === precioHTML) {
      let producto = new Producto(precioProducto, costoEnvio);
      let total = producto.calcularTotal();
      document.getElementById('total').innerHTML = 'Total: $' + total.toFixed(2);
    } else {
      alert('El precio ingresado no es correcto.');
    }
  }
}

function calcularEnvio() {
  let precioProducto = 100; // Precio del producto (ejemplo)
  let pais = prompt("Ingresa tu país:");

  let envios = [
    { pais: 'Argentina', costo: 10 },
    { pais: 'Brasil', costo: 15 },
    { pais: 'Chile', costo: 20 },
    // Agrega más países y costos de envío según sea necesario
  ];

  let costoEnvio = 0;

  for (let i = 0; i < envios.length; i++) {
    if (envios[i].pais.toLowerCase() === pais.toLowerCase()) {
      costoEnvio = envios[i].costo;
      break;
    }
  }

  if (costoEnvio !== 0) {
    let total = precioProducto + costoEnvio;
    alert('El costo de envío para ' + pais + ' es: $' + costoEnvio );
  } else {
    alert('Lo sentimos, no realizamos envíos a ' + pais + '.');
  }
}

calcularEnvio();

