
//let edad = prompt("Ingresa tu edad");

//if (edad >= 18){
//  alert ("Podes entrar a la pagina")
//}
//else{   document.body.style.display = "none";
//alert("No puedes ingresar a la pagina porque sos menor")}




let carrito = [];

class Productos {
  constructor(imagen, bodega, titulo, descripcion, precio,cantidad) {
    this.imagen = imagen;
    this.bodega = bodega;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad
  }
}

const getProduct = async () => {
  const response = await fetch("./JS/productos.json");
  const data = await response.json();
  const descProductos = data.descProductos; // Accedemos al array de productos

  const productContainer = document.querySelector('#product-container');

  descProductos.forEach((producto) => {
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `
      <div class="containerProd">
      <div class="container-img">
        <img class="imgvino" src=${producto.imagen}></img>
        </div>  
        <p class="title-bodega">${producto.bodega}</p>
        <h3 class="title-vino" >${producto.titulo}</h3>
        <p class="description" >${producto.descripcion}</p>
        <p class="precio">${producto.precio}</p>
        <button class="comprar">Comprar</button>
        <button class="vermas">Ver Mas</button>
      </div>`;

    productContainer.appendChild(productDiv);

    const addButton = productDiv.querySelector('.comprar');
    addButton.addEventListener('click', () => {
      carrito.push(producto);
      guardarcarrito(carrito);
      mostrarcarrito();
    });
  });
};

function guardarcarrito(carrito) {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  guardarcarrito(carrito);
  mostrarcarrito();
}

function mostrarcarrito() {
  const cartContainer = document.getElementById('cart-container');
  const carritoGuardado = localStorage.getItem('carrito');
  //const totalPedidoElement = document.getElementById('total-pedido');

  // Limpiar el contenedor del carrito antes de mostrar los productos
  cartContainer.innerHTML = '';

  if (carritoGuardado) {
    const carritoParseado = JSON.parse(carritoGuardado);
    carritoParseado.forEach((producto, index) => {
      const productDiv = document.createElement('div');
      productDiv.innerHTML = `
        <h3>${producto.titulo}</h3>
        <p>${producto.descripcion}</p>
        <p>${producto.precio}</p>
        <span class=restar> - </span>
        <p>${producto.cantidad}</p>
        <span class=sumar> + </span>
        <button class="eliminarCarrito" onclick="eliminarDelCarrito(${index})">Eliminar del Carrito</button>`;

      cartContainer.appendChild(productDiv);
    });
  }
  }



getProduct();

