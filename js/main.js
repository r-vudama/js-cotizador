let carrito;
if (localStorage.carrito) {carrito = JSON.parse(localStorage.carrito);}
else {carrito = [];}

const iconoCarrito = document.querySelector('.iconoCarrito')
const avisoCarrito = document.querySelector('.avisoCarrito');
const contenedorInstrumentos = document.querySelector('#contenedorInstrumentos');
const contenedorCarrito = document.querySelector('#contenedor_carrito');
const contenedorTotal = document.querySelector('#contenedor_total');

let botonesMenu = document.querySelectorAll(".botonMenu").forEach(boton => {
    boton.addEventListener('click', function() {
        id = boton.id;
        filtrarInstrumento();
    })
  })

function filtrarInstrumento(){
    contenedorInstrumentos.innerHTML = '';
    instrumentos.filter(elem => elem.tipo == id).forEach((producto) => {
        const instrumento = document.createElement('div');
        instrumento.setAttribute('class', 'instrumento');
        instrumento.innerHTML = `<img src=${producto.img} class="img-galeria">
        <h2>${producto.producto}</h2>
        <h2>$${new Intl.NumberFormat('es-ar').format(producto.valor)}</h2>
        <button onclick='agregarInstrumento(${instrumentos.indexOf(producto)})'>Agregar al carrito</button>`;
    
        contenedorInstrumentos.appendChild(instrumento);
    });
}

function mostrarTodo() {
    instrumentos.forEach((producto) => {
            const instrumento = document.createElement('div');
            instrumento.setAttribute('class', 'instrumento');
            instrumento.innerHTML = `<img src=${producto.img} class="img-galeria">
            <h2>${producto.producto}</h2>
            <h2>$${new Intl.NumberFormat('es-ar').format(producto.valor)}</h2>
            <button onclick='agregarInstrumento(${instrumentos.indexOf(producto)})'>Agregar al carrito</button>`;
        
            contenedorInstrumentos.appendChild(instrumento);
    });
}
  
function cambiarCantidad(e) {
    if (e.target.value == 0) {carrito.splice(e.target.name, 1);}
    else {carrito[e.target.name].cantidad = e.target.value;}
    cargarCarrito();
    localStorage.carrito = JSON.stringify(carrito);
}

function agregarInstrumento(index) {
    var producto = instrumentos[index];
    if (carrito.length > 0) {
        let noExiste = true;
        for (var i = 0; i < carrito.length; i++) {
            if (producto.producto === carrito[i].producto) {
                carrito[i].cantidad++;
                noExiste = false;
            }
        }
        if (noExiste) {
        producto.cantidad = 1;
        carrito.push(producto);
        }
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
    cargarCarrito();
    localStorage.carrito = JSON.stringify(carrito);
}

function cargarCarrito() {
    contenedorCarrito.innerHTML = '';
    contenedorTotal.innerHTML = '';

    if (carrito.length > 0) {
        avisoCarrito.style.display = "block";
        iconoCarrito.setAttribute( "href", "compra.html" );
        let contador = 0;
        carrito.forEach((producto) => {
        let productosEnCarrito = document.createElement('div');
        productosEnCarrito.setAttribute('class', 'item');
        productosEnCarrito.innerHTML = `
        <p>Producto: ${producto.producto} <br> 
        Cantidad: ${producto.cantidad} <br> 
        Subtotal: $${new Intl.NumberFormat('es-ar').format(producto.valor * producto.cantidad)}</p>
        <div class='botonesItem'>    
        <button onclick='quitarItem(${carrito.indexOf(producto)})'> - </button>
        <input name='${carrito.indexOf(producto)}' value='${producto.cantidad}' disabled onchange='cambiarCantidad(event)'> 
        <button onclick='agregarItem(${carrito.indexOf(producto)})'> + </button>
        <div>`;
        contenedorCarrito.appendChild(productosEnCarrito);
        contador = contador + producto.valor * producto.cantidad;
        });

        let totalCarrito = document.createElement('h2');
        totalCarrito.innerHTML = `Total: $${new Intl.NumberFormat('es-ar').format(contador)}`;
        contenedorTotal.innerHTML = `<a href="compra.html" class="botonComprar">Comprar</a>`
        
        contenedorTotal.appendChild(totalCarrito);
    } else{
        avisoCarrito.style.display = "none";
        iconoCarrito.setAttribute( "href", "#" );
    }
}
  
function quitarItem(index) {
    carrito[index].cantidad = carrito[index].cantidad - 1;
    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
        avisoCarrito.style.display = "none";
    }
    localStorage.carrito = JSON.stringify(carrito);
    cargarCarrito();
}

function agregarItem(index) {
    carrito[index].cantidad = carrito[index].cantidad + 1;
    localStorage.carrito = JSON.stringify(carrito);
    cargarCarrito();
}

mostrarTodo();
cargarCarrito();