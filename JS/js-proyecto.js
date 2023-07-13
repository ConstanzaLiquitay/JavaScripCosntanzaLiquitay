   // Función para obtener la edad del usuario
   function obtenerEdad() {;
    const edad = prompt( "Por favor, introduce tu edad:");
    return parseInt(edad); // Convierte la cadena de texto a un número entero
}

// Función para mostrar u ocultar la página según la edad del usuario
function mostrarPagina() {
    const edad = obtenerEdad();

    if (edad < 18) {
        document.body.innerHTML = ""; // Limpia el contenido del body
        alert("Lo siento, debes ser mayor de 18 años para ver esta página.");
    } else {
        // El usuario tiene 18 años o más, la página se muestra normalmente
    }
}

// Llama a la función para mostrar u ocultar la página
mostrarPagina();

class productos {
  constructor(id, imagen, nombre , descripcion, precio,boton) {
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.boton = boton;
  }
}

const Producto = [
  new productos (1,'./Img/vinotrapiche.jpg', 'Iscay - Malbec Cabernet Franc','De color púrpura intenso, este vino combina aromas a violetas, frutas rojas maduras, sutiles notas especiadas y taninos generosos. El Malbec y el Cabernet Franc hacen una perfecta combinación que resulta en un ejemplar elegante y de final diáfano.', 12000),
  new productos (2, 'Medall.trapiche.jpg','Medalla - Cabernet Suavignon','Este vino posee un color rojo intenso con tonos violetas. Expresa aromas complejos con notas de mermelada de ciruela, pimientos verdes, pasas de uva, tabaco y un delicado toque de roble. De sabor redondo, en boca es muy persistente, con taninos suaves y maduros.', 12600),
  new productos (3, 'vino2trapiche.png','Terroir Series - Malbec','De color rojo violáceo intenso con aromas a frutos del bosque como moras y arándanos. En boca es fresco y redondo al comienzo con taninos dulces y tensos que le dan jugosidad y amplitud y elegancia en boca.', 18000),
]

console.log(Producto)

const productContainer = document.querySelector('#container-Productos');

Producto.forEach(productos => {
  const productDiv = document.createElement('div')
  productDiv.innerHTML = `
  <div calass='card'>
  <p>${productos.id}</p>;
  <img src='${productos.imagen}'/>;
  <p>${productos.nombre}</p>;
  <p>${productos.descripcion}</p>;
  <p>${productos.precio}</p>;
  <button class= btn-compras>Comprar</button>;
  <select id="selector" ">
  <option>Selecciona tu provinica</option>
  <option value= "San Juan">San Juan</option>
  <option value= "Buenos Aires">Buenos Aires</option>
  <option value= "Cordoba">Cordoba</option>
  <option value= "La Rioja">La Rioja</option>
  </select>
  <p>Costo de envío: $<span id="precio"></span></p>
  </div>
  `
  productContainer.appendChild(productDiv);

  const addButton = productDiv.querySelector('.btn-compras')
  addButton.addEventListener('click', ()=>{
    console.log('Se agrego al carrito el producto',productos)
  })
})

// Precios de envío por provincia
const preciosEnvio = {
  "San Juan": 100,
  "Buenos Aires": 200,
  "Córdoba": 150,
  "La Rioja": 120}

  // Obtener referencias a los elementos del DOM
  var selector = document.getElementById('selector');
  var precioEnvioDiv = document.getElementById('precio-envio');
  var precioEnvioSpan = document.getElementById('precio');

  // Función para calcular el precio de envío y mostrarlo
  function calcularPrecioEnvio() {
      var provinciaSeleccionada = selector.value;
      var precioEnvio = preciosEnvio[provinciaSeleccionada];

      precioEnvioSpan.textContent = precioEnvio.toFixed(2);
      precioEnvioDiv.style.display = 'block';
  }

  // Agregar el evento de cambio al selector
  selector.addEventListener('change', calcularPrecioEnvio);