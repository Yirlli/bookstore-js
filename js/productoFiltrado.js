
const busca = document.getElementById("busqueda")
busca.addEventListener("click", () =>{
    filtrarProductos();
})

function filtrarProductos(){
    
    
 //traigo el valor del imput
    const sectionLibro = document.querySelector('.libro-detalle');
    const libroCapturado = document.getElementById('search-item').value 
    const libroBuscado = libroCapturado.trim().toUpperCase();
  
    //limpiamos el div para que no acumule el js inyectado de tal forma que cada vez que se realice un busqueda se reinicie y quede vacio
    sectionLibro.innerHTML ="";
    const resultado = libros.filter((libro) => libro.titulo.toUpperCase().includes(libroBuscado));
    console.log(resultado)
    
  
    if (resultado.length > 0) {
        const libroFiltrado= document.createElement("div");
        libroFiltrado.classList.add('card-box');

        resultado.forEach((libro) =>{
            const div = document.createElement("div");
            div.classList.add('contenedor-libros');

            div.innerHTML = `
                                <div class="card producto-filtrado">
                                <img class="filtro-imagen card-img-top " src="${libro.imagen}" alt="${libro.titulo}">
                                <h4 class="card-title filtro-titulo">${libro.titulo}</h4>
                                <h6 class="filtro-autor">Autor: ${libro.autor}</h6>
                                <p class="filtro-precio">Precio: ${libro.precio.toLocaleString('es-CL')}</p>
                                <p class="descripcion-libro">Descripción: ${libro.descripcion}</p>
                                </div>
                               
                                
                                
                            </div> `;
        
        libroFiltrado.appendChild(div);
        });
        sectionLibro.appendChild(libroFiltrado);
      
    }else{
        const libroFiltrado= document.createElement("div");
        libroFiltrado.classList.add('card-box');
        const div = document.createElement("div");
        div.innerHTML = `
                                <div class="card producto-filtrado">
                               
                                
                                <h4 class="card-title no-encontrado">No se ha encontrado el producto</h4>
                           
                                
                            </div> `;
                            libroFiltrado.appendChild(div);
                            sectionLibro.appendChild(libroFiltrado);
    }

}

