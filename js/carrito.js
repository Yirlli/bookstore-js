let librosDentroCarrito = localStorage.getItem("librosEnCarritoCompras");
librosDentroCarrito = JSON.parse(librosDentroCarrito);

const boxCarritoVacio = document.querySelector("#carritoEmpty");
const boxCarritoLibros = document.querySelector("#carritoCompras");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const boxCompraRealizada = document.querySelector("#compraRealizada");
const contenedorCarritoImagen = document.querySelector(".contenedorCarrito");
let btnEliminar = document.querySelectorAll("#eliminarLibroCarrito");
const btnVaciarCarrito = document.querySelector("#vaciarCarrito");
const contenedorTotal = document.querySelector("#montoTotal");
const botonComprar = document.querySelector("#btnComprarCarrito");
const botonVolver = document.querySelector(".boton-volver");

function actualizarBotonEliminar() {
    btnEliminar = document.querySelectorAll(".eliminarLibroCarrito");
    btnEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = librosDentroCarrito.findIndex((libro) => libro.id === idBoton);
    librosDentroCarrito.splice(index, 1);
    despliegueLibrosCarrito();
    localStorage.setItem("librosEnCarritoCompras", librosDentroCarrito);
}

btnVaciarCarrito.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    Swal.fire({
    title: "¿Estás seguro?",
    icon: "warning",
    html: `Se van a eliminar ${librosDentroCarrito.reduce((acc, libro) => acc + libro.cantidad,0)} producto/s`,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, deseo eliminarlos!",
    cancelButtonText: "No",
    }).then((result) => {
        if (result.isConfirmed) {
        librosDentroCarrito.length = 0;
        localStorage.setItem("librosEnCarritoCompras",
        JSON.stringify(librosDentroCarrito)
    );
    despliegueLibrosCarrito();
    Swal.fire("Productos eliminados satisfactoriamente.", "success");
    }
  });
}

function actualizarMontoTotal() {
    const totalCalculado = librosDentroCarrito.reduce((acc, libro) => acc + libro.precio * libro.cantidad,0);
montoTotal.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {
    librosDentroCarrito.length = 0;
    localStorage.setItem("librosEnCarritoCompras",JSON.stringify(librosDentroCarrito));
    boxCarritoVacio.classList.add("disabled");
    boxCarritoLibros.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    boxCompraRealizada.classList.remove("disabled");
    contenedorCarritoImagen.classList.add("on");
    botonVolver.classList.add("disabled");
}
function despliegueLibrosCarrito() {
    if (librosDentroCarrito && librosDentroCarrito.length > 0) {
        boxCarritoVacio.classList.add("disabled");
        boxCarritoLibros.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        boxCompraRealizada.classList.add("disabled");

        boxCarritoLibros.innerHTML = "";

        librosDentroCarrito.forEach((libro) => {
        const div = document.createElement("div");
        div.classList.add("carrito-libros");
        div.innerHTML = 
        `<img class="libroImagenEnCarrito" src=".${libro.imagen}" alt="${libro.titulo}">
        <div class="carritoTituloLibro">
            <small>Titulo</small>
            <h3>${libro.titulo}</h3>
        </div>
        <div class="carritoCantidad">
            <small>Cantidad</small>
            <div class=d-flex>
                <button type="submit" class="btnAumentar">+</button><p>${libro.cantidad}</p><button type="submit" class="btnDisminuir">-</button>
            </div>
        </div>
        <div class="libroPrecioEnCarrito">
            <small>Precio Unitario</small>
            <p>$${libro.precio.toLocaleString("es-CL")}</p>
        </div>
        <div class="subtotalCarrito">
            <small>Subtotal</small>
            <p>$${(libro.precio * libro.cantidad).toLocaleString("es-CL")}</p>
        </div>
        <div class="d-flex flex-column">
            <small>Eliminar</small>
            <button class="eliminarLibroCarrito" id="${libro.id}"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                            </svg></button>
        </div>
        `;

      const btnAumentar = div.querySelector(".btnAumentar");
      const btnDisminuir = div.querySelector(".btnDisminuir");

      btnAumentar.addEventListener("click", () => {
        libro.cantidad++;
        despliegueLibrosCarrito();
      });

      btnDisminuir.addEventListener("click", () => {
        if (libro.cantidad > 1) {
          libro.cantidad--;
          despliegueLibrosCarrito();
        }
      });

      boxCarritoLibros.append(div);
    });
  } else {
    boxCarritoVacio.classList.remove("disabled");
    boxCarritoLibros.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    boxCompraRealizada.classList.add("disabled");
    botonVolver.classList.add("disabled");
  }

  actualizarBotonEliminar();
  actualizarMontoTotal();
}
despliegueLibrosCarrito();
