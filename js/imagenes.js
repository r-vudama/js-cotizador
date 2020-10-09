const imagenesCapa = document.querySelector('.agregar-imagen');
const contenedorCapa = document.querySelector('.imagenCapa');

contenedorCapa.addEventListener('click', (e) => {
    if(e.target != imagenesCapa){
        contenedorCapa.classList.toggle('mostrar');
        imagenesCapa.classList.toggle('mostarImg');
    };
});

function aparecerImagen(imagen){
    imagenesCapa.src = imagen;
    contenedorCapa.classList.toggle('mostrar');
    imagenesCapa.classList.toggle('mostarImg');
}