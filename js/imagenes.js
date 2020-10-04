const imagenes = document.querySelectorAll('.img-galeria');
const imagenesCapa = document.querySelector('.agregar-imagen');
const contenedorCapa = document.querySelector('.imagenCapa');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', () =>{
        aparecerImagen(imagen.getAttribute('src'));
    });
});

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