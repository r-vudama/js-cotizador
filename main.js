function agregarProducto() {
    var producto = document.getElementById('form_producto');
    var valor = document.getElementById('form_valor');
    var cantidad = document.getElementById('form_cantidad');
    var subtotal = Number(valor.value) * Number(cantidad.value);
    var carrito = document.getElementById('carrito');

    var nuevoProducto = document.createElement('div')
    var elementoProducto = document.createTextNode(`Producto: ${producto.value} `);

        carrito.appendChild(nuevoProducto);
        nuevoProducto.setAttribute('id', 'nuevoProducto');
        nuevoProducto.appendChild(elementoProducto);

    var nuevoValor = document.createElement('div')
    var elementoValor = document.createTextNode(`Valor: $${valor.value} `);

        carrito.appendChild(nuevoValor);
        nuevoValor.setAttribute('id', 'nuevoValor');
        nuevoValor.appendChild(elementoValor);

    var nuevoCantidad = document.createElement('div');
    var elementoCantidad = document.createTextNode(`Cantidad: ${cantidad.value} `);

        carrito.appendChild(nuevoCantidad);
        nuevoCantidad.setAttribute('id', 'nuevoCantidad');
        nuevoCantidad.appendChild(elementoCantidad);

    var nuevoSubtotal = document.createElement('div')
    var elementoSubtotal = document.createTextNode(subtotal);

        carrito.appendChild(nuevoSubtotal);
        nuevoSubtotal.setAttribute('name', 'nuevoSubtotal');
        nuevoSubtotal.appendChild(elementoSubtotal);


    var nuevoQuitar = document.createElement('div')
    var elementoQuitar = document.createTextNode('Quitar producto');

        carrito.appendChild(nuevoQuitar);
        nuevoQuitar.setAttribute('onclick', 'eliminarProducto(this)');
        nuevoQuitar.appendChild(elementoQuitar);



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
