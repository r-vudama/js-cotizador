let productosLS = localStorage.getItem('carrito');
let productosJson = JSON.parse(productosLS)

const listaJson = document.getElementById("listado"); 
function agregarElementos(){ 
    
    productosJson.forEach (function (dataJson) {
    const subtotal = Number(dataJson.valor) * Number(dataJson.cantidad);
    var item = document.createElement("div");    
    item.innerHTML = `  
    <div class="nuevaLista"><img src="${dataJson.img}" alt="" width="150">
        <div id="nuevoItem">
            <p>${dataJson.producto} </p>
            <p>$${new Intl.NumberFormat('es-ar').format(dataJson.valor)} </p>
            <p>Cantidad: ${dataJson.cantidad}  </p>
            <p>Subtotal: $<span name="subtotalProducto">${new Intl.NumberFormat('es-ar').format(subtotal)}</span></p>
        </div> <hr>
        </div>`;
        listaJson.appendChild(item);
        })
}

agregarElementos()

const vaciarCarrito = document.querySelector('#botonVaciar');
vaciarCarrito.addEventListener('click', function(){
    listaJson.innerHTML = '<h3 class="vacio">Carrito Vacío</h3><a href="index.html" class="vacioBack">Volver al shop</a>';
    localStorage.clear()
})