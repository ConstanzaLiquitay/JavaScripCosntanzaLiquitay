
//let edad = prompt("Ingresa tu edad");
//if (edad >= 18){
//alert ("Podes entrar a la pagina")
//}
//else{   document.body.style.display = "none";
//alert("No puedes ingresar a la pagina porque sos menor")}


let carrito = [];

class Productos {
  constructor(imagen, bodega, titulo, descripcion, precio, cantidad) {
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
  const descProductos = data.descProductos;
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
      </div>`;

    productContainer.appendChild(productDiv);



    const addButton = productDiv.querySelector('.comprar');
    addButton.addEventListener('click', () => {

      const repet = carrito.some((repetProduct) => repetProduct.titulo === producto.titulo);

      if (repet) {
        carrito.map((producto) => {
          if (producto.titulo === producto.titulo) {
            producto.cantidad++;
          }
        })
      } else {

        carrito.push({
          imagen: producto.imagen,
          bodega: producto.bodega,
          titulo: producto.titulo,
          descripcion: producto.descripcion,
          precio: producto.precio,
          cantidad: producto.cantidad,
        })
      }
      Swal.fire(
        'Producto Agregado al carrito!',
        'Nos encanta el vinito que elegiste',
        'success',
      )

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
        <p>Cantidad: ${producto.cantidad}</p>
        <p>Total: ${producto.cantidad * producto.precio}</p>
        <button class="eliminarCarrito" onclick="eliminarDelCarrito(${index})">Eliminar del Carrito</button>`;

      cartContainer.appendChild(productDiv);
    })

    //let restar = productDiv. querySelector(".restar");
    //restar.addEventListener("click", () => {
    //if (producto.cantidad > 0) { 
    //producto.cantidad--;
    //mostrarcarrito();
    //}

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    const totalcarrito = document.createElement("div");
    totalcarrito.className = "total-content";
    totalcarrito.innerHTML = `Total a pagar: ${total}$`;

    cartContainer.appendChild(totalcarrito);


  }//);
};
//}

getProduct();

