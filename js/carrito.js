let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito= JSON.parse(productosEnCarrito);

const boxCarritoVacio = document.querySelector("#carrito-vacio");
const boxCarritoLibros = document.querySelector("#carrito-libro");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-compra-realizada");
const contenedorCarritoImagen = document.querySelector(".contenedor-carrito");
let botonEliminar = document.querySelectorAll("#carrito-producto-eliminar");
const botonVaciar= document.querySelector("#carrito-boton-vaciar");
const contenedorTotal= document.querySelector("#montoTotal");
const botonComprar = document.querySelector("#carrito-boton-comprar");
const botonVolver= document.querySelector(".boton-volver");



function cargarProductosCarrito(){
    if(productosEnCarrito && productosEnCarrito.length>0){

       
        boxCarritoVacio.classList.add("disabled");
        boxCarritoLibros.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        boxCarritoLibros.innerHTML = "";
    
        productosEnCarrito.forEach(libro => {
        const div= document.createElement("div");
        div.classList.add("carrito-libros");
        div.innerHTML = `<img class="carrito-libro-imagen" src="${libro.imagen}" alt="${libro.titulo}">
                        <div class="carrito-libro-titulo">
                            <small>Titulo</small>
                            <h3>${libro.titulo}</h3>
                        </div>
                        <div class="carrito-libro-cantidad">
                            <small>Cantidad</small>
                            <p>${libro.cantidad}</p>
                        </div>
                        <div class="carrito-libro-precio">
                            <small>Precio</small>
                            <p>${libro.precio}</p>
                        </div>
                        <div class="carrito-producto-subtotal">
                            <small>Subtotal</small>
                            <p>${libro.precio * libro.cantidad}</p>
                        </div>
                        <div class="d-flex flex-column">
                            <small>Eliminar</small>
                            <button class="carrito-producto-eliminar" id="${libro.id}"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                            </svg></button>
                        </div>
                    `;
    
                    boxCarritoLibros.append(div)
    
        })
        
    
    }else{
       boxCarritoVacio.classList.remove("disabled");
       boxCarritoLibros.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonEliminar();
    actualizarMontoTotal();
}
cargarProductosCarrito();




function actualizarBotonEliminar(){
    botonEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    }
        )
}

function eliminarDelCarrito(e){
    
    const idBoton = e.currentTarget.id;
   // const productoEliminado = productosEnCarrito.find(producto=> producto.id === idBoton);
    const index = productosEnCarrito.findIndex(libro => libro.id === idBoton);
    productosEnCarrito.splice(index,1);
    cargarProductosCarrito();
    localStorage.setItem("productos-en-carrito", productosEnCarrito );
}

botonVaciar.addEventListener("click", vaciarCarrito)



function vaciarCarrito(){
    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'warning',
        html: `Se van a eliminar ${productosEnCarrito.reduce((acc,libro) => acc + libro.cantidad, 0)} producto/s`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, deseo eliminarlos!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
             cargarProductosCarrito();
          Swal.fire(
            'Productos eliminados satisfactoriamente.',
            'success'
          )
        }
      })

}

function actualizarMontoTotal(){
    const totalCalculado = productosEnCarrito.reduce((acc,libro) => acc + (libro.precio * libro.cantidad) , 0)
    montoTotal.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);


function comprarCarrito(){
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
    boxCarritoVacio.classList.add("disabled");
    boxCarritoLibros.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
    contenedorCarritoImagen.classList.add("on");
    botonVolver.classList.add("disabled");


    }
function cargarProductosCarrito(){
    if(productosEnCarrito && productosEnCarrito.length>0){

       
        boxCarritoVacio.classList.add("disabled");
        boxCarritoLibros.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        boxCarritoLibros.innerHTML = "";
    
        productosEnCarrito.forEach(libro => {
        const div= document.createElement("div");
        div.classList.add("carrito-libros");
        div.innerHTML = `<img class="carrito-libro-imagen" src=".${libro.imagen}" alt="${libro.titulo}">
                        <div class="carrito-libro-titulo">
                            <small>Titulo</small>
                            <h3>${libro.titulo}</h3>
                        </div>
                        <div class="carrito-libro-cantidad">
                            <small>Cantidad</small>
                            <p>${libro.cantidad}</p>
                        </div>
                        <div class="carrito-libro-precio">
                            <small>Precio</small>
                            <p>$${libro.precio.toLocaleString('es-CL')}</p>
                        </div>
                        <div class="carrito-producto-subtotal">
                            <small>Subtotal</small>
                            <p>$${libro.precio * libro.cantidad.toLocaleString('es-CL')}</p>
                        </div>
                        <div class="d-flex flex-column">
                            <small>Eliminar</small>
                            <button class="carrito-producto-eliminar" id="${libro.id}"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                            </svg></button>
                        </div>
                    `;
    
                    boxCarritoLibros.append(div)
    
        })
        
    
    }else{
       boxCarritoVacio.classList.remove("disabled");
       boxCarritoLibros.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
        botonVolver.classList.add("disabled");
    }

    actualizarBotonEliminar();
    actualizarMontoTotal();
}
cargarProductosCarrito();

