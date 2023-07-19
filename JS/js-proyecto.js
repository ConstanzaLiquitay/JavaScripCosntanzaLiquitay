let carrito = [];
class productos{
  constructor(imagen,bodega, titulo,descripcion,precio){
    this.imagen = imagen;
    this.bodega = bodega
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}

const descProductos = [
new productos('./Img/Medall-trapiche.jpg', 'Bodega Trapiche','Vino Medalla', 'En 1983 en homenaje a los 100 años de la bodega, emerge este vino de excepción elaborado con uvas provenientes de la Primera Zona vitivinícola mendocina', 1200),
new productos('./Img/vino.bodegagraffigna.jpg', 'Bodega Graffigna','Vino Malbec', 'Con un profundo color rojo y tintes violetas, este Malbec destaca por su intensidad frutal aromática de bayas maduras, especias dulces y pimienta, junto a notas tostadas de crianza en roble.', 5000),
new productos('./IMG/vino4trapiche.png', 'Bodega Trapiche','Vino Pinot Noir', 'Esta línea representa la más delicada selección de uvas con el fin de obtener ediciones auténticas de la costa y la pampa.', 1400),
]

const productContainer = document.querySelector('#product-container');

descProductos.forEach(productos => {
  const productDiv = document.createElement('div');
  //innerHTML
  productDiv.innerHTML = `
  <div class ='card'>
  <img src=${productos.imagen}></img>
  <p>${productos.bodega}</p>
  <h3>${productos.titulo}</h3>
  <p>${productos.descripcion}</p>
  <p>${productos.precio}</p>
  <button class=comprar>Comprar</button>
  <button class= vermas>Ver Mas</button>
  </div>
  `;


  productContainer.appendChild(productDiv);

 const addButton =  productDiv.querySelector('.comprar');
addButton.addEventListener('click',() =>{

  carrito.push(productos);

  //Guardamos al carrito
  guardarcarrito(carrito)

  const modal = document.getElementById('modal');
  modal.innerHTML = `
  <div class="modal-content">
  <h3>${productos.titulo}</h3>
  <p>${productos.descripcion}</p>
  <p>${productos.precio}</p>
  </div> `

  modal.style.display = 'block'
})

})

function guardarcarrito(carrito){
  localStorage.setItem('carrito', JSON.stringify(carrito));
}