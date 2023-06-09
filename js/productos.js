let libros =[];

fetch("../js/listaProductos.json")
    .then(response => response.json())
    .then(data =>{ libros = data;
    despliegueLibros(libros);
})

const boxDeProductos = document.querySelector("#contenLibros");
const btnesCategorias = document.querySelectorAll(".btnCategoria");
const tituloCategoria = document.querySelector("#tituloTodosLosLibros");
let btnAgregarCarrito = document.querySelectorAll(".agregarCarrito");
//const inputBuscar = document.getElementById("search-item").value
const btnVerDetalle = document.querySelector(".verDetalle");
const boxFiltro = document.querySelector(".libro-filtrado")




const checkboxMenor = document.querySelector('#checkboxMenor');
const checkboxMayor = document.querySelector('#checkboxMayor');

const checkboxTodos = document.querySelector('#checkboxTodos'); 
const btnFiltroPrecio = document.querySelector('#btnFiltroPrecio');


btnFiltroPrecio.addEventListener('click', aplicarFiltro);


function aplicarFiltro() {
  const filtrarMenor = checkboxMenor.checked;
  const filtrarMayor = checkboxMayor.checked;
  const filtrarTodos = checkboxTodos.checked;

  const resultadosFiltrados = libros.filter(producto => {
    if (filtrarMenor) {
      return producto.precio < 5000 
    } else if (filtrarTodos ) {
      return producto.precio > 0;
    } else if (filtrarMayor) {
      return producto.precio > 5000;
    }
  });

  mostrarResultados(resultadosFiltrados);
}

function mostrarResultados(resultados) {
  boxDeProductos.innerHTML = '';

  resultados.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("col-12");
    div.classList.add("col-sm-6");
    div.classList.add("col-md-4");
    div.classList.add("col-xl-3");

    div.innerHTML = `
      <div class="card producto">
        <img class="imagenLibro card-img-top" src=".${producto.imagen}" alt="${producto.titulo}">
        <h6 class="autorLibro">${producto.autor}</h6>
        <h4 class="card-title tituloLibro">${producto.titulo}</h4>
        <p class="precioLibro">$${producto.precio.toLocaleString('es-CL')}</p>
        <button class="agregarCarrito btnLibro" id="${producto.id}">Agregar al carrito</button>
        <button class="verDetalle btnLibro" id="${producto.id}">Ver detalle</button>
      </div>`;

    boxDeProductos.appendChild(div);
  });

  refreshBtnAgregarCarrito();
}





function despliegueLibros(libros){
    boxDeProductos.innerHTML ="";
    libros.forEach(libro => {
    const div = document.createElement("div");
    div.classList.add("col-12");
    div.classList.add("col-sm-6");
    div.classList.add("col-md-4");
    div.classList.add("col-xl-3");

    div.innerHTML = `
                        <div class="card producto">
                        <img class="imagenLibro card-img-top " src=".${libro.imagen}" alt="${libro.titulo}">
                        <h6 class="autorLibro">${libro.autor}</h6>
                        <h4 class="card-title tituloLibro">${libro.titulo}</h4>
                        <p class=" precioLibro">$${libro.precio.toLocaleString('es-CL')}</p>
                        <button class="agregarCarrito btnLibro" id="${libro.id}">Agregar al carrito</button>
                        <button class="verDetalle btnLibro" id="${libro.id}">Ver detalle</button>
                       
                        
                    </div> `;

                    boxDeProductos.append(div);
 })
 refreshBtnAgregarCarrito()
}
despliegueLibros(libros);


btnesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        //removemos el atributo active
        btnesCategorias.forEach(boton => boton.classList.remove("active"));

        //se le agrega el atributo active al boton que se le de click
        e.currentTarget.classList.add("active");
        //se filta el producto segun su categoria

        if(e.currentTarget.id != "todos"){
            const productoCategoria = libros.find(libro => libro.id ===e.currentTarget.id)
           
            tituloCategoria.innerText = productoCategoria.categoria;

        const productosBoton =libros.filter(libro => libro.id === e.currentTarget.id)
        despliegueLibros(productosBoton)
    }else{
        tituloCategoria.innerText= "Todos los productos"
        despliegueLibros(libros)
    }
    })
});

function refreshBtnAgregarCarrito(){
    btnAgregarCarrito = document.querySelectorAll(".agregarCarrito");
    btnAgregarCarrito.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

let librosDentroCarrito;
const librosDentroCarritoLocalS = localStorage.getItem("librosEnCarritoCompras")
if(librosDentroCarritoLocalS){
    librosDentroCarrito = JSON.parse(librosDentroCarritoLocalS)
    actualizarCantidadProductosCarrito();
}else{
    librosDentroCarrito = [];
}

function agregarAlCarrito(e){

    Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Su producto ha sido agregado satisfactoriamente',
    showConfirmButton: false,
    timer: 1000
    })

    const idBoton= e.currentTarget.id;
    const libroAgregado = libros.find(libro => libro.id === idBoton);

    if(librosDentroCarrito.some(libro => libro.id === idBoton)){
        librosDentroCarrito.findIndex(libro => libro.id === idBoton);
        librosDentroCarrito[index].cantidad++;
    }else{
        libroAgregado.cantidad =1;
        librosDentroCarrito.push(libroAgregado)
    }
    actualizarCantidadProductosCarrito()

    localStorage.setItem("librosEnCarritoCompras", JSON.stringify(librosDentroCarrito))
   
}

function actualizarCantidadProductosCarrito(){
    let numeroCarrito = librosDentroCarrito.reduce((acc, libro) => acc +libro.cantidad, 0);
    CantidadCarrito.innerText = numeroCarrito;
}








