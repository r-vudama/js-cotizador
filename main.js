function agregarProducto() {
    var producto = document.getElementById('form_producto');
    var valor = document.getElementById('form_valor');
    var cantidad = document.getElementById('form_cantidad');
    var subtotal = Number(valor.value) * Number(cantidad.value);
    var carrito = document.getElementById('carrito');

    var nuevoItem = document.createElement('div');
    nuevoItem.setAttribute('id', 'nuevoItem');
    var nuevoProducto = document.createElement('p');
    var nuevoValor = document.createElement('p');
    var nuevoCantidad = document.createElement('p');
    var nuevoSubtotal = document.createElement('p');
    var nuevoQuitar = document.createElement('p');

    var elementoProducto = document.createTextNode(`Producto: ${producto.value} `);
    var elementoValor = document.createTextNode(`Valor: $${valor.value} `);
    var elementoCantidad = document.createTextNode(`Cantidad: ${cantidad.value} `);
    var elementoSubtotal = document.createTextNode(subtotal);
    var elementoQuitar = document.createTextNode('Quitar producto');

        nuevoItem.appendChild(nuevoProducto);
        nuevoProducto.setAttribute('id', 'nuevoProducto');
        nuevoProducto.appendChild(elementoProducto);

        nuevoItem.appendChild(nuevoValor);
        nuevoValor.setAttribute('id', 'nuevoValor');
        nuevoValor.appendChild(elementoValor);

        nuevoItem.appendChild(nuevoCantidad);
        nuevoCantidad.setAttribute('id', 'nuevoCantidad');
        nuevoCantidad.appendChild(elementoCantidad);

        nuevoItem.appendChild(nuevoSubtotal);
        nuevoSubtotal.setAttribute('name', 'nuevoSubtotal');
        nuevoSubtotal.appendChild(elementoSubtotal);

        nuevoItem.appendChild(nuevoQuitar);
        nuevoQuitar.setAttribute('onclick', 'eliminarProducto(this)');
        nuevoQuitar.appendChild(elementoQuitar);

    carrito.appendChild(nuevoItem)

   calcularTotal();
}

function calcularTotal(){

    var subtotales = document.getElementsByName('nuevoSubtotal');

    var suma = 0;

    for (var i = 0; i < subtotales.length; i++) {
        suma = suma + Number(subtotales[i].innerText);
    }
    
    var total = document.getElementById('total');
    total.innerHTML = `Total: $${suma}`;

}

function eliminarProducto(producto){

   producto.parentElement.remove();
   calcularTotal();

}
