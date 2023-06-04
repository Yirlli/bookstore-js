

const boxDeProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-todos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
//const inputBuscar = document.getElementById("search-item").value
const btnVerDetalle = document.querySelector(".verDetalle");
const boxFiltro = document.querySelector(".libro-filtrado")

function cargarProductos(libros){
    boxDeProductos.innerHTML ="";
    libros.forEach(libro => {
    const div = document.createElement("div");
    div.classList.add("col-12");
    div.classList.add("col-sm-6");
    div.classList.add("col-md-4");
    div.classList.add("col-xl-3");

    div.innerHTML = `
                        <div class="card producto">
                        <img class="producto-imagen card-img-top " src=".${libro.imagen}" alt="${libro.titulo}">
                        <h6 class="producto-autor">${libro.autor}</h6>
                        <h4 class="card-title producto-titulo">${libro.titulo}</h4>
                        <p class="producto-precio producto-precio">$${libro.precio.toLocaleString('es-CL')}</p>
                        <button class="producto-agregar boton-libro" id="${libro.id}">Agregar al carrito</button>
                        <button class="verDetalle boton-libro" id="${libro.id}">Ver detalle</button>
                       
                        
                    </div> `;

                    boxDeProductos.append(div);
 })
 actualizarBotonesAgregar()
}
cargarProductos(libros);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        //removemos el atributo active
        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        //se le agrega el atributo active al boton que se le de click
        e.currentTarget.classList.add("active");
        //se filta el producto segun su categoria

        if(e.currentTarget.id != "todos"){
            const productoCategoria = libros.find(libro => libro.id ===e.currentTarget.id)
           
            tituloPrincipal.innerText = productoCategoria.categoria;

        const productosBoton =libros.filter(libro => libro.id === e.currentTarget.id)
        cargarProductos(productosBoton)
    }else{
        tituloPrincipal.innerText= "Todos los productos"
        cargarProductos(libros)
    }
    })
});

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

let productosEnCarrito;
const productosEnCarritoLS = localStorage.getItem("productos-en-carrito")
if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS)
    actualizarCantidadProductosCarrito();
}else{
    productosEnCarrito = [];
}

function agregarAlCarrito(e){

    const idBoton= e.currentTarget.id;
    const productoAgregado = libros.find(libro => libro.id === idBoton);

    if(productosEnCarrito.some(libro => libro.id === idBoton)){
        productosEnCarrito.findIndex(libro => libro.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad =1;
        productosEnCarrito.push(productoAgregado)
    }
    actualizarCantidadProductosCarrito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
   
}

function actualizarCantidadProductosCarrito(){
    let numeroCarrito = productosEnCarrito.reduce((acc, libro) => acc +libro.cantidad, 0);
    CantidadCarrito.innerText = numeroCarrito;
}








