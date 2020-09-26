let arrayArticulos = [];
const carrito = document.querySelector('.carrito')

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
                this.enviarJson()
                calcularTotal();
                arrayArticulos = [...arrayArticulos];
            } else {
                arrayArticulos = [...arrayArticulos, this]
                this.enviarJson()  
                calcularTotal(); 
            }
        }

        this.enviarJson = function (){
            var arrayJson = JSON.stringify(arrayArticulos);
            localStorage.setItem('productos', arrayJson);
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
    localStorage.clear()

}

localStorage.getItem(arrayArticulos);
let productosLS = localStorage.getItem('productos');
let productosJson = JSON.parse(productosLS)

const listaJson = document.getElementById("listado"); 
function agregarElementos(){ 
    
    productosJson.forEach (function (dataJson) {
    const subtotal = Number(dataJson.valor) * Number(dataJson.cantidad);
    var item = document.createElement("div");    
    item.innerHTML = `  
        <div id="nuevoItem">
            <p id="nuevoProducto">Producto: ${dataJson.marca} </p>
            <p id="nuevoValor">Valor: ${dataJson.valor} </p>
            <p id="nuevoCantidad">Cantidad: ${dataJson.cantidad}  </p>
            <p id="nuevoSubtotal">Subtotal: $<span name="subtotalProducto">${subtotal}</span></p>
        </div>`;
        listaJson.appendChild(item);
        })
        calcularTotal()
}
agregarElementos()