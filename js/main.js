const fila = document.querySelector('.contenedor-imagenes');
const proyectosdestacados = document.querySelectorAll('.carousel');
const flechaiz = document.getElementById("flecha-iz")
const flechader = document.getElementById("flecha-der")

flechader.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth})

//     const indicadorActivo = document.querySelector('.indicadores .activo');
// 	if(indicadorActivo.nextSibling){
// 		indicadorActivo.nextSibling.classList.add('activo');
// 		indicadorActivo.classList.remove('activo');
// 	}

// });

 flechaiz.addEventListener('click', () => {
   fila.scrollLeft -= fila.offsetWidth})

//     const indicadorActivo = document.querySelector('.indicadores .activo');
//     if(indicadorActivo.previousSibling){
// 	    indicadorActivo.previousSibling.classList.add('activo');
// 	    indicadorActivo.classList.remove('activo');
//     }
// })
    