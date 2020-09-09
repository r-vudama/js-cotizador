class Articulo {
    constructor(marca, valor, cantidad) {
        this.marca = marca;
        this.valor = valor;
        this.cantidad = cantidad;
    }
}
const epiphoneLesPaul = new Articulo('Epiphone Les Paul', 25000, 1);
const epiphoneSG = new Articulo('Epiphone SG', 23500, 1);



let botones = document.querySelectorAll(".boton");

for (let i = 0 ; i < botones.length ; i++) {

    botones[i].addEventListener("click", function(){
        
        if(botones[i] == botones[0]){

            const subtotal = Number(epiphoneLesPaul.valor) * Number(epiphoneLesPaul.cantidad);

            const nuevoItem = document.createElement('div');
            nuevoItem.setAttribute('id', 'nuevoItem');
            const nuevoProducto = document.createElement('p');
            const nuevoValor = document.createElement('p');
            const nuevoCantidad = document.createElement('p');
            const textoSubtotal = document.createElement('p');
            const subtotalProducto = document.createElement('span');
            const nuevoQuitar = document.createElement('p');

            const elementoProducto = document.createTextNode(`Producto: ${epiphoneLesPaul.marca} `);
            const elementoValor = document.createTextNode(`Valor: $${epiphoneLesPaul.valor}`);
            const elementoCantidad = document.createTextNode(`Cantidad: ${epiphoneLesPaul.cantidad} `);
            const elementoTextoSubtotal = document.createTextNode('Subtotal: $');
            const elementoSubtotal = document.createTextNode(subtotal);
            const elementoQuitar = document.createTextNode('Quitar producto');

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

        } else if (botones[i] == botones[1]){
            const subtotal = Number(epiphoneSG.valor) * Number(epiphoneSG.cantidad);

            const nuevoItem = document.createElement('div');
            nuevoItem.setAttribute('id', 'nuevoItem');
            const nuevoProducto = document.createElement('p');
            const nuevoValor = document.createElement('p');
            const nuevoCantidad = document.createElement('p');
            const textoSubtotal = document.createElement('p');
            const subtotalProducto = document.createElement('span');
            const nuevoQuitar = document.createElement('p');

            const elementoProducto = document.createTextNode(`Producto: ${epiphoneSG.marca} `);
            const elementoValor = document.createTextNode(`Valor: $${epiphoneSG.valor}`);
            const elementoCantidad = document.createTextNode(`Cantidad: ${epiphoneSG.cantidad} `);
            const elementoTextoSubtotal = document.createTextNode('Subtotal: $');
            const elementoSubtotal = document.createTextNode(subtotal);
            const elementoQuitar = document.createTextNode('Quitar producto');

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
    })

}

function calcularTotal(){

    let subtotales = document.getElementsByName('subtotalProducto');

    let suma = 0;

    for (i = 0; i < subtotales.length; i++) {
        suma = suma + Number(subtotales[i].innerText);
    }
    
    let total = document.getElementById('total');
    total.innerHTML = `Total: $${suma}`;

}

function eliminarProducto(producto){

   producto.parentElement.remove();
   calcularTotal();

}
