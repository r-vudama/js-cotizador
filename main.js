let arrayArticulos = [];

class Articulo {
    constructor(marca, valor, cantidad) {
        this.marca = marca;
        this.valor = valor;
        this.cantidad = cantidad;

        this.agregarArticulo = function (){

            const existe = arrayArticulos.some(producto => producto.marca === marca);

            if (existe) {
                arrayArticulos.map(producto => {
                    if (producto.marca === marca) {
                        producto.cantidad++;
                        return producto;
                    } else {
                        return producto;
                    }
                });
                this.crearArticulo()
                arrayArticulos = [...arrayArticulos];
            } else {
                arrayArticulos = [...arrayArticulos, this]
                this.crearArticulo()
            }
        }

        this.quitarArticulo = function (){
            var resultado = arrayArticulos.find(elemento => elemento.marca == marca)
            if (resultado) {
                resultado.cantidad = 0;
            }
        }

        this.crearArticulo = function (){

            var arrayJson = JSON.stringify(arrayArticulos);
            localStorage.setItem('productos', arrayJson);
            // localStorage.getItem(arrayArticulos);
            // let productosLS = localStorage.getItem('productos');
            // let productosJson = JSON.parse(productosLS)
            // console.log(productosJson)

            const subtotal = Number(this.valor) * Number(this.cantidad);

            const nuevoItem = document.createElement('div');
            nuevoItem.setAttribute('id', 'nuevoItem');
            const nuevoProducto = document.createElement('p');
            const nuevoValor = document.createElement('p');
            const nuevoCantidad = document.createElement('p');
            const textoSubtotal = document.createElement('p');
            const subtotalProducto = document.createElement('span');
            const nuevoQuitar = document.createElement('p');
        
            const elementoProducto = document.createTextNode(`Producto: ${this.marca} `);
            const elementoValor = document.createTextNode(`Valor: $${this.valor}`);
            const elementoCantidad = document.createTextNode(`Cantidad: ${this.cantidad} `);
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
                nuevoQuitar.setAttribute('onclick', 'eliminarArticulo(this);');
                nuevoQuitar.setAttribute('class', 'quitarProducto');
                nuevoQuitar.appendChild(elementoQuitar);
        
            carrito.appendChild(nuevoItem)
            
        calcularTotal();

        }
    }
}

const epiphoneLesPaul = new Articulo('Epiphone Les Paul', 82134, 1);
const epiphoneSG = new Articulo('Epiphone SG', 67137, 1);
const squierJazz = new Articulo('Squier Jazz Bass', 69088, 1);
const squierPrecision = new Articulo('Squier CV Precision', 82932, 1);

const botones = document.querySelectorAll(".boton");

for (let i = 0 ; i < botones.length ; i++) {

    botones[i].addEventListener("click", function(){
        
        if(botones[i] == botones[0]){
            epiphoneLesPaul.agregarArticulo();
        } else if (botones[i] == botones[1]){
            epiphoneSG.agregarArticulo();
        } else if (botones[i] == botones[2]){
            squierJazz.agregarArticulo();
        } else if (botones[i] == botones[3]){
            squierPrecision.agregarArticulo();
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

function eliminarArticulo(articulo){

    articulo.parentElement.remove();
    calcularTotal();
    // localStorage.clear()

}