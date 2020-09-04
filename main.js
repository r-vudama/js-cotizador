function agregarProducto() {
    var producto = document.getElementById('articulo_producto');
    var valor = document.getElementById('articulo_valor');
    var cantidad = document.getElementById('articulo_cantidad');
    var subtotal = Number(valor.innerText) * Number(cantidad.value);
    var carrito = document.getElementById('carrito');

    var nuevoItem = document.createElement('div');
    nuevoItem.setAttribute('id', 'nuevoItem');
    var nuevoProducto = document.createElement('p');
    var nuevoValor = document.createElement('p');
    var nuevoCantidad = document.createElement('p');
    var textoSubtotal = document.createElement('p');
    var subtotalProducto = document.createElement('span');
    var nuevoQuitar = document.createElement('p');

    var elementoProducto = document.createTextNode(`Producto: ${producto.innerText} `);
    var elementoValor = document.createTextNode(`Valor: $${valor.innerText}`);
    var elementoCantidad = document.createTextNode(`Cantidad: ${cantidad.value} `);
    var elementoTextoSubtotal = document.createTextNode('Subtotal: $');
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

        nuevoItem.appendChild(textoSubtotal);
        textoSubtotal.setAttribute('id', 'nuevoSubtotal');
        textoSubtotal.appendChild(elementoTextoSubtotal);

        textoSubtotal.appendChild(subtotalProducto);
        subtotalProducto.setAttribute('name', 'subtotalProducto');
        subtotalProducto.appendChild(elementoSubtotal);

        nuevoItem.appendChild(nuevoQuitar);
        nuevoQuitar.setAttribute('onclick', 'eliminarProducto(this)');
        nuevoQuitar.setAttribute('class', 'quitarProducto');
        nuevoQuitar.appendChild(elementoQuitar);

    carrito.appendChild(nuevoItem)

   calcularTotal();
}

function calcularTotal(){

    var subtotales = document.getElementsByName('subtotalProducto');

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

// var boton = document.getElementById('botonAgregar');

// boton.addEventListener('click', function(e){


// })


