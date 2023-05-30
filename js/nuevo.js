const busca = document.getElementById("busqueda")
busca.addEventListener("click", () =>{
    filtrarProductos();
})

function filtrarProductos(){
    
    
 //traigo el valor del imput
    const sectionLibro = document.querySelector('.libro-detalle');
    const libroCapturado = document.getElementById('search-item').value 
    const libroBuscado = libroCapturado.trim().toUpperCase();
  
    const resultado = libros.filter((libro) => libro.titulo.toUpperCase().includes(libroBuscado));
    console.log(resultado)
    
  
    if (resultado.length > 0) {
        const libroFiltrado= document.createElement("div");
        libroFiltrado.classList.add('card-box');

        resultado.forEach((libro) =>{
            const div = document.createElement("div");
            div.classList.add('contenedor-libros');
        
        
       
        
            div.innerHTML = `
                                <div class="card producto">
                                <h6 class="producto-autor">${libro.autor}</h6>
                                <h4 class="card-title producto-titulo">${libro.titulo}</h4>
                                <p class="producto-precio producto-precio">$${libro.precio.toLocaleString('es-CL')}</p>
                               
                                <p>${libro.descripcion}</p>
                                
                                
                            </div> `;
        
        libroFiltrado.appendChild(div);
        });
        sectionLibro.appendChild(libroFiltrado);
      
    }else{
        alert("producto no encontrado")
    }

}

link
