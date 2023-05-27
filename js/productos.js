// STOCK DE Libros


class Libro { constructor (titulo, imagen,autor, editorial,precio,stock,categoria, id, sku){
    this.titulo = titulo;
    this.imagen = imagen;
    this.autor = autor;
    this.editorial = editorial;
    this.precio = precio;
    this.stock = stock;
    this.categoria = categoria;
    this.id = id;
    this.sku = sku;
}
}
const en_la_sombra = new Libro("En La Sombra" ,"../img/sombra.harry.jpg", "Principe Harry","Plaza & Janes", 13600, 25, "Biografía", "biografia", "AA183");
const reina_charlotte = new Libro("La reina Charlotte", "../img/reina.charlotte.jpg","Julia Quinn y Shonda Rhimess","Titania", 17480, 125, "Novelas románticas","romanticas", "AA153");
const dolor_no_es_mio= new Libro("Este dolor no es mío","../img/este.dolor.jpg","Mark Wolynn", "Gaia", 25990, 20, "Autoayuda", "autoayuda", "AA153");
const muchas_vidas = new Libro("Muchas vidas", "../img/muchas.vidas.jpg","muchos maestros","Brian Weiss", "B de bolsillo", 8500, 205, "autoayuda", "Autoayuda", "AA1443");

const roma_soy_yo = new Libro("Roma soy yo","../img/roma.soy.jpg" ,"Santiago Posteguillo","B de bolsillo" , 17500, 55, "Historia", "historia", "AA186");
const una_magia_oscura = new Libro("Una magia más oscura", "../img/una.magia.jpg" , "V.E Schwab", "Destino ", 29130, 89, "Ficción", "ficcion","AB154");
const cuerpos = new Libro ("Cuerpos", "../img/cuerpos.png" ,"Noemi Casquet","B de bolsillo", 3200, 12, "Ficción", "ficcion","AB147");
const malas_mujeres = new Libro("Malas mujeres", "../img/malas.mujeres.jpg","Maria Hesse","Lumen", 18160, 45, "Novelas Gráficas", "graficas", "BC485");
const persepolis = new Libro("Persépolis", "../img/persepolis.jpg" , "Marjane Satrapi","Reservoir Books", 17060, 740, "Novelas Gráficas",  "graficas","BV151");
const algo_resuena = new Libro ("Algo resuena en lo profundo", "../img/algo.resuena.png","Canals Sergio","Uqbar Editores", 4470, 88, "Autoayuda", "autoayuda","GF481");
const ando_lento = new Libro ("Ando lento", "../img/ando.lento.jpg","May Patricia", "Urano",13950, 1, "Autoayuda", "autoayuda","GF112");
const despantallado = new Libro("Despantalaldo", "../img/despantallado.jpg","Fabian Rivas" ,"ZIG-ZAG", 9520, 33, "Literatura Infantil", "infantil", "DD424");

const productos = [en_la_sombra, reina_charlotte ,dolor_no_es_mio, muchas_vidas,  roma_soy_yo, una_magia_oscura, cuerpos, malas_mujeres, persepolis, algo_resuena, ando_lento, despantallado

];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-todos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");

function cargarProductos(productosElegidos){
    contenedorProductos.innerHTML ="";
    productosElegidos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("col-12");
    div.classList.add("col-sm-6");
    div.classList.add("col-md-4");
    div.classList.add("col-xl-3");

    div.innerHTML = `
                        <div class="card producto">
                        <img class="producto-imagen card-img-top " src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="producto-detalle card-body ">
                        <h5 class="producto-titulo card-title">${producto.autor}</h3>
                        <p class="producto-precio producto-precio">${producto.precio}</p>
                        <p class="producto-precio">${producto.categoria}</p>
                        <button class="producto-agregar" id="${producto.id}">Agregar al carrito</button>
                        
                    </div> `;

                    contenedorProductos.append(div);
 })
 actualizarBotonesAgregar()
}
cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        //removemos el atributo active
        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        //se le agrega el atributo active al boton que se le de click
        e.currentTarget.classList.add("active");
        //se filta el producto segun su categoria

        if(e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.id ===e.currentTarget.id)
           
            tituloPrincipal.innerText = productoCategoria.categoria;

        const productosBoton =productos.filter(producto => producto.id === e.currentTarget.id)
        cargarProductos(productosBoton)
    }else{
        tituloPrincipal.innerText= "Todos los productos"
        cargarProductos(productos)
    }
    })
});

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    }
        )
}

let productosEnCarrito;
const productosEnCarritoLS = localStorage.getItem("productos-en-carrito")



if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS)
    actualizarNumerito();
}else{
    productosEnCarrito = [];

}


function agregarAlCarrito(e){

    const idBoton= e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad =1;
        productosEnCarrito.push(productoAgregado)
    }
    actualizarNumerito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
   
}

function actualizarNumerito(){
    let numeroCarrito = productosEnCarrito.reduce((acc, producto) => acc +producto.cantidad, 0);
    numero.innerText = numeroCarrito;
}
